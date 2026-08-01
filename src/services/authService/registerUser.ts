import axiosInstance from "../axios";

import {
  AuthResponse,
  RegisterPayload,
  User,
} from "@/types/auth";

interface RegisterResponse extends AuthResponse {
  data: User;
}

export const registerUser = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await axiosInstance.post("/auth/register", payload);

  return data;
};