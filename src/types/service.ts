import { Category } from "./category";

export interface TechnicianUser {
  id: string;
  name: string;
  email: string;
}

export interface Technician {
  id: string;
  userId: string;
  bio: string;
  experience: number;
  location: string;
  averageRating: number;
  completedJobs: number;
  createdAt: string;
  updatedAt: string;
  user: TechnicianUser;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  categoryId: string;
  technicianId: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
  technician: Technician;
}

export interface ServiceResponse {
  success: boolean;
  statusCode: number;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: Service[];
}

export interface ServiceDetailsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Service;
}

export interface TechnicianUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  status?: string;
}