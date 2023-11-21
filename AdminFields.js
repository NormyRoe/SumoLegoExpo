import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Row19 from "../components/Row19";
import Row18 from "../components/Row18";
import Row17 from "../components/Row17";
import Row16 from "../components/Row16";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { BASE_URL, fieldsData, updateFieldsData } from "../GlobalVariables";

const AdminFields = () => {
  const [adminFieldDropdownFrameOpen, setAdminFieldDropdownFrameOpen] =
    useState(false);
  const [adminFieldDropdownFrameValue, setAdminFieldDropdownFrameValue] =
    useState();

    const [responseData, setResponseData] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [textInputValues, setTextInputValues] = useState({
      name: '',
    });

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/fields`);
        const data = await response.json();
        
        if (data.error){
          setError(data.error);
        } else {
          updateFieldsData(data.fields);
        }

        console.log(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderColumnHeader = (header) => (
    <View style={styles.columnHeader}>
      <Text style={styles.columnHeaderText}>{header}</Text>
    </View>
  );

  const handleRowPress = (item) => {
      // Update the selected row
  setSelectedRow(item);

  // Populate text input values with the selected row's data
  setTextInputValues({
    name: item.name,
    division: item.division,
    judge: item.judge,
  });

    // Handle the row press, navigate to a new screen, etc.
    console.log('Row pressed:', item.name);
  };

  const renderRow = ({ item }) => (
    <TouchableOpacity onPress={() => handleRowPress(item)}>
      <View style={styles.row}>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.name}</Text>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.division}</Text>
        <Text style={[styles.rowText, { color: 'white' }]}>{item.judge}</Text>
        {/* Add any other fields you want to display */}
      </View>
    </TouchableOpacity>
  );




  return (
    <LinearGradient
      style={[styles.adminFields, styles.adminFlexBox]}
      locations={[0, 0.18, 0.82, 1]}
      colors={[
        "rgba(255, 18, 18, 0.9)",
        "rgba(250, 250, 250, 0.87)",
        "rgba(255, 255, 255, 0.81)",
        "rgba(0, 70, 255, 0.78)",
      ]}
    >
      <View style={[styles.adminMenuParent, styles.adminFlexBox]}>
        <View style={[styles.adminMenu, styles.adminBorder2]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
          <Pressable
            style={[styles.adminFieldCompetitionButton, styles.frameFlexBox1]}
            onPress={() => navigation.navigate("AdminCompetition")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Competition
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminFields")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Fields
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminSchools")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Schools
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminGameDraw")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Game Draw
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminLeaderboard")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Leaderboard
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminTeamCheckIn")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Team Check-In
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminCreateUser")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Create User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("AdminUpdateUser")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Update User
            </Text>
          </Pressable>
          <Pressable
            style={[styles.adminFieldFieldsButton, styles.adminBorder]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.competition, styles.fields1FlexBox]}>
              Logout
            </Text>
          </Pressable>
        </View>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={[styles.frame2, styles.frameFlexBox1]}>
              <Text style={[styles.fields1, styles.fieldTypo2]}>Fields</Text>
            </View>
            <View style={styles.frame3}>
              <Text style={[styles.fieldList, styles.fieldTypo1]}>
                Field list
              </Text>
            </View>
            <View style={[styles.adminFieldTableFrame, styles.adminFlexBox]}>
              <FlatList
                  style={[styles.adminFieldTable, styles.adminBorder2]}
                  data={fieldsData}
                  renderItem={renderRow}
                  keyExtractor={(item) => item.field_id.toString()}
                  contentContainerStyle={
                    styles.adminCompetitionTableFlatListContent
                  }
                  
                  ListHeaderComponent={() => (
                  <View style={styles.columnHeaderContainer}>
                    {renderColumnHeader('Name')}
                    {renderColumnHeader('Division')}
                    {renderColumnHeader('Judge')}
                    {/* Add any other headers you want */}
                  </View>
                  )}
                />
            </View>
          </View>
          <View style={[styles.frame4, styles.frameFlexBox1]}>
            <View style={styles.frame5}>
              <Text style={[styles.createField, styles.fields1FlexBox]}>
                Create field:
              </Text>
            </View>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <Text style={[styles.addFieldTo, styles.fieldTypo]}>
                Add field to an existing division:
              </Text>
            </View>
            <View style={[styles.adminFieldDropdownFrame, styles.frameFlexBox]}>
              <DropDownPicker
                open={adminFieldDropdownFrameOpen}
                setOpen={setAdminFieldDropdownFrameOpen}
                value={adminFieldDropdownFrameValue}
                setValue={setAdminFieldDropdownFrameValue}
                items={[]}
              />
            </View>
            <View style={[styles.frame7, styles.frameFlexBox]}>
              <View style={styles.frame8}>
                <Text style={[styles.fieldNameWill, styles.fieldTypo]}>
                  Field Name will be:
                </Text>
                <TextInput
                  style={[styles.adminFieldNameTextField, styles.adminBorder1]}
                  value={selectedRow ? selectedRow.name : ''}
                  onChangeText={(text) => setTextInputValues({ ...textInputValues, name: text })}
                />
              </View>
            </View>
            <View style={styles.frameFlexBox}>
              <Pressable
                style={[styles.adminFieldCreateButton, styles.adminBorder1]}
              >
                <Text style={[styles.createFieldAnd, styles.fieldTypo1]}>
                  Create field and judge
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adminFieldTableFlatListContent: {
    flexDirection: "column",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  fields1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  adminBorder: {
    height: 30,
    backgroundColor: Color.white,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
  },
  fieldTypo2: {
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  fieldTypo1: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameFlexBox: {
    marginTop: 5,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  fieldTypo: {
    fontSize: FontSize.size_xs,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    textAlign: "center",
    color: Color.colorBlack,
  },
  adminBorder1: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  image1Icon: {
    width: 33,
    height: 29,
  },
  competition: {
    fontSize: FontSize.size_4xl,
    display: "flex",
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  adminFieldCompetitionButton: {
    height: 30,
    backgroundColor: Color.white,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    flexDirection: "row",
    alignItems: "center",
  },
  adminFieldFieldsButton: {
    alignSelf: "stretch",
  },
  adminMenu: {
    backgroundColor: Color.colorGainsboro_100,
    width: 262,
    height: 374,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
  },
  fields1: {
    fontSize: FontSize.size_45xl,
    width: 165,
    height: 42,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    textAlign: "center",
    color: Color.colorBlack,
  },
  frame2: {
    height: 68,
    overflow: "hidden",
    alignItems: "center",
  },
  fieldList: {
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frame3: {
    height: 25,
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  frame1: {
    height: 225,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  createField: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    width: 174,
    height: 22,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    fontFamily: FontFamily.interRegular,
  },
  frame5: {
    height: 22,
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  addFieldTo: {
    width: 214,
    height: 25,
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 24,
  },
  frame6: {
    height: 25,
  },
  adminFieldDropdownFrame: {
    height: 20,
  },
  fieldNameWill: {
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
  },
  adminFieldNameTextField: {
    height: 15,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    alignSelf: "stretch",
  },
  frame8: {
    width: 152,
    paddingLeft: 0,
    overflow: "hidden",
    alignItems: "center",
  },
  frame7: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_0,
  },
  createFieldAnd: {
    fontFamily: FontFamily.interRegular,
  },
  adminFieldCreateButton: {
    width: 306,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
  },
  frame4: {
    marginTop: 7,
    overflow: "hidden",
  },
  frame: {
    marginLeft: 16,
    overflow: "hidden",
    flex: 1,
  },
  adminMenuParent: {
    paddingTop: Padding.p_12xs,
    alignItems: "center",
  },
  adminFields: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_6xs,
    backgroundColor: Color.backGround,
  },


  adminFlexBox: {
    flexDirection: "row",
    flex: 1,
  },
  adminFieldTableFrame: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    height: "auto",
    flex: 1,
  },
  adminFieldTable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkslategray,
    borderColor: Color.colorDimgray,
    width: 575,
    maxWidth: 575,
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  adminBorder2: {
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  adminCompetitionTableFlatListContent: {
    flexDirection: "column",
    color: "white",
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

export default AdminFields;
