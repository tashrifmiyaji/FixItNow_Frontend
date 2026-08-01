export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
}

export interface AuthResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface LoginResponse extends AuthResponse {
  data: {
    accessToken: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
  status: "ACTIVE" | "BANNED";
  createdAt: string;
  updatedAt: string;
}

export interface MeResponse extends AuthResponse {
  data: User;
}

