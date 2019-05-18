import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    StyleSheet,
} from 'react-native';
import ReservationScreen from '../screens/ReservationScreen'
import SignUpScreen from './SignUpScreen';
import SignUpPopulateScreen from './SignUpPopulateScreen';

const PickUpLocation = "Los Angeles International Airport"
const DropOffLocation = "Los Angeles International Airport"
const PickUpDateTime = "May 6, 6:30 PM"
const DropOffDateTime = "May 8, 6:30 PM"
const Vehicle = "Compact 2/4 Door"
const Total = "207.23 USD"

// handleSignUpButton = () => {
//     const fetch = require('node-fetch');
//     navigate('SignUpPopulate', {screen: SignUpPopulateScreen})

// }


export default class ReservationListScreen extends Component {

    handleSignUpButton = () => {
        const { navigate } = this.props.navigation
        navigate('SignUpPopulate', { screen: SignUpPopulateScreen })
    }

    render() {
        // const ReservationDate2 = this.ReservationDate(ReservationDate => {<Text>ReservationDate</Text>})
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>

                    <Text style={styles.paragraph}>Your Trip Summary</Text>
                    <Text> </Text>
                    <Image
                        style={styles.imageStyle}
                        // resizeMode={'contain'}
                        // resizeMode={'center'}
                        // resizeMethod={'auto'}
                        // resizeMethod={'resize'}
                        // resizeMethod={'scale'}
                        source={require('../assets/images/Picture1.png')}
                    />

                    <View style={styles.textContainer}>

                        {/* <Text style = {styles.header}>
                                Pick Up Location: {' '}
                            <Text style ={styles.subheader}>
                                {PickUpLocation}
                            </Text>
                        </Text> */}

                        <Text style={styles.header}> Pick Up Location: {' '} </Text>
                        <Text style={styles.subheader}> {PickUpLocation} </Text>
                        <Text> </Text>

                        <Text style={styles.header}> Drop Off Location: {' '} </Text>
                        <Text style={styles.subheader}> {DropOffLocation} </Text>
                        <Text> </Text>

                        <Text style={styles.header}> Pick-up: {' '} </Text>
                        <Text style={styles.subheader}> {PickUpDateTime} </Text>
                        <Text> </Text>

                        <Text style={styles.header}>
                            Drop-off: {' '}
                            <Text style={styles.subheader}>
                                {DropOffDateTime}
                            </Text>
                        </Text>

                        <Text style={styles.header}> Vehicle: {' '} </Text>
                        <Text style={styles.subheader}> {Vehicle} </Text>
                        <Text> </Text>

                        <Text style={styles.header}> Total: {' '} </Text>
                        <Text style={styles.subheader}> {Total} </Text>
                        <Text> </Text>

                        <Button title="Sign up with this reservation"
                            testID='resbutton'
                            // onPress={() => this.props.navigation.navigate('SignUpPopulate')}
                            onPress={this.handleSignUpButton}
                        />

                        <Text> </Text>
                    </View>
                </View>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // padding: 20,
        backgroundColor: '#ffffff',
    },
    textContainer: {
        padding: 20,
    },
    form: {
        alignContent: 'center',
    },
    paragraph: {
        // margin: 24,
        // marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
    },
    imageStyle: {
        // flex: 1,
        // width: null,
        // height: null,
        width: 450,
        height: 200,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        // justifyContent: 'space-between'
    },
    subheader: {
        fontSize: 14,
        fontWeight: 'normal'
    }
});
