import React from 'react';
import { 
    Button,
    // Form,
    ScrollView, 
    StyleSheet,
    String,
    Text,
    TextInput,
    View,
} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
// import { gray } from 'ansi-colors';

import t from 'tcomb-form-native';
// var t = require('tcomb-form-native');

const Form = t.form.Form;

const Reservation = t.struct({
  confirmationNumber: t.String,
  lastName: t.String,
});

export default class ReservationScreen extends React.Component {
  constructor(){
    super();
    global.firstNameVar;
    global.lastNameVar;
    global.emailVar;
    global.phoneVar;
    global.dobVar;
    global.driversLicenseVar;
    global.driversLicenseStateVar;
    global.creditCardTypeVar;
    global.creditCardNumberVar;
    global.zipVar;
    global.stateVar;
    global.expirationDateVar;
    global.additionalEmailVar;
    global.cityVar;
    global.countryVar;
    global.addressVar;
  }

  static navigationOptions = {
    title: 'Find your reservation',
  };


  handleSearchButton = async () => {
    const fetch = require('node-fetch');
    const { navigate } = this.props.navigation
    navigate("ReservationView", {screen: "ReservationListScreen"})
    const value = this._form.getValue(); // use that ref to get the form value
    // console.log('value: ', value);
    const confirmationNum = value.confirmationNumber;
    // console.log(confirmationNum);
    const url = ('https://wp9akim1u0.execute-api.us-east-1.amazonaws.com/dev/reservations/' + confirmationNum);
    // console.log(url);
  
    // fetch(url) //this is for GET request
    //   .then(res => res.json())
    //   .then(json => console.log(json));
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)

    firstNameVar = data.first_name;
    lastNameVar = data.last_name;
    creditCardNumberVar = data.credit_card_number;
    emailVar = data.email;
    additionalEmailVar = data.additional_address;
    dobVar = data.date_of_birth;
    creditCardTypeVar = data.credit_card_type;
    cityVar = data.city;
    stateVar = data.state;
    countryVar = data.country;
    expirationDateVar = data.expiration_date;
    zipVar = data.zip;
    phoneVar = data.phone;
    driversLicenseStateVar = data.drivers_license_state;
    driversLicenseVar = data.drivers_license;
    addressVar = data.address;
    

    // console.log(firstNameVar);

  }


  render() {
    return (
      <ScrollView style={styles.container}> 
      <View style={styles.container}>
        <Form 
          // TO DO: trying to make it so that the class name can be used in testing
          classname='reservationform'
          ref={c => this._form = c} // assign a ref 
          type={Reservation} 
          /> 

        <Button
            title="Search my reservation"
            color="#FFCC00"
            accessibilityLabel="Search for an existing reservation"
            // onPress={() => navigate("ReservationView", {screen: "ReservationListScreen"})}
            onPress= {this.handleSearchButton}
          />
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 15,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  form: {
    alignContent: 'center',
  },
});
