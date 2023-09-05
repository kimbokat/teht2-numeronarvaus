import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  Text,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [titleText, setTitleText] = useState("Guess number between 1-100");
  const [value, setValue] = useState("");
  const [clickCounter, setClickCounter] = useState(0);
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const handleGuess = () => {
    const guessedNumber = parseFloat(value);
    setClickCounter(clickCounter + 1);

    if (isNaN(guessedNumber)) {
      Alert.alert("Please enter a number");
    } else if (guessedNumber < targetNumber) {
      setTitleText(`Your guess ${guessedNumber} is too low`);
    } else if (guessedNumber > targetNumber) {
      setTitleText(`Your guess ${guessedNumber} is too high`);
    } else {
      Alert.alert(`You guessed the number in ${clickCounter} guesses`);
      setTargetNumber(Math.floor(Math.random() * 100) + 1); // new random number
      setClickCounter(0); // reset click counter and input field
      setValue("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 18}}>{titleText}</Text>
      <View>
        <TextInput
          style={{ width: 50, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setValue(text)}
          keyboardType="numeric"
        />
        <StatusBar style="auto" />
      </View>

      <View style={styles.button}>
        <Button title="Make guess" onPress={handleGuess} />
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

});
