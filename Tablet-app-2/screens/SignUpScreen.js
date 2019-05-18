import React from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Countries = t.enums({
    'US': 'United States',
    'Canada': 'Canada'
});

const ccTypes = t.enums({
    'Visa': 'Visa',
    'Mastercard': 'Mastercard',
    'Discover': 'Discover',
    'American Express': 'American Express',
    "Dinner's Club": "Dinner's Club"
});

const User = t.struct({
    first_name: t.String,
    last_name: t.String,
    email: t.String,
    phone: t.String,
    date_of_birth: t.String,
    drivers_license: t.String,
    drivers_license_state: t.String,
    credit_card_type: ccTypes,
    credit_card_number: t.String,
    cvc: t.Number,
    expiration_date: t.String,
    address: t.String,
    additional_address: t.maybe(t.String),
    city: t.String,
    state: t.String,
    country: Countries,
    zip: t.Number,
    password: t.String,
    confirm_password: t.String
});


const options = {
    fields: {
        cvc: {
            placeholder: 'Security code',
        },
        phone: {
            placeholder: '(___) ___-____'
        },
        expiration_date: {
            placeholder: 'MM/YY',
            // StyleSheet: shortStyle
        },
        date_of_birth: {
            placeholder: 'MM/DD/YYYY',
            // style: abcStyle
        },
        password: {
            password: true,
            secureTextEntry: true,
            placeholder: 'at least 8 characters'
        },
        confirm_password: {
            password: true,
            secureTextEntry: true
        },
    },
};


export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'Account',
    };


    resetForm() { // This function resets the form after submitting
        this.setState({ value: null });
    }

    handleCreateButton = () => {
        const fetch = require('node-fetch');
        const value = this._form.getValue(); // use that ref to get the form value
        // console.log('value: ', value);
        // console.log("hit")
        let params = {
            "method": "POST",
            "body": value
        };
        params.body = JSON.stringify(params.body);
        //fetch('https://wp9akim1u0.execute-api.us-east-1.amazonaws.com/dev/reservations/H123456783') //this is for GET request
        // fetch('https://wp9akim1u0.execute-api.us-east-1.amazonaws.com/dev/gprcreate', params) // this is for POST request
        fetch('https://wp9akim1u0.execute-api.us-east-1.amazonaws.com/dev/gprcreate', params)
            .then(res => res.text())
        // .then(body => console.log(body));

        // this.resetForm(); // Clears all fields ***
    }


    render() {
        // const { navigate } = this.props.navigation
        return (
            <ScrollView>
                <Text style={styles.paragraph}>Gold Plus Rewards Sign Up</Text>

                <View style={styles.container}>
                    <Form
                        ref={c => this._form = c} // assign a ref 
                        type={User}
                        options={options}
                    />

                    <Button
                        title="Create my account"
                        color="#FFCC00"
                        accessibilityLabel="Create a new Gold Plus Rewards account"
                        onPress={this.handleCreateButton}
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
        marginTop: 10,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    form: {
        alignContent: 'center',
    },
    paragraph: {
        // margin: 24,
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFCC00',
    },
});
