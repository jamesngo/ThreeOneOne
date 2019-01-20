// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// //

// Import a library to help create a component
import * as React from "react";
import { Component } from "react";
// import ReactNative from 'react-native';
import { Text, AppRegistry, View, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation"

import Header from "./src/components/header";
import SquareList from "./src/components/SquareList";
import LoginScreen from "./src/components/LoginScreen";
import HomeScreen from "./src/components/HomeScreen";

// if you were to do it wholistically
// import * as ReactNative from 'react-native';

// export default class App extends React.Component{
//     render() {
//         return (
//             <AppStackNavigator />
//         );
//     }
// }

// const AppStackNavigator = createStackNavigator({
//     Login: LoginScreen,
//     Home: HomeScreen
   
// })

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

// Create a component
const App = () => (
  //optional to put the return and ();
  //  return(
  // if you were to do it wholistically
  //  <ReactNative.Text>Some Text</ReactNative.Text>
  //  <ReactNative.Text>Some Text</ReactNative.Text>

  //calls for the class for the header text, think
  <View>
    <Header headerText={"Albums"} />
    <HomeScreen/>
    <LoginScreen/>
    {/* <SquareList /> */}
  </View>
  // return  <Header />
  //   placement="left"
  //   leftComponent={{ icon: 'menu', color: '#fff' }}
  //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  //   rightComponent={{ icon: 'home', color: '#fff' }}
  // />
  // <Text>Some Text</Text>
);

//  };

// Render it to the device.
// if you were to do it wholistically
// ReactNative.AppRegistry.registerComponent('albums2',() => App);
AppRegistry.registerComponent("threeoneonescc", () => App);



