import axiosInstance from "@/services/axios";
import { ReviewResponse } from "@/types/review";

const getAllReviews = async (): Promise<ReviewResponse> => {
  const { data } = await axiosInstance.get("/review");
  return data;
};

export default getAllReviews;