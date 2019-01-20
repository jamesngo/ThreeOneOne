import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AppRegistry,
    Alert

} from "react-native";

class HomeScreen extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Button onPress={this._onPressButton}
                    title = "Go to Login"
                    color = "#0000ff"
                />
            </View>
        );
    }
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('threeoneonesc', () => HomeScreen);