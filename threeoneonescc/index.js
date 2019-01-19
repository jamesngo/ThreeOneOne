// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// //

// Import a library to help create a component
import * as React from 'react';
// import ReactNative from 'react-native';
import {Text, AppRegistry } from 'react-native';
import Header from './src/components/header'
// if you were to do it wholistically
// import * as ReactNative from 'react-native';



// Create a component
 const App = () => {

    //optional to put the return and ();
    //  return(
         // if you were to do it wholistically
        //  <ReactNative.Text>Some Text</ReactNative.Text>
        //  <ReactNative.Text>Some Text</ReactNative.Text>
        
 
 
        return  <Header />
//   placement="left"
//   leftComponent={{ icon: 'menu', color: '#fff' }}
//   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//   rightComponent={{ icon: 'home', color: '#fff' }}
// />
        // <Text>Some Text</Text>
    //  );

 };





// Render it to the device.
// if you were to do it wholistically
// ReactNative.AppRegistry.registerComponent('albums2',() => App);
AppRegistry.registerComponent('threeoneonescc',() => App);

