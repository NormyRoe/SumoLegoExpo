import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const School = () => {
  return (
    <View style={styles.school}>
      <View style={styles.dropdownMenu}>
        <View style={[styles.header, styles.op1FlexBox]}>
          <Text style={[styles.menuItemLabel, styles.divisionTypo]} />
          <Image
            style={styles.chevronDownIcon}
            contentFit="cover"
            source={require("../assets/chevrondown2.png")}
          />
        </View>
        <View style={styles.options}>
          <View style={[styles.op1, styles.op1FlexBox]}>
            <Text style={[styles.menuItemLabel1, styles.menuItemClr]}>
              Featured
            </Text>
          </View>
          <View style={[styles.op1, styles.op1FlexBox]}>
            <Text style={[styles.menuItemLabel1, styles.menuItemClr]}>New</Text>
          </View>
          <View style={[styles.op1, styles.op1FlexBox]}>
            <Text style={[styles.menuItemLabel1, styles.menuItemClr]}>
              Rating
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.division, styles.divisionTypo]}>School:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  op1FlexBox: {
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
  },
  divisionTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  menuItemClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  menuItemLabel: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    flex: 1,
    textAlign: "center",
  },
  chevronDownIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    overflow: "hidden",
  },
  header: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_3xs,
  },
  menuItemLabel1: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  op1: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
  },
  options: {
    display: "none",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  dropdownMenu: {
    width: "353.33%",
    top: "42.58%",
    right: "-353.33%",
    bottom: "45.7%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    left: "100%",
    height: "11.72%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  division: {
    width: "312%",
    top: "5.98%",
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    textAlign: "center",
    left: "100%",
    height: "11.72%",
    position: "absolute",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  school: {
    width: "100%",
    height: 256,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    flex: 1,
  },
});

export default School;
