import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Row7 = ({ style }) => {
  return (
    <View
      style={[styles.displayLeaderboardTableHead, style, styles.contentFlexBox]}
    >
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <Text style={styles.text}>Team Name</Text>
        </View>
      </View>
      <View style={[styles.cell1, styles.cellBorder]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <Text style={styles.text}>Points</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  cellBorder: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    textAlign: "left",
    flex: 1,
  },
  content: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  cell: {
    flex: 1,
  },
  cell1: {
    width: 76,
  },
  displayLeaderboardTableHead: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
  },
});

export default Row7;
