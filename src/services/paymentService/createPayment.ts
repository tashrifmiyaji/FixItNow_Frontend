import axiosInstance from "../axios";

const createPayment = async (bookingId: string) => {
  const { data } = await axiosInstance.post("/payment/create", {
    bookingId,
  });

  return data;
};

export default createPayment;