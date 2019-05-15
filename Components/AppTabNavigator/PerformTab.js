import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class PerformTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="music-tone-alt" size='20'/>
      };

  render() {
    return (
      <View style={style.container}>
        <Text>PerformTab</Text>
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
