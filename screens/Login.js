import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";
global.globalData = null;

const Login = () => {
  const [loginCompetitionsDropdownOpen, setLoginCompetitionsDropdownOpen] =
    useState(false);
  const [loginCompetitionsDropdownValue, setLoginCompetitionsDropdownValue] =
    useState();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveData= async ()=>{
    console.log(username);
    console.log(password);
    const username = 'RicardoD';
    const password = 'A8335B39E3B25B7F331247280F2EE65CCED0DED67EFFBAF27B2E60E33B59AB5E';
    const url = `http://10.211.55.7:8000/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

// Make the GET request
try {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // Add any other headers if needed
    },
  });

  if (!response.ok) {
    console.log(response);
    const errorResponse = {
      error: 'An error occurred',
      errorMessage: response.statusText,
    };
    console.log('Error Response:', errorResponse);
  }

  const jsonData = await response.json(); // Parse JSON data
  console.log('Parsed JSON data:', jsonData);
  const stringRole = JSON.stringify(jsonData);
  console.log('JSON as String:', stringRole);

  // Handle the response data or check if it's empty
  if (stringRole.trim() === '') {
    console.log('Response body is empty');
  } else  {
    // Now you can use jsonData directly
    if(stringRole.includes('role')){
      if(stringRole.includes('Admin')){
        global.globalRole = stringRole;
        navigation.navigate('Admin');
      }
      if(stringRole.includes('judge')){
        global.globalRole = stringRole;
        navigation.navigate('JudgeGameDraw');
      }
    }
    if (stringRole.includes('error')) {
      if (stringRole.includes('User not found')){
        console.log('404 error');
      }
      if (stringRole.includes('Invalid query parameters')){
        console.log('500 error');
      }
      if (stringRole.includes('An error occurred')){
        console.log('500 error');
      }
      if (stringRole.includes('Invalid request method')){
        console.log('405 error');
      }
    }
  }
} catch (error) {
  // Handle errors
  console.error('Error:', error);
  }
}

  //console.log(password)

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
                onChangeText={(text)=>setUsername(text)}
                value={username}

              />
              <TextInput
                style={[
                  styles.passwordTextbox,
                  styles.passwordTextboxSpaceBlock,
                ]}
                placeholder="Enter password here"
                autoCapitalize="none"
                placeholderTextColor="#a6a6a6"
                secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}
                value={password}
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
                  setValue={setLoginCompetitionsDropdownValue}
                  placeholder="Competitions"
                  items={[]}
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
          <Pressable style={[styles.loginButton, styles.buttonBorder]}
            onPress={saveData}
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
    overflow: "hidden",
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
