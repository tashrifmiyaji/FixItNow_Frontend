"use client";

import { useQuery } from "@tanstack/react-query";

import getCategories from "@/services/adminService/getCategories";

export function useCategories() {
  return useQuery({
    queryKey: ["admin-categories"],
    queryFn: getCategories,
  });
}