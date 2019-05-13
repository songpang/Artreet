<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
import { Icon } from 'native-base';
 
class HomeTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{color:tintColor}}/>
        )
    }

    render(){
        return (
            <View style={style.container}>
                <Text>HomeTab</Text>
            </View>
        );
    }
}
export default HomeTab;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
>>>>>>> 781a9a99638605c2eb6e0e9d68e4925024254379
