import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from "../screens/Welcome";
// import Login from "../screens/Login";
// import SignUp from "../screens/SignUp";
// import Forgot from "../screens/Forgot";
// import Explore from "../screens/Explore";
// import Browse from "../screens/Browse";
// import Product from "../screens/Product";
// import Settings from "../screens/Settings";

import { theme } from "../constants";

const Stack = createStackNavigator();

function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index;


// import React from 'react';

// import { Image } from 'react-native';

// import { createStackNavigator } from '@react-navigation/stack';
// import { createAppContainer } from 'react-navigation';

// import Welcome from '../screens/Welcome';
// import Browse from '../screens/Browse';
// import Explore from '../screens/Explore';
// import Settings from '../screens/Settings';
// import Login from '../screens/Login';

// import { theme } from '../constants'

// const Stack = createStackNavigator(
//     {
//       Welcome,
//     },

// );

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Welcome" component={Welcome} />
//     </Stack.Navigator>
//   );
// }

// export default createAppContainer(Stack);



