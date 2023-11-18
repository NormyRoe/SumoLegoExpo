import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View, Pressable } from "react-native";
import Row43 from "../components/Row43";
import Row42 from "../components/Row42";
import Row411 from "../components/Row411";
import Row44 from "../components/Row441";
import Row40 from "../components/Row40";
import Row39 from "../components/Row39";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const JudgeGameDraw = () => {
  const [judgeGameDrawTableFlatListData, setJudgeGameDrawTableFlatListData] =
    useState([
      <Row43 />,
      <Row42 />,
      <Row411 />,
      <Row44 />,
      <Row40 />,
      <Row39 />,
    ]);
  const [judgeGameDrawDivisionDropdOpen, setJudgeGameDrawDivisionDropdOpen] =
    useState(false);
  const [judgeGameDrawDivisionDropdValue, setJudgeGameDrawDivisionDropdValue] =
    useState();
  const [judgeGameDrawFieldDropdownOpen, setJudgeGameDrawFieldDropdownOpen] =
    useState(false);
  const [judgeGameDrawFieldDropdownValue, setJudgeGameDrawFieldDropdownValue] =
    useState();
  const [judgeGameDrawRoundDropdownOpen, setJudgeGameDrawRoundDropdownOpen] =
    useState(false);
  const [judgeGameDrawRoundDropdownValue, setJudgeGameDrawRoundDropdownValue] =
    useState();
  const [judgeGameDrawSchoolDropdowOpen, setJudgeGameDrawSchoolDropdowOpen] =
    useState(false);
  const [judgeGameDrawSchoolDropdowValue, setJudgeGameDrawSchoolDropdowValue] =
    useState();
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.judgeGameDraw}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.judgeGameDrawFrame}>
        <Text style={[styles.gameDraw, styles.gameFlexBox]}>Game Draw</Text>
        <View style={[styles.judgeGameDrawTableFrame, styles.judgeFlexBox]}>
          <FlatList
            style={styles.judgeGameDrawTable}
            data={judgeGameDrawTableFlatListData}
            renderItem={({ item }) => item}
            contentContainerStyle={styles.judgeGameDrawTableFlatListContent}
          />
        </View>
        <View style={[styles.judgeGameDrawDropdownsFram, styles.judgeFlexBox]}>
          <View style={styles.judgeGameDrawDivisionDropd}>
            <DropDownPicker
              style={styles.dropdownpicker}
              open={judgeGameDrawDivisionDropdOpen}
              setOpen={setJudgeGameDrawDivisionDropdOpen}
              value={judgeGameDrawDivisionDropdValue}
              setValue={setJudgeGameDrawDivisionDropdValue}
              placeholder="Division"
              items={[]}
              labelStyle={styles.judgeGameDrawDivisionDropdValue}
              dropDownContainerStyle={
                styles.judgeGameDrawDivisionDropddropDownContainer
              }
            />
          </View>
          <View style={[styles.judgeGameDrawFieldDropdown, styles.judgeLayout]}>
            <DropDownPicker
              style={styles.dropdownpicker}
              open={judgeGameDrawFieldDropdownOpen}
              setOpen={setJudgeGameDrawFieldDropdownOpen}
              value={judgeGameDrawFieldDropdownValue}
              setValue={setJudgeGameDrawFieldDropdownValue}
              placeholder="Field"
              items={[]}
              labelStyle={styles.judgeGameDrawFieldDropdownValue}
              dropDownContainerStyle={
                styles.judgeGameDrawFieldDropdowndropDownContainer
              }
            />
          </View>
          <View style={styles.judgeLayout}>
            <DropDownPicker
              style={styles.dropdownpicker2}
              open={judgeGameDrawRoundDropdownOpen}
              setOpen={setJudgeGameDrawRoundDropdownOpen}
              value={judgeGameDrawRoundDropdownValue}
              setValue={setJudgeGameDrawRoundDropdownValue}
              placeholder="Round"
              items={[]}
              labelStyle={styles.judgeGameDrawRoundDropdownValue}
              dropDownContainerStyle={
                styles.judgeGameDrawRoundDropdowndropDownContainer
              }
            />
          </View>
          <View style={styles.judgeLayout}>
            <DropDownPicker
              style={styles.dropdownpicker2}
              open={judgeGameDrawSchoolDropdowOpen}
              setOpen={setJudgeGameDrawSchoolDropdowOpen}
              value={judgeGameDrawSchoolDropdowValue}
              setValue={setJudgeGameDrawSchoolDropdowValue}
              placeholder="School"
              items={[]}
              labelStyle={styles.judgeGameDrawSchoolDropdowValue}
              dropDownContainerStyle={
                styles.judgeGameDrawSchoolDropdowdropDownContainer
              }
            />
          </View>
        </View>
        <View style={styles.judgeGameDrawButtonsFrame}>
          <Pressable
            style={[styles.judgeGameDrawGameScoringB, styles.judgeBorder]}
            onPress={() => navigation.navigate("JudgeGameScoring")}
          >
            <Text
              style={[styles.judgeGameDrawGameScoringB1, styles.gameFlexBox]}
            >
              Game Scoring
            </Text>
          </Pressable>
          <Pressable
            style={[styles.judgeGameDrawLogoutButton, styles.judgeBorder]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={[styles.judgeGameDrawGameScoringB1, styles.gameFlexBox]}
            >
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  judgeGameDrawTableFlatListContent: {
    flexDirection: "column",
  },
  judgeGameDrawDivisionDropdValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawDivisionDropddropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameDrawFieldDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawFieldDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameDrawRoundDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawRoundDropdowndropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameDrawSchoolDropdowValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawSchoolDropdowdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  gameFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  judgeFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  judgeLayout: {
    marginLeft: 39,
    height: 34,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    flex: 1,
  },
  judgeBorder: {
    justifyContent: "center",
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  gameDraw: {
    top: 8,
    left: 254,
    fontSize: FontSize.size_45xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    width: 327,
    height: 43,
    position: "absolute",
  },
  judgeGameDrawTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    width: 831,
    maxWidth: 831,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  judgeGameDrawTableFrame: {
    top: 105,
    left: 1,
    height: 216,
  },
  dropdownpicker: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  judgeGameDrawDivisionDropd: {
    height: 34,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    borderStyle: "solid",
    flex: 1,
  },
  judgeGameDrawFieldDropdown: {
    overflow: "hidden",
  },
  dropdownpicker2: {
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  judgeGameDrawDropdownsFram: {
    top: 61,
    left: 36,
    width: 761,
    overflow: "hidden",
    flexDirection: "row",
  },
  judgeGameDrawGameScoringB1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
  },
  judgeGameDrawGameScoringB: {
    width: 169,
  },
  judgeGameDrawLogoutButton: {
    width: 135,
  },
  judgeGameDrawButtonsFrame: {
    top: 331,
    left: 0,
    width: 827,
    justifyContent: "space-between",
    paddingHorizontal: 11,
    paddingVertical: 5,
    overflow: "hidden",
    position: "absolute",
    flexDirection: "row",
  },
  judgeGameDrawFrame: {
    height: 372,
    flex: 1,
  },
  judgeGameDraw: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default JudgeGameDraw;
