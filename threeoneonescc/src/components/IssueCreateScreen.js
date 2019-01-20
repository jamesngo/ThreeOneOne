import React, { Component } from 'react';
import { Text, View,Button, Alert, StyleSheet, ScrollView  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import axios from 'axios';
//import * as request from 'request';


class IssueCreateScreen extends Component {

    constructor(props){
      super(props);
      this.state = {text: ''};
    }
    render() {
      return (
      <View style = {styles.container}>
        <ScrollView>  
          <Text style = {styles.title}> IssueName</Text>
          <TextInput style = {styles.descriptionBox}
              placeholder= "description"
          />
          <TextInput style = {styles.addressBox} placeholder = "address"/>
          
        </ScrollView>
          
          
        
        <View style = {styles.button}>
          <Button   
              onPress={() => {
                const axios = require('axios')

                var headers = {
                  'Content-Type': 'application/json'
               }

                axios.post('http://https://169.233.207.180:8080/createUser', {
                    "email": "alanBrill@cooll.com",
                    "fn": "alan",
                    "ln": "brilliant"
                  }, {headers: headers})
                .then((res) => {
                  console.log(`statusCode: ${res.statusCode}`)
                  console.log(res)
                })
                .catch((error) => {
                  console.error(error)
                })

                // const options = {
                //   uri: 'http://https://169.233.207.180:8080/createUser',
                //   method: 'POST',
                //   json: true,
                  // body: JSON.stringify({
                  //   "email": "alanBrill@cooll.com",
                  //   "fn": "alan",
                  //   "ln": "brilliant"
                  // })
                // }
                // request.post(options);
              }}
              title="Post Issue"
          />
        </View>
      
      </View>
        
      );
    }
}

const styles = StyleSheet.create({
  container:{
    height: 300,
    justifyContent: 'space-evenly'
  },
  button:{
    padding: 1, 
     flexDirection:'column',
     flex:3,
     alignSelf:'flex-end',
     position: 'absolute',
    bottom: 0
  },
  title: {
    fontSize: 35,
    alignSelf: 'center',
    
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

export default IssueCreateScreen;

