import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import {
  Button,
  Card,
  CheckBox,
  Header,
  Input,
  Overlay,
  Text,
  Tooltip
} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class RNElements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      overlay: true
    };
  }

  render() {
    const users = [
      {
        name: "Carlos Gutierrez",
        age: 20
      },
      {
        age: 25,
        name: "Claudia Fernandez"
      },
      {
        name: "Carlos Gutierrez",
        age: 20
      },
      {
        age: 25,
        name: "Claudia Fernandez"
      },
      {
        name: "Carlos Gutierrez",
        age: 20
      },
      {
        age: 25,
        name: "Claudia Fernandez"
      }
    ];
    return (
    //   <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollView>
          <Header
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
          <View style={styles.container}>
            <Button
              raised
              title="Outline button"
              type="outline"
              onPress={() => this.setState({ overlay: true })}
            />
            {users.map((el, index) => {
              return (
                <Card key={index} title={el.name}>
                  <Text>Edad {el.age}</Text>
                </Card>
              );
            })}
            <Input
              placeholder="INPUT WITH ICON"
              leftIcon={{ type: "font-awesome", name: "chevron-left" }}
            />
            <CheckBox
              center
              title="Click Here"
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <Overlay
              isVisible={this.state.overlay}
              onBackdropPress={() => this.setState({ overlay: false })}
            >
              <Text>Hello from Overlay!</Text>
            </Overlay>
            <Tooltip popover={<Text>Info here</Text>}>
              <Text>Press me</Text>
            </Tooltip>
            <View style={styles.separate}>
              <Text h3>Heading 3</Text>
            </View>
          </View>
        </ScrollView>
    //   </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40
  },
  separate: {
    marginTop: 20,
    marginBottom: 40
  }
});
