import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  RefreshControl,
  Pressable,
} from "react-native";
import api from "../../../api/api";

export default function FinishScreen({ navigation, route }) {
  const [students, setStudents] = useState([]);
  const [loading, setloading] = useState(false);

  const handleAttendance = async () => {
    setStudents(route.params.attendance);
    try {
      api
        .post(`/presence`, {
          id: route.params?.subjectName,
        })

        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAttendance = async () => {
    api
      .delete(`/presence/${route.params?.subjectName}`)
      .catch(function (error) {
        console.log(error);
      });
    alert("A chamada foi deletada, o processo será reiniciado");
    navigation.navigate("Home");
  };

  const handleFinish = async () => {
    for (let i = 0; i < route.params?.attendance.length; i++) {
      try {
        api
          .put(
            `/presence/${route.params?.subjectName}?newRa=${route.params.attendance[i]}`
          )
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (item) => {
    console.log(students.length);
    setloading(true);
    let index = students.indexOf(item);
    if (students.length == 1) {
      students.pop();
      alert("Lista vazia");
      navigation.navigate("Home");
    }
    if (index != -1) {
      students.splice(index, 1);
    }
    setloading(false);
  };

  const EmptyListMessage = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.emptyListStyle} onPress={() => getItem(item)}>
        No Data Found
      </Text>
    );
  };

  useEffect(() => {
    (async () => {
      handleAttendance();
    })();
  }, [route.params?.attendance, route.params?.subjectName]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: "bold", margin: 10 }}>
        Lista de Presentes
      </Text>
      <FlatList
        ListEmptyComponent={() => EmptyListMessage}
        refreshControl={<RefreshControl refreshing={loading} />}
        data={route.params?.attendance}
        renderItem={({ item }) => (
          <View style={styles.containerStudents}>
            <Text style={styles.text}>{item}</Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                handleDelete(item);
              }}
            >
              <Text style={styles.text}>X</Text>
            </Pressable>
          </View>
        )}
      ></FlatList>

      <Pressable
        style={styles.done}
        onPress={() => {
          //handleUpdate();
          handleFinish();
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.finish}>Enviar Chamada</Text>
      </Pressable>

      <Pressable
        style={styles.delete}
        onPress={() => {
          handleDeleteAttendance();
        }}
      >
        <Text style={styles.finish}>Deletar Chamada</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignContent: "center",
    justifyContent: "center",
  },
  containerStudents: {
    backgroundColor: "green",
    height: 30,
    width: 415,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "green",
    marginLeft: 300,
  },
  done: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 0,
    elevation: 2,
    backgroundColor: "green",
    margin: 20,
  },
  delete: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 0,
    elevation: 2,
    backgroundColor: "red",
    margin: 20,
  },

  finish: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
});
