import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import * as Crypto from 'expo-crypto';
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";
import { BASE_URL, accessRole, selectedUserId, usersData, userName, updateUsersData, updateSelectedUserId } from "../GlobalVariables";

const AdminCurrentUser = () => {


  const [textInputValues, setTextInputValues] = useState({
    first_name: '',
    surname: '',
    email_address: '',
    username: '',
    password: '',
    reTypePassword: '',
    role: '',
  });

  const navigation = useNavigation();

  useEffect(() => {
    // Fetch competitions data upon component mount
    const fetchUsersData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users`);
        const data = await response.json();
        console.log(data);

        if (data.error) {
          setError(data.error);
        } else {
          updateUsersData(data.users); // Update the global variable
          console.log(usersData);

          const filteredUser = usersData.filter((user) => user.username === userName);
          console.log('This is the array of the current user:', filteredUser);
          console.log('This is the username stored in the username global variable', userName);
          console.log('This is tha username from the filtered user array:', filteredUser.username);

          const user = filteredUser[0];
          handleInputFields(user);

          updateSelectedUserId(user.user_id);

          

        }
      } catch (error) {
        console.error("Error fetching Users:", error);
        setError("An error occurred while fetching Users.");
      }
    };

    fetchUsersData();
    
        

  }, []); // Empty dependency array ensures this effect runs only once on component mount

const handleInputFields = async (user) => {
  // Populate text input values with the selected row's data
  setTextInputValues({
    first_name: user.first_name,
    surname: user.surname,
    email_address: user.email_address,
    username: user.username,
    password: '',
    reTypePassword: '',
    role: '',
  });
}

const handleUserUpdate = async () => {
  try{
    console.log('This is the password that ways typed in:', textInputValues.password);
    console.log('This is the retyped password that ways typed in:', textInputValues.reTypePassword);
    console.log('This is the role of the selected user:', textInputValues.role);

    let hashed_password = '';
    if (textInputValues.password === textInputValues.reTypePassword){

      // Hash the password using SHA256
      hashed_password = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, textInputValues.password);

    } else {
      window.alert('Your passwords do not match.')
    }


    const response = await fetch(`${BASE_URL}/users/${selectedUserId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_role: accessRole,
        first_name: textInputValues.first_name,
        surname: textInputValues.surname,
        email_address: textInputValues.email_address,
        username: textInputValues.username,
        password: hashed_password,
        role: textInputValues.role,
      }),
    });

    const data = await response.json();

    if (data.error) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      console.log(data);
      window.alert(data.message);
      handleClearFields();
    }

  } catch (error) {
    console.log(error);
    window.alert(error);
  }
}

