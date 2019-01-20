import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AppRegistry,
    Alert
} from "react-native";

class LoginScreen extends Component {

    static navigationOptions = {
        header:null
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Button onPress={this._onPressButton}
                    title = "Go to Home"
                    color = "#841584"
                />
            </View>
        );
    }
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('threeoneonesc', () => LoginScreen);