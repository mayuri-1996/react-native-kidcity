/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './src/screens/Auth/SignInScreen';
import HomeScreen from './src/screens/App/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const App = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const isSignedIn = true;
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={isSignedIn ? 'Home' : 'SignIn'}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
