const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import DisplayGameDrawTable from "./components/DisplayGameDrawTable";
import DisplayGameDraw from "./screens/DisplayGameDraw";
import Table from "./components/Table";
import DisplayLeaderboard from "./screens/DisplayLeaderboard";
import Row from "./components/Row";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";
import Row5 from "./components/Row5";
import Row6 from "./components/Row6";
import Row7 from "./components/Row7";
import Row8 from "./components/Row8";
import Row9 from "./components/Row9";
import Row10 from "./components/Row10";
import Row11 from "./components/Row11";
import Row12 from "./components/Row12";
import Row13 from "./components/Row13";
import Row14 from "./components/Row14";
import Row15 from "./components/Row15";
import Row16 from "./components/Row16";
import Row17 from "./components/Row17";
import Row18 from "./components/Row18";
import Row19 from "./components/Row19";
import Row20 from "./components/Row20";
import Row21 from "./components/Row21";
import Row22 from "./components/Row22";
import Row23 from "./components/Row23";
import Row24 from "./components/Row24";
import Row25 from "./components/Row25";
import Row26 from "./components/Row26";
import Row27 from "./components/Row27";
import Row28 from "./components/Row28";
import Row29 from "./components/Row29";
import Row30 from "./components/Row30";
import Row31 from "./components/Row31";
import Row32 from "./components/Row32";
import Row33 from "./components/Row33";
import Row34 from "./components/Row34";
import Row35 from "./components/Row35";
import Row36 from "./components/Row36";
import Row37 from "./components/Row37";
import Row38 from "./components/Row38";
import Row39 from "./components/Row39";
import Row40 from "./components/Row40";
import Row44 from "./components/Row441";
import Row41 from "./components/Row41";
import Row42 from "./components/Row42";
import Row43 from "./components/Row43";
import Row451 from "./components/Row45";
import Row46 from "./components/Row46";
import Row47 from "./components/Row47";
import Row48 from "./components/Row48";
import Row49 from "./components/Row49";
import Row50 from "./components/Row50";
import Row51 from "./components/Row51";
import AdminMenu from "./components/AdminMenu";
import DefaultTabLeftGroup from "./screens/DefaultTabLeftGroup";
import DropdownMenu from "./components/DropdownMenu";
import AdminLeaderboard from "./screens/AdminLeaderboard";
import AdminGameDraw from "./screens/AdminGameDraw";
import AdminTeamCheckIn from "./screens/AdminTeamCheckIn";
import AdminNonAdminUser from "./screens/AdminNonAdminUser";
import AdminCurrentUser from "./screens/AdminCurrentUser";
import AdminUpdateUser from "./screens/AdminUpdateUser";
import AdminCreateUser from "./screens/AdminCreateUser";
import AdminTeams from "./screens/AdminTeams";
import AdminSchools from "./screens/AdminSchools";
import AdminFields from "./screens/AdminFields";
import AdminCompetition from "./screens/AdminCompetition";
import Admin from "./screens/Admin";
import JudgeGameScoring from "./screens/JudgeGameScoring";
import NameWithComboBox from "./components/NameWithComboBox";
import JudgeGameDraw from "./screens/JudgeGameDraw";
import WelcomeAndCompetition from "./components/WelcomeAndCompetition";
import AdminMenu1 from "./screens/AdminMenu";
import School from "./screens/School";
import Round from "./screens/Round";
import Field from "./screens/Field";
import Division from "./screens/Division";
import GameDrawText from "./screens/GameDrawText";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisplayGameDrawTable"
              component={DisplayGameDrawTable}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisplayGameDraw"
              component={DisplayGameDraw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Table"
              component={Table}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisplayLeaderboard"
              component={DisplayLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row"
              component={Row}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row1"
              component={Row1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row2"
              component={Row2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row3"
              component={Row3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row4"
              component={Row4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row5"
              component={Row5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row6"
              component={Row6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row7"
              component={Row7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row8"
              component={Row8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row9"
              component={Row9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row10"
              component={Row10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row11"
              component={Row11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row12"
              component={Row12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row13"
              component={Row13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row14"
              component={Row14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row15"
              component={Row15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row16"
              component={Row16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row17"
              component={Row17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row18"
              component={Row18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row19"
              component={Row19}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row20"
              component={Row20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row21"
              component={Row21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row22"
              component={Row22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row23"
              component={Row23}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row24"
              component={Row24}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row25"
              component={Row25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row26"
              component={Row26}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row27"
              component={Row27}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row28"
              component={Row28}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row29"
              component={Row29}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row30"
              component={Row30}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row31"
              component={Row31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row32"
              component={Row32}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row33"
              component={Row33}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row34"
              component={Row34}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row35"
              component={Row35}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row36"
              component={Row36}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row37"
              component={Row37}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row38"
              component={Row38}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row39"
              component={Row39}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row40"
              component={Row40}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row44"
              component={Row44}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row41"
              component={Row41}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row42"
              component={Row42}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Row43"
              component={Row43}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DefaultTabLeftGroup"
              component={DefaultTabLeftGroup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DropdownMenu"
              component={DropdownMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminLeaderboard"
              component={AdminLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminGameDraw"
              component={AdminGameDraw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminTeamCheckIn"
              component={AdminTeamCheckIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminNonAdminUser"
              component={AdminNonAdminUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminCurrentUser"
              component={AdminCurrentUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminUpdateUser"
              component={AdminUpdateUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminCreateUser"
              component={AdminCreateUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminTeams"
              component={AdminTeams}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminSchools"
              component={AdminSchools}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminFields"
              component={AdminFields}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminCompetition"
              component={AdminCompetition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Admin"
              component={Admin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JudgeGameScoring"
              component={JudgeGameScoring}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JudgeGameDraw"
              component={JudgeGameDraw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="School"
              component={School}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Round"
              component={Round}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Field"
              component={Field}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Division"
              component={Division}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GameDrawText"
              component={GameDrawText}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
