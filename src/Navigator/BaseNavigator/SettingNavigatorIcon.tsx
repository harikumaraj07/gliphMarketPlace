import {Icon} from '@rneui/themed';
import React from 'react';

import {BottonNavigatorIconType} from 'src/Navigator/BaseNavigator/BottonNavigatorIcon.types';

export const SettingNavigatorIcon = ({color}: BottonNavigatorIconType) => (
  <Icon type="ionicon" name="settings-outline" size={24} color={color} />
);
