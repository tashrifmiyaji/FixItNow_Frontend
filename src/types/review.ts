export interface ReviewCustomer {
  id: string;
  name: string;
}

export interface ReviewTechnicianUser {
  id: string;
  name: string;
}

export interface ReviewTechnician {
  id: string;
  userId: string;
  bio: string;
  experience: number;
  location: string;
  averageRating: number;
  completedJobs: number;
  createdAt: string;
  updatedAt: string;
  user: ReviewTechnicianUser;
}

export interface ReviewBooking {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  bookingDate: string;
  status: "PENDING" | "ACCEPTED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  bookingId: string;
  customerId: string;
  technicianId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  customer: ReviewCustomer;
  technician: ReviewTechnician;
  booking: ReviewBooking;
}

export interface ReviewResponse {
  success: boolean;
  statusCode: number;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: Review[];
}