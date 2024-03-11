import React, {Dispatch, ReactNode} from 'react';
import {createContext, useReducer} from 'react';
import {GliphyItem} from 'src/Models';
import {GlobalContextActions} from 'src/Types';
import {GlobalContextState} from './GlobalContext.types';
import {globalContextReducer} from './GlobalContextReducer';

const initialGlobalState: GlobalContextState = {
  defaultGliphs: null,
  loadingDefaultGliphs: false,
};

export interface GlobalContextProps {
  initalValue?: GlobalContextState;
  children: ReactNode;
}

interface GlobalContextStateWithActions extends GlobalContextState {
  defaultGliphs: GliphyItem[] | null;
  loadingDefaultGliphs: boolean;
  dispatch: Dispatch<GlobalContextActions>;
}

const initialGlobalStateWithActions = {
  ...initialGlobalState,
  dispatch: () => null,
};

export const GlobalContext = createContext<GlobalContextStateWithActions>(
  initialGlobalStateWithActions,
);

export const GlobalContextProvider = ({
  initalValue,
  children,
}: GlobalContextProps) => {
  const [state, dispatch] = useReducer(
    globalContextReducer,
    initalValue ?? initialGlobalState,
  );

  return (
    <GlobalContext.Provider value={{...state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};
