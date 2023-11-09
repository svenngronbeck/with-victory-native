import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Chart from "./Chart";

export default function App() {
  return (
    <View style={styles.container}>
      <Chart />
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
