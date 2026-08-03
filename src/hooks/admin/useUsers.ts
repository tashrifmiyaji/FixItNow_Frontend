"use client";

import { useQuery } from "@tanstack/react-query";

import getUsers from "@/services/adminService/getUsers";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}