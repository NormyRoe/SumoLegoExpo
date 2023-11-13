import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const DropdownMenu = () => {
  return (
    <View style={styles.dropdownMenu}>
      <View style={[styles.stateclosed, styles.stateclosedLayout]}>
        <View style={[styles.header, styles.headerSpaceBlock]}>
          <Text style={[styles.menuItemLabel, styles.menuItemTypo]}>
            Competitions
          </Text>
          <Image
            style={styles.chevronDownIcon}
            contentFit="cover"
            source={require("../assets/chevrondown2.png")}
          />
        </View>
        <View style={[styles.options, styles.optionsBg]}>
          <View style={styles.op1}>
            <Text style={[styles.menuItemLabel1, styles.menuItemTypo]}>
              Featured
            </Text>
          </View>
          <View style={styles.op1}>
            <Text style={[styles.menuItemLabel1, styles.menuItemTypo]}>
              New
            </Text>
          </View>
          <View style={styles.op1}>
            <Text style={[styles.menuItemLabel1, styles.menuItemTypo]}>
              Rating
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.stateopened, styles.stateclosedLayout]}>
        <View style={[styles.header1, styles.headerSpaceBlock]}>
          <Text style={[styles.menuItemLabel1, styles.menuItemTypo]}>
            Competitions
          </Text>
          <Image
            style={styles.chevronDownIcon}
            contentFit="cover"
            source={require("../assets/chevronup.png")}
          />
        </View>
        <View style={styles.optionsBg}>
          <View style={styles.op1}>
            <Text style={[styles.menuItemLabel1, styles.menuItemTypo]}>
              Competition 1
            </Text>
          </View>
          <View style={styles.op1}>
            <Text style={[styles.menuItemLabel1, styles.menuItemTypo]}>
              Competition 2
            </Text>
          </View>
          <View style={styles.op1}>
            <Text style={[styles.menuItemLabel1, styles.menuItemTypo]}>
              Competition 3
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateclosedLayout: {
    width: 181,
    position: "absolute",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  headerSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    borderStyle: "solid",
    flex: 1,
  },
  menuItemTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  optionsBg: {
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  menuItemLabel: {
    textAlign: "center",
  },
  chevronDownIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    overflow: "hidden",
  },
  header: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_base,
  },
  menuItemLabel1: {
    textAlign: "left",
  },
  op1: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  options: {
    display: "none",
  },
  stateclosed: {
    top: 20,
    left: 22,
    height: 44,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    width: 181,
    position: "absolute",
  },
  header1: {
    borderColor: Color.colorWhitesmoke,
    borderBottomWidth: 1,
  },
  stateopened: {
    top: 22,
    left: 453,
    height: 176,
    width: 181,
    position: "absolute",
  },
  dropdownMenu: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    width: "100%",
    height: 220,
    overflow: "hidden",
    flex: 1,
    borderWidth: 1,
  },
});

export default DropdownMenu;
