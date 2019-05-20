import React, { Component } from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <View style={style.logoContainer}>
          <Image
            style={style.logo}
            source={require("../../assets/logo.png")}
          />
          <Text style={style.title}>당신과 가까운곳에 있는 예술가를 만나세요</Text>
        </View>
        <View style={style.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ee5253"
  },
  logo: {
    width: 180,
    height: 150
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    color: "#fff",
    textAlign: "center",
    opacity: 0.8
  }
});
