/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class karaoke extends Component {
  handleSubmit() {
    return
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to NayNay House!
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password Confirmation"
          >
        </TextInput>
        <TouchableHighlight
         style={styles.button}
         onPress={this.handleSubmit.bind(this)}
         underlayColor="white">
         <Text style={styles.buttonText}> Create Account </Text>
       </TouchableHighlight>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: 30,
     marginTop: 65,
     flexDirection: 'column',
     justifyContent: 'center',
     backgroundColor: '#48BBEC'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginTop: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
   fontSize: 18,
   color: '#111',
   alignSelf: 'center'
 },
 button: {
   height: 45,
   flexDirection: 'row',
   backgroundColor: 'white',
   borderColor: 'white',
   borderWidth: 1,
   borderRadius: 8,
   marginBottom: 10,
   marginTop: 10,
   alignSelf: 'stretch',
   justifyContent: 'center'
 },
});

AppRegistry.registerComponent('karaoke', () => karaoke);
