import axiosInstance from "../axios";
import { AdminUsersResponse } from "@/types/admin";

const getUsers = async (): Promise<AdminUsersResponse> => {
  const { data } = await axiosInstance.get("/admin/users");
  return data;
};

export default getUsers;