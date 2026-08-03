"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import updateUserStatus from "@/services/adminService/updateUserStatus";

export function useUpdateUserStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserStatus,

    onSuccess: () => {
      toast.success("User updated");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => {
      toast.error("Failed to update user");
    },
  });
}