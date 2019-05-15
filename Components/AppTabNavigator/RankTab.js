import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import Total from '../RankTabNavigator/TotalRankTab';
import Weekly from '../RankTabNavigator/WeeklyRankTab';

export default class RankTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="star" size='20'/>
      };

  render() {
    return (
      <TopContainer/>
    );
  }
}

const TopNavigator = createMaterialTopTabNavigator({
    WeeklyRanking: { screen: Weekly },
    TotalRanking: { screen: Total }
},{
    tabBarOptions:{
        style:{
            backgroundColor: '#FFF'
        },
        indicatorStyle:{
            backgroundColor: '#000'
        },
        labelStyle:{
            color: '#000',
        }
    }
})

const TopContainer = createAppContainer(TopNavigator)

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rank: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  }
});
