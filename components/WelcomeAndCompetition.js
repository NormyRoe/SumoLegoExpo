import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const WelcomeAndCompetition = () => {
  return (
    <View style={styles.welcomeAndCompetition}>
      <Text style={[styles.competition, styles.welcomeTypo]}>Competition:</Text>
      <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeTypo: {
    width: 72,
    textAlign: "right",
    color: Color.colorBlack,
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    fontSize: FontSize.size_xs,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  competition: {
    height: 31,
  },
  welcome: {
    height: 28,
  },
  welcomeAndCompetition: {
    width: 54,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
});

export default WelcomeAndCompetition;
