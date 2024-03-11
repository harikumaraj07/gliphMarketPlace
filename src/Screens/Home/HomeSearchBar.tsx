import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {TouchableOpacity, View} from 'react-native';

import {SearchBar} from 'src/Components';
import {HomeTabScreenProps} from 'src/Navigator';

export const HomeSearchBar = () => {
  const {navigate} = useNavigation<HomeTabScreenProps<'Home'>['navigation']>();

  const navigateToSearchPage = () => navigate('Search');

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={navigateToSearchPage}>
      <View pointerEvents="none">
        <SearchBar placeholder="Search Gliphies 🧑‍🎨" />
      </View>
    </TouchableOpacity>
  );
};
