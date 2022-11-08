import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, Button } from "react-native";
import api from "../../../api/api";

export default function StudentScreen({ navigation, route }) {
  const [qrcode, setQrcode] = useState("");
  const [username, setUsername] = useState("");

  const handleStudents = async () => {
    try {
      const response = await api.get(
        `/students/${parseInt(route.params?.text)}`
      );

      setUsername(response.data.name);
      setQrcode(response.data.img);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => await handleStudents())();
  }, [route.params?.text]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Olá, {username}</Text>
      <Image
        source={{ uri: qrcode }}
        style={{ height: 400, width: 400, resizeMode: "contain" }}
      />
    </View>
  );
}
