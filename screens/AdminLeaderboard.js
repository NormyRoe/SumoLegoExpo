import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Row34 from "../components/Row34";
import Row33 from "../components/Row33";
import Row32 from "../components/Row32";
import Row311 from "../components/Row31";
import Row30 from "../components/Row30";
import Row29 from "../components/Row29";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AdminLeaderboard = () => {
  const [
    adminLeaderboardCompetition1Open,
    setAdminLeaderboardCompetition1Open,
  ] = useState(false);
  const [
    adminLeaderboardCompetition1Value,
    setAdminLeaderboardCompetition1Value,
  ] = useState();
  const [adminLeaderboardDivisionDroOpen, setAdminLeaderboardDivisionDroOpen] =
    useState(false);
  const [
    adminLeaderboardDivisionDroValue,
    setAdminLeaderboardDivisionDroValue,
  ] = useState();
  const [
    adminLeaderboardTableFlatListData,
    setAdminLeaderboardTableFlatListData,
  ] = useState([
    <Row34 />,
    <Row33 />,
    <Row32 />,
    <Row311 />,
    <Row30 />,
    <Row29 />,
  ]);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.adminLeaderboard}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminMenuParent}>
        <View style={[styles.adminMenu, styles.adminBorder1]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminLeaderboardCompetition, styles.frameFlexBox]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={styles.competition}>Competition</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={styles.competition}>Fields</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={styles.competition}>Schools</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={styles.competition}>Game Draw</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={styles.competition}>Leaderboard</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={styles.competition}>Team Check-In</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={styles.competition}>Create User</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={styles.competition}>Update User</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.competition}>Logout</Text>
          </Pressable>
        </View>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={[styles.frame1, styles.frameFlexBox]}>
            <Text style={[styles.leaderboards, styles.leaderboardsTypo]}>
              LeaderBoards
            </Text>
          </View>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <View style={styles.frame4}>
                <View style={styles.adminLayout}>
                  <DropDownPicker
                    style={[styles.dropdownpicker, styles.adminBorder1]}
                    open={adminLeaderboardCompetition1Open}
                    setOpen={setAdminLeaderboardCompetition1Open}
                    value={adminLeaderboardCompetition1Value}
                    setValue={setAdminLeaderboardCompetition1Value}
                    placeholder="Competition"
                    items={[]}
                    labelStyle={styles.adminLeaderboardCompetition1Value}
                    dropDownContainerStyle={
                      styles.adminLeaderboardCompetition1dropDownContainer
                    }
                  />
                </View>
                <View
                  style={[
                    styles.adminLeaderboardDivisionDro,
                    styles.adminLayout,
                  ]}
                >
                  <DropDownPicker
                    style={[styles.dropdownpicker, styles.adminBorder1]}
                    open={adminLeaderboardDivisionDroOpen}
                    setOpen={setAdminLeaderboardDivisionDroOpen}
                    value={adminLeaderboardDivisionDroValue}
                    setValue={setAdminLeaderboardDivisionDroValue}
                    placeholder="Divisions"
                    items={[]}
                    labelStyle={styles.adminLeaderboardDivisionDroValue}
                    dropDownContainerStyle={
                      styles.adminLeaderboardDivisionDrodropDownContainer
                    }
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frame5, styles.frameSpaceBlock]}>
              <Text style={[styles.labelForDivision, styles.leaderboardsTypo]}>
                Label for Division Name
              </Text>
            </View>
            <View
              style={[
                styles.adminLeaderboardTableFrame,
                styles.frameSpaceBlock,
              ]}
            >
              <FlatList
                style={[styles.adminLeaderboardTable, styles.adminBorder1]}
                data={adminLeaderboardTableFlatListData}
                renderItem={({ item }) => item}
                contentContainerStyle={
                  styles.adminLeaderboardTableFlatListContent
                }
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminLeaderboardCompetition1Value: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  adminLeaderboardCompetition1dropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  adminLeaderboardDivisionDroValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  adminLeaderboardDivisionDrodropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  adminLeaderboardTableFlatListContent: {
    flexDirection: "column",
  },
  adminBorder1: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  adminBorder: {
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  leaderboardsTypo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  adminLayout: {
    height: 34,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    borderStyle: "solid",
    flex: 1,
  },
  frameSpaceBlock: {
    marginTop: 9,
    alignSelf: "stretch",
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
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  adminLeaderboardCompetition: {
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
    alignItems: "center",
  },
  adminLeaderboardFieldsButto: {
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
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    justifyContent: "space-between",
  },
  leaderboards: {
    fontSize: FontSize.size_45xl,
  },
  frame1: {
    height: 55,
    alignSelf: "stretch",
  },
  dropdownpicker: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  adminLeaderboardDivisionDro: {
    marginLeft: 88,
  },
  frame4: {
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  frame3: {
    alignSelf: "stretch",
  },
  labelForDivision: {
    fontSize: FontSize.size_mid,
  },
  frame5: {
    justifyContent: "center",
    overflow: "hidden",
  },
  adminLeaderboardTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminLeaderboardTableFrame: {
    height: 216,
  },
  frame2: {
    marginTop: 26,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame: {
    width: 599,
    alignItems: "center",
  },
  adminMenuParent: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  adminLeaderboard: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default AdminLeaderboard;
