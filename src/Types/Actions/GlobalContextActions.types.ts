import {GliphyItem} from 'src/Models';

export enum GlobalActionType {
  SET_DEFAULT_GLIPHS = 'SET_DEFAULT_GLIPHS',
  SET_DEFAULT_GLIPHS_LOADING = 'SET_DEFAULT_GLIPHS_LOADING',
}

interface GlobalActionBase {
  type: GlobalActionType;
}

interface DefaultGliphsAction extends GlobalActionBase {
  type: GlobalActionType.SET_DEFAULT_GLIPHS;
  payload: GliphyItem[] | null;
}

interface DefaultGliphsLoadingAction extends GlobalActionBase {
  type: GlobalActionType.SET_DEFAULT_GLIPHS_LOADING;
  payload: boolean;
}

export type GlobalContextActions =
  | DefaultGliphsAction
  | DefaultGliphsLoadingAction;
