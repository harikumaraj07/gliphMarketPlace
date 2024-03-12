import React, {useCallback, useState} from 'react';

import {useContext} from 'react';
import {GliphyCard} from 'src/Components/GliphyCard/GliphyCard';
import {GlobalContext} from 'src/Contexts';
import {useHomeScreenStyles} from './HomeScreenStyles';
import {ResponsiveGrid} from 'src/Components';
import {GliphyItem} from 'src/Models';
import {useDebounce, useGetTrendingGifs, usePagination} from 'src/Hooks';
import {ActivityIndicator, View} from 'react-native';

export const TredingGliphsList = () => {
  const {defaultGliphs} = useContext(GlobalContext);

  const styles = useHomeScreenStyles();

  const {page, nextPage} = usePagination(1);

  const [gliphs, setGliphs] = useState<GliphyItem[]>([]);

  const {isLoading} = useGetTrendingGifs({
    page,
    onSuccess: (res: GliphyItem[]) => {
      setGliphs(data => [...data, ...res]);
    },
  });

  const renderItem = useCallback((item: any) => {
    return <GliphyCard {...item} />;
  }, []);

  const handleEndReached = useDebounce(nextPage);

  return (
    <View>
      <ResponsiveGrid
        maxItemsPerColumn={2}
        data={
          [...(defaultGliphs || []), ...gliphs]?.map(item => ({
            ...item,
            heightRatio: (item.height / item.width) * 3,
            widthRatio: 1,
          })) ?? []
        }
        renderItem={renderItem}
        itemUnitHeight={100}
        showScrollIndicator={false}
        virtualization={false}
        itemContainerStyle={styles.itemContainerStyle}
        onEndReached={handleEndReached}
      />
      {isLoading ? <ActivityIndicator size="large" color="#000000" /> : null}
    </View>
  );
};
