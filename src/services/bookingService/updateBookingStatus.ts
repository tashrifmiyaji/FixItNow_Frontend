import axiosInstance from "../axios";

const updateBookingStatus = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  const { data } = await axiosInstance.patch(`/booking/${id}`, {
    status,
  });

  return data;
};

export default updateBookingStatus;