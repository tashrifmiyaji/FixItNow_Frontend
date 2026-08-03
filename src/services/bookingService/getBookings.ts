import axiosInstance from "../axios";
import { BookingResponse } from "@/types/booking";

const getBookings = async (): Promise<BookingResponse> => {
  const { data } = await axiosInstance.get("/bookings");

  return data;
};

export default getBookings;