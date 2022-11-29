import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, { useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import api from "../../../api/api";

export default function AttendanceScreen({ navigation }) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [username, setUsername] = React.useState("");

  const handleStudent = async ({ data }) => {
    try {
      const response = await api.get(`/students/${scanData}`);
      setUsername(response.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    console.log(`Data: ${data}`);
  };

  return (
    <View style={styles.cont}>
      <View style={styles.camera}>
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={styles.done}
          title="Finalizar Chamada"
          onPress={() =>
            navigation.navigate({
              name: "Finish",
            })
          }
        >
          <Text style={styles.text}>Finalizar Chamada</Text>
        </Pressable>
        <View style={styles.confirm}>
          <Text>{username}</Text>

          {scanData && (
            <Button
              title="Confirmar"
              onPress={() => {
                setScanData(undefined);
                handleStudent(scanData);
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 0.65,
    backgroundColor: "#fff",
  },
  buttons: {
    flex: 0.35,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  cont: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  done: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: "green",
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  confirm: {
    flexDirection: "row",
  },
});
