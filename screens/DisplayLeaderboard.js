import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View, FlatList } from "react-native";
import Table from "../components/Table";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const DisplayLeaderboard = () => {
  const [displayLeaderboardTableFramData, setDisplayLeaderboardTableFramData] =
    useState([<Table />]);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.displayLeaderboard, styles.tab1FlexBox]}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View
        style={[styles.displayLeaderboardInsideFra, styles.frameParentFlexBox1]}
      >
        <Text style={styles.displayLeaderboardTitle} numberOfLines={1}>
          Leaderboard
        </Text>
        <View style={styles.displayLeaderboardInsideFraInner}>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View
              style={[
                styles.defaultTabLeftGroupWrapper,
                styles.defaultGroupFlexBox,
              ]}
            >
              <View style={[styles.defaultTabLeftGroup, styles.tabFlexBox]}>
                <Pressable
                  style={[styles.tab1, styles.tab1FlexBox]}
                  onPress={() => {}}
                >
                  <View style={[styles.activeTab, styles.tabFlexBox]}>
                    <View style={styles.resize}>
                      <View
                        style={[styles.textBorder, styles.textBorderBorder]}
                      >
                        <Text style={[styles.tabLabel, styles.tabTypo]}>
                          Tab 1
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.inactiveTab, styles.tabFlexBox]}>
                    <Text style={[styles.tabLabel1, styles.tabTypo]}>
                      Tab 1
                    </Text>
                  </View>
                  <View style={styles.spacer} />
                </Pressable>
                <Pressable
                  style={[styles.tab1, styles.tab1FlexBox]}
                  onPress={() => {}}
                >
                  <View style={[styles.activeTab, styles.tabFlexBox]}>
                    <View style={styles.resize}>
                      <View
                        style={[styles.textBorder, styles.textBorderBorder]}
                      >
                        <Text style={[styles.tabLabel, styles.tabTypo]}>
                          Tab 2
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.inactiveTab, styles.tabFlexBox]}>
                    <Text style={[styles.tabLabel1, styles.tabTypo]}>
                      Tab 2
                    </Text>
                  </View>
                  <View style={styles.spacer} />
                </Pressable>
                <Pressable
                  style={[styles.tab1, styles.tab1FlexBox]}
                  onPress={() => {}}
                >
                  <View style={[styles.activeTab, styles.tabFlexBox]}>
                    <View style={styles.resize}>
                      <View
                        style={[styles.textBorder, styles.textBorderBorder]}
                      >
                        <Text style={[styles.tabLabel, styles.tabTypo]}>
                          Tab 3
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.inactiveTab, styles.tabFlexBox]}>
                    <Text style={[styles.tabLabel1, styles.tabTypo]}>
                      Tab 3
                    </Text>
                  </View>
                  <View style={styles.spacer} />
                </Pressable>
                <Pressable
                  style={[styles.tab1, styles.tab1FlexBox]}
                  onPress={() => {}}
                >
                  <View style={[styles.activeTab, styles.tabFlexBox]}>
                    <View style={styles.resize}>
                      <View
                        style={[styles.textBorder, styles.textBorderBorder]}
                      >
                        <Text style={[styles.tabLabel, styles.tabTypo]}>
                          Tab 4
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.inactiveTab, styles.tabFlexBox]}>
                    <Text style={[styles.tabLabel1, styles.tabTypo]}>
                      Tab 4
                    </Text>
                  </View>
                  <View style={styles.spacer} />
                </Pressable>
              </View>
            </View>
            <View style={[styles.selectedWrapper, styles.frameParentFlexBox]}>
              <Text
                style={[styles.selected, styles.selectedTypo]}
              >{`Selected: `}</Text>
            </View>
            <View
              style={[
                styles.displayLeaderboardGameDrawWrapper,
                styles.defaultGroupFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.displayLeaderboardGameDraw,
                  styles.displayLayout,
                ]}
                onPress={() => navigation.navigate("DisplayGameDraw")}
              >
                <Text
                  style={[
                    styles.displayLeaderboardGameDraw1,
                    styles.selectedTypo,
                  ]}
                >
                  Game Draw
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <FlatList
          style={[styles.displayLeaderboardTableFram, styles.displayLayout]}
          data={displayLeaderboardTableFramData}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.displayLeaderboardTableFramContent}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  displayLeaderboardTableFramContent: {
    flexDirection: "column",
  },
  tab1FlexBox: {
    flexDirection: "row",
    flex: 1,
  },
  frameParentFlexBox1: {
    flex: 1,
    alignSelf: "stretch",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  defaultGroupFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  tabFlexBox: {
    overflow: "hidden",
    flexDirection: "row",
  },
  textBorderBorder: {
    borderStyle: "solid",
    alignItems: "center",
  },
  tabTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 28,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  selectedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  displayLayout: {
    borderRadius: Border.br_mid,
    overflow: "hidden",
    flex: 1,
  },
  displayLeaderboardTitle: {
    fontSize: FontSize.size_22xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    width: 227,
    height: 37,
    textAlign: "left",
    color: Color.colorBlack,
  },
  tabLabel: {
    color: Color.twitchPurple8,
  },
  textBorder: {
    borderColor: Color.twitchPurple8,
    borderWidth: 2,
  },
  resize: {
    alignItems: "center",
  },
  activeTab: {
    display: "none",
    height: 30,
  },
  tabLabel1: {
    color: Color.hintedGrey1,
  },
  inactiveTab: {
    height: 30,
  },
  spacer: {
    width: 20,
    height: 30,
  },
  tab1: {
    height: 30,
  },
  defaultTabLeftGroup: {
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
  },
  defaultTabLeftGroupWrapper: {
    alignItems: "center",
  },
  selected: {
    fontSize: FontSize.size_base,
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
  },
  selectedWrapper: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  displayLeaderboardGameDraw1: {
    fontSize: FontSize.size_4xl,
  },
  displayLeaderboardGameDraw: {
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 180,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_0,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  displayLeaderboardGameDrawWrapper: {
    alignItems: "flex-end",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  displayLeaderboardInsideFraInner: {
    height: 42,
    alignSelf: "stretch",
  },
  displayLeaderboardTableFram: {
    alignSelf: "stretch",
  },
  displayLeaderboardInsideFra: {
    alignSelf: "stretch",
  },
  displayLeaderboard: {
    width: "100%",
    height: 378,
    flexWrap: "wrap",
    paddingHorizontal: 28,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.backGround,
  },
});

export default DisplayLeaderboard;
