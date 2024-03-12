import axios from 'axios';

import {GLIPHY_API_KEY, BASE_URL} from '@env';

export const axiosApi = axios.create({
  baseURL: BASE_URL, // Axios base url
});

axiosApi.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: GLIPHY_API_KEY,
  };
  return config;
});
