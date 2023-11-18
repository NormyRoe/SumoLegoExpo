import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const Row3 = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <Text style={[styles.text, styles.textTypo]}>Name</Text>
        </View>
      </View>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <Text style={[styles.text, styles.textTypo]}>Points</Text>
        </View>
      </View>
      <View style={[styles.cell2, styles.cellBorder]}>
        <View style={styles.contentSpaceBlock}>
          <Text style={styles.textTypo}>Division</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  contentSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  cellBorder: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    flex: 1,
    alignSelf: "stretch",
  },
  text: {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  content: {
    flex: 1,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
  },
  cell2: {
    display: "none",
  },
  row: {
    backgroundColor: Color.colorGray_300,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Row3;
