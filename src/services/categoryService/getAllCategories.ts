import axiosInstance from "@/services/axios";
import { CategoryResponse } from "@/types/category";

const getAllCategories = async (): Promise<CategoryResponse> => {
  const { data } = await axiosInstance.get("/category");
  return data;
};

export default getAllCategories;