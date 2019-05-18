import React, { Component } from 'react';
import { 
    View,
    Button,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
//import StackNavigator from './navigation/StackNavigator'

export default class AccountScreen extends Component {
    render () {
        return (
            <View>
                <Button title = "Go to home screen"
                    onPress={()=>this.props.navigation.navigate('Home')} />
            </View>
    );
}

}
