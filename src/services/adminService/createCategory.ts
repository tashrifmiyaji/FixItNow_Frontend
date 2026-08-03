import axiosInstance from "../axios";

interface Payload {
  name: string;
  description: string;
}

const createCategory = async (payload: Payload) => {
  const { data } = await axiosInstance.post(
    "/admin/categories",
    payload
  );

  return data;
};

export default createCategory;