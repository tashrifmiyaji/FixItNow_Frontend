"use client";

import { useQuery } from "@tanstack/react-query";
import getServiceById from "@/services/serviceService/getServiceById";

const useService = (id: string) => {
  return useQuery({
    queryKey: ["service", id],
    queryFn: () => getServiceById(id),
    enabled: !!id,
  });
};

export default useService;