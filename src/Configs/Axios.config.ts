import axios from 'axios';

import {GLIPHY_API_KEY} from '@env'

export const axiosApi = axios.create({
  baseURL: 'https://api.giphy.com', // Axios base url
});

axiosApi.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: GLIPHY_API_KEY
  };
  return config;
});