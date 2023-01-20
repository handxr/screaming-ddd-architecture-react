import { storage } from "@/utils/storage";

export const useAuth = () => {
  const token = storage.getToken();
  const isAuthenticated = Boolean(token);

  return {
    token,
    isAuthenticated,
  };
};
