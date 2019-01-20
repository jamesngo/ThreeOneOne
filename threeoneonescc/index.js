// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// //

// Import a library to help create a component
import * as React from 'react';
// import ReactNative from 'react-native';
import {View,Text, AppRegistry } from 'react-native';
import Issues from './src/components/issue';
//import NavBar from './src/components/navbar';
import IssueScreen from './src/components/IssueScreen';
import IssueCard from './src/components/IssueCard';
import HomeScreen from './src/components/HomeScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';


// import Header from './src/components/header'
// if you were to do it wholistically
// import * as ReactNative from 'react-native';



// Create a component
 const App = () => {

    //optional to put the return and ();
     return(
        <AppContainer/>
        
       // <IssueScreen/>
       // <IssueCard title='hello' description='e' address='re'/>
        //<Issues/>
       //<Text>hello</Text> 
        
        // if you were to do it wholistically
        //  <ReactNative.Text>Some Text</ReactNative.Text>
        //  <ReactNative.Text>Some Text</ReactNative.Text>
//         <Header
//   placement="left"
//   leftComponent={{ icon: 'menu', color: '#fff' }}
//   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//   rightComponent={{ icon: 'home', color: '#fff' }}
// />
     );

 };


 const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Issues: IssueScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );

  const AppContainer = createAppContainer(RootStack);

// Render it to the device.
// if you were to do it wholistically
// ReactNative.AppRegistry.registerComponent('albums2',() => App);
AppRegistry.registerComponent('threeoneonescc',() => App);
//AppRegistry.registerComponent('threeoneonescc',() => Hello);



