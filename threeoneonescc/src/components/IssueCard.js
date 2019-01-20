import React, { Component } from 'react';
import { Text, View,Button, Alert, StyleSheet, ScrollView  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class IssueCard extends Component {

    constructor(props){
      super(props);
      this.state = {text: ''};
    }

    render() {
      return (
        <View style = {styles.container}> 
          <View>
            <Text> {this.props.title}</Text>
          </View>
          {/* <Image/> */}
          <View style ={styles.descriptionBox}>
            <Text>{this.props.description}</Text>
          </View>
          <View style = {styles.addressBox}>
            <Text>{this.props.address}</Text>
          </View>
        </View>
        // <Text>hello</Text>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  descriptionBox: {
    borderWidth:1,
    height:100,
    marginBottom:10,
    flexDirection:'row',
    flexWrap:'wrap',
    flex:2
    
  },

  addressBox:{
    borderWidth: 1,
    height: 50
  }
});

export default IssueCard;