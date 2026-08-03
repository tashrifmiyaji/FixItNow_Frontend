"use client";

import { useQuery } from "@tanstack/react-query";
import getBookings from "@/services/bookingService/getBookings";

export function useBookings() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
}