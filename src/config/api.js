import axios from 'axios';
import { API_URL } from 'src/constants';

import { getUserToken } from 'src/utils';

axios.defaults.baseURL = API_URL;

const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Response success ====>', response);
    }

    return response;
  },
  (err) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Response error ====>', err.response || err);
    }

    // Check if network disconnected
    if (err.code === 'ECONNABORTED') {
      console.error(
        'Response error ====>',
        'Something when wrong with your connection',
      );
    }

    return Promise.reject(err);
  },
);

export default apiInstance;
