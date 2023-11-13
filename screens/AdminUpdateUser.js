import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AdminUpdateUser = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.adminUpdateUser}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.frameParent}>
        <View style={styles.frame}>
          <View style={[styles.frame1, styles.frameFlexBox]}>
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <Text style={[styles.updateUser, styles.updateFlexBox]}>
                Update User
              </Text>
              <Pressable
                style={[styles.adminUpdateUserUpdateCurre, styles.adminBorder1]}
                onPress={() => navigation.navigate("AdminCurrentUser")}
              >
                <Text style={[styles.updateCurrentUser, styles.updateTypo]}>
                  Update current user
                </Text>
              </Pressable>
            </View>
            <View
              style={[
                styles.adminUpdateUserUpdateNonAWrapper,
                styles.adminFlexBox,
              ]}
            >
              <Pressable
                style={[styles.adminUpdateUserUpdateNonA, styles.adminBorder1]}
                onPress={() => navigation.navigate("AdminNonAdminUser")}
              >
                <Text style={[styles.updateNonAdmin, styles.updateTypo]}>
                  Update non admin users
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.adminMenu, styles.adminBorder1]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminUpdateUserCompetition, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>Fields</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>Schools</Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.updateTypo]}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  updateFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  adminBorder1: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
  },
  updateTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    flex: 1,
  },
  adminFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  adminBorder: {
    height: 30,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_mid,
    overflow: "hidden",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  updateUser: {
    fontSize: FontSize.size_45xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    height: 73,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
    display: "flex",
  },
  updateCurrentUser: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interRegular,
  },
  adminUpdateUserUpdateCurre: {
    paddingHorizontal: 19,
    marginTop: 155,
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    alignSelf: "stretch",
    paddingVertical: Padding.p_0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  frame2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  updateNonAdmin: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
  },
  adminUpdateUserUpdateNonA: {
    paddingHorizontal: 21,
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    alignSelf: "stretch",
    paddingVertical: Padding.p_0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  adminUpdateUserUpdateNonAWrapper: {
    marginTop: -123,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frame1: {
    width: 367,
    height: 382,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  frame: {
    alignItems: "flex-end",
    zIndex: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    justifyContent: "center",
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
  },
  adminUpdateUserCompetition: {
    justifyContent: "center",
    alignItems: "center",
  },
  adminMenu: {
    position: "absolute",
    top: 0,
    left: -6,
    backgroundColor: Color.colorGainsboro_100,
    width: 217,
    height: 374,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    zIndex: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  frameParent: {
    paddingHorizontal: 127,
    paddingVertical: Padding.p_0,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  adminUpdateUser: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_6xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default AdminUpdateUser;
