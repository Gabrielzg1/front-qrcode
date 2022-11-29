import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import api from "../../../api/api";

export default function FinishScreen({ navigation, route }) {
  /* const handleAttendance = async () => {
    try {
      api
        .post(`/presence`, {
          id: "POO",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });


      const response = await api.get(
        `/students/${parseInt(route.params?.text)}`
      );
      console.log(typeof parseInt(route.params?.text));
      setQrcode(response.data.img);
      setUsername(response.data.name);
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    (async () => {
      console.log("finish page" + route.params?.attendance);
    })();
  }, [route.params?.attendance]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Finish Screen</Text>
      <Button onPress={() => navigation.navigate("Attendance")} title="Back" />
    </View>
  );
}
