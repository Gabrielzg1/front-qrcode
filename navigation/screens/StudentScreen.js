import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, Button } from "react-native";
import api from "../../api/api";

export default function StudentScreen({ navigation }) {
  const [qrcode, setQrcode] = useState("");
  const ra = 21002974

  const handleStudents = async () => {
    try {
      const response = await api.get(`/students/${ra}`);
      setQrcode(response.data.img);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => await handleStudents())();
  }, [])


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: qrcode }}
        style={{ height: 400, width: 400, resizeMode: "contain" }}
      />
    </View>

  );
}
