import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import Row34 from "../components/Row34";
import Row33 from "../components/Row33";
import Row32 from "../components/Row32";
import Row311 from "../components/Row311";
import Row30 from "../components/Row30";
import Row29 from "../components/Row29";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import {
  BASE_URL,
  gameResultsData,
  updateGameResultsData,
  updateDivisionsData,
  divisionsData,
  selectedCompetitionId,
  TAB_LABELS,
} from "../GlobalVariables";

const AdminLeaderboard = () => {
  const [
    adminLeaderboardTableFlatListData,
    setAdminLeaderboardTableFlatListData,
  ] = useState([
    <Row34 />,
    <Row33 />,
    <Row32 />,
    <Row311 />,
    <Row30 />,
    <Row29 />,
  ]);

  const [selectedTab, setSelectedTab] = useState(['']);
  //const [selectedDivision, setSelectedDivision] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Data retrieved, please select a tab...");

  const competitionId = selectedCompetitionId;
  console.log('Leaderboard Competition ID:', competitionId);


  const navigation = useNavigation();

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

        const uniqueDivisions = [...new Set(Game_Results.map((result) => result.division))];
        
        updateDivisionsData(uniqueDivisions);

        console.log("Unique Divisions:", divisionsData);

        // Call populateTable with the updated selectedDivision
        populateTable(selectedTab);
        
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
      setMessage("Data retrieved, please select a division...");
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

    setAdminLeaderboardTableFlatListData(filteredData);    
    
  };

  useEffect(() => {
    // This effect runs whenever selectedDivision changes
    console.log("Selected Division: ", selectedTab);
    populateTable(selectedTab);
  }, [selectedTab, gameResultsData]);

  //const handleDivisionChange = (value) => {
  //  setSelectedDivision(value);
  //};

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
      style={styles.adminLeaderboard}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminMenuParent}>
        <View style={[styles.adminMenu, styles.adminBorder1]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminLeaderboardCompetition, styles.frameFlexBox]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={styles.competition}>Competition</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={styles.competition}>Fields</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={styles.competition}>Schools</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={styles.competition}>Game Draw</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={styles.competition}>Leaderboard</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={styles.competition}>Team Check-In</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={styles.competition}>Create User</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={styles.competition}>Update User</Text>
          </Pressable>
          <Pressable
            style={[styles.adminLeaderboardFieldsButto, styles.adminBorder]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.competition}>Logout</Text>
          </Pressable>
        </View>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={[styles.frame1, styles.frameFlexBox]}>
            <Text style={[styles.leaderboards, styles.leaderboardsTypo]}>
              LeaderBoards
            </Text>
          </View>
          {loading ? (
            <Text style={styles.loadingMessage} numberOfLines={1}>
              {message}
            </Text>
          ) : (
            <Text style={styles.loadingMessage} numberOfLines={1}>
              {message}
            </Text>
          )}
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <View style={[styles.frame4, styles.frameFlexBox]}>
              <View style={styles.frame4}>
                <View style={[styles.tabContainer, styles.tab1FlexBox]}>
                  {TAB_LABELS.map((label, index) => (
                    <Pressable
                      key={index}
                      style={[
                        styles.tab1,
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
            </View>
            <View style={[styles.frame5, styles.frameSpaceBlock]}>              
            </View>
            <View
              style={[
                styles.adminLeaderboardTableFrame,
                styles.frameSpaceBlock,
              ]}
            >
              <FlatList
                style={[styles.adminLeaderboardTable, styles.adminBorder1, { zIndex: 1 }]}
                data={leaderboardData}
                renderItem={renderRow}
                ListHeaderComponent={() => (
                  <View style={styles.columnHeaderContainer}>
                    {renderColumnHeader('Team')}
                    {renderColumnHeader('Points')}
                    {/* Add any other headers you want */}
                  </View>
                )}
                contentContainerStyle={
                  styles.adminLeaderboardTableFlatListContent
                }
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminLeaderboardTableFlatListContent: {
    flexDirection: "column",
  },
  adminBorder1: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameFlexBox: {
    justifyContent: "center",
    overflow: "visible",
  },
  adminBorder: {
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  leaderboardsTypo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  adminLayout: {
    height: 34,
    borderRadius: Border.br_5xs,
    overflow: "visible",
    borderStyle: "solid",
    flex: 1,
  },
  frameSpaceBlock: {
    marginTop: 9,
    alignSelf: "stretch",
    overflow: "visible",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  adminLeaderboardCompetition: {
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
    alignItems: "center",
  },
  adminLeaderboardFieldsButto: {
    overflow: "visible",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 217,
    height: 374,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    overflow: "visible",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    justifyContent: "space-between",
  },
  leaderboards: {
    fontSize: FontSize.size_45xl,
  },
  frame1: {
    height: 55,
    alignSelf: "stretch",
  },
  dropdownpicker: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  adminLeaderboardDivisionDro: {
    marginLeft: 88,
    width: 40,
  },
  frame4: {
    alignSelf: "stretch",
    overflow: "visible",
    alignItems: "center",
    flex: 1,
  },
  labelForDivision: {
    fontSize: FontSize.size_mid,
  },
  frame5: {
    justifyContent: "center",
    overflow: "visible",
    flex: 1,
  },
  adminLeaderboardTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    alignSelf: "stretch",
    overflow: "visible",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminLeaderboardTableFrame: {
    height: 216,
    overflow: "visible",
  },
  frame2: {
    marginTop: 26,
    overflow: "visible",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frame: {
    width: 599,
    alignItems: "center",
  },
  adminMenuParent: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  adminLeaderboard: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.backGround,
    flexDirection: "row",
    flex: 1,
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
  tab1FlexBox: {
    flexDirection: "row",
    flex: 1,
  },
  resize: {
    alignItems: "center",
  },
  tabLabel: {
    color: Color.colorBlack,
    flex: 1,
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
  textBorder: {
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    flex: 1,
    borderRadius: 5, // Adjust this value for rounded corners
  },
  selectedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  tabContainer: {
    flexDirection: 'row',
  },
});

export default AdminLeaderboard;
