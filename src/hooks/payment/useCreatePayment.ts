"use client";

import { useMutation } from "@tanstack/react-query";
import createPayment from "@/services/paymentService/createPayment";

export default function useCreatePayment() {
  return useMutation({
    mutationFn: createPayment,
  });
}