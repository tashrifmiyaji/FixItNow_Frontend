import axiosInstance from "../axios";

interface Payload {
  id: string;
  status: string;
}

const updateUserStatus = async ({ id, status }: Payload) => {
  const { data } = await axiosInstance.patch(`/admin/users/${id}`, {
    status,
  });

  return data;
};

export default updateUserStatus;