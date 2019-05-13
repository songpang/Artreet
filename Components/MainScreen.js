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

const AppTabContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});