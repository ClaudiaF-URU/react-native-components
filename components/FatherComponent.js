import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SwitchPickerAndAlert from "./SwitchPickerAndAlert";
import TouchableAndModalCall from "./TouchableAndModalCall";
import Storage from "./Storage";
import RNElements from "./RNElements";

export default class FatherComponent extends React.Component {
  render() {
    return (
      <View>
        {/* <RNElements /> */}
        {/* <View style={styles.container}>
          <SwitchPickerAndAlert />
          <TouchableAndModalCall />
          <Storage />
        </View> */}
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
