import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
import { Icon } from 'native-base';
 
class RankTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-heart' style={{color:tintColor}}/>
        )
    }

    render(){
        return (
            <View style={style.container}>
                <Text>RankTab</Text>
            </View>
        );
    }
}
export default RankTab;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})