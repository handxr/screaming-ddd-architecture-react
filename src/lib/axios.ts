import Axios from 'axios';

import { API_URL } from '@/config';
import { useNotificationStore } from '@/stores/notifications';
import { storage } from '@/utils/storage';

export const axios = Axios.create({
  baseURL: API_URL as string,
});

axios.interceptors.request.use((config: any) => {
  const token = storage.getToken();
  if (token) {
    if (config.headers) {
      config.headers.set('Authorization', `Bearer ${token}`);
    } else {
      config.headers = new Headers({ Authorization: `Bearer ${token}` });
    }
  }

  return config;
});
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });

    return Promise.reject(error);
  },
);
