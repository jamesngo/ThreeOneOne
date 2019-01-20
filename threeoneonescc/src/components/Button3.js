import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AppRegistry,
    Alert,
} from "react-native";

class Button3 extends Component {

    _onPressButton() {
        Alert.alert('You love animals!')
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <View style = {styles.bottom}>
                    <Button
                        title = "Gay"
                        onPress={this._onPressButton}
                        style={styles.button}
                        color = "#0000ff"
                    />
                </View>
            </View>
        );
    }
}
export default Button3

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bottom: {
        flex: 1,
        position: 'absolute',
        bottom: -580,
        marginLeft: 190,
        justifyContent: 'flex-end',
        height: 100,
        width: 80
    },

    textStyle: {
        color: '#fff',
        fontSize:22
    }
});

AppRegistry.registerComponent('threeoneonesc', () => Button3);