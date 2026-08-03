"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import updateBookingStatus from "@/services/bookingService/updateBookingStatus";

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBookingStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
  });
}