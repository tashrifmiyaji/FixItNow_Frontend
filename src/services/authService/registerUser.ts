import axiosInstance from "../axios";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "CUSTOMER" | "TECHNICIAN";
}

const registerUser = async (payload: RegisterPayload) => {
  const { data } = await axiosInstance.post("/auth/register", payload);

  return data;
};

export default registerUser;