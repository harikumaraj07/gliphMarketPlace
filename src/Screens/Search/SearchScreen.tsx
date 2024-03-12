import React, {useState} from 'react';

import {SearchBar, View} from 'src/Components';
import {GliphyItem} from 'src/Models';
import {useDebounce, useGetSearchGifs, usePagination} from 'src/Hooks';
import {useSearchScreenStyles} from './SearchScreenStyles';
import {SearchLayout} from './SearchLayout';

export const SearchScreen = () => {
  const styles = useSearchScreenStyles();

  const [search, setSearch] = useState('');

  const [q, setQ] = useState('');

  const {page, nextPage, resetPage} = usePagination(1);

  const [gliphs, setGliphs] = useState<GliphyItem[]>([]);

  const handleSuccess = (res: GliphyItem[]) => {
    setGliphs(data => [...data, ...res]);
  };

  const {isLoading} = useGetSearchGifs({
    q,
    page,
    onSuccess: handleSuccess,
    enabled: q.length > 2,
  });

  const loadData = () => {
    nextPage();
  };

  const handleEndReached = useDebounce(loadData);

  const doSearch = (searchString: string) => {
    setQ(searchString);
    resetPage();
    setGliphs([]);
  };

  const debouncedSearch = useDebounce(doSearch);

  const handleSearch = (searchString: string) => {
    debouncedSearch(searchString);
    setSearch(searchString);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        placeholder="Search Gliphies 🧑‍🎨"
        onChangeText={handleSearch}
      />
      <SearchLayout
        search={search}
        gliphs={gliphs}
        isLoading={isLoading}
        handleEndReached={handleEndReached}
      />
    </View>
  );
};
