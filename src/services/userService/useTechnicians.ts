"use client";

import { useQuery } from "@tanstack/react-query";
import getAllTechnicians from "@/services/technicianService/getAllTechnicians";

const useTechnicians = () => {
  return useQuery({
    queryKey: ["technicians"],
    queryFn: getAllTechnicians,
  });
};

export default useTechnicians;