import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Left, Body, Right, Thumbnail, List, ListItem } from "native-base";

export default class TotalListComponent extends Component {
  render() {
    return (
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
            />
          </Left>
          <Body>
            <Text>{this.props.name}</Text>
            <Text note numberOfLines={1} style={style.configuration}>
              Artist Configuration
            </Text>
          </Body>
          <Right>
            <Text>{this.props.likes}Likes</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  configuration: {
    color: "#777"
  }
});
