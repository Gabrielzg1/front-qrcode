import { useState } from "react";
import { View, Text, TextInput, Button, Keyboard } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import api from "../../../api/api";

export default function HomeScreen({ navigation }) {
  const [type, setType] = useState("RA");
  const [keyboard, setKeyboard] = useState("numeric");
  const [color, setColor] = useState("red");
  const [option, setOption] = useState("Student");
  const [text, setText] = useState("");
  const [apiname, setApiname] = useState("students");

  const optionsSelector = [
    { label: "Aluno", value: "RA", activeColor: "red" },
    { label: "Professor", value: "EMAIL", activeColor: "green" },
  ];

  return (
    <View style={{ flex: 0.9, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Bem vindo, digite seu {type}{" "}
      </Text>
      <SwitchSelector
        style={{ margin: 50 }}
        options={optionsSelector}
        initial={0}
        onPress={(value) => {
          setType(value);
          if (value == "RA") {
            setKeyboard("numeric");
            setColor("red");
            setOption("Student");
            setApiname("students");
          } else {
            setKeyboard("email-address");
            setColor("green");
            setOption("Teacher");
            setApiname("teachers");
          }
        }}
      />

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={type}
        keyboardType={keyboard}
        selectedColor={color}
        style={{
          height: 40,
          margin: 10,
          width: 200,
          borderWidth: 1,
          padding: 10,
        }}
      />

      <Button
        title="Enter"
        color={color}
        onPress={() => {
          console.log(apiname);
          api
            .get(`/${apiname}/${parseInt(text)}`)
            .then((response) => {
              navigation.navigate({ name: option, params: { text: text } });
            })
            .catch((error) => {
              if (error.response) {
                alert(`Numero de ${type} Inválido`);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
            });
          Keyboard.dismiss();
        }}
      />
    </View>
  );
}
