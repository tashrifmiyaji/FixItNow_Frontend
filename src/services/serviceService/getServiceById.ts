import axiosInstance from "../axios";
import { ServiceDetailsResponse } from "@/types/service";

const getServiceById = async (
  id: string
): Promise<ServiceDetailsResponse> => {
  const { data } = await axiosInstance.get(`/service/${id}`);
  return data;
};

export default getServiceById;