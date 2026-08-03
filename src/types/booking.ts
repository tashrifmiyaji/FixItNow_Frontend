export interface BookingCustomer {
  id: string;
  name: string;
  email: string;
}

export interface BookingTechnicianUser {
  id: string;
  name: string;
}

export interface BookingTechnician {
  id: string;
  userId: string;
  bio: string;
  experience: number;
  location: string;
  averageRating: number;
  completedJobs: number;
  createdAt: string;
  updatedAt: string;
  user: BookingTechnicianUser;
}

export interface BookingService {
  id: string;
  title: string;
  description: string;
  price: string;
  categoryId: string;
  technicianId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookingPayment {
  id: string;
  status: string;
}

export interface BookingReview {
  id: string;
  rating: number;
  comment: string;
}

export interface Booking {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  bookingDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;

  customer: BookingCustomer;
  technician: BookingTechnician;
  service: BookingService;
  payment: BookingPayment | null;
  review: BookingReview | null;
}

export interface BookingResponse {
  success: boolean;
  statusCode: number;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: Booking[];
}

export interface BookingDetailsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Booking;
}