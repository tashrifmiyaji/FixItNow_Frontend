"use client";

import { useQuery } from "@tanstack/react-query";

import getAllServices from "@/services/serviceService/getAllServices";

const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getAllServices,
  });
};

export default useServices;