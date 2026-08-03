"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import createBooking from "@/services/bookingService/createBooking";
import { toast } from "sonner";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,

    onSuccess: () => {
      toast.success("Booking created successfully");
      toast.error("Failed to create booking");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
  });
}