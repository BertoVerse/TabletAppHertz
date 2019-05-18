//__tests__SignUp-test.js

import React from 'react';
import SignUpScreen from '../screens/SignUpScreen';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import { shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
// Enzyme.configure({ adapter: new Adapter() })


// test('render a text', () => {
//   const wrapper = shallow(
//       <Text>Hello Jest!</Text>
//   );
//   expect(wrapper).toMatchSnapshot();
// });


test('renders correctly', () => {
  const tree = renderer.create(<SignUpScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

// TO DO: Correct component stuff
describe('Sign Up snapshot', () => {
  it('should redirect to reservation list screen', () => {
    let handleReservationMock = jest.fn()
    let reservationComponent = renderer.create(
      <SignUpScreen
        handleReservation={handleReservationMock}
      />
    ).getInstance()

    reservationComponent.handleCreateButton()

    expect(handleReservationMock).toBeCalled()
  });
});


describe('Reset snapshot', () => {
    it('should reset the sign up form', () => {
      let handleResetMock = jest.fn()
      let resetComponent = renderer.create(
        <SignUpScreen
          handleReset={handleResetMock}
        />
      ).getInstance()
  
      resetComponent.resetForm()
  
      expect(handleResetMock).toBeCalled()
    });
  });

  describe('Reset snapshot', () => {
    it('should reset the sign up form', () => {
      let handleFetchMock = jest.fn()
      let fetchComponent = renderer.create(
        <SignUpScreen
          handleFetch={handleFetchMock}
        />
      ).getInstance()
  
      fetchComponent.fetch()
  
      expect(handleResetMock).toBeCalled()
    });
  });




