import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ReservationScreen from '../screens/ReservationScreen';
import AccountScreen from '../screens/AccountScreen';
import ReservationListScreen from '../screens/ReservationListScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpPopulateScreen from '../screens/SignUpPopulateScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          // ? `ios-information-circle${focused ? '' : '-outline'}`
          // : 'md-information-circle'
          // ? `ios-home${focused ? '' : '-outline'}`
          // : 'md-home'
          ? 'ios-home' : 'md-home'
      }
    />
  ),
};

const ReservationStack = createStackNavigator({
  Reservations: ReservationScreen,
  ReservationView: ReservationListScreen,

});

// TO DO: Need to add custom icons and switch up tab bar icons
ReservationStack.navigationOptions = {
  tabBarLabel: 'Reservations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
    />
  ),
};

const AccountStack = createStackNavigator({
  SignUp: SignUpScreen,
  Account: AccountScreen,
  SignUpPopulate: SignUpPopulateScreen,
  
});

// TO DO: Need to add custom icons and switch up tab bar icons
AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};


// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  HomeStack,
  ReservationStack,
  AccountStack,
  //LinksStack,
  //SettingsStack,
});
