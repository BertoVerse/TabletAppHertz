import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ImageComponent,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { navigate } from 'react-navigation';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { black } from 'ansi-colors';
import ReservationScreen from './ReservationScreen';


export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    firstName: ""
  };

  render() {
    const { navigate } = this.props.navigation
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            {/* Adds Hertz image to the top of the page */}
            <Image
              source={
                __DEV__
                  ? require('../assets/images/splash.png')
                  : require('../assets/images/splash.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          {/* Welcome to Hertz message */}
          <View style={styles.getStartedContainer}>
            <Text style={styles.paragraph}>Welcome to Hertz </Text>
          </View>

          {/* Add car image */}
          <Image style={styles.imageStyle} source={require('../assets/images/Group-15692.png')} />

          {/* View Reservations button */}
          <Button style={styles.button}

            title="View Reservations"
            color="#FFCC00"
            accessibilityLabel="View your existing reservations"
            // onPress={this.handleReservation}
            onPress={() => navigate("Reservations", { screen: "ReservationScreen" })}

          />

          {/* Space between buttons */}
          <Text> </Text>

          {/* Sign Up for GPR button */}
          <Button

            title="Sign up for GPR"
            color="#FFCC00"
            accessibilityLabel="Create a Hertz Gold Plus Rewards membership account"
            // onPress={this.handleSignUp}  
            // onPress = {() => console.log('Hello') }
            // onPress={() => navigate("Account", {screen: "AccountScreen"})}
            onPress={() => Alert.alert(
              'Do you have an existing reservation?',
              'This will make your sign up process easier!',
              [
                {
                  text: 'Yes',
                  onPress: () => navigate("Reservations", { screen: "ReservationScreen" })
                },
                {
                  text: 'No',
                  onPress: () => navigate("SignUp", { screen: "SignUpScreen" })
                },
                {
                  text: 'Cancel', onPress: () => console.log('Cancel pressed'),
                  style: 'cancel'
                },
              ],
              { cancelable: false },
            )
            }

          />

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  imageStyle: {
    padding: 50,
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
    // paddingBottom: 20, 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    // marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  paragraph: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFCC00',
  }
});
