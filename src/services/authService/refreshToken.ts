import axiosInstance from "@/services/axios";
import { LoginResponse } from "@/types/auth";

export const refreshToken = async (): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post("/auth/refresh-token");

  return data;
};