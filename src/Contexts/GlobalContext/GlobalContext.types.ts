import {GliphyItem} from 'src/Models';

export interface GlobalContextState {
  defaultGliphs: GliphyItem[] | null;
  loadingDefaultGliphs: boolean;
}
