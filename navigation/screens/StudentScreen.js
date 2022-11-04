import * as React from "react";
import { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import api from "../../api/api";

export default function StudentScreen({ navigation }) {
  const [qrcode, setQrcode] = useState("");
  const handleStudents = async () => {
    try {
      const response = await api.get("/students");
      setQrcode(response.data[1].img);
      console.log(qrcode);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={handleStudents} title="Press Me"></Button>
      <Image
        source={{ uri: qrcode }}
        style={{ height: 400, width: 400, resizeMode: "contain" }}
      />
    </View>
  );
}
