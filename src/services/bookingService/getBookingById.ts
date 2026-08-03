import axiosInstance from "../axios";
import { BookingDetailsResponse } from "@/types/booking";

const getBookingById = async (
  id: string
): Promise<BookingDetailsResponse> => {
  const { data } = await axiosInstance.get(`/booking/${id}`);
  return data;
};

export default getBookingById;