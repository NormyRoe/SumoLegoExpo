import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  View,
  Pressable,
  TouchableHighlight,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";
import * as Crypto from 'expo-crypto';

const BASE_URL = "http://192.168.1.106:8000"; // Global variable for the API base URL

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [competitionsData, setCompetitionsData] = useState([]);
  const [error, setError] = useState(null);
  const [loginCompetitionsDropdownOpen, setLoginCompetitionsDropdownOpen] =
    useState(false);
  const [loginCompetitionsDropdownValue, setLoginCompetitionsDropdownValue] =
    useState();
    const [selectedCompetitionId, setSelectedCompetitionId] = useState(null);
  const navigation = useNavigation();


  useEffect(() => {
    // Fetch competitions data upon component mount
    const fetchCompetitionsData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/competitions`);
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setCompetitionsData(data.competitions);
        }
      } catch (error) {
        console.error("Error fetching competitions:", error);
        setError("An error occurred while fetching competitions.");
      }
    };

    fetchCompetitionsData();
        

  }, []); // Empty dependency array ensures this effect runs only once on component mount


  const handleLogin = async () => {
    try {
      // Hash the password using SHA256
      const hashed_password = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);

      // Construct the URL with username and hashed_password
      const loginURL = `${BASE_URL}/login?username=${encodeURIComponent(username)}&password=${hashed_password}`;

      // Make the HTTP GET request
      const response = await fetch(loginURL);
      const data = await response.json();

      if (data.role) {
        // If role is Admin or Judge, redirect accordingly
        if (data.role === "Admin") {
          navigation.navigate("Admin");
        } else if (data.role === "Judge") {
          
          // Check if a competition is selected
          if (!selectedCompetitionId) {
            Alert.alert("Error", "Please select a competition.");
            return;
          }
          navigation.navigate("JudgeGameDraw");
        }
      } else if (data.error) {
        // If error is returned, display the error message
        Alert.alert("Error", data.error);
      }
      // Add console logs for debugging
      console.log("Dropdown Open: ", loginCompetitionsDropdownOpen);
      console.log("Competitions Data: ", competitionsData);

    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <LinearGradient
      style={[styles.login, styles.loginFlexBox1]}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={[styles.loginFame2, styles.loginFlexBox]}>
        <View style={[styles.loginInputsImageAndTitle, styles.loginFlexBox]}>
          <Text style={styles.loginTitle} numberOfLines={2}>
            Lego Sumo Competitions
          </Text>
          <View style={[styles.loginInputsAndImage, styles.loginFlexBox]}>
            <ImageBackground
              style={styles.login2Icon}
              resizeMode="center"
              source={require("../assets/login2.jpg")}
            />
            <View style={[styles.loginInputs, styles.loginFlexBox]}>
              <TextInput
                style={[styles.usernameTextbox, styles.textboxBorder]}
                placeholder="Enter username here"
                autoCapitalize="none"
                placeholderTextColor="#a6a6a6"
                onChangeText={(text) => setUsername(text)}
              />
              <TextInput
                style={[
                  styles.passwordTextbox,
                  styles.passwordTextboxSpaceBlock,
                ]}
                placeholder="Enter password here"
                autoCapitalize="none"
                placeholderTextColor="#a6a6a6"
                onChangeText={(text) => setPassword(text)}
              />
              <View
                style={[
                  styles.loginCompetitionsDropdown,
                  styles.passwordTextboxSpaceBlock,
                ]}
              >
                <DropDownPicker
                  style={styles.dropdownpicker}
                  open={loginCompetitionsDropdownOpen}
                  setOpen={setLoginCompetitionsDropdownOpen}
                  value={loginCompetitionsDropdownValue}
                  setValue={(value) => {
                    // Update the selected competition ID when an item is selected
                    setLoginCompetitionsDropdownValue(value);
                    setSelectedCompetitionId(value);
                  }}
                  placeholder="Competitions"
                  items={competitionsData.map((competition) => ({
                    label: `${competition.name} (${competition.date})`,
                    value: competition.competition_id.toString(),
                  }))}
                  labelStyle={styles.loginCompetitionsDropdownValue}
                  dropDownContainerStyle={
                    styles.loginCompetitionsDropdowndropDownContainer
                  }
                  onChangeItem={(item) => {
                    console.log("Selected Competition: ", item.value);
                  }}
                  
                /> 
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.loginButtons, styles.loginFlexBox]}>
          <Pressable 
            style={[styles.loginButton, styles.buttonBorder]}
            onPress={handleLogin}
          >
            <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
          </Pressable>
          <TouchableHighlight
            style={[styles.viewLiveScoresButton, styles.buttonBorder]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DisplayLeaderboard")}
          >
            <Text style={[styles.viewLiveScores, styles.login1Typo]}>
              View Live Scores
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </LinearGradient>
  );
  
};

const styles = StyleSheet.create({
  loginCompetitionsDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  loginCompetitionsDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    // zIndex: 1000,
  },
  loginFlexBox1: {
    justifyContent: "space-between",
    flex: 1,
  },
  loginFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  textboxBorder: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    padding: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    alignItems: "center",
    flexDirection: "row",
  },
  passwordTextboxSpaceBlock: {
    marginTop: 10,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  buttonBorder: {
    height: 53,
    borderWidth: 3,
    borderRadius: Border.br_mid,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  login1Typo: {
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  loginTitle: {
    fontSize: 50,
    height: 255,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
  },
  login2Icon: {
    width: 374,
    height: 308,
  },
  usernameTextbox: {
    borderStyle: "solid",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    padding: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
    flex: 1,
  },
  passwordTextbox: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    padding: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  dropdownpicker: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  loginCompetitionsDropdown: {
    borderRadius: Border.br_5xs,
    height: 41,
    // overflow: "hidden",
  },
  loginInputs: {
    height: 123,
    marginTop: 36,
    overflow: "hidden",
  },
  loginInputsAndImage: {
    marginTop: -125,
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  loginInputsImageAndTitle: {
    height: 623,
    justifyContent: "center",
    overflow: "hidden",
  },
  login1: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  loginButton: {
    justifyContent: "flex-end",
    paddingHorizontal: 35,
    paddingVertical: Padding.p_xs,
  },
  viewLiveScores: {
    width: 229,
    height: 30,
  },
  viewLiveScoresButton: {
    paddingHorizontal: 70,
    paddingVertical: Padding.p_0,
    marginTop: 44,
    justifyContent: "center",
  },
  loginButtons: {
    height: 153,
    overflow: "hidden",
  },
  loginFame2: {
    justifyContent: "space-between",
    flex: 1,
  },
  login: {
    width: "100%",
    height: 797,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_6xs,
    backgroundColor: Color.backGround,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Login;
