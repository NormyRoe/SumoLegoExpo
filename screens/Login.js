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
import { 
  BASE_URL, 
  competitionsData,
  selectedCompetitionId,
  updateCompetitionsData, 
  updateSelectedCompetitionId, 
  updateAccessRole, 
  accessRole,
  userName,
  updateUserName} from "../GlobalVariables";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");  
  const [error, setError] = useState(null);
  const [loginCompetitionsDropdownOpen, setLoginCompetitionsDropdownOpen] =
    useState(false);
  const [loginCompetitionsDropdownValue, setLoginCompetitionsDropdownValue] =
    useState(null);  
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
          updateCompetitionsData(data.competitions); // Update the global variable
          console.log(competitionsData);
        }
      } catch (error) {
        console.error("Error fetching competitions:", error);
        setError("An error occurred while fetching competitions.");
      }
    };

    fetchCompetitionsData();
        

  }, []); // Empty dependency array ensures this effect runs only once on component mount

  //useEffect(() => {
  //  console.log("Competition ID before navigation", getSelectedCompetitionId());
  //}, [getSelectedCompetitionId()]);


  const handleLogin = async () => {
    try {
      // Hash the password using SHA256
      const hashed_password = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);

      // Construct the URL with username and hashed_password
      const loginURL = `${BASE_URL}/login?username=${encodeURIComponent(username)}&password=${hashed_password}`;

      // Make the HTTP GET request
      const response = await fetch(loginURL);
      const data = await response.json();

      updateAccessRole(data.role);

      // save the username to the global variable
      updateUserName(username);
      console.log("Username is:", userName);

      if (data.role) {
        // If role is Admin or Judge, redirect accordingly
        if (data.role === "Admin") {
          console.log("Access Role before navigation:", accessRole);
          navigation.navigate("Admin");          
        } else if (data.role === "Judge") {
          
          // Check if a competition is selected
          if (selectedCompetitionId == 0) {
            window.alert("Please select a competition.");
            return;
          }
          console.log("Competition ID before navigation - Judge:", selectedCompetitionId);
          console.log("Access Role before navigation:", accessRole);
          navigation.navigate("JudgeGameDraw");
        }
      } else if (data.error) {
        // If error is returned, display the error message
        window.alert(data.error);
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
                    setLoginCompetitionsDropdownValue(value);
                  }}
                  onSelectItem={(item) => {
                    console.log("onSelectItem triggered");
                    updateSelectedCompetitionId(item.value);
                    console.log("Selected Competition: ", item.value);
                    console.log(selectedCompetitionId);
                  }}
                  placeholder="Competitions"
                  items={competitionsData.map((competition) => ({
                    label: `${competition.name} (${competition.date})`,
                    value: competition.competition_id,
                  }))}
                  labelStyle={styles.loginCompetitionsDropdownValue}
                  dropDownContainerStyle={
                    styles.loginCompetitionsDropdowndropDownContainer
                  }
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
            onPress={() => {
              console.log("Competition ID before navigation - Live Scores", selectedCompetitionId);
              if (selectedCompetitionId == 0) {
                window.alert("Please select a competition.");
              } else {                
                navigation.navigate("DisplayLeaderboard");                
              }
            }}
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
    overflow: "visible"
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
    overflow: "visible",
  },
  loginInputs: {
    height: 123,
    marginTop: 36,
    overflow: "visible",
  },
  loginInputsAndImage: {
    marginTop: -125,
    overflow: "visible",
    flex: 1,
    alignSelf: "stretch",
  },
  loginInputsImageAndTitle: {
    height: 623,
    justifyContent: "center",
    overflow: "visible",
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
    overflow: "visible",
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
