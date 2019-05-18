//__tests__Home-test.js

import React from 'react';
import ReservationScreen from '../screens/ReservationScreen';
import renderer from 'react-test-renderer';
// import AccountScreen from '../screens/AccountScreen';
import { shallow, mount, render } from 'enzyme';

describe('Reservation snapshot', () => {

  test('renders correctly', () => {
    const tree = renderer.create(<ReservationScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should redirect to reservation list screen', async () => {
    let handleReservationMock = jest.fn()
    let reservationComponent = renderer.create(
      <ReservationScreen
        handleReservation={handleReservationMock}
      />
    ).getInstance()

    reservationComponent.handleSearchButton()

    expect(handleReservationMock).toBeCalled()
  });

  // it('test render', async () => {
  //   let handleRenderMock = jest.fn()
  //   let renderComponent = renderer.create(
  //     <ReservationScreen
  //       handleRender={handleRenderMock}
  //     />
  //   ).getInstance()

  //   renderComponent.render()

  //   expect(handleRenderMock).toBeCalled()
  // });

  // it('componentDidMount should fetch, and put groceries in state if ok', async () => {
  //   const renderedComponent = await shallow(<ReservationScreen />)
  //   await renderedComponent.update()
  //   expect(renderedComponent.props('navigate').toBe()
    
  //   // expect(renderedComponent.state('groceries').length).toEqual(2)
  // });

  // TO DO: In it's current state, it completes destroys the other tests

  // describe('componentDidMount', () => {
  //   it('sets the state componentDidMount', async () => {
  //     window.fetch = jest.fn().mockImplementation(() => ({
  //       status: 200,
  //       json: () => new Promise((resolve, reject) => {
  //         resolve({
  //           Reservation: [
  //             // {confirmationNumber: 'H123456789', id: 10}, {item: 'greens', id: 3}
  //             {confirmationNumber: 'H123456789'}, {lastName: 'Doe',}
  //           ]
  //         })
  //       })
  //     }))
  //     const renderedComponent = await shallow(<App />)
  //     await renderedComponent.update()
  //     expect(renderedComponent.state('groceries').length).toEqual(2)
  //   })
  // }

////COMPLETES ruins the coverage
  // describe('componentDidMount', () => {
  //   it('sets the state componentDidMount', async () => {
  //     window.fetch = jest.fn().mockImplementation(() => ({
  //         })
  //       )
  //     })
  //     const renderedComponent = await shallow(<App />)
  //     await renderedComponent.update()
  //     expect(renderedComponent.state('groceries').length).toEqual(2)
  //   })
  

  // make our assertion and what we expect to happen 
  it('should render without throwing an error', () => {
    expect(shallow(<ReservationScreen />).find('Form.reservationform').exists()).toBe(true)
  })

  jest.mock('tcomb-form-native', () => {
    const React = require('React')
    const t = require.requireActual('tcomb-form-native')
    // Patch the base Component class to make rendering possible.
    t.form.Component.prototype.render = function render() {
      return React.createElement(this.getTemplate().name, this.props)
    }
    return t
  })

});

// https://codereviewvideos.com/course/react-redux-and-redux-saga-with-symfony-3/video/testing-javascript-s-fetch-with-jest-happy-path

// const fetchMock = require('fetch-mock');
// import asyncFetch from '../async-fetch';

// describe('asyncFetch', () => {
//   it('can fetch', async () => {
//     fetchMock.get('http://fake.com', {hello: 'world'});
//     const response = await asyncFetch('http://fake.com');
//     const result = await response.json();
//     expect(result.hello).toEqual("world");
//   });
// });