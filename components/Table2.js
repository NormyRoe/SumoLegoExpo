import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, Border } from "../GlobalStyles";

const Table2 = ({ style }) => {
  return <View style={[styles.displayLeaderboardTableFram, style]} />;
};

const styles = StyleSheet.create({
  contentFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  cellBorder1: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    flex: 1,
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  cellBorder: {
    width: 76,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  displayLeaderboardTableFram: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Table2;
