import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, FlatList } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import DisplayGameDrawTable from "../components/DisplayGameDrawTable";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DisplayGameDraw = () => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownMenuValue, setDropdownMenuValue] = useState();
  const [dropdownMenu1Open, setDropdownMenu1Open] = useState(false);
  const [dropdownMenu1Value, setDropdownMenu1Value] = useState();
  const [dropdownMenu2Open, setDropdownMenu2Open] = useState(false);
  const [dropdownMenu2Value, setDropdownMenu2Value] = useState();
  const [
    displayGameDrawTableFrameFlatListData,
    setDisplayGameDrawTableFrameFlatListData,
  ] = useState([<DisplayGameDrawTable />]);

  return (
    <LinearGradient
      style={styles.displayGameDraw}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.displayGameDrawFrame}>
        <View style={styles.displayGameDrawTitleWrapper}>
          <Text style={styles.displayGameDrawTitle}>Game Draw</Text>
        </View>
        <View
          style={[styles.displayGameDrawTableDropdo, styles.displayFlexBox]}
        >
          <View
            style={[styles.displayGameDrawDropdownBut, styles.displayFlexBox]}
          >
            <View style={[styles.frame, styles.frameSpaceBlock]}>
              <View style={[styles.dropdownMenu, styles.dropdownLayout]}>
                <DropDownPicker
                  style={[styles.dropdownpicker, styles.dropdownpickerBorder]}
                  open={dropdownMenuOpen}
                  setOpen={setDropdownMenuOpen}
                  value={dropdownMenuValue}
                  setValue={setDropdownMenuValue}
                  placeholder="Division"
                  items={[]}
                  labelStyle={styles.dropdownMenuValue}
                  dropDownContainerStyle={styles.dropdownMenudropDownContainer}
                />
              </View>
              <View
                style={[styles.dropdownMenu1, styles.dropdownMenu1SpaceBlock]}
              >
                <DropDownPicker
                  style={[styles.dropdownpicker, styles.dropdownpickerBorder]}
                  open={dropdownMenu1Open}
                  setOpen={setDropdownMenu1Open}
                  value={dropdownMenu1Value}
                  setValue={setDropdownMenu1Value}
                  placeholder="Field"
                  items={[]}
                  labelStyle={styles.dropdownMenu1Value}
                  dropDownContainerStyle={styles.dropdownMenu1dropDownContainer}
                />
              </View>
            </View>
            <View style={[styles.frame1, styles.frameSpaceBlock]}>
              <View style={[styles.dropdownMenu2, styles.dropdownLayout]}>
                <DropDownPicker
                  style={[styles.dropdownpicker, styles.dropdownpickerBorder]}
                  open={dropdownMenu2Open}
                  setOpen={setDropdownMenu2Open}
                  value={dropdownMenu2Value}
                  setValue={setDropdownMenu2Value}
                  placeholder="Round"
                  items={[]}
                  labelStyle={styles.dropdownMenu2Value}
                  dropDownContainerStyle={styles.dropdownMenu2dropDownContainer}
                />
              </View>
              <View
                style={[
                  styles.displayGameDrawLeaderboards,
                  styles.dropdownMenu1SpaceBlock,
                ]}
              >
                <Text style={styles.leaderboards}>Leaderboards</Text>
              </View>
            </View>
          </View>
          <FlatList
            style={styles.displayGameDrawTableFrame}
            data={displayGameDrawTableFrameFlatListData}
            renderItem={({ item }) => item}
            contentContainerStyle={
              styles.displayGameDrawTableFrameFlatListContent
            }
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  dropdownMenuValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  dropdownMenudropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  dropdownMenu1Value: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  dropdownMenu1dropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  dropdownMenu2Value: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  dropdownMenu2dropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  displayGameDrawTableFrameFlatListContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  displayFlexBox: {
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_6xs,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownLayout: {
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  dropdownpickerBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  dropdownMenu1SpaceBlock: {
    marginLeft: 14,
    borderStyle: "solid",
    flex: 1,
  },
  displayGameDrawTitle: {
    fontSize: FontSize.size_22xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    textAlign: "left",
    display: "flex",
    height: 26,
    color: Color.colorBlack,
    alignItems: "center",
    flex: 1,
  },
  displayGameDrawTitleWrapper: {
    height: 41,
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  dropdownpicker: {
    borderStyle: "solid",
  },
  dropdownMenu: {
    borderStyle: "solid",
    alignSelf: "stretch",
    flex: 1,
  },
  dropdownMenu1: {
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame: {
    height: 29,
    flex: 1,
  },
  dropdownMenu2: {
    borderStyle: "solid",
    height: 29,
    flex: 1,
  },
  leaderboards: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  displayGameDrawLeaderboards: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  frame1: {
    width: 444,
  },
  displayGameDrawDropdownBut: {
    paddingBottom: Padding.p_12xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  displayGameDrawTableFrame: {
    marginTop: 9,
    alignSelf: "stretch",
    flex: 1,
  },
  displayGameDrawTableDropdo: {
    justifyContent: "center",
    flex: 1,
  },
  displayGameDrawFrame: {
    paddingTop: Padding.p_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  displayGameDraw: {
    width: "100%",
    height: 387,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
  },
});

export default DisplayGameDraw;
