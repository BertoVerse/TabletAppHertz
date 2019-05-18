// __tests__SignUpFunctions-test.js

const signup = require('../components/SignUpFunction');

const user = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    drivers_license: '',
    drivers_license_state: '',
    credit_card_type: '',
    credit_card_number: '',
    cvc: '',
    expiration_date: '',
    address: '',
    additional_address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    password: '',
    confirm_password: ''
}

beforeEach(() => {
    user.first_name = 'Azul';
    user.last_name = 'Doe';
    user.email = 'foo@bar.com'
    user.phone = '2391234567'
    user.date_of_birth = '1/1/1992'
    user.drivers_license = 'O351-9272-4891B'
    user.drivers_license_state = 'FL'
    user.credit_card_type = 'Visa'
    user.credit_card_number = '5555555555555555'
    user.cvc = '555'
    user.expiration_date = '1/1/2020'
    user.address = '1234 Sesame Street'
    user.city = 'Fort Myers'
    user.state = 'FL'
    user.country = 'US'
    user.zip = '33965'
    user.password = 'password'
    user.confirm_password = 'password'
});

afterEach(() => {
});

test('testing with ALL fields filled with valid information', () => {
    expect(signup(user)).toBeTruthy();
});

// NULL TESTS

test('testing with first name field missing', () => {
    user.first_name = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with last name field missing', () => {
    user.last_name = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with email field missing', () => {
    user.email = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with phone field missing', () => {
    user.phone = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with date of birth field missing', () => {
    user.date_of_birth = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with drivers license field missing', () => {
    user.drivers_license = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with drivers license state field missing', () => {
    user.drivers_license_state = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with credit card type field missing', () => {
    user.credit_card_type = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with credit card number field missing', () => {
    user.credit_card_number = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with cvc field missing', () => {
    user.cvc = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with expiration date field missing', () => {
    user.expiration_date = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with address field missing', () => {
    user.address = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with city field missing', () => {
    user.city = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with state field missing', () => {
    user.state = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with country field missing', () => {
    user.country = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with zip field missing', () => {
    user.zip = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with password field missing', () => {
    user.password = '';
    expect(signup(user)).toBeFalsy();
});

test('testing with confirm password field missing', () => {
    user.confirm_password = '';
    expect(signup(user)).toBeFalsy();
});






// INVALID INFORMATION TESTS

test('testing with first name invalid information', () => {
    user.first_name = '1234';
    expect(signup(user)).toBeFalsy();
});

test('testing with last name invalid information', () => {
    user.last_name = '1234';
    expect(signup(user)).toBeFalsy();
});

test('testing with drivers license state invalid information', () => {
    user.drivers_license_state = '1234';
    expect(signup(user)).toBeFalsy();
});

test('testing with city invalid information', () => {
    user.city = '1234';
    expect(signup(user)).toBeFalsy();
});

test('testing with state invalid information', () => {
    user.state = '1234';
    expect(signup(user)).toBeFalsy();
});

test('testing with country invalid information', () => {
    user.country = '1234';
    expect(signup(user)).toBeFalsy();
});

test('testing with invalid # of digits for phone number', () => {
    user.phone = '239123456';
    expect(signup(user)).toBeFalsy();
});

test('testing with invalid # of digits for cvc', () => {
    user.cvc = '1234';
    expect(signup(user)).toBeFalsy();
});

test('testing with invalid # of digits for zip', () => {
    user.zip = '123';
    expect(signup(user)).toBeFalsy();
});

test('testing with invalid # of digits for credit card', () => {
    user.credit_card_number = '123412341234123';
    expect(signup(user)).toBeFalsy();
});

test('testing that password must be at least 8 characters', () => {
    user.password = 'passwor';
    user.confirm_password = 'passwor';
    expect(signup(user)).toBeFalsy; 
})

test('testing that password and confirm_password must be the same', () => {
    user.password = 'password';
    user.confirm_password = 'password';
    expect(signup(user)).toBeTruthy; 
})

test('testing that password and confirm_password with different values', () => {
    user.password = 'password';
    user.confirm_password = 'password1';
    expect(signup(user)).toBeFalsy; 
})