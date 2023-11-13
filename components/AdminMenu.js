import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const AdminMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminMenu}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={[styles.competitionWrapper, styles.competitionFlexBox]}
        onPress={() => navigation.navigate("AdminCompetition")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Competition
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("AdminFields")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Fields
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("AdminSchools")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Schools
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("AdminGameDraw")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Game Draw
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("AdminLeaderboard")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Leaderboard
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("AdminTeamCheckIn")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Team Check-In
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("AdminCreateUser")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Create User
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("AdminUpdateUser")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Update User
        </Text>
      </Pressable>
      <Pressable
        style={[styles.fieldsWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.competition, styles.competitionFlexBox]}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  competitionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  wrapperBorder: {
    flexDirection: "row",
    height: 30,
    backgroundColor: Color.white,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    flex: 1,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
  },
  competitionWrapper: {
    flexDirection: "row",
    height: 30,
    backgroundColor: Color.white,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
  },
  fieldsWrapper: {
    alignSelf: "stretch",
    height: 30,
    backgroundColor: Color.white,
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 217,
    height: 374,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
  },
});

export default AdminMenu;
