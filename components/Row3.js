import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Row3 = ({ style }) => {
  return (
    <View
      style={[styles.displayLeaderboardTableRow, style, styles.contentFlexBox]}
    >
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell1, styles.cellBorder]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <Text style={styles.text} />
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
    backgroundColor: Color.colorGray_300,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "left",
    flex: 1,
  },
  content: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  cell: {
    flex: 1,
  },
  cell1: {
    width: 76,
  },
  displayLeaderboardTableRow: {
    height: 36,
    backgroundColor: Color.colorGray_300,
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default Row3;
