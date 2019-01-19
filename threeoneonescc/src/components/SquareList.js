import React, { Component } from "react";
import { View, Text } from "react-native";

class SquareList extends Component {

    state = {albums: []};
    componentWillMount(){
        console.log('MOUNT AND BLADE!')
        fetch('https://rallycoding.hero.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums:response.data}));
    }
    //use a class and a render method if we want multiple components or have rather large components
  render() {

    console.log(this.state)
    return (
      <View>
        <Text>SquareList!!!</Text>
      </View>
    );
  }
}

export default SquareList;
