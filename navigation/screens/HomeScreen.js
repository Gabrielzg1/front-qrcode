import { useState } from "react";
import { View, Text, TextInput, Button } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

export default function HomeScreen({ navigation }) {
    const [type, setType] = useState('');
    const [number, onChangeNumber] = useState(null);

    const optionsSelector = [
        { label: 'Aluno', value: 'RA', activeColor: "red" },
        { label: 'Professor', value: 'EMAIL' }

    ];
    const [keyboard, setKeyboard] = useState('default');
    const [color, setColor] = useState('red')

    return (
        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 20, fontWeight: 'bold' }}>Bem vindo, digite seu {type} </Text>
            <SwitchSelector
                style={{ margin: 50 }}
                options={optionsSelector}
                initial={0}
                onPress={
                    value => {
                        setType(value);
                        if (value == 'RA') {
                            setKeyboard('numeric')
                            setColor('red')
                        } else {
                            setKeyboard('email-address')
                            setColor('green')
                        }
                    }} />

            <TextInput
                onChangeText={onChangeNumber}
                value={number}
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
                title="Learn More"
                color={color}
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    );
}