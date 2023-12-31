import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import * as Crypto from 'expo-crypto';
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { BASE_URL, accessRole, selectedUserId, usersData, userName, updateUsersData, updateSelectedUserId } from "../GlobalVariables";


const AdminCreateUser = () => {
  const [adminCreateUserRoleDropdowOpen, setAdminCreateUserRoleDropdowOpen] =
    useState(false);
  const [adminCreateUserRoleDropdowValue, setAdminCreateUserRoleDropdowValue] =
    useState();
  const [textInputValues, setTextInputValues] = useState({
      first_name: '',
      surname: '',
      email_address: '',
      username: '',
      password: '',
      reTypePassword: '',
  });


  const navigation = useNavigation();
  

  const handleCreateUser = async () => {
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
  
  
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
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
          role: adminCreateUserRoleDropdowValue,
        }),
      });
  
      const data = await response.json();
  
      if (data.error) {
        window.alert(data.error);
        console.log(data.error);
      } else {
        console.log(data);
        window.alert(data.message);
        handleClearFields;
      }
  
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  }

  const handleClearFields = () => {
    // Clear all text input values
    setTextInputValues({
      first_name: '',
      surname: '',
      email_address: '',
      username: '',
      password: '',
      reTypePassword: '',
    })};

  return (
    <LinearGradient
      style={styles.adminCreateUser}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminMenuParent}>
        <View style={[styles.adminMenu, styles.adminMenuBorder]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminCreateUserCompetition, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={styles.competition}>Competition</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={styles.competition}>Fields</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={styles.competition}>Schools</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={styles.competition}>Game Draw</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={styles.competition}>Leaderboard</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={styles.competition}>Team Check-In</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={styles.competition}>Create User</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={styles.competition}>Update User</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.competition}>Logout</Text>
          </Pressable>
        </View>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={[styles.frame1, styles.frameFlexBox]}>
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <Text style={styles.createUser1}>Create User</Text>
              <View style={[styles.frame3, styles.frameSpaceBlock]}>
                <View style={[styles.frame4, styles.frameFlexBox]}>
                  <Text style={styles.userRole}>User Role:</Text>
                  <View style={styles.adminCreateUserRoleDropdow}>
                    <DropDownPicker
                      style={styles.adminMenuBorderDropdown}
                      open={adminCreateUserRoleDropdowOpen}
                      setOpen={setAdminCreateUserRoleDropdowOpen}
                      value={adminCreateUserRoleDropdowValue}
                      setValue={setAdminCreateUserRoleDropdowValue}
                      items={[
                        { label: 'Admin', value: 'Admin' },
                        { label: 'Judge', value: 'Judge' },
                      ]}
                      dropDownContainerStyle={
                        styles.adminCreateUserRoleDropdowdropDownContainer
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame5}>
              <View style={[styles.frame6, styles.frameFlexBox]}>
                <View style={[styles.frame7, styles.frameFlexBox]}>
                  <Text style={[styles.userDetails, styles.createFlexBox]}>
                    User Details:
                  </Text>
                </View>
                <View style={[styles.frame8, styles.frameFlexBox]}>
                  <View style={[styles.frame9, styles.frameFlexBox]}>
                    <Text style={[styles.firstName, styles.usernameTypo]}>
                      First Name:
                    </Text>
                    <TextInput
                      style={[
                        styles.adminCreateUserFirstNameT,
                        styles.adminBorder,
                      ]}
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
              </View>
              <View style={[styles.frame10, styles.frameFlexBox]}>
                <View style={[styles.frame7, styles.frameFlexBox]}>
                  <View style={[styles.frame7, styles.frameFlexBox]}>
                    <View style={[styles.frame9, styles.frameFlexBox]}>
                      <Text style={[styles.firstName, styles.usernameTypo]}>
                        Last Name:
                      </Text>
                      <TextInput
                        style={[
                          styles.adminCreateUserLastNameTe,
                          styles.adminBorder2,
                        ]}
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
                  <View style={[styles.frame3, styles.frameSpaceBlock]}>
                    <View style={[styles.frame9, styles.frameFlexBox]}>
                      <Text style={[styles.firstName, styles.usernameTypo]}>
                        Email:
                      </Text>
                      <TextInput
                        style={[
                          styles.adminCreateUserLastNameTe,
                          styles.adminBorder2,
                        ]}
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
                </View>
                <View style={[styles.frame16, styles.frameSpaceBlock]}>
                  <View style={[styles.frame7, styles.frameFlexBox]}>
                    <View style={[styles.frame18, styles.frameFlexBox]}>
                      <Text style={[styles.username, styles.usernameTypo]}>
                        Username:
                      </Text>
                      <TextInput
                        style={[
                          styles.adminCreateUserUsernameTex,
                          styles.adminBorder,
                        ]}
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
                  <View style={[styles.frame7, styles.frameFlexBox]}>
                    <View style={[styles.frame9, styles.frameFlexBox]}>
                      <Text style={[styles.firstName, styles.usernameTypo]}>
                        Password:
                      </Text>
                      <TextInput
                        style={[
                          styles.adminCreateUserLastNameTe,
                          styles.adminBorder2,
                        ]}
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
                </View>
                <View style={[styles.frame21, styles.frameSpaceBlock]}>
                  <View style={[styles.frame7, styles.frameFlexBox]}>
                    <View style={[styles.frame9, styles.frameFlexBox]}>
                      <Text style={[styles.firstName, styles.usernameTypo]}>
                        Re-type Password:
                      </Text>
                      <TextInput
                        style={[
                          styles.adminCreateUserLastNameTe,
                          styles.adminBorder2,
                        ]}
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
                  <View style={[styles.frame24, styles.frameFlexBox]}>
                    <Pressable
                      style={[
                        styles.adminCreateUserCreateButto,
                        styles.adminBorder2,
                      ]}
                      onPress={handleCreateUser}
                    >
                      <Text style={[styles.create, styles.createFlexBox]}>
                        Create
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminCreateUserRoleDropdowdropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flexBasis: 'auto',
  },
  adminMenuBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  adminMenuBorderDropdown: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    fontSize: 5,
  },
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
  frameFlexBox: {
    alignSelf: "stretch",
    overflow: "visible",
  },
  frameSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
    overflow: "visible",
  },
  createFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
  },
  usernameTypo: {
    textAlign: "right",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
  },
  adminBorder: {
    height: 15,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  adminBorder2: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  adminCreateUserCompetition: {
    justifyContent: "center",
    alignItems: "center",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 225,
    height: 374,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: Border.br_mid,
  },
  createUser1: {
    fontSize: FontSize.size_45xl,
    height: 43,
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  userRole: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    textAlign: "center",
    color: Color.colorBlack,
    flex: 1,
  },
  adminCreateUserRoleDropdow: {
    borderRadius: Border.br_5xs,
    marginLeft: 16,
    marginBottom: 30,
    overflow: "visible",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  frame4: {
    paddingBottom: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  frame3: {
    justifyContent: "center",
  },
  frame2: {
    height: 40,
    alignItems: "center",
  },
  userDetails: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
  },
  frame7: {
    justifyContent: "center",
  },
  firstName: {
    width: 131,
    height: 20,
  },
  adminCreateUserFirstNameT: {
    width: 152,
  },
  frame9: {
    paddingTop: 0,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frame8: {
    marginTop: 12,
    height: 20,
    justifyContent: "space-between",
  },
  frame6: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  adminCreateUserLastNameTe: {
    height: 14,
    width: 152,
  },
  username: {
    width: 140,
    height: 16,
  },
  adminCreateUserUsernameTex: {
    width: 151,
  },
  frame18: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frame16: {
    height: 47,
    justifyContent: "space-between",
    alignItems: "center",
  },
  create: {
    fontSize: FontSize.size_3xl,
    flex: 1,
  },
  adminCreateUserCreateButto: {
    width: 116,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_0,
    justifyContent: "space-between",
    borderRadius: Border.br_mid,
    alignItems: "center",
    flexDirection: "row",
  },
  frame24: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  frame21: {
    alignItems: "center",
  },
  frame10: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  frame5: {
    width: 365,
    marginTop: 50,
    overflow: "hidden",
  },
  frame1: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frame: {
    marginLeft: 126,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  adminMenuParent: {
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  adminCreateUser: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default AdminCreateUser;
