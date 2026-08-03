import axiosInstance from "../axios";

interface Payload {
  bookingId: string;
  rating: number;
  comment: string;
}

const createReview = async (payload: Payload) => {
  const { data } = await axiosInstance.post("/review", payload);

  return data;
};

export default createReview;