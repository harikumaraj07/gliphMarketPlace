import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  BaseNavigatorParams,
  RootStackScreenProps,
} from '../BaseNavigator/BaseNavigator.types';
import {StackScreenProps} from '@react-navigation/stack';

export type HomeBottomTabNavigatorParams = {
  Home: undefined;
  Setting: undefined;
};

// Generic Type for getting Screen props of all the screens in HomeBottomTabNavigator, also includes nested
export type HomeTabScreenProps<T extends keyof HomeBottomTabNavigatorParams> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeBottomTabNavigatorParams, T>,
    RootStackScreenProps<keyof BaseNavigatorParams>
  >;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeBottomTabNavigatorParams, 'Home'>,
  StackScreenProps<BaseNavigatorParams>
>;

export type SettingScreenProps = BottomTabScreenProps<
  HomeBottomTabNavigatorParams,
  'Setting'
>;
