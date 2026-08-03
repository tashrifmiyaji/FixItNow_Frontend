"use client";

import { useMutation } from "@tanstack/react-query";

import createPayment from "@/services/paymentService/createPayment";

export function useCreatePayment() {
  return useMutation({
    mutationFn: createPayment,

    onSuccess: (res) => {
      window.location.href = res.data.checkoutUrl;
    },
  });
}