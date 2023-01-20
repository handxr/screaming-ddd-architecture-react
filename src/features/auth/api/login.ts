import { axios } from "@/lib/axios";

import type { UserResponse } from "../types";

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginApi = async (
  data: LoginCredentialsDTO
): Promise<UserResponse> => {
  return axios.post("/api/login", data);
};
