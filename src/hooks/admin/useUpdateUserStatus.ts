"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import updateUserStatus from "@/services/adminService/updateUserStatus";

export function useUpdateUserStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}