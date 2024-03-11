import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen} from 'src/Screens';
import {HomeNavigator} from '../HomeNavigator/HomeNavigator';
import {BaseNavigatorParams} from './BaseNavigator.types';

const BaseNavigatorStack = createStackNavigator<BaseNavigatorParams>();

export const BaseNavigator = () => {
  return (
    <NavigationContainer>
      <BaseNavigatorStack.Navigator initialRouteName="HomeNavigator">
        <BaseNavigatorStack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{headerShown: false}}
        />
        <BaseNavigatorStack.Screen name="Search" component={SearchScreen} />
      </BaseNavigatorStack.Navigator>
    </NavigationContainer>
  );
};
