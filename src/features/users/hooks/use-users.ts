import useSWR from 'swr';

import { getUsersApi } from '../api/get-users';
import { User } from '../types';

export const useUsers = () => {
  const { data, error, mutate } = useSWR<User[]>(
    '/api/users?page=1',
    getUsersApi,
  );

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
