"use client";

import { useMutation } from "@tanstack/react-query";
import createPayment from "@/services/paymentService/createPayment";
import { toast } from "sonner";

export function useCreatePayment() {
  return useMutation({
    mutationFn: createPayment,

    onSuccess: (res) => {
      toast.success("Redirecting to payment...");
      window.location.href = res.data.checkoutUrl;
    },

    onError: () => {
      toast.error("Payment failed");
    },
  });
}