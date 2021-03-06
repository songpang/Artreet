import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
import { Icon } from 'native-base';
 
class PerformTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-add-circle' style={{color:tintColor}}/>
        )
    }
    
    render(){
        return (
            <View style={style.container}>
                <Text>PerformTab</Text>
            </View>
        );
    }
}
export default PerformTab;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})