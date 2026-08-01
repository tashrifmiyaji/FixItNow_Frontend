"use client";

import { useQuery } from "@tanstack/react-query";
import getAllCategories from "@/services/categoryService/getAllCategories";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
};

export default useCategories;