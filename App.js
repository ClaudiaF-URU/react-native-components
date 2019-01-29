import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FatherComponent from "./components/FatherComponent";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FatherComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50
  }
});
