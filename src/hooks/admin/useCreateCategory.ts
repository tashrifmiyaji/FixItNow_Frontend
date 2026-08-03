"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import createCategory from "@/services/adminService/createCategory";

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      toast.success("Category created");
      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });
    },

    onError: () => {
      toast.error("Failed to create category");
    },
  });
}