import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
	//States:
	const [message, setMessage] = useState(""); //initialized as empty string

	//Functions:
	const showAlert = () => {
		Alert.alert("Hello", "You typed: " + message); //"alert" = method of Alert component
		console.log("Hello console");
	};

	//Rendering:
	return (
		<View style={styles.container}>
			<TextInput
				style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => setMessage(text)}
			/>
			<Button color="green" title="Press me" onPress={showAlert} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
