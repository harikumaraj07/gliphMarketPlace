import React from 'react';

import {
  SearchBar as RNESearchBar,
  SearchBarProps as RNESearchBarProps,
  useThemeMode,
} from '@rneui/themed';

type SearchBarProps = Omit<RNESearchBarProps, 'lightTheme'>;

export const SearchBar = (props: SearchBarProps) => {
  const {mode} = useThemeMode();

  return <RNESearchBar lightTheme={mode === 'light'} {...props} />;
};
