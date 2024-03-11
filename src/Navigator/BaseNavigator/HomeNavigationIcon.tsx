import {Icon} from '@rneui/themed';
import React from 'react';

import {BottonNavigatorIconType} from 'src/Navigator/BaseNavigator/BottonNavigatorIcon.types';

export const HomeNavigationIcon = ({color}: BottonNavigatorIconType) => (
  <Icon type="ionicon" name="home-outline" size={24} color={color} />
);
