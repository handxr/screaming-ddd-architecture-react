import React from 'react';

import { useNotificationStore } from '@/stores';
import { storage } from '@/utils/storage';

import { loginApi, LoginCredentialsDTO } from '../api';

export const useLogin = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const login = async (data: LoginCredentialsDTO) => {
    setIsLoading(true);
    try {
      const response = await loginApi(data);
      storage.setToken(response.token);
      useNotificationStore.getState().addNotification({
        title: 'Success',
        message: 'You have successfully logged in',
        type: 'success',
      });
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
  };
};
