import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const DefaultTabLeftGroup = () => {
  return (
    <View style={styles.defaultTabLeftGroup}>
      <View style={styles.tabstab1}>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 1</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 2</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 2</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 3</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 3</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 4</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 4</Text>
          </View>
          <View style={styles.spacer} />
        </View>
      </View>
      <View style={styles.tabstabs2}>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 1</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.inactiveTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 2</Text>
              </View>
            </View>
          </View>
          <View style={styles.activeTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 2</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 3</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 3</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 4</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 4</Text>
          </View>
          <View style={styles.spacer} />
        </View>
      </View>
      <View style={styles.tabstabs2}>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 1</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 2</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 2</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.inactiveTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 3</Text>
              </View>
            </View>
          </View>
          <View style={styles.activeTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 3</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 4</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 4</Text>
          </View>
          <View style={styles.spacer} />
        </View>
      </View>
      <View style={styles.tabstabs2}>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 1</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 2</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 2</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.activeTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 3</Text>
              </View>
            </View>
          </View>
          <View style={styles.inactiveTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 3</Text>
          </View>
          <View style={styles.spacer} />
        </View>
        <View style={styles.tab1}>
          <View style={styles.inactiveTab}>
            <View style={styles.resize}>
              <View style={styles.textBorder}>
                <Text style={[styles.tabLabel, styles.tabTypo1]}>Tab 4</Text>
              </View>
            </View>
          </View>
          <View style={styles.activeTab}>
            <Text style={[styles.tabLabel1, styles.tabTypo1]}>Tab 4</Text>
          </View>
          <View style={styles.spacer} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 28,
    fontSize: FontSize.size_sm,
  },
  tabLabel: {
    color: Color.twitchPurple8,
  },
  textBorder: {
    borderStyle: "solid",
    borderColor: Color.twitchPurple8,
    borderWidth: 2,
    alignItems: "center",
  },
  resize: {
    alignItems: "center",
  },
  activeTab: {
    display: "none",
    height: 30,
    flexDirection: "row",
    overflow: "hidden",
  },
  tabLabel1: {
    color: Color.hintedGrey1,
  },
  inactiveTab: {
    height: 30,
    flexDirection: "row",
    overflow: "hidden",
  },
  spacer: {
    width: 20,
    height: 30,
  },
  tab1: {
    height: 30,
    flexDirection: "row",
  },
  tabstab1: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  tabstabs2: {
    marginTop: 18,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  defaultTabLeftGroup: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    padding: Padding.p_xl,
    overflow: "hidden",
  },
});

export default DefaultTabLeftGroup;
