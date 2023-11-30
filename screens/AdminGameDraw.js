import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Row28 from "../components/Row28";
import Row27 from "../components/Row27";
import Row26 from "../components/Row26";
import Row25 from "../components/Row25";
import Row24 from "../components/Row24";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
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
  updateTeamsData,
  teamsData,
  selectedCompetitionId,
} from "../GlobalVariables";

const AdminGameDraw = () => {
  const [adminGameDrawDivisionDropdOpen, setAdminGameDrawDivisionDropdOpen] =
    useState(false);
  const [adminGameDrawDivisionDropdValue, setAdminGameDrawDivisionDropdValue] =
    useState();
  const [adminGameDrawFieldDropdownOpen, setAdminGameDrawFieldDropdownOpen] =
    useState(false);
  const [adminGameDrawFieldDropdownValue, setAdminGameDrawFieldDropdownValue] =
    useState();
  const [adminGameDrawTeamDropdownOpen, setAdminGameDrawTeamDropdownOpen] =
    useState(false);
  const [adminGameDrawTeamDropdownValue, setAdminGameDrawTeamDropdownValue] =
    useState();
  const [adminGameDrawRoundDropdownOpen, setAdminGameDrawRoundDropdownOpen] =
    useState(false);
  const [adminGameDrawRoundDropdownValue, setAdminGameDrawRoundDropdownValue] =
    useState();
  const [adminGameDrawTableFlatListData, setAdminGameDrawTableFlatListData] =
    useState([<Row28 />, <Row27 />, <Row26 />, <Row25 />, <Row24 />]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Data retrieved, please select a tab...");

  const navigation = useNavigation();

  console.log("Admin GameDraw selectedCompetitionId:", selectedCompetitionId);
  const competitionId = selectedCompetitionId;
  console.log('Admin GameDraw Competition ID:', competitionId);


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
        setAdminGameDrawTableFlatListData(Game_Results);
        
        // Extract unique values
        const uniqueDivisions = [...new Set(Game_Results.map((result) => result.division))];
        const uniqueFields = [...new Set(Game_Results.map((result) => result.field))];
        const uniqueRounds = [...new Set(Game_Results.map((result) => result.round))];
        const uniqueTeams = [...new Set([...Game_Results.map(result => result.team1), ...Game_Results.map(result => result.team2)])];

        updateDivisionsData(uniqueDivisions);
        updateFieldsData(uniqueFields);
        updateRoundsData(uniqueRounds);
        updateTeamsData(uniqueTeams);

        console.log("Unique Divisions:", divisionsData);
        console.log("Unique Fields:", fieldsData);
        console.log("Unique Rounds:", roundsData);
        console.log("Unique Teams:", teamsData);


      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
      setMessage("Data retrieved, please select a dropdown to filter...");
    }
  };


  useEffect(() => {
    fetchData();
  }, [selectedCompetitionId]);

  const renderColumnHeader = (header) => (
    <View style={styles.columnHeader}>
      <Text style={styles.columnHeaderText}>{header}</Text>
    </View>
  );

  const renderRow = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.row}>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.team1}</Text>
        <Text style={[styles.rowText, { textAlign: "center", color: 'white' }]}>{"VS"}</Text>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.team2}</Text>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.field}</Text>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.round}</Text>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.start_time}</Text>
        {/* Add any other fields you want to display */}
      </View>
    </TouchableOpacity>
  );
   

  return (
    <LinearGradient
      style={styles.adminGameDraw}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={[styles.adminMenu, styles.adminBorder2]}>        
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Pressable
          style={[styles.adminGameDrawCompetitionBu, styles.adminBorder1]}
          onPress={() => navigation.navigate("AdminCompetition")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Competition
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("AdminFields")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Fields
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("AdminSchools")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Schools
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("AdminGameDraw")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Game Draw
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("AdminLeaderboard")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Leaderboard
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("AdminTeamCheckIn")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Team Check-In
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("AdminCreateUser")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Create User
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("AdminUpdateUser")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Update User
          </Text>
        </Pressable>
        <Pressable
          style={styles.adminBorder1}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.competition, styles.gameDraw1FlexBox]}>
            Logout
          </Text>
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        {loading ? (
          <Text style={styles.loadingMessage} numberOfLines={1}>
            {message}
          </Text>
        ) : (
          <Text style={styles.loadingMessage} numberOfLines={1}>
            {message}
          </Text>
        )}
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Text style={[styles.gameDraw1, styles.gameDraw1FlexBox]}>
            Game Draw
          </Text>
        </View>
        <View style={styles.frame1}>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <View style={[styles.frame3, styles.frameFlexBox1]}>
              <View style={styles.frame4}>
                <View
                  style={[
                    styles.adminGameDrawDivisionDropd,
                    styles.adminBorder,
                  ]}
                >
                  <DropDownPicker
                    style={[styles.dropdownpicker, styles.adminBorder2]}
                    open={adminGameDrawDivisionDropdOpen}
                    setOpen={setAdminGameDrawDivisionDropdOpen}
                    value={adminGameDrawDivisionDropdValue}
                    setValue={setAdminGameDrawDivisionDropdValue}
                    placeholder="Division"
                    items={divisionsData.map(division => ({ label: division, value: division }))}
                    labelStyle={styles.adminGameDrawDivisionDropdValue}
                    dropDownContainerStyle={
                      styles.adminGameDrawDivisionDropddropDownContainer
                    }
                  />
                </View>
                <View
                  style={[
                    styles.adminGameDrawFieldDropdown,
                    styles.adminBorder,
                  ]}
                >
                  <DropDownPicker
                    style={[styles.dropdownpicker, styles.adminBorder2]}
                    open={adminGameDrawFieldDropdownOpen}
                    setOpen={setAdminGameDrawFieldDropdownOpen}
                    value={adminGameDrawFieldDropdownValue}
                    setValue={setAdminGameDrawFieldDropdownValue}
                    placeholder="Field"
                    items={fieldsData.map(field => ({ label: field, value: field }))}
                    labelStyle={styles.adminGameDrawFieldDropdownValue}
                    dropDownContainerStyle={
                      styles.adminGameDrawFieldDropdowndropDownContainer
                    }
                  />
                </View>
                <View
                  style={[
                    styles.adminGameDrawFieldDropdown,
                    styles.adminBorder,
                  ]}
                >
                  <DropDownPicker
                    style={[styles.dropdownpicker, styles.adminBorder2]}
                    open={adminGameDrawTeamDropdownOpen}
                    setOpen={setAdminGameDrawTeamDropdownOpen}
                    value={adminGameDrawTeamDropdownValue}
                    setValue={setAdminGameDrawTeamDropdownValue}
                    placeholder="Team"
                    items={teamsData.map(team => ({ label: team, value: team }))}
                    labelStyle={styles.adminGameDrawTeamDropdownValue}
                    dropDownContainerStyle={
                      styles.adminGameDrawTeamDropdowndropDownContainer
                    }
                  />
                </View>
                <View
                  style={[
                    styles.adminGameDrawRoundDropdown,
                    styles.adminBorder,
                  ]}
                >
                  <DropDownPicker
                    style={[styles.dropdownpicker, styles.adminBorder2]}
                    open={adminGameDrawRoundDropdownOpen}
                    setOpen={setAdminGameDrawRoundDropdownOpen}
                    value={adminGameDrawRoundDropdownValue}
                    setValue={setAdminGameDrawRoundDropdownValue}
                    placeholder="Round"
                    items={roundsData.map(round => ({ label: round.toString(), value: round }))}
                    labelStyle={styles.adminGameDrawRoundDropdownValue}
                    dropDownContainerStyle={
                      styles.adminGameDrawRoundDropdowndropDownContainer
                    }
                  />
                </View>
              </View>
              <View style={[styles.frame5, styles.frameFlexBox1]}>
                <Pressable 
                  style={styles.adminGameDrawExportButton}
                >
                  <Text style={styles.export}>Export</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.frame6, styles.frameFlexBox]}>
            <View style={styles.adminGameDrawTableFrame}>
              <FlatList
                style={[styles.adminGameDrawTable, styles.adminBorder2]}
                data={adminGameDrawTableFlatListData}
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
                contentContainerStyle={styles.adminGameDrawTableFlatListContent}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminGameDrawDivisionDropdValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  adminGameDrawDivisionDropddropDownContainer: {
    height: "auto", // or specify a fixed height
    overflow: "visible",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    zIndex: 2,
  },
  adminGameDrawFieldDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  adminGameDrawFieldDropdowndropDownContainer: {
    height: "auto", // or specify a fixed height
    overflow: "visible",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    zIndex: 2,
  },
  adminGameDrawTeamDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  adminGameDrawTeamDropdowndropDownContainer: {
    height: "auto", // or specify a fixed height
    overflow: "visible",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    zIndex: 2,
  },
  adminGameDrawRoundDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  adminGameDrawRoundDropdowndropDownContainer: {
    height: "auto", // or specify a fixed height
    overflow: "visible",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    zIndex: 2,
  },
  adminGameDrawTableFlatListContent: {
    flexDirection: "column",
  },
  adminBorder2: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  adminBorder1: {
    height: 30,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  gameDraw1FlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    overflow: "visible",
    justifyContent: "center",
  },
  frameFlexBox1: {
    flexDirection: "row",
    overflow: "visible",
  },
  adminBorder: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
    borderStyle: "solid",
  },
  image1Icon: {
    width: 33,
    height: 29,
    display: "none",
  },
  competition: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    flex: 1,
  },
  adminGameDrawCompetitionBu: {
    justifyContent: "center",
    alignItems: "center",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 229,
    height: 333,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
  },
  gameDraw1: {
    fontSize: FontSize.size_45xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    height: 45,
  },
  frame: {
    height: 57,
  },
  dropdownpicker: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    zIndex: 1, // Adjust as needed
  },
  adminGameDrawDivisionDropd: {
    flex: 1,
    zIndex: 2, // Adjust as needed, set a higher zIndex than dropdownpicker
    marginRight: 10, // Add margin to separate dropdowns
  },
  adminGameDrawFieldDropdown: {
    width: 99,
    marginLeft: 10,
    zIndex: 3, // Adjust as needed, set a higher zIndex than dropdownpicker
    marginRight: 10, // Add margin to separate dropdowns
  },
  adminGameDrawRoundDropdown: {
    marginLeft: 10,
    flex: 1,
    zIndex: 4, // Adjust as needed, set a higher zIndex than dropdownpicker
  },
  frame4: {
    height: 32,
    overflow: "hidden",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 1,
  },
  export: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
    flex: 1,
  },
  adminGameDrawExportButton: {
    height: 27,
    paddingHorizontal: Padding.p_mid,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  frame5: {
    width: 104,
    paddingTop: Padding.p_11xs,
    marginLeft: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  frame3: {
    alignSelf: "stretch",
    overflow: "visible",
  },
  frame2: {
    height: 44,
  },
  adminGameDrawTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminGameDrawTableFrame: {
    alignSelf: "stretch",
    flex: 1,
  },
  frame6: {
    height: 216,
    marginTop: 8,
  },
  frame1: {
    height: 271,
    marginTop: 15,
    justifyContent: "flex-end",
    alignSelf: "stretch",
    overflow: "visible",
  },
  frameParent: {
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_mini,
    marginLeft: 10,
    justifyContent: "flex-end",
    flex: 1,
  },
  adminGameDraw: {
    width: "100%",
    paddingHorizontal: Padding.p_6xs,
    backgroundColor: Color.backGround,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
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
});

export default AdminGameDraw;
