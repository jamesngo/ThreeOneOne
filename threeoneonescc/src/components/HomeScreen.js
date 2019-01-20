import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
import { Text , View, Button, StyleSheet } from 'react-native';
import NavBar from './navbar'
import HomeView from './HomeView';

import IssueScreen from './IssueScreen';
class HomeScreen extends React.Component {


    constructor(props){
        super(props);
      }
    // static navigationOptions = {
    //   title: 'Welcome',
    // };
    render() {

      return (
          <View >
            {<HomeView/>
              /* <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text>
        
            <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text>
            <Text>dfdsfsd</Text> */}
            <NavBar navigation={this.props.navigation}/>
          </View>

        
      );
    }
  }

  
  
    export default HomeScreen;