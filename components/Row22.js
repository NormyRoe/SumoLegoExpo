import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Row22 = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={[styles.cell, styles.rowBg]}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell, styles.rowBg]}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell, styles.rowBg]}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  rowBg: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
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
  },
  cell: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    alignSelf: "stretch",
    backgroundColor: Color.colorGray_300,
  },
  row: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
  },
});

export default Row22;
