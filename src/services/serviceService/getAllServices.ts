import axiosInstance from "../axios";
import { ServiceResponse } from "@/types/service";

const getAllServices = async (): Promise<ServiceResponse> => {
  const { data } = await axiosInstance.get("/service");
  return data;
};

export default getAllServices;