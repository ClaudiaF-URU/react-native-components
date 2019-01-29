import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Components from "./Components";
import SwitchPickerAndAlert from "./SwitchPickerAndAlert";
import TouchableAndModalCall from "./TouchableAndModalCall";

export default class FatherComponent extends React.Component {
  render() {
    return (
      <View>
        {/* <Components /> */}
        {/* <SwitchPickerAndAlert /> */}
        <TouchableAndModalCall />
      </View>
    );
  }
}
