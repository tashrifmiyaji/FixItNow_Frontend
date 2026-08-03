import axiosInstance from "../axios";

interface BookingPayload {
  serviceId: string;
  technicianId: string;
  bookingDate: string;
}

const createBooking = async (payload: BookingPayload) => {
  const { data } = await axiosInstance.post("/booking", payload);

  return data;
};

export default createBooking;