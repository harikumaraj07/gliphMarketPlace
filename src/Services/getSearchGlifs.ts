import {axiosApi} from 'src/Configs';
import {API_ENDPOINTS} from './apiEndpoints';
import {GliphyListResponse} from './Types/Gliphs.types';
import {API_GET_SIZE} from 'src/Constants';

export const getSearchGlifs =
  (q: string, page: number, size: number = API_GET_SIZE) =>
  () => {
    return axiosApi.get<GliphyListResponse>(API_ENDPOINTS.search, {
      params: {q, limit: size, offset: page * size},
    });
  };
