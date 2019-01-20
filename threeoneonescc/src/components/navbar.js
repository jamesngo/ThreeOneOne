import {createStackNavigator} from 'react-navigation';
import React, { Component, } from 'react';
import HomeScreen from './HomeScreen'
import IssueScreen from './IssueScreen'


const NavBar = createStackNavigator({
    Home: {screen: HomeScreen},
    Issue: {screen: IssueScreen},
});

//   const NavBar = () =>{
//      return (nav);
//   }
export default NavBar;  