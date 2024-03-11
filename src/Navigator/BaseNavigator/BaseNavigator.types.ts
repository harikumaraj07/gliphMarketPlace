import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeBottomTabNavigatorParams} from '../HomeNavigator/HomeNavigator.types';
import {StackScreenProps} from '@react-navigation/stack';

export type BaseNavigatorParams = {
  HomeNavigator: NavigatorScreenParams<HomeBottomTabNavigatorParams>;
  Search: undefined;
};

export type RootStackScreenProps<T extends keyof BaseNavigatorParams> =
  StackScreenProps<BaseNavigatorParams, T>;

export type SeachScreenProps = StackScreenProps<BaseNavigatorParams, 'Search'>;
