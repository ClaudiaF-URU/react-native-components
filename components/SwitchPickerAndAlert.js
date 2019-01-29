import React from "react";
import { Text, View, Picker, Switch, Alert, StyleSheet } from "react-native";

export default class SwitchPickerAndAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "",
      on: false
    };
  }

  showAlertWithSelectedLanguage(language) {
    Alert.alert(
      "Selected Language",
      language,
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            this.setState({ language });
          }
        }
      ],
      { cancelable: true }
    );
  }

  render() {
    let picker;
    if (this.state.on) {
      picker = (
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          mode={"dropdown"}
          onValueChange={itemValue =>
            this.showAlertWithSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="javascript" />
        </Picker>
      );
    } else {
      picker = null;
    }
    return (
      <View>
        <Switch
          style={[this.state.on ? styles.switchOn : styles.switchOff]}
          value={this.state.on}
          onValueChange={() => this.setState({ on: !this.state.on })}
        />
        <View>{picker}</View>
        <Text>Selected: {this.state.language}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  switchOn: {
    marginRight: 74,
    marginBottom: 20
  },
  switchOff: {
    marginRight: 0,
    marginBottom: 20
  }
});
