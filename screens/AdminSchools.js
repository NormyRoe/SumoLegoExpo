import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AdminSchools = () => {
  const [adminSchoolsPaidDropdownOpen, setAdminSchoolsPaidDropdownOpen] =
    useState(false);
  const [adminSchoolsPaidDropdownValue, setAdminSchoolsPaidDropdownValue] =
    useState();
  const [adminSchoolsStateDropdownOpen, setAdminSchoolsStateDropdownOpen] =
    useState(false);
  const [adminSchoolsStateDropdownValue, setAdminSchoolsStateDropdownValue] =
    useState();
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.adminSchools}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminSchoolsFrame}>
        <View style={styles.adminMenu}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={styles.adminSchoolsCompetitionButt}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={styles.competition}>Competition</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={styles.competition}>Fields</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={styles.competition}>Schools</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={styles.competition}>Game Draw</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={styles.competition}>Leaderboard</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={styles.competition}>Team Check-In</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={styles.competition}>Create User</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={styles.competition}>Update User</Text>
          </Pressable>
          <Pressable
            style={styles.adminSchoolsFieldsButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.competition}>Logout</Text>
          </Pressable>
        </View>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={styles.frame2}>
              <View style={styles.frame3}>
                <Text style={styles.schools1}>Schools</Text>
              </View>
              <View style={styles.frame4}>
                <View style={styles.frame5}>
                  <View style={styles.frame6}>
                    <Text style={styles.schoolList}>School list</Text>
                  </View>
                  <View style={styles.adminSchoolsTableFrame}>
                    <View style={styles.adminSchoolsTable}>
                      <View style={styles.row}>
                        <View style={styles.cell}>
                          <View style={styles.content}>
                            <Text style={styles.text}>Name</Text>
                          </View>
                        </View>
                        <View style={styles.cell}>
                          <View style={styles.content}>
                            <Text style={styles.text}>Contact Name</Text>
                          </View>
                        </View>
                        <View style={styles.cell}>
                          <View style={styles.content}>
                            <Text style={styles.text}>Contact Number</Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                        <View style={styles.cell3}>
                          <View style={styles.content3}>
                            <Text style={styles.text3} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.frame7}>
                <Text style={styles.schoolDetails}>School Details:</Text>
              </View>
            </View>
            <View style={styles.frame8}>
              <View style={styles.frame9}>
                <View style={styles.frame10}>
                  <View style={styles.frame11}>
                    <View style={styles.frame12}>
                      <View style={styles.frame13}>
                        <View style={styles.frame14}>
                          <Text style={styles.schoolName}>School Name:</Text>
                          <Text style={styles.schoolName}>Contact Name:</Text>
                          <Text style={styles.schoolName}>Contact Number:</Text>
                          <Text style={styles.schoolName}>Email Address:</Text>
                          <Text style={styles.schoolName}>Paid:</Text>
                        </View>
                      </View>
                      <View style={styles.frame15}>
                        <View style={styles.frame16}>
                          <TextInput
                            style={styles.adminSchoolsNameTextField}
                            autoCapitalize="none"
                          />
                          <TextInput
                            style={styles.adminSchoolsContactNameTex}
                            autoCapitalize="none"
                          />
                          <TextInput
                            style={styles.adminSchoolsContactNameTex}
                            autoCapitalize="none"
                          />
                          <TextInput
                            style={styles.adminSchoolsContactNameTex}
                            autoCapitalize="none"
                          />
                          <View style={styles.adminSchoolsPaidDropdown}>
                            <DropDownPicker
                              style={styles.dropdownpicker}
                              open={adminSchoolsPaidDropdownOpen}
                              setOpen={setAdminSchoolsPaidDropdownOpen}
                              value={adminSchoolsPaidDropdownValue}
                              setValue={setAdminSchoolsPaidDropdownValue}
                              items={[]}
                              dropDownContainerStyle={
                                styles.adminSchoolsPaidDropdowndropDownContainer
                              }
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.frame17}>
                      <Text style={styles.schoolName}>
                        Street address line 1:
                      </Text>
                      <Text style={styles.schoolName}>
                        Street address line 2:
                      </Text>
                      <Text style={styles.schoolName}>Suburb:</Text>
                      <Text style={styles.schoolName}>State:</Text>
                      <Text style={styles.schoolName}>Postcode:</Text>
                    </View>
                  </View>
                  <View style={styles.frame18}>
                    <TextInput
                      style={styles.adminSchoolsNameTextField}
                      autoCapitalize="none"
                    />
                    <TextInput
                      style={styles.adminSchoolsContactNameTex}
                      autoCapitalize="none"
                    />
                    <TextInput
                      style={styles.adminSchoolsContactNameTex}
                      autoCapitalize="none"
                    />
                    <View style={styles.adminSchoolsPaidDropdown}>
                      <DropDownPicker
                        style={styles.dropdownpicker}
                        open={adminSchoolsStateDropdownOpen}
                        setOpen={setAdminSchoolsStateDropdownOpen}
                        value={adminSchoolsStateDropdownValue}
                        setValue={setAdminSchoolsStateDropdownValue}
                        items={[]}
                        dropDownContainerStyle={
                          styles.adminSchoolsStateDropdowndropDownContainer
                        }
                      />
                    </View>
                    <TextInput
                      style={styles.adminSchoolsContactNameTex}
                      autoCapitalize="none"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.frame19}>
                <View style={styles.frame20}>
                  <View style={styles.frame21}>
                    <View style={styles.frame22}>
                      <View style={styles.frame23}>
                        <Pressable style={styles.adminSchoolsCreateButton}>
                          <Text style={styles.create}>Create</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                  <View style={styles.frame10}>
                    <Pressable style={styles.adminSchoolsUpdateButton}>
                      <Text style={styles.create}>Update</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={styles.frame25}>
                <View style={styles.frame26}>
                  <Pressable
                    style={styles.adminSchoolsSchoolTeamsBut}
                    onPress={() => navigation.navigate("AdminTeams")}
                  >
                    <Text style={styles.create}>School Teams</Text>
                  </Pressable>
                  <Pressable style={styles.adminSchoolsClearFieldsBut}>
                    <Text style={styles.clearFields}>Clear Fields</Text>
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
  adminSchoolsPaidDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  adminSchoolsStateDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  image1Icon: {
    position: "relative",
    width: 33,
    height: 29,
  },
  competition: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  adminSchoolsCompetitionButt: {
    alignSelf: "stretch",
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  adminSchoolsFieldsButton: {
    alignSelf: "stretch",
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  adminMenu: {
    position: "absolute",
    top: -2,
    left: 1,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 217,
    height: 374,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
  },
  schools1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_45xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorBlack,
    textAlign: "center",
  },
  frame3: {
    alignSelf: "stretch",
    height: 60,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  schoolList: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_3xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorBlack,
    textAlign: "center",
  },
  frame6: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  cell: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  row: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorGray_300,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text3: {
    flex: 1,
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "left",
  },
  content3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  cell3: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  adminSchoolsTable: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  adminSchoolsTableFrame: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame5: {
    flex: 1,
    width: 598,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame4: {
    alignSelf: "stretch",
    height: 109,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  schoolDetails: {
    position: "relative",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 174,
    height: 16,
  },
  frame7: {
    alignSelf: "stretch",
    height: 32,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame2: {
    alignSelf: "stretch",
    height: 197,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  schoolName: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "right",
    display: "flex",
    alignItems: "center",
  },
  frame14: {
    alignSelf: "stretch",
    height: 125,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frame13: {
    width: 112,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingRight: Padding.p_10xs,
  },
  adminSchoolsNameTextField: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  adminSchoolsContactNameTex: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    marginTop: 10,
  },
  dropdownpicker: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  adminSchoolsPaidDropdown: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  frame16: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame15: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_8xs,
  },
  frame12: {
    alignSelf: "stretch",
    width: 231,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame17: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: Padding.p_10xs,
  },
  frame11: {
    alignSelf: "stretch",
    width: 399,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame18: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_8xs,
  },
  frame10: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame9: {
    alignSelf: "stretch",
    height: 117,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  create: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  adminSchoolsCreateButton: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 115,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_0,
  },
  frame23: {
    alignSelf: "stretch",
    height: 27,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame22: {
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame21: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Padding.p_12xs,
  },
  adminSchoolsUpdateButton: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 105,
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
    marginLeft: 0,
  },
  frame20: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame19: {
    alignSelf: "stretch",
    height: 26,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  adminSchoolsSchoolTeamsBut: {
    flex: 1,
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_0,
  },
  clearFields: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  adminSchoolsClearFieldsBut: {
    flex: 1,
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_0,
    marginLeft: 225,
  },
  frame26: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_11xs,
  },
  frame25: {
    alignSelf: "stretch",
    height: 35,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 1,
  },
  frame8: {
    alignSelf: "stretch",
    height: 182,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame: {
    position: "absolute",
    top: -2,
    left: 225,
    width: 598,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  adminSchoolsFrame: {
    flex: 1,
    position: "relative",
    height: 373,
  },
  adminSchools: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: Padding.p_7xs,
    backgroundColor: Color.backGround,
  },
});

export default AdminSchools;
