import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AdminMenu1 = () => {
  return (
    <View style={styles.adminMenu}>
      <View style={styles.adminMenuChild} />
      <View style={[styles.competitionButton, styles.buttonLayout]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.competitions, styles.userTypo]}>Competitions</Text>
      </View>
      <View style={[styles.fieldButton, styles.buttonPosition2]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.fields, styles.userTypo]}>Fields</Text>
      </View>
      <View style={[styles.schoolButton, styles.buttonPosition1]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.schools, styles.userTypo]}>Schools</Text>
      </View>
      <View style={[styles.gameDrawButton, styles.buttonPosition]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.gameDraw, styles.userTypo]}>Game Draw</Text>
      </View>
      <View style={[styles.leaderboardButton, styles.buttonPosition2]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.leaderboard, styles.userTypo]}>Leaderboard</Text>
      </View>
      <View style={[styles.teamCheckInButton, styles.buttonLayout]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.teamCheckIn, styles.userTypo]}>Team Check-In</Text>
      </View>
      <View style={[styles.createUserButton, styles.buttonPosition]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.createUser, styles.userTypo]}>Create User</Text>
      </View>
      <View style={[styles.updateUserButton, styles.buttonPosition]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.updateUser, styles.userTypo]}>Update User</Text>
      </View>
      <View style={[styles.logoutButton, styles.buttonPosition1]}>
        <View style={styles.buttonChildPosition} />
        <Text style={[styles.logout, styles.userTypo]}>Logout</Text>
      </View>
      <Image
        style={styles.iconsHamburgerMenu1}
        contentFit="cover"
        source={require("../assets/iconshamburgermenu-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: "53.07%",
    height: "11.82%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  userTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
    left: "0%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  buttonPosition2: {
    bottom: "84.55%",
    top: "3.64%",
    width: "53.07%",
    height: "11.82%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  buttonPosition1: {
    bottom: "84.09%",
    top: "4.09%",
    width: "53.07%",
    height: "11.82%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  buttonPosition: {
    bottom: "83.18%",
    top: "5%",
    width: "53.07%",
    height: "11.82%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  adminMenuChild: {
    height: "170.45%",
    width: "58.67%",
    right: "-58.67%",
    bottom: "-70.45%",
    left: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: "0%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  buttonChildPosition: {
    borderWidth: 1,
    borderRadius: Border.br_mid,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: "0%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  competitions: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  competitionButton: {
    top: "4.55%",
    right: "-44%",
    bottom: "83.64%",
    left: "90.93%",
  },
  fields: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  fieldButton: {
    right: "-33.6%",
    left: "80.53%",
  },
  schools: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  schoolButton: {
    right: "-23.2%",
    left: "70.13%",
  },
  gameDraw: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  gameDrawButton: {
    right: "-12.8%",
    left: "59.73%",
  },
  leaderboard: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  leaderboardButton: {
    right: "-3.2%",
    left: "50.13%",
  },
  teamCheckIn: {
    width: "84.42%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  teamCheckInButton: {
    top: "3.18%",
    right: "7.2%",
    bottom: "85%",
    left: "39.73%",
  },
  createUser: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  createUserButton: {
    right: "17.6%",
    left: "29.33%",
  },
  updateUser: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  updateUserButton: {
    right: "28%",
    left: "18.93%",
  },
  logout: {
    width: "81.91%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xl,
    top: "65.38%",
    height: "46.15%",
  },
  logoutButton: {
    right: "37.6%",
    left: "9.33%",
  },
  iconsHamburgerMenu1: {
    height: "15%",
    width: "8.8%",
    top: "-170.45%",
    right: "88.8%",
    bottom: "255.45%",
    left: "2.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  adminMenu: {
    width: 375,
    height: 220,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
});

export default AdminMenu1;
