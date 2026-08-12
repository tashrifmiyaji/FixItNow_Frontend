import axiosInstance from "../axios";

type LoginData = {
  email: string;
  password: string;
};

const loginUser = async (payload: LoginData) => {
  const { data } = await axiosInstance.post(
    "/auth/login",
    payload
  );

  // Support multiple possible response shapes from backend
  // e.g. { data: { accessToken } } or { accessToken } or { token }
  const token =
    data?.data?.accessToken || data?.accessToken || data?.token;

  if (token && typeof window !== "undefined") {
    localStorage.setItem("accessToken", token);
  }

  return data;
};

export default loginUser;