import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Row41 = ({ style }) => {
  return (
    <View style={[styles.row, style, styles.rowFlexBox]}>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text} />
        </View>
      </View>
      <View style={styles.cell}>
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
    flex: 1,
    backgroundColor: Color.colorGray_300,
    alignSelf: "stretch",
  },
  row: {
    height: 36,
    backgroundColor: Color.colorGray_300,
  },
});

export default Row41;
