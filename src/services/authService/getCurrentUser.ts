import axiosInstance from "@/services/axios";
import { MeResponse } from "@/types/auth";

export const getCurrentUser = async (): Promise<MeResponse> => {
  const { data } = await axiosInstance.get("/auth/me");

  return data;
};