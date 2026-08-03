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

  localStorage.setItem("accessToken", data.data.accessToken);

  return data;
};

export default loginUser;