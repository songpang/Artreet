import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="user" size='20'/>
      };

  render() {
    return (
      <View style={style.container}>
        <Text>ProfileTab</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
