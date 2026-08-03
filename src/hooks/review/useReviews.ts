import { useQuery } from "@tanstack/react-query";
import getAllReviews from "@/services/reviewService/getAllReviews";

const useReviews = () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: getAllReviews,
  });
};

export default useReviews;