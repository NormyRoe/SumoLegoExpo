import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Row23 = () => {
  return (
    <View style={[styles.row, styles.rowFlexBox]}>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text}>Name</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text}>School</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={[styles.content, styles.rowFlexBox]}>
          <Text style={styles.text}>Division</Text>
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
    flex: 1,
    alignSelf: "stretch",
  },
  row: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
  },
});

export default Row23;
