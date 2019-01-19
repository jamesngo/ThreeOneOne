// Import a library to help create a component
import * as React from 'react';
// import ReactNative from 'react-native';
import { Text, View } from 'react-native';
// if you were to do it wholistically
// import * as ReactNative from 'react-native';



// Create a component
 const Header = (props) => {

    //optional to put the return and ();

        const{ textStyle, viewStyle }= styles;
         // if you were to do it wholistically
        //  <ReactNative.Text>Some Text</ReactNative.Text>
        //  <ReactNative.Text>Some Text</ReactNative.Text>
       
       return(<View style={viewStyle}>  
          <Text style={textStyle}>{props.headerText}</Text>
        </View>
       );
     };

     const styles = {
         viewStyle:{
             backgroundColor:"#F8F8f8",
             justifyContent: 'center',
             alignItems:'center',
             height: 60,
             elevation: 2,
             paddingTop: 15,
             shadowColor: '#000',
             shadowOffset: {width: 0, height: 2},
             shadowOpacity: 0.9,
             position: 'relative'
         },
         textStyle:{
             fontSize: 20
         }

 };



// Render it to the device.
// if you were to do it wholistically
// ReactNative.AppRegistry.registerComponent('albums2',() => App);
export default Header;