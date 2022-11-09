import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/Home/HomeScreen";
import StudentScreen from "./screens/Student/StudentScreen";
import TeacherScreen from "./screens/Teacher/TeacherScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AttendanceScreen from "./screens/Teacher/AttendanceScreen";

//Screen names
const homeName = "Home";
const detailsName = "Student";
const settingsName = "Teacher";
const attendanceName = "Attendance";

//const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={homeName} component={HomeScreen} />
        <Stack.Screen name={detailsName} component={StudentScreen} />
        <Stack.Screen name={settingsName} component={TeacherScreen} />
        <Stack.Screen name={attendanceName} component={AttendanceScreen} />
      </Stack.Navigator>

      {/*<Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "barcode" : "barcode-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "camera" : "camera-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 90 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={StudentScreen} />
        <Tab.Screen name={settingsName} component={TeacherScreen} />
      </Tab.Navigator>*/}
    </NavigationContainer>
  );
}

export default MainContainer;
