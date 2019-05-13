import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ListComponent from '../TotalListComponent';

export default class TotalRankTab extends Component {
  render() {
    return (
      <ListComponent name="Perform A" likes='236'/>
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
