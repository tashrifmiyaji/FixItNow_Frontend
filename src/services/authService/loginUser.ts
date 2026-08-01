import axiosInstance from "@/services/axios";
import { LoginPayload, LoginResponse } from "@/types/auth";

export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post("/auth/login", payload);

  return data;
};