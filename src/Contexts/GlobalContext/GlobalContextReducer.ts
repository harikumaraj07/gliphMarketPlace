import {GlobalActionType, GlobalContextActions} from 'src/Types';
import {GlobalContextState} from './GlobalContext.types';

export const globalContextReducer = (
  state: GlobalContextState,
  action: GlobalContextActions,
): GlobalContextState => {
  const {type, payload} = action;
  if (type === GlobalActionType.SET_DEFAULT_GLIPHS) {
    return {
      ...state,
      defaultGliphs: payload,
    };
  }
  if (type === GlobalActionType.SET_DEFAULT_GLIPHS_LOADING) {
    return {
      ...state,
      loadingDefaultGliphs: payload,
    };
  }
  return state;
};
