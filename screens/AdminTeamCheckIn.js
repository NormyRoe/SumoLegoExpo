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
import Row38 from "../components/Row38";
import Row37 from "../components/Row37";
import Row36 from "../components/Row36";
import Row35 from "../components/Row35";
import { CheckBox } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const AdminTeamCheckIn = () => {
  const [
    adminTeamCheckinTableFlatListData,
    setAdminTeamCheckinTableFlatListData,
  ] = useState([<Row38 />, <Row37 />, <Row36 />, <Row35 />]);
  const [
    adminTeamCheckinTeamCheckchecked,
    setAdminTeamCheckinTeamCheckchecked,
  ] = useState(false);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.adminTeamCheckIn}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminMenuParent}>
        <View style={[styles.adminMenu, styles.adminBorder3]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminTeamCheckinCompetition, styles.frameFlexBox2]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Fields
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Schools
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamCheckinFieldsButt, styles.adminBorder1]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.competitionFlexBox]}>
              Logout
            </Text>
          </Pressable>
        </View>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={[styles.frame1, styles.frameFlexBox1]}>
            <View style={[styles.frame2, styles.frameSpaceBlock]}>
              <Text style={[styles.teamCheckIn1, styles.teamTypo1]}>
                Team Check-In
              </Text>
            </View>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <Text style={[styles.teamList, styles.submitTypo]}>
                Team list
              </Text>
            </View>
            <View style={[styles.frame4, styles.frameFlexBox]}>
              <View style={styles.adminTeamCheckinTableFrame}>
                <FlatList
                  style={[styles.adminTeamCheckinTable, styles.adminBorder3]}
                  data={adminTeamCheckinTableFlatListData}
                  renderItem={({ item }) => item}
                  contentContainerStyle={
                    styles.adminTeamCheckinTableFlatListContent
                  }
                />
              </View>
            </View>
            <View style={[styles.frame5, styles.frameFlexBox]}>
              <View style={[styles.frame6, styles.frameFlexBox2]}>
                <View style={[styles.frame7, styles.frameFlexBox2]}>
                  <View style={styles.frame8}>
                    <Text style={[styles.teamName, styles.teamTypo]}>
                      Team Name:
                    </Text>
                    <Text style={[styles.teamHasArrived, styles.teamTypo]}>
                      Team has arrived:
                    </Text>
                  </View>
                  <View style={[styles.frame9, styles.frameFlexBox2]}>
                    <TextInput
                      style={[
                        styles.adminTeamCheckinTeamNameT,
                        styles.adminBorder2,
                      ]}
                      autoCapitalize="none"
                    />
                    <CheckBox
                      style={[
                        styles.adminTeamCheckinTeamCheck,
                        styles.adminBorder2,
                      ]}
                      checked={adminTeamCheckinTeamCheckchecked}
                      onPress={() =>
                        setAdminTeamCheckinTeamCheckchecked(
                          !adminTeamCheckinTeamCheckchecked
                        )
                      }
                      checkedColor="#fff"
                      containerStyle={styles.adminTeamCheckinTeamCheckLayout}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.frame6, styles.frameFlexBox2]}>
                <Pressable
                  style={[
                    styles.adminTeamCheckinSubmitButt,
                    styles.adminBorder,
                  ]}
                >
                  <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
                </Pressable>
              </View>
              <View style={[styles.frame11, styles.frameFlexBox2]}>
                <View style={[styles.frame12, styles.frameFlexBox1]}>
                  <Text style={styles.onceAllTeams}>
                    Once all teams have checked in, Click the button below:
                  </Text>
                  <View style={[styles.frame11, styles.frameFlexBox2]}>
                    <Pressable
                      style={[
                        styles.adminTeamCheckinGenerateDr,
                        styles.adminBorder,
                      ]}
                    >
                      <Text style={[styles.submit, styles.submitTypo]}>
                        Generate Draw
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
  adminTeamCheckinTableFlatListContent: {
    flexDirection: "column",
  },
  adminTeamCheckinTeamCheckLayout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  adminBorder3: {
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  frameFlexBox2: {
    justifyContent: "center",
    overflow: "hidden",
  },
  competitionFlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
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
  frameFlexBox1: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_0,
  },
  teamTypo1: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frameFlexBox: {
    marginTop: 12,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  submitTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  teamTypo: {
    height: 21,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  adminBorder2: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  adminBorder: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
  },
  adminTeamCheckinCompetition: {
    alignItems: "center",
    alignSelf: "stretch",
    height: 30,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  adminTeamCheckinFieldsButt: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adminMenu: {
    left: -7,
    backgroundColor: Color.colorGainsboro_100,
    width: 217,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    justifyContent: "space-between",
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
    height: 374,
  },
  teamCheckIn1: {
    fontSize: FontSize.size_39xl,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  frame2: {
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  teamList: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frame3: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_0,
  },
  adminTeamCheckinTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminTeamCheckinTableFrame: {
    alignSelf: "stretch",
    flex: 1,
  },
  frame4: {
    height: 96,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  teamName: {
    width: 90,
  },
  teamHasArrived: {
    width: 117,
    marginTop: 2,
  },
  frame8: {
    height: 45,
    alignItems: "flex-end",
    overflow: "hidden",
    flex: 1,
  },
  adminTeamCheckinTeamNameT: {
    height: 15,
    alignSelf: "stretch",
  },
  adminTeamCheckinTeamCheck: {
    marginTop: 4,
  },
  frame9: {
    paddingTop: 0,
    marginLeft: 34,
    flex: 1,
  },
  frame7: {
    width: 303,
    flexDirection: "row",
  },
  frame6: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  submit: {
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  adminTeamCheckinSubmitButt: {
    width: 214,
  },
  onceAllTeams: {
    fontSize: 15,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
  },
  adminTeamCheckinGenerateDr: {
    alignSelf: "stretch",
  },
  frame11: {
    alignSelf: "stretch",
  },
  frame12: {
    alignSelf: "stretch",
  },
  frame5: {
    height: 129,
    justifyContent: "space-between",
  },
  frame1: {
    height: 349,
    alignSelf: "stretch",
  },
  frame: {
    left: 231,
    width: 567,
    height: 356,
    top: 0,
    position: "absolute",
    justifyContent: "flex-end",
  },
  adminMenuParent: {
    height: 374,
    flex: 1,
  },
  adminTeamCheckIn: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default AdminTeamCheckIn;
