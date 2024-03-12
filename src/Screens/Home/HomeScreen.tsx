import React from 'react';

import {useHomeScreenStyles} from './HomeScreenStyles';
import {HomeSearchBar} from './HomeSearchBar';
import {TredingGliphsList} from './TredingGliphsList';
import {View} from 'src/Components';

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
