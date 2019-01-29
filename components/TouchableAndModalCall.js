import React from "react";
import {
  Text,
  Button,
  View,
  Alert,
  Modal,
  TouchableHighlight
} from "react-native";

export default class ModalAndTouchable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("close");
            this.setModalVisible(!this.state.modalVisible);
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <Button
                title="Hide modal"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  Alert.alert("Modal has been closed from button.");
                }}
              />
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
