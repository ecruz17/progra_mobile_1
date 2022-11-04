import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Switch, Text, TextInput, View, Alert } from 'react-native';
import { Component } from 'react';

export default class App extends Component<Props>{

  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      inputText: 'Write here'
    }
  }

  onPressBtn = () => {
    console.log('jijija');
  }

  onChange = (value) => {
    console.log(value);
    this.setState({ switchValue: value });
  }

  onTextInputChange = (input) => {
    this.setState({
      inputText: input
    });
  }

  createTwoButtonAlert = () => {
    Alert.alert(
      "Alert Title",
      this.state.inputText,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.inputText}
          onChangeText={this.onTextInputChange}
        />
        <Text>Hola bandiuks</Text>
        <Button
          onPress={() => { this.onPressBtn(); this.createTwoButtonAlert() }}
          title='Picalee'
        />
        <Switch
          value={this.state.switchValue} //valor dinámico para que se renderize diferente el switch
          onValueChange={() => this.onChange(!this.state.switchValue)}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
