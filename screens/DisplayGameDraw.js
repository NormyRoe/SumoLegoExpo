import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import DisplayGameDrawTable from "../components/DisplayGameDrawTable";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useEffect } from "react";
import axios from "axios";
import { isEmptyArray } from "formik";
import {
  BASE_URL,
  gameResultsData,
  updateGameResultsData,
  updateDivisionsData,
  divisionsData,
  updateFieldsData,
  fieldsData,
  updateRoundsData,
  roundsData,
  selectedCompetitionId,
} from "../GlobalVariables";

const DisplayGameDraw = () => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownMenuValue, setDropdownMenuValue] = useState();
  const [dropdownMenu1Open, setDropdownMenu1Open] = useState(false);
  const [dropdownMenu1Value, setDropdownMenu1Value] = useState();
  const [dropdownMenu2Open, setDropdownMenu2Open] = useState(false);
  const [dropdownMenu2Value, setDropdownMenu2Value] = useState();
  const [
    displayGameDrawTableFrameFlatListData,
    setDisplayGameDrawTableFrameFlatListData,
  ] = useState([<DisplayGameDrawTable />]);

  const navigation = useNavigation();
  console.log("GameDraw selectedCompetitionId:", selectedCompetitionId);
  const competitionId = selectedCompetitionId;
  console.log('GameDraw Competition ID:', competitionId);

  const fetchData = async () => {
    try {
  
      if (!gameResultsData || gameResultsData.length === 0) {
        console.error("There are currently no game results to display");
      } else {

        console.log("Game Results array:", Game_Results);

        // Sorting logic
        gameResultsData.sort((a, b) => {
          if (a.start_time === b.start_time) {
            return a.round - b.round; // Compare round as numbers
          }
          return a.start_time.localeCompare(b.start_time);
        });
        
        const Game_Results = gameResultsData;
        
        const uniqueDivisions = [...new Set(Game_Results.map((result) => result.division))];
        const uniqueFields = [...new Set(Game_Results.map((result) => result.field))];
        const uniqueRounds = [...new Set(Game_Results.map((result) => result.round))];
  
        updateDivisionsData(uniqueDivisions);
        updateFieldsData(uniqueFields);
        updateRoundsData(uniqueRounds);
        setDisplayGameDrawTableFrameFlatListData(Game_Results);

        console.log("Unique Divisions:", divisionsData);
        console.log("Unique Fields:", fieldsData);
        console.log("Unique Rounds:", roundsData);
        console.log("Display table:", Game_Results);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  console.log("Hi 2");

  useEffect(() => {
    fetchData();
  }, [selectedCompetitionId]);

  
  

  const handleDivisionChange = (value) => {
    // Filter gameResultsData based on selected division
    const filteredResults = gameResultsData.filter((result) => result.division === value);
    console.log("Filtered Division Results:", filteredResults);
    setDisplayGameDrawTableFrameFlatListData(filteredResults);
  };
  
  const handleFieldChange = (value) => {
    console.log("Selected Field:", value);
    // Filter gameResultsData based on selected field
    const filteredResults = gameResultsData.filter((result) => result.field === value);
    console.log("Filtered Field Results:", filteredResults);
    setDisplayGameDrawTableFrameFlatListData(filteredResults);
    console.log("Updated Table Data:", filteredResults);
  };
  
  const handleRoundChange = (value) => {
    // Filter gameResultsData based on selected round
    const filteredResults = gameResultsData.filter((result) => result.round === value);
    console.log("Filtered Round Results:", filteredResults);
    setDisplayGameDrawTableFrameFlatListData(filteredResults);
  };

  const renderColumnHeader = (header) => (
    <View style={styles.columnHeader}>
      <Text style={styles.columnHeaderText}>{header}</Text>
    </View>
  );

  const renderRow = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.row}>
        <Text style={[styles.rowText, { color: 'black' }]}>{item.team1}</Text>
        <Text style={[styles.rowText, { textAlign: "center", color: 'black' }]}>{"VS"}</Text>
        <Text style={[styles.rowText, { color: 'black' }]}>{item.team2}</Text>
        <Text style={[styles.rowText, { color: 'black' }]}>{item.field}</Text>
        <Text style={[styles.rowText, { color: 'black' }]}>{item.round}</Text>
        <Text style={[styles.rowText, { color: 'black' }]}>{item.start_time}</Text>
        {/* Add any other fields you want to display */}
      </View>
    </TouchableOpacity>
  );


  return (
    <LinearGradient
      style={styles.displayGameDraw}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.displayGameDrawFrame}>
        <View style={styles.displayGameDrawTitleWrapper}>
          <Text style={styles.displayGameDrawTitle}>Game Draw</Text>
        </View>
        <View
          style={[styles.displayGameDrawTableDropdo, styles.displayFlexBox]}
        >
          <View
            style={[styles.displayGameDrawDropdownBut, styles.displayFlexBox]}
          >
            <View style={[styles.frame, styles.frameSpaceBlock]}>
              <View style={[styles.dropdownMenu, styles.dropdownLayout]}>
                <DropDownPicker
                  style={[styles.dropdownpicker, styles.dropdownpickerBorder]}
                  open={dropdownMenuOpen}
                  setOpen={setDropdownMenuOpen}
                  value={dropdownMenuValue}
                  setValue={setDropdownMenuValue}
                  placeholder="Division"
                  items={divisionsData.map((division) => ({ label: division, value: division, textStyle: { color: "white" } }))}
                  labelStyle={styles.dropdownMenuValue}
                  dropDownContainerStyle={styles.dropdownMenudropDownContainer}
                  onSelectItem={(item) => handleDivisionChange(item.value)}
                />
              </View>
              <View
                style={[styles.dropdownMenu1, styles.dropdownMenu1SpaceBlock]}
              >
                <DropDownPicker
                  style={[styles.dropdownpicker, styles.dropdownpickerBorder]}
                  open={dropdownMenu1Open}
                  setOpen={setDropdownMenu1Open}
                  value={dropdownMenu1Value}
                  setValue={setDropdownMenu1Value}
                  placeholder="Field"
                  items={fieldsData.map((field) => ({ label: field, value: field, textStyle: { color: "white" } }))}
                  labelStyle={styles.dropdownMenu1Value}
                  dropDownContainerStyle={styles.dropdownMenu1dropDownContainer}
                  onSelectItem={(item) => handleFieldChange(item.value)}
                />
              </View>
            </View>
            <View style={[styles.frame1, styles.frameSpaceBlock]}>
              <View style={[styles.dropdownMenu2, styles.dropdownLayout]}>
                <DropDownPicker
                  style={[styles.dropdownpicker, styles.dropdownpickerBorder]}
                  open={dropdownMenu2Open}
                  setOpen={setDropdownMenu2Open}
                  value={dropdownMenu2Value}
                  setValue={setDropdownMenu2Value}
                  placeholder="Round"
                  items={roundsData.map((round) => ({ label: round.toString(), value: round, textStyle: { color: "white" } }))}
                  labelStyle={styles.dropdownMenu2Value}
                  dropDownContainerStyle={styles.dropdownMenu2dropDownContainer}
                  onSelectItem={(item) => handleRoundChange(item.value)}
                />
              </View>
              <View
                style={[
                  styles.displayGameDrawLeaderboards,
                  styles.dropdownMenu1SpaceBlock,
                ]}
              >
                <Pressable onPress={() => navigation.navigate("DisplayLeaderboard")}>
                  <Text style={styles.leaderboards}>Leaderboards</Text>
                </Pressable>
                
              </View>
            </View>
          </View>
          <FlatList
            style={{ 
              ...styles.displayGameDrawTableFrame,
              pointerEvents: (dropdownMenuOpen || dropdownMenu1Open || dropdownMenu2Open) ? 'none' : 'auto' }}
            data={displayGameDrawTableFrameFlatListData}
            renderItem={renderRow}
            ListHeaderComponent={() => (
              <View style={styles.columnHeaderContainer}>
                {renderColumnHeader('Red Team')}
                {renderColumnHeader('V')}
                {renderColumnHeader('Blue Team')}
                {renderColumnHeader('Field')}
                {renderColumnHeader('Round')}
                {renderColumnHeader('Start Time')}
                {/* Add any other headers you want */}
              </View>
              )}
            contentContainerStyle={
              styles.displayGameDrawTableFrameFlatListContent
            }
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  dropdownMenuValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  dropdownMenudropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  dropdownMenu1Value: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  dropdownMenu1dropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  dropdownMenu2Value: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  dropdownMenu2dropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  displayGameDrawTableFrameFlatListContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  displayFlexBox: {
    overflow: "visible",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_6xs,
    overflow: "visible",
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownLayout: {
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  dropdownpickerBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  dropdownMenu1SpaceBlock: {
    marginLeft: 14,
    borderStyle: "solid",
    flex: 1,
  },
  displayGameDrawTitle: {
    fontSize: FontSize.size_22xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    textAlign: "left",
    display: "flex",
    height: 26,
    color: Color.colorBlack,
    alignItems: "center",
    flex: 1,
  },
  displayGameDrawTitleWrapper: {
    height: 41,
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  dropdownpicker: {
    borderStyle: "solid",
  },
  dropdownMenu: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    alignSelf: "stretch",
    height: 29,
    flex: 1,
    zIndex: 2, // Add zIndex to ensure it's above the FlatList
  },
  dropdownMenu1: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    overflow: "visible",
    alignSelf: "stretch",
    height: 29,
    flex: 1,
    zIndex: 2, // Add zIndex to ensure it's above the FlatList
  },
  frame: {
    height: 29,
    flex: 1,
  },
  dropdownMenu2: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    alignSelf: "stretch",
    height: 29,
    flex: 1,
    zIndex: 2, // Add zIndex to ensure it's above the FlatList
  },
  leaderboards: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  displayGameDrawLeaderboards: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  frame1: {
    width: 444,
  },
  displayGameDrawDropdownBut: {
    paddingBottom: Padding.p_12xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  displayGameDrawTableFrame: {
    marginTop: 9,
    alignSelf: "stretch",
    flex: 1,
  },
  displayGameDrawTableDropdo: {
    justifyContent: "center",
    flex: 1,
    zIndex: 1, // Add zIndex to ensure the dropdown is positioned above other elements
  },
  displayGameDrawFrame: {
    paddingTop: Padding.p_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    zIndex: 0, // Add zIndex to ensure the dropdown is positioned above other elements
  },
  displayGameDraw: {
    width: "100%",
    height: 387,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
    position: "relative", // Add position:relative to establish a stacking context
  },
  columnHeaderContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  columnHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  columnHeaderText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  rowText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  selectedRow: {
    backgroundColor: 'blue', // Adjust the color as needed
  },
});

export default DisplayGameDraw;
