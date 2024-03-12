import React from 'react';
import {View} from 'react-native';
import {useSearchScreenStyles} from './SearchScreenStyles';
import {GliphyCard, ResponsiveGrid, Text} from 'src/Components';
import {useCallback} from 'react';
import {GliphyItem} from 'src/Models';

interface SearchLayoutProps {
  isLoading: boolean;
  gliphs: GliphyItem[];
  search: string;
  handleEndReached: () => void;
}

export const SearchLayout = ({
  isLoading,
  gliphs,
  search,
  handleEndReached,
}: SearchLayoutProps) => {
  const styles = useSearchScreenStyles();

  const renderItem = useCallback((item: any, _: number) => {
    return <GliphyCard {...item} />;
  }, []);

  if (!isLoading && gliphs.length === 0 && search.length > 2) {
    return (
      <View style={styles.enptyContent}>
        <Text>No Data found</Text>
      </View>
    );
  }
  if (search.length > 2) {
    return (
      <ResponsiveGrid
        maxItemsPerColumn={2}
        data={
          gliphs?.map(item => ({
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
    );
  }
  return (
    <View style={styles.enptyContent}>
      <Text>Type atleast 3 characters to search.</Text>
    </View>
  );
};
