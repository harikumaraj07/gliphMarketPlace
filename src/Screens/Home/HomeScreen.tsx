import React from 'react';

import {View} from 'react-native';

import {useHomeScreenStyles} from './HomeScreenStyles';
import {HomeSearchBar} from './HomeSearchBar';
import {TredingGliphsList} from './TredingGliphsList';

export const HomeScreen = () => {
  const styles = useHomeScreenStyles();

  return (
    <View style={styles.container}>
      <HomeSearchBar />
      <View style={styles.container}>
        <TredingGliphsList />
      </View>
    </View>
  );
};
