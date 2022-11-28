import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import api from "../../../api/api";

export default function FinishScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Finish Screen</Text>
      <Button onPress={() => navigation.navigate("Attendance")} title="Back" />
    </View>
  );
}
