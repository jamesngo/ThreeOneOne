import {createStackNavigator} from 'react-navigation';
import React, { Component } from 'react';
//import { ScrollView } from 'react-native-gesture-handler';
import { Text, View,Button, Alert, StyleSheet, ScrollView  } from 'react-native';
import IssueCard from './IssueCard';

class IssueScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            issueList: [],
        }
      }
    render() {
        console.log("hello");
        let issueListActive = this.state.issueList.map( (e,i)=>{
            return (<IssueCard title={e.title} address={e.address} description={e.desc} key={i} />);
           // return (<Text>{e.title}</Text>)
        });
      return (
          
        <View>
            <ScrollView>
                {issueListActive}
            </ScrollView>
            <Button   
              onPress={() => {  
                this.setState(previousState=> {
                    previousState.issueList.push({"title": "test", "description":"test","address":"test" });
                    return previousState
                });
               // issueList.push(<IssueCard title='test' address='test' description='test'/>);
              }}
              title={"Add Issues"}
            />
        </View>
      );
    }
  }

  export default IssueScreen;