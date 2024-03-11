import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, SettingScreen} from 'src/Screens';
import {HomeNavigationIcon} from '../BaseNavigator/HomeNavigationIcon';
import {SettingNavigatorIcon} from '../BaseNavigator/SettingNavigatorIcon';
import {HomeBottomTabNavigatorParams} from './HomeNavigator.types';

const HomeNavigatorParams =
  createBottomTabNavigator<HomeBottomTabNavigatorParams>();

export const HomeNavigator = () => {
  return (
    <HomeNavigatorParams.Navigator initialRouteName="Home">
      <HomeNavigatorParams.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeNavigationIcon,
        }}
      />
      <HomeNavigatorParams.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: SettingNavigatorIcon,
        }}
      />
    </HomeNavigatorParams.Navigator>
  );
};
