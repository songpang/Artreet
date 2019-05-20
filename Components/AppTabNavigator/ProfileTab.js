import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Profile from "../ProfileComponent";

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="user" size="20" />
  };

  render() {
    return <Profile />;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
