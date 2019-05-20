import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Components/MainScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Components/Login/Login';

export default class App extends React.Component {
  render() {
    return (
      <Login/>
    );
  }
}

const AppStackNavigator = createAppContainer(createStackNavigator({
  Main:{
    screen: MainScreen
  }
}))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
