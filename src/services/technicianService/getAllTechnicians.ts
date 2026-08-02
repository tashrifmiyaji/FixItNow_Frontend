import axiosInstance from "@/services/axios";
import { TechnicianResponse } from "@/types/technician";

const getAllTechnicians = async (): Promise<TechnicianResponse> => {
  const { data } = await axiosInstance.get("/technician");
  return data;
};

export default getAllTechnicians;