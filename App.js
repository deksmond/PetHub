import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import welcomeScreen from './welcomeScreen';
import homeScreen from './homeScreen';
import cartScreen from './cartScreen';
import accountScreen from './accountScreen';
import petScreen from './petScreen';

const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name='ios-home' size={27} style={({ color: tintColor })} />
          </View>
        ),
      },
    },
    Cart: {
      screen: cartScreen,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name='ios-basket' size={27} style={({ color: tintColor })} />
          </View>
        ),
      },
    },
    Account: {
      screen: accountScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name='ios-person' size={27} style={({ color: tintColor })} />
          </View>
        ),
      },
    },
  },
  {
    activeColor: '#8282ee',
    inactiveColor: 'grey',
    barStyle: { backgroundColor: '#fff' }
  }
);

const RouteStack = createStackNavigator({
    pets: petScreen,
    welcome: welcomeScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      welcome: welcomeScreen,
      Routes: RouteStack,
      App: AppTabNavigator
    },
    {
      initialRouteName: 'welcome'
    }
  )
);