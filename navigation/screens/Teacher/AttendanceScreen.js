import * as React from "react";
import { View, Text, Button } from "react-native";

export default function AttendanceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        Attendance Screen
      </Text>

      <Button onPress={() => navigation.navigate("Finish")} title="Finish" />
      <Button onPress={() => navigation.navigate("Teacher")} title="Back" />
    </View>
  );
}
