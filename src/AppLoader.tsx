import React, {useContext} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {BaseNavigator} from './Navigator';
import {GlobalContext} from './Contexts';
import {useGetTrendingGifs} from './Hooks/useGetTrendingGifs';
import {GlobalActionType} from './Types';

export const AppLoader = () => {
  const {dispatch} = useContext(GlobalContext);

  useGetTrendingGifs({
    page: 0,
    onSuccess: res => {
      dispatch({
        type: GlobalActionType.SET_DEFAULT_GLIPHS,
        payload: res,
      });
    },
    onSettled: () => {
      RNBootSplash.hide();
    },
  });

  return <BaseNavigator />;
};
