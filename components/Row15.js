import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Row15 = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text}>Name</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text}>Date</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text}>Games per Team</Text>
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
  text: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    textAlign: "left",
    flex: 1,
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
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  row: {
    backgroundColor: Color.colorGray_300,
  },
});

export default Row15;
