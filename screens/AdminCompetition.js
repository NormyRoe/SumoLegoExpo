import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Row15 from "../components/Row15";
import Row14 from "../components/Row14";
import Row13 from "../components/Row13";
import Row12 from "../components/Row12";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { BASE_URL, competitionsData, updateCompetitionsData, selectedCompetitionId, updateSelectedCompetitionId, accessRole } from "../GlobalVariables";

const AdminCompetition = () => {
  const [responseData, setResponseData] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [textInputValues, setTextInputValues] = useState({
    name: '',
    games_per_team: '',
    date: '',
    fields_per_division: '',
  });

    const navigation = useNavigation();

    useEffect(() => {
      const fetchCompetitionsData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/competitions`);
          const data = await response.json();

          if (data.error) {
            setError(data.error);
          } else {
            updateCompetitionsData(data.competitions); // Update the global variable
          }
          
          console.log(data);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchCompetitionsData();
    }, []);

    const renderColumnHeader = (header) => (
      <View style={styles.columnHeader}>
        <Text style={styles.columnHeaderText}>{header}</Text>
      </View>
    );

    const handleRowPress = (item) => {
        // Update the selected row
      setSelectedRow(item);

      // Set the selected competition ID
      updateSelectedCompetitionId(item.competition_id);

      // Populate text input values with the selected row's data
      setTextInputValues({
        name: item.name,
        games_per_team: item.games_per_team.toString(),
        date: item.date,
        fields_per_division: item.nbr_of_fields.toString(),
      });

      // Handle the row press, navigate to a new screen, etc.
      console.log('Row pressed:', item.name);
    };

    const renderRow = ({ item }) => (
      <TouchableOpacity onPress={() => handleRowPress(item)}>
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: 'white' }]}>{item.name}</Text>
          <Text style={[styles.rowText, { color: 'white' }]}>{item.games_per_team}</Text>
          <Text style={[styles.rowText, { color: 'white' }]}>{item.date}</Text>
          <Text style={[styles.rowText, { color: 'white' }]}>{item.nbr_of_fields}</Text>
          {/* Add any other fields you want to display */}
        </View>
      </TouchableOpacity>
    );

    const handleSetCurrentCompetition = () => {
      if (selectedRow) {
        // Set the current competition ID
        updateSelectedCompetitionId(selectedRow.competition_id);
        // Handle other actions if needed
      } else {
        // Display an alert if no competition is selected
        window.alert('Please select a competition from the table.');
      }
    };

    const handleClearFields = () => {
      // Clear all text input values
      setTextInputValues({
        name: '',
        games_per_team: '',
        date: '',
        fields_per_division: '',
      })};

    const handleCreateCompetition = async () => {
      try {
        const response = await fetch(`${BASE_URL}/competitions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_role: accessRole,
            name: textInputValues.name,
            games_per_team: textInputValues.games_per_team,
            date: textInputValues.date,
            nbr_of_fields: textInputValues.fields_per_division,
          }),
        });
      
        const data = await response.json();
     
        if (data.error) {
          console.error('Error creating competition:', data.error);
        } else {
          // Update competitionsData with the new competition data
          updateCompetitionsData([...competitionsData, { competition_id: data.competition_id, ...textInputValues }]);
          // Clear text input values
          setTextInputValues({
            name: '',
            games_per_team: '',
            date: '',
            fields_per_division: '',
          });
        }
      } catch (error) {
        console.error('Error creating competition:', error);
      }
    };


  return (
    <LinearGradient
      style={styles.adminCompetition}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={styles.adminMenuParent}>
        <View style={[styles.adminMenu, styles.adminBorder2]}>
          <ImageBackground
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={[styles.adminCompetitionCompetition, styles.adminBorder1]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Fields
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Schools
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={styles.adminBorder1}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.createFlexBox]}>
              Logout
            </Text>
          </Pressable>
        </View>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={styles.frame2}>
              <Text style={[styles.competitions, styles.competitionsTypo]}>
                Competitions
              </Text>
            </View>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <Text style={[styles.competitionList, styles.createTypo]}>
                Competition list
              </Text>
            </View>
            <View style={[styles.frame4, styles.frameFlexBox]}>
              <View style={styles.adminCompetitionTableFrame}>
                <FlatList
                  style={[styles.adminCompetitionTable, styles.adminBorder2]}
                  data={competitionsData}
                  renderItem={renderRow}
                  keyExtractor={(item) => item.competition_id.toString()}
                  contentContainerStyle={
                    styles.adminCompetitionTableFlatListContent
                  }
                  
                  ListHeaderComponent={() => (
                  <View style={styles.columnHeaderContainer}>
                    {renderColumnHeader('Name')}
                    {renderColumnHeader('Games Per Team')}
                    {renderColumnHeader('Date')}
                    {/* Add any other headers you want */}
                  </View>
                  )}
                />
              </View>
              <View style={[styles.frame5, styles.frameSpaceBlock]}>
                <Text
                  style={[styles.competitionDetails, styles.competitionFlexBox]}
                >
                  Competition Details:
                </Text>
              </View>
            </View>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <View style={styles.frame7}>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Competition Name:
                </Text>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Competition Date:
                </Text>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Game per Team:
                </Text>
                <Text
                  style={[styles.competitionName, styles.competitionFlexBox]}
                >
                  Fields per Division:
                </Text>
                <View style={styles.frame8}>
                  <Pressable
                    style={[
                      styles.adminCompetitionCreateButto,
                      styles.adminLayout,
                    ]}
                    onPress={handleCreateCompetition}
                  >
                    <Text style={[styles.create, styles.createTypo]}>
                      Create
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.frame9}>
                <TextInput
                  style={[
                    styles.adminCompetitionNameTextFi,
                    styles.adminBorder,
                  ]}
                  value={textInputValues.name}
                  onChangeText={(text) => setTextInputValues({ ...textInputValues, name: text })}
                  autoCapitalize="none"
                />
                <TextInput
                  style={[
                    styles.adminCompetitionDateTextFi,
                    styles.frame10SpaceBlock,
                  ]}
                  value={textInputValues.games_per_team}
                  onChangeText={(text) => setTextInputValues({ ...textInputValues, games_per_team: text })}
                  autoCapitalize="none"
                />
                <TextInput
                  style={[
                    styles.adminCompetitionDateTextFi,
                    styles.frame10SpaceBlock,
                  ]}
                  value={textInputValues.date}
                  onChangeText={(text) => setTextInputValues({ ...textInputValues, date: text })}
                  autoCapitalize="none"
                />
                <TextInput
                  style={[
                    styles.adminCompetitionDateTextFi,
                    styles.frame10SpaceBlock,
                  ]}
                  value={textInputValues.fields_per_division}
                  onChangeText={(text) => setTextInputValues({ ...textInputValues, fields_per_division: text })}
                  autoCapitalize="none"
                />
                <View style={[styles.frame10, styles.frame10SpaceBlock]}>
                  <Pressable
                    style={[
                      styles.adminCompetitionCreateField,
                      styles.adminLayout,
                    ]}
                    onPress={handleClearFields}
                  >
                    <Text style={[styles.create, styles.createTypo]}>
                      Clear fields
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame11, styles.frameSpaceBlock]}>
            <Pressable style={styles.adminCompetitionSetCompetit} onPress={handleSetCurrentCompetition}>
              <Text style={[styles.create, styles.createTypo]}>
                Set as current competition
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminCompetitionTableFlatListContent: {
    flexDirection: "column",
    color: "white",
  },
  adminBorder2: {
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
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
  createFlexBox: {
    display: "flex",
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  competitionsTypo: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frameFlexBox: {
    marginTop: 8,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  createTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameSpaceBlock: {
    marginTop: 2,
    justifyContent: "center",
    overflow: "hidden",
  },
  competitionFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  adminLayout: {
    height: 31,
    width: 164,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  adminBorder: {
    height: 14,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frame10SpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  adminCompetitionCompetition: {
    justifyContent: "center",
    alignItems: "center",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 245,
    height: 374,
    justifyContent: "space-between",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_9xs,
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderStyle: "solid",
  },
  competitions: {
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frame2: {
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  competitionList: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frame3: {
    height: 24,
    justifyContent: "flex-end",
  },
  adminCompetitionTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    width: 575,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminCompetitionTableFrame: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    height: "auto",
    flex: 1,
  },
  competitionDetails: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  frame5: {
    width: 198,
  },
  frame4: {
    height: 143,
  },
  competitionName: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  create: {
    display: "flex",
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  adminCompetitionCreateButto: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_12xs,
  },
  frame8: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame7: {
    overflow: "hidden",
    alignItems: "flex-end",
    flex: 1,
  },
  adminCompetitionNameTextFi: {
    alignSelf: "stretch",
  },
  adminCompetitionDateTextFi: {
    height: 14,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  adminCompetitionCreateField: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
  },
  frame10: {
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "flex-end",
  },
  frame9: {
    marginLeft: 11,
    overflow: "hidden",
    flex: 1,
  },
  frame6: {
    flexDirection: "row",
  },
  frame1: {
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adminCompetitionSetCompetit: {
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_9xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    paddingVertical: Padding.p_0,
    flexDirection: "row",
  },
  frame11: {
    width: 304,
    alignItems: "flex-end",
  },
  frame: {
    marginLeft: 6,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  adminMenuParent: {
    paddingTop: Padding.p_8xs,
    paddingBottom: Padding.p_5xs,
    alignItems: "flex-end",
    flexDirection: "row",
    flex: 1,
  },
  adminCompetition: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_4xs,
    backgroundColor: Color.backGround,
    paddingVertical: Padding.p_0,
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
    selectedRow: {
      backgroundColor: 'blue', // Adjust the color as needed
    },

});

export default AdminCompetition;
