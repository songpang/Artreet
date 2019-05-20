import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content } from 'native-base';
import ListComponent from "../WeeklyListComponent";

export default class WeeklyRankTab extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListComponent name="Perform B" likes="126" />
          <ListComponent name="Perform A" likes="236" />
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
