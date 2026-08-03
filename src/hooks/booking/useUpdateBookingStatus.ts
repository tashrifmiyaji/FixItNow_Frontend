"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateBookingStatus from "@/services/bookingService/updateBookingStatus";
import { toast } from "sonner";

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBookingStatus,

    onSuccess: () => {
      toast.success("Booking status updated");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: () => {
      toast.error("Failed to update booking");
    },
  });
}