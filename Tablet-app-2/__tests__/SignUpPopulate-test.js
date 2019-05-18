//__tests__Home-test.js

import React from 'react';
import SignUpPopulateScreen from '../screens/SignUpPopulateScreen';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpPopulateScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

// TO DO: Correct component stuff
describe('Sign Up snapshot', () => {
  it('should redirect to reservation list screen', () => {
    let handleReservationMock = jest.fn()
    let reservationComponent = renderer.create(
      <SignUpPopulateScreen
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
        <SignUpPopulateScreen
          handleReset={handleResetMock}
        />
      ).getInstance()
  
      resetComponent.resetForm()
  
      expect(handleResetMock).toBeCalled()
    });
  });

  // https://stackoverflow.com/questions/48088489/react-jestjs-enzyme-how-to-test-for-reference-function
  // Line 160
  // unit test for the local variable: let populatedvalues...

  describe('Experimenting with the local variable', () => {
    it('should try to do something', () => {
      const wrapper = shallow(<SignUpPopulateScreen />);
      expect(wrapper.find('populatedValues')).toBeUndefined;
      // expect(wrapper.checkBoxChecked()).equals(true); //error appears here
    });
  });

  // expect(wrapper.instance().checkBoxChecked()).equals(true);
  // describe('Fetch snapshot', () => {
  //   it('should fetch the back-end data', () => {
  //     let handleFetchMock = jest.fn()
  //     let fetchComponent = renderer.create(
  //       <SignUpScreenPopulate
  //         handleFetch={handleFetchMock}
  //       />
  //     ).getInstance()
  
  //     let params = {
  //       "method": "POST",
  //       "body": value
  //   };

  //     fetchComponent.fetch('https://wp9akim1u0.execute-api.us-east-1.amazonaws.com/dev/gprcreate', params)
  
  //     expect(handleResetMock).toBeCalled()
  //   });
  // });

  // https://github.com/facebook/create-react-app/issues/967

  beforeEach(function() {

    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
          resolve({
            ok: true, 
            Id: '123', 
            json: function() { 
              return {Id: '123'}
            }
          });
        });
  
        return p;
    });
  
  });
  
  it("ack", async function() {
    const response = await Api.ack('foo', 'bar');
    console.log(response);
    expect(response.Id).toBe(1); 
  });