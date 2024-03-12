import React from 'react';

import {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@rneui/themed';
import {Theme} from './Theme';
import {GlobalContextProvider} from './Contexts';
import {AppLoader} from './AppLoader';
import {QueryClientProvider } from 'react-query';
import { queryClient } from './Configs';

export const GliphyMarketplace = () => {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <AppLoader />
        </GlobalContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
      <StatusBar />
    </Fragment>
  );
};
