import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
import { Text , View, Button } from 'react-native';

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
          <View>
                <Button
                 title="Go to Issues"
                 onPress={() => this.props.navigation.navigate('Issues')}
                 />
          </View>

        
      );
    }
  }
  
    export default HomeScreen;