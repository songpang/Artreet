import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
} from "native-base";

export default class CardComponent extends Component {
  render() {
    const images = {
        '1': require('../assets/1.jpg'),
        '2': require('../assets/2.jpg'),
        '3': require('../assets/3.jpg'),
    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
            />
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>2019년 5월 13일</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
            <Image source={images[this.props.image]} style={{width:null, height:200, flex:1}}/>
        </CardItem>
      </Card>
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
