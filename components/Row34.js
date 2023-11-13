import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Row34 = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Red Team</Text>
        </View>
      </View>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>V</Text>
        </View>
      </View>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Blue Team</Text>
        </View>
      </View>
      <View style={[styles.cell3, styles.cellBorder]}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Division</Text>
        </View>
      </View>
      <View style={styles.cellBorder}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Field</Text>
        </View>
      </View>
      <View style={styles.cellBorder}>
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
    textAlign: "left",
  },
  content: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  text1: {
    textAlign: "center",
  },
  cell3: {
    display: "none",
  },
  row: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default Row34;
