// Import a library to help create a component
import * as React from 'react';
// import ReactNative from 'react-native';
import { Text , AppRegistry } from 'react-native';
// if you were to do it wholistically
// import * as ReactNative from 'react-native';



// Create a component
 const App = () => {

    //optional to put the return and ();
     return(
         // if you were to do it wholistically
        //  <ReactNative.Text>Some Text</ReactNative.Text>
        //  <ReactNative.Text>Some Text</ReactNative.Text>
             <Text>Some Text</Text>


     );

 };



// Render it to the device.
// if you were to do it wholistically
// ReactNative.AppRegistry.registerComponent('albums2',() => App);
export default Header;