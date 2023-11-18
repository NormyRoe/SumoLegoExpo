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
import Row23 from "../components/Row23";
import Row22 from "../components/Row22";
import Row211 from "../components/Row211";
import Row20 from "../components/Row20";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AdminTeams = () => {
  const [adminTeamsTableFlatListData, setAdminTeamsTableFlatListData] =
    useState([<Row23 />, <Row22 />, <Row211 />, <Row20 />]);
  const [adminTeamsDivisionDropdownOpen, setAdminTeamsDivisionDropdownOpen] =
    useState(false);
  const [adminTeamsDivisionDropdownValue, setAdminTeamsDivisionDropdownValue] =
    useState();
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.adminTeams, styles.adminSpaceBlock]}
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
          <ImageBackground
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminTeamsCompetitionButton, styles.frameFlexBox1]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>Fields</Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>
              Schools
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminTeamsFieldsButton, styles.adminBorder2]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.backFlexBox]}>Logout</Text>
          </Pressable>
        </View>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={[styles.frame1, styles.frameFlexBox1]}>
            <View style={[styles.frame2, styles.frameFlexBox1]}>
              <Text style={[styles.teams, styles.teamTypo1]}>Teams</Text>
              <View style={[styles.frame1, styles.frameFlexBox1]}>
                <Text style={[styles.teamList, styles.backTypo]}>
                  Team list
                </Text>
              </View>
            </View>
            <View style={styles.adminTeamsTableFrame}>
              <FlatList
                style={[styles.adminTeamsTable, styles.adminBorder3]}
                data={adminTeamsTableFlatListData}
                renderItem={({ item }) => item}
                contentContainerStyle={styles.adminTeamsTableFlatListContent}
              />
            </View>
          </View>
          <View style={[styles.frame4, styles.frameFlexBox1]}>
            <View style={[styles.frame1, styles.frameFlexBox1]}>
              <View style={[styles.frame1, styles.frameFlexBox1]}>
                <Text style={[styles.teamDetails, styles.backFlexBox]}>
                  Team Details:
                </Text>
              </View>
              <View style={[styles.frame7, styles.frameFlexBox1]}>
                <View style={styles.frame8}>
                  <Text style={[styles.teamName, styles.teamTypo]}>
                    Team Name:
                  </Text>
                  <TextInput
                    style={styles.adminTeamsNameTextBox}
                    autoCapitalize="none"
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameFlexBox}>
              <View style={[styles.frame10, styles.frameFlexBox1]}>
                <View style={styles.frame11}>
                  <Text style={[styles.addTeamTo, styles.teamTypo]}>
                    Add Team to an existing division:
                  </Text>
                </View>
                <View style={[styles.frame12, styles.frameFlexBox]}>
                  <View
                    style={[
                      styles.adminTeamsDivisionDropdown,
                      styles.frameFlexBox1,
                    ]}
                  >
                    <DropDownPicker
                      style={[styles.dropdownpicker, styles.adminBorder3]}
                      open={adminTeamsDivisionDropdownOpen}
                      setOpen={setAdminTeamsDivisionDropdownOpen}
                      value={adminTeamsDivisionDropdownValue}
                      setValue={setAdminTeamsDivisionDropdownValue}
                      items={[]}
                      dropDownContainerStyle={
                        styles.adminTeamsDivisionDropdowndropDownContainer
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.frame13, styles.frameFlexBox1]}>
                <View style={[styles.frame14, styles.frameFlexBox1]}>
                  <View style={[styles.frame14, styles.frameFlexBox1]}>
                    <View style={[styles.frame14, styles.frameFlexBox1]}>
                      <Pressable
                        style={[
                          styles.adminTeamsBackButton,
                          styles.adminBorder1,
                        ]}
                      >
                        <Text style={[styles.back, styles.backTypo]}>Back</Text>
                      </Pressable>
                      <Pressable
                        style={[
                          styles.adminTeamsCreateButton,
                          styles.adminBorder,
                        ]}
                      >
                        <Text style={[styles.back, styles.backTypo]}>
                          Create
                        </Text>
                      </Pressable>
                    </View>
                    <Pressable
                      style={[
                        styles.adminTeamsUpdateButton,
                        styles.adminBorder,
                      ]}
                    >
                      <Text style={[styles.back, styles.backTypo]}>Update</Text>
                    </Pressable>
                  </View>
                  <Pressable
                    style={[
                      styles.adminTeamsClearFieldsButto,
                      styles.adminBorder1,
                    ]}
                  >
                    <Text style={[styles.clearFields, styles.backTypo]}>
                      Clear Fields
                    </Text>
                  </Pressable>
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
  adminTeamsTableFlatListContent: {
    flexDirection: "column",
  },
  adminTeamsDivisionDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  adminSpaceBlock: {
    paddingHorizontal: Padding.p_mini,
    flex: 1,
  },
  adminBorder3: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameFlexBox1: {
    alignItems: "center",
    overflow: "hidden",
  },
  backFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  adminBorder2: {
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  teamTypo1: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  backTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  teamTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  frameFlexBox: {
    marginTop: 1,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adminBorder1: {
    paddingVertical: Padding.p_0,
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
    height: 26,
    paddingVertical: Padding.p_0,
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
    textAlign: "center",
    color: Color.colorBlack,
    display: "flex",
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
    flex: 1,
  },
  adminTeamsCompetitionButton: {
    justifyContent: "center",
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  adminTeamsFieldsButton: {
    overflow: "hidden",
  },
  adminMenu: {
    top: -3,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    width: 217,
    height: 374,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    justifyContent: "space-between",
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  teams: {
    fontSize: FontSize.size_45xl,
    height: 66,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  teamList: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frame1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frame2: {
    height: 94,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  adminTeamsTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  adminTeamsTableFrame: {
    height: 119,
    marginTop: 2,
    alignSelf: "stretch",
  },
  teamDetails: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    width: 174,
    height: 16,
    textAlign: "center",
    color: Color.colorBlack,
    display: "flex",
    fontFamily: FontFamily.interRegular,
  },
  teamName: {
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  adminTeamsNameTextBox: {
    height: 15,
    marginLeft: 31,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flex: 1,
  },
  frame8: {
    paddingTop: 0,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
  },
  frame7: {
    marginTop: 13,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  addTeamTo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    alignSelf: "stretch",
  },
  frame11: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dropdownpicker: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  adminTeamsDivisionDropdown: {
    borderRadius: Border.br_5xs,
    height: 23,
    justifyContent: "center",
    alignSelf: "stretch",
    borderStyle: "solid",
    alignItems: "center",
  },
  frame12: {
    justifyContent: "center",
  },
  frame10: {
    height: 48,
    alignSelf: "stretch",
  },
  back: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  adminTeamsBackButton: {
    paddingHorizontal: Padding.p_mini,
    flex: 1,
  },
  adminTeamsCreateButton: {
    paddingHorizontal: Padding.p_4xs,
    marginLeft: 13,
    flex: 1,
  },
  frame14: {
    flexDirection: "row",
    flex: 1,
  },
  adminTeamsUpdateButton: {
    width: 152,
    paddingHorizontal: Padding.p_8xs,
    marginLeft: 17,
  },
  clearFields: {
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  adminTeamsClearFieldsButto: {
    width: 157,
    paddingHorizontal: Padding.p_sm,
    marginLeft: 18,
  },
  frame13: {
    marginTop: 9,
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frame4: {
    marginTop: 11,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frame: {
    top: 7,
    left: 230,
    width: 580,
    position: "absolute",
    alignItems: "center",
  },
  adminMenuParent: {
    height: 371,
    flex: 1,
  },
  adminTeams: {
    width: "100%",
    flexWrap: "wrap",
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
  },
});

export default AdminTeams;
