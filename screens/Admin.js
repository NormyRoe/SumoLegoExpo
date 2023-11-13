import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Admin = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.admin, styles.adminFlexBox]}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminFlexBox}>
        <View style={[styles.adminMenu, styles.frame1FlexBox]}>
          <ImageBackground
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image1.jpg")}
          />
          <Pressable
            style={[styles.adminCmpetitionButton, styles.frameFlexBox]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={styles.competition}>Competition</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={styles.competition}>Fields</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={styles.competition}>Schools</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={styles.competition}>Game Draw</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={styles.competition}>Leaderboard</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={styles.competition}>Team Check-In</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={styles.competition}>Create User</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={styles.competition}>Update User</Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.competition}>Logout</Text>
          </Pressable>
        </View>
        <View style={styles.frame}>
          <View style={[styles.frame1, styles.frame1FlexBox]}>
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <Text style={[styles.admin1, styles.admin1Typo]}>Admin</Text>
            </View>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <Text style={[styles.pleaseSelectA, styles.admin1Typo]}>
                Please Select a menu option
              </Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminFlexBox: {
    flexDirection: "row",
    flex: 1,
  },
  frame1FlexBox: {
    justifyContent: "space-between",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adminBorder: {
    backgroundColor: Color.white,
    height: 30,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  admin1Typo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    textAlign: "center",
    color: Color.colorBlack,
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  adminCmpetitionButton: {
    height: 30,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  adminFieldsButton: {
    height: 30,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 225,
    height: 374,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    justifyContent: "space-between",
  },
  admin1: {
    fontSize: FontSize.size_45xl,
    width: 193,
    height: 30,
  },
  frame2: {
    height: 90,
  },
  pleaseSelectA: {
    fontSize: 33,
    alignSelf: "stretch",
  },
  frame3: {
    height: 64,
  },
  frame1: {
    height: 292,
    alignSelf: "stretch",
  },
  frame: {
    justifyContent: "flex-end",
    marginLeft: 57,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  admin: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: 11,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.backGround,
  },
});

export default Admin;
