import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Content, Container, DeckSwiper } from "native-base";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardComponent from "../CardComponent";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="home" size='20'/>
  };

  render() {
    return (
      <Container style={style.container}>
        <View>
          <Text style={style.headerText}>
            Hot Performer
          </Text>
        </View>
        <Content>
          <CardComponent name="Performer A" image="1" />
          <CardComponent name="Performer B" image="2" />
          <CardComponent name="Performer C" image="3" />
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  headerText: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingHorizontal: 10,
      paddingVertical: 10,
      textShadowColor: '#AAA',
      textShadowOffset: {width: 1, height: 3},
      textShadowRadius: 5
  }
});
