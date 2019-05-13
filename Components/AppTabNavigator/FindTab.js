<<<<<<< HEAD
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class FindTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="eye" size='20'/>
      };

  render() {
    return (
      <View style={style.container}>
        <Text>FindTab</Text>
      </View>
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
=======
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
import { Icon } from 'native-base';
 
class FindTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-search' style={{color:tintColor}}/>
        )
    }

    render(){
        return (
            <View style={style.container}>
                <Text>FindTab</Text>
            </View>
        );
    }
}
export default FindTab;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
>>>>>>> 781a9a99638605c2eb6e0e9d68e4925024254379
