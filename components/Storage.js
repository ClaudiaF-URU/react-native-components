import React from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";

export default class Storage extends React.Component {
  saveInStorage = async () => {
    try {
      await AsyncStorage.setItem(
        "object",
        JSON.stringify({
          name: "Claudia",
          lastname: "Fernandez"
        })
      );
      console.log("saved data");
    } catch (err) {
      console.log(err);
    }
  };

  getDataInStorage = async () => {
    try {
      let fromStorage = await AsyncStorage.getItem("object");
      console.log(JSON.parse(fromStorage));
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <Button title="Save in storage" onPress={() => this.saveInStorage()} />
        <View style={styles.button}>
          <Button
            title="Get from storage"
            onPress={() => this.getDataInStorage()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  }
});
