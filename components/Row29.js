import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Row29 = ({ style }) => {
  return (
    <View style={[styles.row, style]}>
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell3, styles.cell3FlexBox]}>
        <View style={[styles.content3, styles.cell3FlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={[styles.cell, styles.cellBorder]}>
        <View style={[styles.content, styles.contentSpaceBlock]}>
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
    backgroundColor: Color.colorGray_300,
    flex: 1,
  },
  contentSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  cell3FlexBox: {
    display: "none",
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
    alignSelf: "stretch",
  },
  cell: {
    alignSelf: "stretch",
  },
  content3: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  cell3: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_300,
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Row29;
