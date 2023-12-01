import React, { useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, View, Pressable, TouchableOpacity } from "react-native";
import Row43 from "../components/Row43";
import Row42 from "../components/Row42";
import Row411 from "../components/Row411";
import Row44 from "../components/Row441";
import Row40 from "../components/Row40";
import Row39 from "../components/Row39";
import DropDownPicker from "react-native-dropdown-picker";
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
  updateSchoolsData,
  schoolsData,
  selectedCompetitionId,
} from "../GlobalVariables";


const JudgeGameDraw = () => {
  const [judgeGameDrawTableFlatListData, setJudgeGameDrawTableFlatListData] =
    useState([
      <Row43 />,
      <Row42 />,
      <Row411 />,
      <Row44 />,
      <Row40 />,
      <Row39 />,
    ]);
  const [judgeGameDrawDivisionDropdOpen, setJudgeGameDrawDivisionDropdOpen] =
    useState(false);
  const [judgeGameDrawDivisionDropdValue, setJudgeGameDrawDivisionDropdValue] =
    useState();
  const [judgeGameDrawFieldDropdownOpen, setJudgeGameDrawFieldDropdownOpen] =
    useState(false);
  const [judgeGameDrawFieldDropdownValue, setJudgeGameDrawFieldDropdownValue] =
    useState();
  const [judgeGameDrawRoundDropdownOpen, setJudgeGameDrawRoundDropdownOpen] =
    useState(false);
  const [judgeGameDrawRoundDropdownValue, setJudgeGameDrawRoundDropdownValue] =
    useState();
  const [judgeGameDrawSchoolDropdowOpen, setJudgeGameDrawSchoolDropdowOpen] =
    useState(false);
  const [judgeGameDrawSchoolDropdowValue, setJudgeGameDrawSchoolDropdowValue] =
    useState();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Data retrieved, please select a tab...");

  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [selectedRound, setSelectedRound] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);

  const navigation = useNavigation();

  console.log("Judge GameDraw selectedCompetitionId:", selectedCompetitionId);
  const competitionId = selectedCompetitionId;
  console.log('Judge GameDraw Competition ID:', competitionId);

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
        setJudgeGameDrawTableFlatListData(Game_Results);
        
        // Extract unique values
        const uniqueDivisions = [...new Set(Game_Results.map((result) => result.division))];
        const uniqueFields = [...new Set(Game_Results.map((result) => result.field))];
        const uniqueRounds = [...new Set(Game_Results.map((result) => result.round))];
        const uniqueSchools = [...new Set([...Game_Results.map(result => result.team1_school), ...Game_Results.map(result => result.team2_school)])];

        updateDivisionsData(uniqueDivisions);
        updateFieldsData(uniqueFields);
        updateRoundsData(uniqueRounds);
        updateSchoolsData(uniqueSchools);

        console.log("Unique Divisions:", divisionsData);
        console.log("Unique Fields:", fieldsData);
        console.log("Unique Rounds:", roundsData);
        console.log("Unique Schools:", schoolsData);


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

  const filterData = () => {
    let filteredResults = gameResultsData;

    if (selectedDivision) {
      filteredResults = filteredResults.filter(
        (result) => result.division === selectedDivision
      );
    }

    if (selectedField) {
      filteredResults = filteredResults.filter(
        (result) => result.field === selectedField
      );
    }

    if (selectedRound) {
      filteredResults = filteredResults.filter(
        (result) => result.round === selectedRound
      );
    }

    if (selectedSchool) {
      filteredResults = filteredResults.filter(
        (result) => result.team1_school === selectedSchool || result.team2_school === selectedSchool
      );
    }

    setJudgeGameDrawTableFlatListData(filteredResults);
  };

  useEffect(() => {
    filterData();
  }, [selectedDivision, selectedField, selectedRound, selectedSchool]);

  const handleDivisionChange = (value) => {
    setSelectedDivision(value);
  };

  const handleFieldChange = (value) => {
    setSelectedField(value);
  };

  const handleRoundChange = (value) => {
    setSelectedRound(value);
  };

  const handleSchoolChange = (value) => {
    setSelectedSchool(value);
  };

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
      style={styles.judgeGameDraw}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.judgeGameDrawFrame}>        
        <Text style={[styles.gameDraw, styles.gameFlexBox]}>Game Draw</Text>        
        <View style={[styles.judgeGameDrawTableFrame, styles.judgeFlexBox]}>
          <FlatList
            style={styles.judgeGameDrawTable}
            data={judgeGameDrawTableFlatListData}
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
            contentContainerStyle={styles.judgeGameDrawTableFlatListContent}
          />
        </View>
        <View style={[styles.judgeGameDrawDropdownsFram, styles.judgeFlexBox]}>
          <View style={styles.judgeGameDrawDivisionDropd}>
            <DropDownPicker
              style={styles.dropdownpicker}
              open={judgeGameDrawDivisionDropdOpen}
              setOpen={setJudgeGameDrawDivisionDropdOpen}
              value={judgeGameDrawDivisionDropdValue}
              setValue={setJudgeGameDrawDivisionDropdValue}
              placeholder="Division"
              items={divisionsData.map(division => ({ label: division, value: division }))}
              labelStyle={styles.judgeGameDrawDivisionDropdValue}
              dropDownContainerStyle={
                styles.judgeGameDrawDivisionDropddropDownContainer
              }
              onSelectItem={(item) => handleDivisionChange(item.value)}
            />
          </View>
          <View style={[styles.judgeGameDrawFieldDropdown, styles.judgeLayout]}>
            <DropDownPicker
              style={styles.dropdownpicker}
              open={judgeGameDrawFieldDropdownOpen}
              setOpen={setJudgeGameDrawFieldDropdownOpen}
              value={judgeGameDrawFieldDropdownValue}
              setValue={setJudgeGameDrawFieldDropdownValue}
              placeholder="Field"
              items={fieldsData.map(field => ({ label: field, value: field }))}
              labelStyle={styles.judgeGameDrawFieldDropdownValue}
              dropDownContainerStyle={
                styles.judgeGameDrawFieldDropdowndropDownContainer
              }
              onSelectItem={(item) => handleFieldChange(item.value)}
            />
          </View>
          <View style={styles.judgeLayout}>
            <DropDownPicker
              style={styles.dropdownpicker2}
              open={judgeGameDrawRoundDropdownOpen}
              setOpen={setJudgeGameDrawRoundDropdownOpen}
              value={judgeGameDrawRoundDropdownValue}
              setValue={setJudgeGameDrawRoundDropdownValue}
              placeholder="Round"
              items={roundsData.map(round => ({ label: round.toString(), value: round }))}
              labelStyle={styles.judgeGameDrawRoundDropdownValue}
              dropDownContainerStyle={
                styles.judgeGameDrawRoundDropdowndropDownContainer
              }
              onSelectItem={(item) => handleRoundChange(item.value)}
            />
          </View>
          <View style={styles.judgeLayout}>
            <DropDownPicker
              style={styles.dropdownpicker2}
              open={judgeGameDrawSchoolDropdowOpen}
              setOpen={setJudgeGameDrawSchoolDropdowOpen}
              value={judgeGameDrawSchoolDropdowValue}
              setValue={setJudgeGameDrawSchoolDropdowValue}
              placeholder="School"
              items={schoolsData.map(school => ({ label: school, value: school }))}
              labelStyle={styles.judgeGameDrawSchoolDropdowValue}
              dropDownContainerStyle={
                styles.judgeGameDrawSchoolDropdowdropDownContainer
              }
              onSelectItem={(item) => handleSchoolChange(item.value)}
            />
          </View>
        </View>
        <View style={styles.judgeGameDrawButtonsFrame}>
          <Pressable
            style={[styles.judgeGameDrawGameScoringB, styles.judgeBorder]}
            onPress={() => navigation.navigate("JudgeGameScoring")}
          >
            <Text
              style={[styles.judgeGameDrawGameScoringB1, styles.gameFlexBox]}
            >
              Game Scoring
            </Text>
          </Pressable>
          {loading ? (
            <Text style={styles.loadingMessage} numberOfLines={1}>
              {message}
            </Text>
          ) : (
            <Text style={styles.loadingMessage} numberOfLines={1}>
              {message}
            </Text>
          )}
          <Pressable
            style={[styles.judgeGameDrawLogoutButton, styles.judgeBorder]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={[styles.judgeGameDrawGameScoringB1, styles.gameFlexBox]}
            >
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  judgeGameDrawTableFlatListContent: {
    flexDirection: "column",
  },
  judgeGameDrawDivisionDropdValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawDivisionDropddropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameDrawFieldDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawFieldDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameDrawRoundDropdownValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawRoundDropdowndropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  judgeGameDrawSchoolDropdowValue: {
    color: "#2b2b2b",
    fontSize: 16,
    fontFamily: "Source Sans Pro",
  },
  judgeGameDrawSchoolDropdowdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  gameFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  judgeFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  judgeLayout: {
    marginLeft: 39,
    height: 34,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    flex: 1,
  },
  judgeBorder: {
    justifyContent: "center",
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  gameDraw: {
    top: 8,
    left: 254,
    fontSize: FontSize.size_45xl,
    lineHeight: 24,
    fontFamily: FontFamily.sourceSansPro,
    width: 327,
    height: 43,
    position: "absolute",
  },
  judgeGameDrawTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    width: 831,
    maxWidth: 831,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  judgeGameDrawTableFrame: {
    top: 105,
    left: 1,
    height: 216,
  },
  dropdownpicker: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  judgeGameDrawDivisionDropd: {
    height: 34,
    borderRadius: Border.br_5xs,
    overflow: "visible",
    borderStyle: "solid",
    flex: 1,
  },
  judgeGameDrawFieldDropdown: {
    overflow: "visible",
  },
  dropdownpicker2: {
    backgroundColor: Color.white,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  judgeGameDrawDropdownsFram: {
    top: 61,
    left: 36,
    width: 761,
    overflow: "visible",
    flexDirection: "row",
  },
  judgeGameDrawGameScoringB1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
  },
  judgeGameDrawGameScoringB: {
    width: 169,
  },
  judgeGameDrawLogoutButton: {
    width: 135,
  },
  judgeGameDrawButtonsFrame: {
    top: 331,
    left: 0,
    width: 827,
    justifyContent: "space-between",
    paddingHorizontal: 11,
    paddingVertical: 5,
    overflow: "visible",
    position: "absolute",
    flexDirection: "row",
  },
  judgeGameDrawFrame: {
    height: 372,
    flex: 1,
  },
  judgeGameDraw: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
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
});

export default JudgeGameDraw;
