// Import a library to help create a component
import * as React from "react";
// import ReactNative from 'react-native';
import { Text, View } from "react-native";


// Create a component
//props is adding the paramaters from the index.js class
const Header = props => {
  //optional to put the return and ();

  //calling for the style
  const { textStyle, viewStyle } = styles;
 
//returning the item with the style
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//styling the item above
const styles = {
  viewStyle: {
    backgroundColor: "#F8F8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    elevation: 2,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};


export default Header;
