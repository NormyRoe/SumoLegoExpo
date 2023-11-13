import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { CheckBox } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Padding, Color, FontSize } from "../GlobalStyles";

const JudgeGameScoring = () => {
  const [judgeGameScoringDivisionDrOpen, setJudgeGameScoringDivisionDrOpen] =
    useState(false);
  const [judgeGameScoringDivisionDrValue, setJudgeGameScoringDivisionDrValue] =
    useState();
  const [judgeGameScoringRoundDropdOpen, setJudgeGameScoringRoundDropdOpen] =
    useState(false);
  const [judgeGameScoringRoundDropdValue, setJudgeGameScoringRoundDropdValue] =
    useState();
  const [judgeGameScoringFieldDropdOpen, setJudgeGameScoringFieldDropdOpen] =
    useState(false);
  const [judgeGameScoringFieldDropdValue, setJudgeGameScoringFieldDropdValue] =
    useState();
  const [
    judgeGameScoringRedCheckbochecked,
    setJudgeGameScoringRedCheckbochecked,
  ] = useState(false);
  const [
    judgeGameScoringRedCheckbo1checked,
    setJudgeGameScoringRedCheckbo1checked,
  ] = useState(false);
  const [
    judgeGameScoringBlueCheckbchecked,
    setJudgeGameScoringBlueCheckbchecked,
  ] = useState(false);
  const [
    judgeGameScoringBlueCheckb1checked,
    setJudgeGameScoringBlueCheckb1checked,
  ] = useState(false);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.judgeGameScoring}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.judgeGameScoringFrame}>
        <View style={styles.judgeGameScoringTitleDropd}>
          <Text style={[styles.judgeGameScoringTitle, styles.judgeTypo]}>
            Game Scoring
          </Text>
          <View style={styles.judgeGameScoringDropdownFr}>
            <View style={styles.judgeLayout}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={judgeGameScoringDivisionDrOpen}
                setOpen={setJudgeGameScoringDivisionDrOpen}
                value={judgeGameScoringDivisionDrValue}
                setValue={setJudgeGameScoringDivisionDrValue}
                placeholder="Division"
                items={[]}
                labelStyle={styles.judgeGameScoringDivisionDrValue}
                dropDownContainerStyle={
                  styles.judgeGameScoringDivisionDrdropDownContainer
                }
              />
            </View>
            <View
              style={[styles.judgeGameScoringRoundDropd, styles.judgeLayout]}
            >
              <DropDownPicker
                style={styles.dropdownpicker}
                open={judgeGameScoringRoundDropdOpen}
                setOpen={setJudgeGameScoringRoundDropdOpen}
                value={judgeGameScoringRoundDropdValue}
                setValue={setJudgeGameScoringRoundDropdValue}
                placeholder="Round"
                items={[]}
                labelStyle={styles.judgeGameScoringRoundDropdValue}
                dropDownContainerStyle={
                  styles.judgeGameScoringRoundDropddropDownContainer
                }
              />
            </View>
            <View
              style={[styles.judgeGameScoringRoundDropd, styles.judgeLayout]}
            >
              <DropDownPicker
                style={styles.dropdownpicker}
                open={judgeGameScoringFieldDropdOpen}
                setOpen={setJudgeGameScoringFieldDropdOpen}
                value={judgeGameScoringFieldDropdValue}
                setValue={setJudgeGameScoringFieldDropdValue}
                placeholder="Field"
                items={[]}
                labelStyle={styles.judgeGameScoringFieldDropdValue}
                dropDownContainerStyle={
                  styles.judgeGameScoringFieldDropddropDownContainer
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.judgeGameScoringBodyFrame}>
          <View style={styles.judgeGameScoringCardsFrame}>
            <View
              style={[
                styles.judgeGameScoringRedFrame,
                styles.judgeFrameSpaceBlock,
              ]}
            >
              <View style={styles.frame}>
                <Text style={[styles.judgeGameScoringRedTitle, styles.vTypo]}>
                  Red
                </Text>
                <Text
                  style={[styles.judgeGameScoringRedTeamNa, styles.teamTypo]}
                >
                  Team Name Label
                </Text>
                <CheckBox
                  style={styles.judgeGameScoringRedCheckbo}
                  checked={judgeGameScoringRedCheckbochecked}
                  onPress={() =>
                    setJudgeGameScoringRedCheckbochecked(
                      !judgeGameScoringRedCheckbochecked
                    )
                  }
                  checkedColor="#d9d9d9"
                  containerStyle={styles.judgeGameScoringRedCheckboLayout}
                />
                <CheckBox
                  style={styles.judgeGameScoringRedCheckbo}
                  checked={judgeGameScoringRedCheckbo1checked}
                  onPress={() =>
                    setJudgeGameScoringRedCheckbo1checked(
                      !judgeGameScoringRedCheckbo1checked
                    )
                  }
                  checkedColor="#d9d9d9"
                  containerStyle={styles.judgeGameScoringRedCheckbo1Layout}
                />
              </View>
              <Text
                style={[styles.judgeGameScoringRedTeamSc, styles.judgeTypo]}
              >
                Team Current Score label
              </Text>
            </View>
            <View style={styles.judgeGameScoringVFrame}>
              <View
                style={[styles.judgeGameScoringWinnerFram, styles.judgeFlexBox]}
              >
                <Text style={[styles.whichTeamHas, styles.teamTypo]}>
                  Which team has won label
                </Text>
              </View>
              <View style={[styles.judgeGameScoringV, styles.judgeFlexBox]}>
                <Text style={[styles.v, styles.vTypo]}>V</Text>
              </View>
            </View>
            <View
              style={[
                styles.judgeGameScoringBlueFrame,
                styles.judgeFrameSpaceBlock,
              ]}
            >
              <View style={styles.frame}>
                <Text style={[styles.judgeGameScoringRedTitle, styles.vTypo]}>
                  Blue
                </Text>
                <Text
                  style={[styles.judgeGameScoringRedTeamNa, styles.teamTypo]}
                >
                  Team Name Label
                </Text>
                <CheckBox
                  style={styles.judgeGameScoringRedCheckbo}
                  checked={judgeGameScoringBlueCheckbchecked}
                  onPress={() =>
                    setJudgeGameScoringBlueCheckbchecked(
                      !judgeGameScoringBlueCheckbchecked
                    )
                  }
                  checkedColor="#d9d9d9"
                  containerStyle={styles.judgeGameScoringBlueCheckbLayout}
                />
                <CheckBox
                  style={styles.judgeGameScoringRedCheckbo}
                  checked={judgeGameScoringBlueCheckb1checked}
                  onPress={() =>
                    setJudgeGameScoringBlueCheckb1checked(
                      !judgeGameScoringBlueCheckb1checked
                    )
                  }
                  checkedColor="#d9d9d9"
                  containerStyle={styles.judgeGameScoringBlueCheckb1Layout}
                />
              </View>
              <Text
                style={[styles.judgeGameScoringRedTeamSc, styles.judgeTypo]}
              >
                Team Current Score label
              </Text>
            </View>
          </View>
          <View style={styles.frame2}>
            <View style={styles.frame3}>
              <View style={styles.frame4}>
                <View style={styles.frame5}>
                  <Pressable
                    style={[
                      styles.judgeGameScoringSubmitButt,
                      styles.judgeBorder1,
                    ]}
                  >
                    <Text style={styles.submit}>Submit</Text>
                  </Pressable>
                </View>
                <Pressable
                  style={[styles.judgeGameScoringGameDraw, styles.gameFlexBox]}
                  onPress={() => navigation.navigate("JudgeGameDraw")}
                >
                  <Text style={styles.submit}>Game Draw</Text>
                </Pressable>
              </View>
              <View style={styles.frame6}>
                <View style={styles.frame7}>
                  <View style={styles.judgeGameScoringTitleDropd}>
                    <Text style={[styles.whichTeamHas, styles.teamTypo]}>
                      The Next game:
                    </Text>
                    <Text
                      style={[
                        styles.judgeGameScoringNextGameR,
                        styles.teamTypo,
                      ]}
                    >
                      Team red name label
                    </Text>
                  </View>
                  <Text style={[styles.v1, styles.gameTypo]}>V</Text>
                  <Text
                    style={[styles.judgeGameScoringNextGameB, styles.gameTypo]}
                  >
                    Team blue name label
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.frame9}>
              <Pressable
                style={[styles.judgeGameScoringQueueNext, styles.judgeBorder]}
              >
                <Text style={styles.submit}>Queue Next</Text>
              </Pressable>
              <View style={[styles.frame10, styles.gameFlexBox]}>
                <Pressable
                  style={[
                    styles.judgeGameScoringLogoutButt,
                    styles.judgeBorder,
                  ]}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.submit}>Logout</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  judgeGameScoringDivisionDrValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameScoringDivisionDrdropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameScoringRoundDropdValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameScoringRoundDropddropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameScoringFieldDropdValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameScoringFieldDropddropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameScoringRedCheckboLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 41,
    top: 53,
    position: "absolute",
  },
  judgeGameScoringRedCheckbo1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 120,
    top: 53,
    position: "absolute",
  },
  judgeGameScoringBlueCheckbLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 41,
    top: 53,
    position: "absolute",
  },
  judgeGameScoringBlueCheckb1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 120,
    top: 53,
    position: "absolute",
  },
  judgeTypo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    textAlign: "center",
  },
  judgeLayout: {
    height: 34,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flex: 1,
  },
  judgeFrameSpaceBlock: {
    paddingBottom: 7,
    paddingRight: Padding.p_60xl,
    paddingTop: 7,
    paddingLeft: Padding.p_36xl,
    width: 367,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
  },
  vTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  teamTypo: {
    fontSize: FontSize.size_lgi,
    textAlign: "center",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  judgeFlexBox: {
    height: 146,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  judgeBorder1: {
    backgroundColor: Color.white,
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  gameFlexBox: {
    marginTop: 11,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  gameTypo: {
    marginTop: 8,
    fontSize: FontSize.size_lgi,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  judgeBorder: {
    paddingVertical: Padding.p_9xs,
    width: 164,
    backgroundColor: Color.white,
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  judgeGameScoringTitle: {
    fontSize: FontSize.size_45xl,
    display: "flex",
    width: 430,
    height: 46,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
  },
  dropdownpicker: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  judgeGameScoringRoundDropd: {
    marginLeft: 63,
  },
  judgeGameScoringDropdownFr: {
    marginTop: 5,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  judgeGameScoringTitleDropd: {
    overflow: "hidden",
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  judgeGameScoringRedTitle: {
    top: 0,
    left: 16,
    width: 165,
    height: 31,
    color: Color.white,
    position: "absolute",
  },
  judgeGameScoringRedTeamNa: {
    top: 30,
    left: 0,
    width: 197,
    height: 38,
    color: Color.white,
    position: "absolute",
  },
  judgeGameScoringRedCheckbo: {
    backgroundColor: Color.colorGainsboro_200,
  },
  frame: {
    height: 83,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  judgeGameScoringRedTeamSc: {
    fontSize: FontSize.size_xl,
    marginTop: 4,
    color: Color.white,
    textAlign: "center",
    alignSelf: "stretch",
  },
  judgeGameScoringRedFrame: {
    backgroundColor: "#e82323",
  },
  whichTeamHas: {
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  judgeGameScoringWinnerFram: {
    justifyContent: "flex-end",
  },
  v: {
    width: 45,
    height: 42,
    color: Color.colorBlack,
  },
  judgeGameScoringV: {
    marginTop: -169,
    justifyContent: "center",
  },
  judgeGameScoringVFrame: {
    width: 237,
    height: 156,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  judgeGameScoringBlueFrame: {
    backgroundColor: "#093fce",
  },
  judgeGameScoringCardsFrame: {
    height: 169,
    justifyContent: "space-between",
    overflow: "hidden",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  submit: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  judgeGameScoringSubmitButt: {
    width: 145,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    alignItems: "flex-end",
  },
  frame5: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  judgeGameScoringGameDraw: {
    width: 163,
    paddingHorizontal: 13,
    paddingVertical: Padding.p_0,
    backgroundColor: Color.white,
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frame4: {
    overflow: "hidden",
    flex: 1,
  },
  judgeGameScoringNextGameR: {
    marginTop: -1,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  v1: {
    width: 116,
    height: 23,
  },
  judgeGameScoringNextGameB: {
    alignSelf: "stretch",
  },
  frame7: {
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame6: {
    marginLeft: 33,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
  frame3: {
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  judgeGameScoringQueueNext: {
    paddingHorizontal: 14,
  },
  judgeGameScoringLogoutButt: {
    paddingHorizontal: Padding.p_0,
    alignItems: "center",
  },
  frame10: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame9: {
    width: 228,
    marginLeft: 39,
    overflow: "hidden",
  },
  frame2: {
    marginTop: 12,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  judgeGameScoringBodyFrame: {
    marginTop: 6,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  judgeGameScoringFrame: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  judgeGameScoring: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default JudgeGameScoring;
