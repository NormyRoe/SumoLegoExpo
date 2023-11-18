import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Row111 = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={[styles.cell, styles.cellFlexBox]}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.cellFlexBox]}>Username</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  cellFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  cell: {
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  row: {
    backgroundColor: Color.colorGray_300,
  },
});

export default Row111;
