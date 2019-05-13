<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer, createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import FindTab from './AppTabNavigator/FindTab';
import PerformTab from './AppTabNavigator/PerformTab';
import RankTab from './AppTabNavigator/RankTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

export default class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name='ios-menu' style={{paddingLeft:10}}/>,
        title: 'Artreet',
        headerRight: <Icon name='ios-send' style={{paddingRight:10}}/>,
    }

  render() {
    return (
      <AppTabContainer/>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({
    HomeTab : {screen: HomeTab},
    FindTab : {screen: FindTab},
    PerformTab : {screen: PerformTab},
    RankTab : {screen: RankTab},
    ProfileTab : {screen: ProfileTab},
},{
    tabBarOptions:{
        style: {
            ...Platform.select({
                ios:{
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
})
>>>>>>> 781a9a99638605c2eb6e0e9d68e4925024254379

const AppTabContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    alignItems: "center",
    justifyContent: "center"
  }
});
=======
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 781a9a99638605c2eb6e0e9d68e4925024254379
