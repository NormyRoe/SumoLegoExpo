import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, View, FlatList } from "react-native";
import Row3 from "../components/Row3";
import Row2 from "../components/Row2";
import Row1 from "../components/Row1";
import Row4 from "../components/Row4";
import Row from "../components/Row";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
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
  TAB_LABELS,
} from "../GlobalVariables";

const DisplayLeaderboard = () => {
  const [adminTeamsTableFlatListData, setAdminTeamsTableFlatListData] =
    useState([<Row3 />, <Row2 />, <Row1 />, <Row4 />, <Row />]);
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState(['']);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Data retrieved, please select a tab...");

  const competitionId = selectedCompetitionId;
  console.log('Leaderboard Competition ID:', competitionId);
  

  const fetchData = async () => {
    
    try {      

      setLoading(true);
      setMessage("Currently retrieving data...");
      
      const response = await axios.get(`${BASE_URL}/gameresult/competition/${competitionId}`);
      const { Game_Results, error } = response.data;

      console.log(`${BASE_URL}/gameresult/competition/${competitionId}`);
  
      if (error) {
        console.error("Server Error:", error);
      } else {
        updateGameResultsData(Game_Results);
        console.log("Game Results data:", gameResultsData);

        // Call populateTable with the updated selectedTab
        populateTable(selectedTab);
        
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
      setMessage("Data retrieved, please select a tab...");
    }
  };

  useEffect(() => {
    
    // Fetch data initially when the component mounts
    fetchData();

    // Set up an interval to fetch data every 5 minutes (300,000 milliseconds)
    const intervalId = setInterval(() => {
      fetchData();
    }, 300000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, [selectedCompetitionId]);

  useEffect(() => {
    // This effect runs whenever selectedTab changes
    console.log("Selected Tab: ", selectedTab);
    populateTable(selectedTab);
  }, [selectedTab, gameResultsData]);


  const populateTable = (selectedTab) => {
    // Filter gameResultsData based on selected division
    const filteredData = gameResultsData.filter((result) => result.division === selectedTab);
    console.log("Filtered Division Leaderboard:", filteredData);

    // Calculate points for each team
    const teamPoints = {};
    filteredData.forEach(result => {
      const team1Points = parseInt(result.team1_points, 10) || 0;
      const team2Points = parseInt(result.team2_points, 10) || 0;

      teamPoints[result.team1] = (teamPoints[result.team1] || 0) + team1Points;
      teamPoints[result.team2] = (teamPoints[result.team2] || 0) + team2Points;
    });

    // Create leaderboard data
    const leaderboard = Object.keys(teamPoints).map(team => ({
      team,
      points: teamPoints[team],
    }));

    // Sort leaderboard by points in descending order
    leaderboard.sort((a, b) => b.points - a.points);

    setLeaderboardData(leaderboard);     

    setAdminTeamsTableFlatListData(filteredData);
    
  };

  const renderColumnHeader = (header) => (
    <View style={styles.columnHeader}>
      <Text style={styles.columnHeaderText}>{header}</Text>
    </View>
  );
  
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.rowText, { color: 'white' }]}>{item.team}</Text>
      <Text style={[styles.rowText, { textAlign: "center", color: 'white' }]}>{item.points}</Text>
      {/* Add any other fields you want to display */}
    </View>
  );

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
      <View style={styles.displayLeaderboardInsideFra}>
        {loading ? (
          <Text style={styles.loadingMessage} numberOfLines={1}>
            {message}
          </Text>
        ) : (
          <Text style={styles.loadingMessage} numberOfLines={1}>
            {message}
          </Text>
        )}
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
                {TAB_LABELS.map((label, index) => (
                  <Pressable
                    key={index}
                    style={[
                      styles.tab1,
                      styles.tab1FlexBox,
                      label === selectedTab && styles.activeTab,
                    ]}
                    onPress={() => {
                      setSelectedTab(label);
                      // Add any additional logic you need when a tab is clicked
                      console.log("Index: ", index);
                      console.log("Label: ", label);
                      populateTable(selectedTab);
                    }}
                  >
                    <View style={[styles.resize, index === selectedTab && styles.textBorder]}>
                      <Text style={[styles.tabLabel, styles.tabTypo, index === selectedTab && styles.selectedTypo]}>
                        {label}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
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
                  styles.adminTeamsTableBorder,
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
        <View style={styles.adminTeamsTableFrame}>
          <FlatList
            style={[styles.adminTeamsTable, styles.adminTeamsTableBorder]}
            data={leaderboardData}
            renderItem={renderRow}
            ListHeaderComponent={() => (
              <View style={styles.columnHeaderContainer}>
                {renderColumnHeader('Team')}
                {renderColumnHeader('Points')}
                {/* Add any other headers you want */}
              </View>
              )}
            contentContainerStyle={styles.adminTeamsTableFlatListContent}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminTeamsTableFlatListContent: {
    flexDirection: "column",
  },
  tab1FlexBox: {
    flexDirection: "row",
    flex: 1,
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
  adminTeamsTableBorder: {
    borderWidth: 1,
    borderStyle: "solid",
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
    color: Color.colorBlack,
    flex: 1,
  },
  textBorder: {
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    flex: 1,
    borderRadius: 5, // Adjust this value for rounded corners
  },
  resize: {
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "blue", // Change this color to your desired active color
    width: 80,
    height: 30,
    paddingHorizontal: 10, // Adjust this value as needed for spacing
    marginRight: 10, // Adjust this value for spacing between tabs
    alignItems: "center", // Align text center horizontally within the tab
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
    width: 80,
    height: 30,
    paddingHorizontal: 10, // Adjust this value as needed for spacing
    marginRight: 10, // Adjust this value for spacing between tabs
    alignItems: "center", // Align text center horizontally within the tab
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
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    width: 180,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  displayLeaderboardGameDrawWrapper: {
    alignItems: "flex-end",
  },
  frameParent: {
    height: 42,
    alignSelf: "stretch",
  },
  displayLeaderboardInsideFraInner: {
    alignSelf: "stretch",
  },
  adminTeamsTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    alignSelf: "stretch",
  },
  adminTeamsTableFrame: {
    alignSelf: "stretch",
    flex: 1,
  },
  displayLeaderboardInsideFra: {
    height: 366,
    flex: 1,
  },
  displayLeaderboard: {
    width: "100%",
    height: 378,
    flexWrap: "wrap",
    paddingHorizontal: 28,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.backGround,
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
  loadingMessage: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Adjust the color as needed
  },
});

export default DisplayLeaderboard;
