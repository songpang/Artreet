import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import HomeTab from "./AppTabNavigator/HomeTab";
import FindTab from "./AppTabNavigator/FindTab";
import PerformTab from "./AppTabNavigator/PerformTab";
import RankTab from "./AppTabNavigator/RankTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="menu" size='20' style={{ paddingLeft: 10 }} />,
    title: "Artreet"
  };

  render() {
    return <AppTabContainer />;
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    FindTab: { screen: FindTab },
    PerformTab: { screen: PerformTab },
    RankTab: { screen: RankTab },
    ProfileTab: { screen: ProfileTab }
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "#FFF",
      activeBackgroundColor: "#EEE",
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
