import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Row = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell2, styles.cellBorder]}>
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
  cellBorder: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    flex: 1,
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
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  cell2: {
    display: "none",
  },
  row: {
    backgroundColor: Color.colorGray_300,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Row;
