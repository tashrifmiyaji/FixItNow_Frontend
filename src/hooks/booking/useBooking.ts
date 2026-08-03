"use client";

import { useQuery } from "@tanstack/react-query";
import getBookingById from "@/services/bookingService/getBookingById";

export function useBooking(id: string) {
  return useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBookingById(id),
    enabled: !!id,
  });
}