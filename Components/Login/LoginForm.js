import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={style.container}>
        <TextInput
          placeholder="email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          style={style.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          secureTextEntry
          ref={(input) => this.passwordInput = input}
          style={style.input}
        />

        <TouchableOpacity style={style.buttonContainer}>
            <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding:20
  },
  input:{
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 20,
      color: "#FFF",
      paddingHorizontal: 10
  },
  buttonContainer:{
      backgroundColor: "#ff6b6b",
      paddingVertical: 20
  },
  buttonText:{
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700'
  }
});
