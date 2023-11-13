import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Row46 = () => {
  return (
    <View style={styles.row}>
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={styles.content}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell1, styles.cellBorder]}>
        <View style={styles.content}>
          <Text style={styles.text} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cellBorder: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.colorGray_300,
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
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  cell: {
    flex: 1,
  },
  cell1: {
    width: 76,
  },
  row: {
    width: 755,
    height: 36,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_300,
  },
});

export default Row46;
