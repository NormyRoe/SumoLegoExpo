import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Row28 = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Red Team</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>V</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Blue Team</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Division</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Field</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Round</Text>
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
  textTypo: {
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  text: {
    textAlign: "left",
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
    flex: 1,
    alignSelf: "stretch",
  },
  text1: {
    textAlign: "center",
  },
  row: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
  },
});

export default Row28;
