import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Table = ({ style }) => {
  return (
    <View style={[styles.table, style]}>
      <View style={[styles.row, styles.rowLayout]}>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text, styles.textFlexBox]}>Team Name</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text, styles.textFlexBox]}>Points</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row1, styles.rowLayout]}>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row2, styles.rowLayout]}>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row3, styles.rowLayout]}>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row4, styles.rowLayout]}>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row5, styles.rowLayout]}>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row6, styles.rowLayout]}>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell2, styles.cellBorder]}>
          <View style={styles.content}>
            <Text style={[styles.text2, styles.textFlexBox]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowLayout: {
    flexDirection: "row",
    overflow: "hidden",
    height: 41,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_300,
    width: 788,
  },
  cellBorder: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    flex: 1,
    alignSelf: "stretch",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  cell: {
    backgroundColor: Color.colorGray_200,
    justifyContent: "center",
  },
  row: {
    top: 0,
  },
  text2: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  cell2: {
    justifyContent: "center",
    backgroundColor: Color.colorGray_300,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
  },
  row1: {
    top: 41,
  },
  row2: {
    top: 82,
  },
  row3: {
    top: 123,
  },
  row4: {
    top: 164,
  },
  row5: {
    top: 205,
  },
  row6: {
    top: 246,
  },
  table: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorDarkslategray,
    height: 287,
    width: 788,
  },
});

export default Table;
