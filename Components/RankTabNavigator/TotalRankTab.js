import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import ListComponent from "../TotalListComponent";

export default class TotalRankTab extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListComponent name="Perform A" likes="236" />
          <ListComponent name="Perform B" likes="126" />
        </Content>
      </Container>
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
