import React from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";

export default class Storage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
      data: {}
    };
  }

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
      this.setState({ saved: true });
    } catch (err) {
      console.log(err);
      this.setState({ saved: false });
    }
  };

  getDataInStorage = async () => {
    try {
      let fromStorage = await AsyncStorage.getItem("object");
      console.log(JSON.parse(fromStorage));
      this.setState({ data: JSON.parse(fromStorage) });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let msg;
    if (this.state.saved) msg = <Text>Guardado en storage</Text>;
    return (
      <View>
        <Button title="Save in storage" onPress={() => this.saveInStorage()} />
        {msg}
        <View style={styles.button}>
          <Button
            title="Get from storage"
            onPress={() => this.getDataInStorage()}
          />
          <Text>
            {this.state.data.name} {this.state.data.lastname}
          </Text>
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
