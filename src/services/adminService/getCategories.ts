import axiosInstance from "../axios";
import { CategoryResponse } from "@/types/category";

const getCategories = async (): Promise<CategoryResponse> => {
  const { data } = await axiosInstance.get("/admin/categories");

  return data;
};

export default getCategories;