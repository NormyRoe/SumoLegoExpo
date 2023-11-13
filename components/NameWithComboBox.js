import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const NameWithComboBox = () => {
  return (
    <View style={styles.nameWithComboBox}>
      <View style={styles.dropdownMenu}>
        <View style={[styles.header, styles.op1FlexBox]}>
          <Text style={[styles.menuItemLabel, styles.divisionTypo]} />
          <Image
            style={styles.chevronDownIcon}
            contentFit="cover"
            source={require("../assets/chevrondown.png")}
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
      <Text style={[styles.division, styles.divisionTypo]}>Division:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  op1FlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  divisionTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  menuItemClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  menuItemLabel: {
    display: "flex",
    width: 121,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  chevronDownIcon: {
    width: 24,
    height: 24,
  },
  header: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  menuItemLabel1: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  op1: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  options: {
    display: "none",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  dropdownMenu: {
    height: "134.38%",
    width: "8.87%",
    top: "37.89%",
    right: "-1.11%",
    bottom: "-72.27%",
    left: "92.24%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    backgroundColor: Color.white,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  division: {
    height: "12.89%",
    width: "20.84%",
    top: "50.78%",
    left: "91.13%",
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  nameWithComboBox: {
    width: 451,
    height: 256,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

export default NameWithComboBox;
