import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  FlatList,
  TextInput,
} from "react-native";
import Row15 from "../components/Row15";
import Row14 from "../components/Row14";
import Row13 from "../components/Row13";
import Row12 from "../components/Row12";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AdminCompetition = () => {
  const [
    adminCompetitionTableFlatListData,
    setAdminCompetitionTableFlatListData,
  ] = useState([<Row15 />, <Row14 />, <Row13 />, <Row12 />]);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.adminCompetition}
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
          <ImageBackground
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminCompetitionCompetition, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Fields
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Schools
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Logout
            </Text>
          </Pressable>
        </View>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={styles.frame2}>
              <Text style={[styles.competitions, styles.competitionsTypo]}>
                Competitions
              </Text>
            </View>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <Text style={[styles.competitionList, styles.createTypo]}>
                Competition list
              </Text>
            </View>
            <View style={[styles.frame4, styles.frameFlexBox]}>
              <View style={styles.adminCompetitionTableFrame}>
                <FlatList
                  style={[styles.adminCompetitionTable, styles.adminBorder2]}
                  data={adminCompetitionTableFlatListData}
                  renderItem={({ item }) => item}
                  contentContainerStyle={
                    styles.adminCompetitionTableFlatListContent
                  }
                />
              </View>
              <View style={[styles.frame5, styles.frameSpaceBlock]}>
                <Text
                  style={[styles.competitionDetails, styles.competitionFlexBox]}
                >
                  Competition Details:
                </Text>
              </View>
            </View>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <View style={styles.frame7}>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Competition Name:
                </Text>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Competition Date:
                </Text>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Game per Team:
                </Text>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Fields per Division:
                </Text>
                <View style={styles.frame8}>
                  <Pressable
                    style={[
                      styles.adminCompetitionCreateButto,
                      styles.adminLayout,
                    ]}
                  >
                    <Text style={[styles.create, styles.createTypo]}>
                      Create
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.frame9}>
                <TextInput
                  style={[
                    styles.adminCompetitionNameTextFi,
                    styles.adminBorder,
                  ]}
                  autoCapitalize="none"
                />
                <TextInput
                  style={[
                    styles.adminCompetitionDateTextFi,
                    styles.frame10SpaceBlock,
                  ]}
                  autoCapitalize="none"
                />
                <TextInput
                  style={[
                    styles.adminCompetitionDateTextFi,
                    styles.frame10SpaceBlock,
                  ]}
                  autoCapitalize="none"
                />
                <TextInput
                  style={[
                    styles.adminCompetitionDateTextFi,
                    styles.frame10SpaceBlock,
                  ]}
                  autoCapitalize="none"
                />
                <View style={[styles.frame10, styles.frame10SpaceBlock]}>
                  <Pressable
                    style={[
                      styles.adminCompetitionCreateField,
                      styles.adminLayout,
                    ]}
                  >
                    <Text style={[styles.create, styles.createTypo]}>
                      Clear fields
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame11, styles.frameSpaceBlock]}>
            <Pressable style={styles.adminCompetitionSetCompetit}>
              <Text style={[styles.create, styles.createTypo]}>
                Set as current competition
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminCompetitionTableFlatListContent: {
    flexDirection: "column",
  },
  adminBorder2: {
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
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
  createFlexBox: {
    display: "flex",
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  competitionsTypo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frameFlexBox: {
    marginTop: 8,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  createTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameSpaceBlock: {
    marginTop: 2,
    justifyContent: "center",
    overflow: "hidden",
  },
  competitionFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  adminLayout: {
    height: 31,
    width: 164,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  adminBorder: {
    height: 14,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frame10SpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  adminCompetitionCompetition: {
    justifyContent: "center",
    alignItems: "center",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 245,
    height: 374,
    justifyContent: "space-between",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_9xs,
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderStyle: "solid",
  },
  competitions: {
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frame2: {
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  competitionList: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frame3: {
    height: 24,
    justifyContent: "flex-end",
  },
  adminCompetitionTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    width: 575,
    maxWidth: 575,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminCompetitionTableFrame: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
  },
  competitionDetails: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  frame5: {
    width: 198,
  },
  frame4: {
    height: 143,
  },
  competitionName: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  create: {
    display: "flex",
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  adminCompetitionCreateButto: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_12xs,
  },
  frame8: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame7: {
    overflow: "hidden",
    alignItems: "flex-end",
    flex: 1,
  },
  adminCompetitionNameTextFi: {
    alignSelf: "stretch",
  },
  adminCompetitionDateTextFi: {
    height: 14,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  adminCompetitionCreateField: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
  },
  frame10: {
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "flex-end",
  },
  frame9: {
    marginLeft: 11,
    overflow: "hidden",
    flex: 1,
  },
  frame6: {
    flexDirection: "row",
  },
  frame1: {
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adminCompetitionSetCompetit: {
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_9xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    paddingVertical: Padding.p_0,
    flexDirection: "row",
  },
  frame11: {
    width: 304,
    alignItems: "flex-end",
  },
  frame: {
    marginLeft: 6,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  adminMenuParent: {
    paddingTop: Padding.p_8xs,
    paddingBottom: Padding.p_5xs,
    alignItems: "flex-end",
    flexDirection: "row",
    flex: 1,
  },
  adminCompetition: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_4xs,
    backgroundColor: Color.backGround,
    paddingVertical: Padding.p_0,
    flexDirection: "row",
    flex: 1,
  },
});

export default AdminCompetition;
