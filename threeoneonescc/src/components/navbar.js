import {createStackNavigator} from 'react-navigation';
import React, { Component, } from 'react';
import { Text , View, Button, StyleSheet } from 'react-native';

import HomeScreen from './HomeScreen'
import IssueScreen from './IssueScreen'


class NavBar extends Component{

 constructor(props){
    super(props);
}
// static navigationOptions = {
//   title: 'Welcome',
// };
    render() {

        return (
            <View style = {styles.navbar}>
                <Button
                title=" Issues"
                onPress={() => this.props.navigation.navigate('Issues')}
                />
                <Button
                title="Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>

        
        );
    }
}

const styles = StyleSheet.create({
    navbar:{
      position:'absolute',
      bottom:30,
      flex:10,
      flexDirection:'row'

    }
  })



export default NavBar;  