const handleClearFields = () => {
  // Clear all text input values
  setTextInputValues((prevValues) => ({
    ...prevValues,
    password: '',
    reTypePassword: '',
  }));
  console.log('The handleClearFields function is being called')
};


  return (
    <LinearGradient
      style={styles.adminCurrentUser}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminMenuParent}>
        <View style={styles.adminMenu}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminCurrentUserCompetition, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>Fields</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>
              Schools
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.userFlexBox]}>Logout</Text>
          </Pressable>
        </View>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <Text style={[styles.updateCurrentUser, styles.userFlexBox]}>
              Update Current User
            </Text>
            <View style={styles.frame2}>
              <Text style={[styles.userDetails, styles.userFlexBox]}>
                User Details:
              </Text>
            </View>
          </View>
          <View style={[styles.frame3, styles.frameSpaceBlock]}>
            <View style={styles.frame4}>
              <View style={styles.frame5}>
                <Text style={styles.firstName}>First Name:</Text>
                <TextInput
                  style={styles.adminCurrentUserFirstName}
                  autoCapitalize="none"
                  value={textInputValues.first_name}
                  onChangeText={(text) =>
                    setTextInputValues((prevValues) => ({
                    ...prevValues,
                    first_name: text,
                    }))
                  }
                />
              </View>
            </View>
            <View style={styles.frame6}>
              <View style={styles.frame5}>
                <Text style={styles.firstName}>Last Name:</Text>
                <TextInput
                  style={styles.adminCurrentUserFirstName}
                  autoCapitalize="none"
                  value={textInputValues.surname}
                  onChangeText={(text) =>
                    setTextInputValues((prevValues) => ({
                    ...prevValues,
                    surname: text,
                    }))
                  }
                />
              </View>
            </View>
            <View style={styles.frame6}>
              <View style={styles.frame5}>
                <Text style={styles.firstName}>Email:</Text>
                <TextInput
                  style={styles.adminCurrentUserFirstName}
                  autoCapitalize="none"
                  value={textInputValues.email_address}
                  onChangeText={(text) =>
                    setTextInputValues((prevValues) => ({
                    ...prevValues,
                    email_address: text,
                    }))
                  }
                />
              </View>
            </View>
            <View style={styles.frame6}>
              <View style={styles.frame5}>
                <Text style={styles.firstName}>Username:</Text>
                <TextInput
                  style={styles.adminCurrentUserFirstName}
                  autoCapitalize="none"
                  value={textInputValues.username}
                    onChangeText={(text) =>
                    setTextInputValues((prevValues) => ({
                    ...prevValues,
                    username: text,
                    }))
                  }
                />
              </View>
            </View>
            <View style={styles.frame6}>
              <View style={styles.frame5}>
                <Text style={styles.firstName}>Password:</Text>
                <TextInput
                  style={styles.adminCurrentUserFirstName}
                  autoCapitalize="none"
                  value={textInputValues.password}
                  onChangeText={(text) =>
                    setTextInputValues((prevValues) => ({
                    ...prevValues,
                    password: text,
                    }))
                  }
                />
              </View>
            </View>
            <View style={styles.frame6}>
              <View style={styles.frame5}>
                <Text style={styles.firstName}>Re-type Password:</Text>
                <TextInput
                  style={styles.adminCurrentUserFirstName}
                  autoCapitalize="none"
                  value={textInputValues.reTypePassword}
                  onChangeText={(text) =>
                    setTextInputValues((prevValues) => ({
                    ...prevValues,
                    reTypePassword: text,
                    }))
                  }
                />
              </View>
            </View>
            <View style={styles.frame6}>
              <View style={styles.frame17}>
                <Pressable
                  style={[
                    styles.adminCurrentUserUpdateButt,
                    styles.adminBorder,
                  ]}
                  onPress={handleUserUpdate}
                >
                  <Text style={[styles.update, styles.backTypo]}>Update</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.adminCurrentUserDeleteButt,
                    styles.adminBorder,
                  ]}
                  onPress={() => navigation.navigate("AdminUpdateUser")}
                >
                  <Text style={[styles.update, styles.backTypo]}>Back</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminBorder1: {
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  userFlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  frameSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adminBorder: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    alignItems: "center",
    flexDirection: "row",
  },
  backTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    alignSelf: "stretch",
    flex: 1,
  },
  adminCurrentUserCompetition: {
    justifyContent: "center",
    alignItems: "center",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 217,
    height: 374,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    justifyContent: "space-between",
  },
  updateCurrentUser: {
    fontSize: FontSize.size_45xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    height: 58,
    alignSelf: "stretch",
  },
  userDetails: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    width: 174,
    height: 16,
    fontFamily: FontFamily.interRegular,
    display: "flex",
  },
  frame2: {
    marginTop: 13,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  firstName: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  adminCurrentUserFirstName: {
    height: 15,
    marginLeft: 11,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flex: 1,
  },
  frame5: {
    paddingTop: 0,
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
  },
  frame4: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame6: {
    marginTop: 11,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  update: {
    alignSelf: "stretch",
  },
  adminCurrentUserUpdateButt: {
    flex: 1,
  },
  adminCurrentUserDeleteButt: {
    marginLeft: 80,
    flex: 1,
  },
  frame17: {
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  frame3: {
    justifyContent: "flex-end",
  },
  adminCurrentUserBackButton: {
    width: 129,
    display: "none",
  },
  frame18: {
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    width: 559,
    overflow: "hidden",
    alignItems: "center",
  },
  adminMenuParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  adminCurrentUser: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default AdminCurrentUser;
