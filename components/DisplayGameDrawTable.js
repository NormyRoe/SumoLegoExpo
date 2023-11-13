import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const DisplayGameDrawTable = ({ style }) => {
  return (
    <View style={[styles.displayGameDrawTable, style]}>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>Red Team</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={styles.text1}>V</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>Blue Team</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>Division</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>Field</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>Round</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
        </View>
        <View style={[styles.cell6, styles.cellBorder]}>
          <View style={[styles.content, styles.rowFlexBox]}>
            <Text style={[styles.text6, styles.textFlexBox]} />
          </View>
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
    flex: 1,
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  text: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  content: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  cell: {
    backgroundColor: Color.colorGray_200,
  },
  text1: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    flex: 1,
  },
  row: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    flexDirection: "row",
  },
  text6: {
    fontFamily: FontFamily.interRegular,
  },
  cell6: {
    backgroundColor: Color.colorGray_300,
  },
  displayGameDrawTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    alignSelf: "stretch",
    flex: 1,
  },
});

export default DisplayGameDrawTable;
