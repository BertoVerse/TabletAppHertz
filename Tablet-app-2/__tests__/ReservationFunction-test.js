// __tests__ReservationFunction-test.js

const reservation = require('../components/ReservationFunction');

test('checks reservation with valid values', () => {
    const resNum = 'H123456789';
    const lastName = 'Doe';
    expect(reservation(resNum, lastName)).toBeTruthy();
});

test('checks that reservation cannot be null', () => {
    const resNum = '';
    expect(reservation(resNum, 'B')).toBeFalsy();
});

test('checks that last name is not null', () => {
    const lastName = '';
    expect(reservation('H123456789', lastName)).toBeFalsy();
});

test('checks that last name is not null', () => {
    const lastName = null;
    expect(reservation('H123456789', lastName)).toBeFalsy();
});

test('checks that reservation is a string not a number', () => {
    const resNum = 1; 
    expect(reservation(resNum, 'Doe')).toBeFalsy();
});

test('checks that lastname is a string not a number', () => {
    const lastName = 1; 
    expect(reservation('HZ123456789', lastName)).toBeFalsy(); 
});

function reservationCompile() {
    throw new ConfigError('No parameters were passed');
  }
  
  test('searching for reservation without valid fields', () => {
    const valid = reservation(null,null);
    expect(reservationCompile).toThrow();
  });