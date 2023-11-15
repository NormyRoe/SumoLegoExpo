import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  FlatList,
  TextInput,
} from "react-native";
import Row111 from "../components/Row11";
import Row10 from "../components/Row10";
import Row9 from "../components/Row9";
import Row8 from "../components/Row8";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AdminNonAdminUser = () => {
  const [
    adminNonAdminUserTableFlatListData,
    setAdminNonAdminUserTableFlatListData,
  ] = useState([<Row111 />, <Row10 />, <Row9 />, <Row8 />]);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.adminNonAdminUser}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminMenuParent}>
        <View style={[styles.adminMenu, styles.adminBorder2]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminNonAdminUserCompetiti, styles.frameFlexBox1]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Fields
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Schools
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminNonAdminUserFieldsBu, styles.adminBorder1]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Logout
            </Text>
          </Pressable>
        </View>
        <View style={styles.frame}>
          <View style={[styles.frame1, styles.frameFlexBox1]}>
            <Text style={[styles.updateNonAdminUser, styles.nonTypo]}>
              Update Non-admin User
            </Text>
            <View style={[styles.frame2, styles.adminFlexBox]}>
              <Text style={[styles.nonAdminUserList, styles.updateTypo]}>
                Non-Admin User list
              </Text>
            </View>
            <View
              style={[styles.adminNonAdminUserTableFra, styles.adminFlexBox]}
            >
              <FlatList
                style={[styles.adminNonAdminUserTable, styles.adminBorder2]}
                data={adminNonAdminUserTableFlatListData}
                renderItem={({ item }) => item}
                contentContainerStyle={
                  styles.adminNonAdminUserTableFlatListContent
                }
              />
            </View>
          </View>
          <View style={styles.frame3}>
            <View style={[styles.frame4, styles.frameFlexBox1]}>
              <View style={styles.frameFlexBox1}>
                <Text style={[styles.userDetails, styles.usernameTypo]}>
                  User Details:
                </Text>
              </View>
              <View style={styles.frame6}>
                <View style={styles.frameFlexBox}>
                  <Text style={[styles.username, styles.usernameTypo]}>
                    Username:
                  </Text>
                  <TextInput
                    style={styles.adminNonAdminUserUsername}
                    autoCapitalize="none"
                  />
                </View>
                <View style={[styles.frame8, styles.frameFlexBox]}>
                  <Text style={[styles.username, styles.usernameTypo]}>
                    Password:
                  </Text>
                  <TextInput
                    style={styles.adminNonAdminUserUsername}
                    autoCapitalize="none"
                  />
                </View>
                <View style={[styles.frame8, styles.frameFlexBox]}>
                  <Text style={[styles.username, styles.usernameTypo]}>
                    Re-type Password:
                  </Text>
                  <TextInput
                    style={styles.adminNonAdminUserUsername}
                    autoCapitalize="none"
                  />
                </View>
              </View>
            </View>
            <View style={styles.frame10}>
              <View style={styles.frameFlexBox1}>
                <View style={styles.frame12}>
                  <Pressable
                    style={[
                      styles.adminNonAdminUserUpdateBu,
                      styles.adminBorder,
                    ]}
                  >
                    <Text style={[styles.update, styles.updateTypo]}>
                      Update
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.adminNonAdminUserDeleteBu,
                      styles.adminBorder,
                    ]}
                  >
                    <Text style={[styles.update, styles.updateTypo]}>
                      Delete
                    </Text>
                  </Pressable>
                </View>
              </View>
              <Pressable
                style={[styles.adminNonAdminUserBackButt, styles.adminBorder]}
                onPress={() => navigation.navigate("AdminUpdateUser")}
              >
                <Text style={[styles.update, styles.updateTypo]}>Back</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminNonAdminUserTableFlatListContent: {
    flexDirection: "column",
  },
  adminBorder2: {
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  competitionFlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  adminBorder1: {
    height: 30,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  nonTypo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  adminFlexBox: {
    marginTop: 9,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  updateTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    flex: 1,
  },
  usernameTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  frameFlexBox: {
    paddingTop: 0,
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
  },
  adminBorder: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_4xs,
    justifyContent: "center",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    alignItems: "center",
    flexDirection: "row",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  adminNonAdminUserCompetiti: {
    height: 30,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
    alignItems: "center",
  },
  adminNonAdminUserFieldsBu: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 217,
    height: 374,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
  },
  updateNonAdminUser: {
    fontSize: FontSize.size_39xl,
    height: 39,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  nonAdminUserList: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frame2: {
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
  },
  adminNonAdminUserTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminNonAdminUserTableFra: {
    height: 105,
    alignItems: "center",
  },
  frame1: {
    alignItems: "center",
    flex: 1,
  },
  userDetails: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    alignSelf: "stretch",
  },
  username: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    flex: 1,
  },
  adminNonAdminUserUsername: {
    height: 15,
    marginLeft: 11,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flex: 1,
  },
  frame8: {
    marginTop: 1,
  },
  frame6: {
    marginTop: 7,
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  frame4: {
    alignItems: "center",
  },
  update: {
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
  },
  adminNonAdminUserUpdateBu: {
    flex: 1,
  },
  adminNonAdminUserDeleteBu: {
    marginLeft: 50,
    flex: 1,
  },
  frame12: {
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  adminNonAdminUserBackButt: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  frame10: {
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_3xs,
    marginTop: 3,
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  frame3: {
    height: 176,
    marginTop: 10,
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  frame: {
    width: 588,
    height: 372,
    overflow: "hidden",
    alignItems: "center",
  },
  adminMenuParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  adminNonAdminUser: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default AdminNonAdminUser;
