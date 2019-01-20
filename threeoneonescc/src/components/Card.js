import React from 'react';
import {View} from 'react-native';


const Card = (props) => {

    return(
        <View style = {styles.containerStyle}>
        {props.children}
        </View>
    );
    
};

const styles = {
    containerStyle:{
        //overall boarder
        borderWidth: 1,
        //corners that are rounder
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWith: 0,
        shadow:  '#000',
        
        shadowOffset: { width: 0, height: 2},
        shadowOpocaity: 0.1,
        //rounddenessss
        shadowRadius: 2,
        elevation: 1,
        //spacing?
        marginLeft: 5,
        marginRight:5,
        marginTop: 10

    },
    textStyle: {
        //not sur eif this does anything?
        fontSize: 40
    }
};

export default Card;