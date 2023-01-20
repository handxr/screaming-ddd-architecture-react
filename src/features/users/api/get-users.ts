import { axios } from '@/lib/axios';

import { User } from '../types';

export const getUsersApi = async (): Promise<User[]> => {
  return axios.get('/api/users?page=1').then((res) => res.data);
};
