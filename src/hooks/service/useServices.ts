"use client";

import { useQuery } from "@tanstack/react-query";

import getAllServices from "@/services/serviceService/getAllServices";
import getServiceById from "@/services/serviceService/getServiceById";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getAllServices,
  });
}

export function useService(id: string) {
  return useQuery({
    queryKey: ["service", id],
    queryFn: () => getServiceById(id),
    enabled: !!id,
  });
}