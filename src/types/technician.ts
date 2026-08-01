export interface TechnicianService {
  id: string;
  title: string;
  description: string;
  price: string;
  categoryId: string;
  technicianId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TechnicianUser {
  id: string;
  name: string;
  email: string;
  phone: string;
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
  services: TechnicianService[];
}

export interface TechnicianResponse {
  success: boolean;
  statusCode: number;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: Technician[];
}