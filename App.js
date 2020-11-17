import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Settings from '../screens/Settings';
import Login from '../screens/Login';

import { theme } from '../constants'

const screens = createStackNavigator({
  Welcome,
  Browse,
  Explore,
  Settings,
  Login
}, {
  defaultNavigationOptions: {
    headerStyle: {},
    headerBackImage: <Image />,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {},
  }
});


export default createAppContainer(screens);