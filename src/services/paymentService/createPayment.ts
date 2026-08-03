import axiosInstance from "../axios";
import { PaymentSessionResponse } from "@/types/payment";

const createPayment = async (
  bookingId: string
): Promise<PaymentSessionResponse> => {
  const { data } = await axiosInstance.post("/payment/create", {
    bookingId,
  });

  return data;
};

export default createPayment;