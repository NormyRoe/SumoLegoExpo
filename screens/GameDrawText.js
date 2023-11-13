import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GameDrawText = () => {
  return <Text style={styles.gameDraw}>Game Draw</Text>;
};

const styles = StyleSheet.create({
  gameDraw: {
    fontSize: FontSize.size_45xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorBlack,
    textAlign: "center",
    width: 327,
    height: 43,
  },
});

export default GameDrawText;
