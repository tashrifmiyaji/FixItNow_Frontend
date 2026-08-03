"use client";

import { Card, CardContent } from "@/components/ui/card";
import useReview from "@/hooks/review/useReviews";

export default function TestimonialsSection() {
  const { data, isLoading } = useReview();

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.data.map((review) => (
            <Card key={review.id}>
              <CardContent className="space-y-3 p-5">
                <h3 className="font-semibold">{review.customer.name}</h3>

                <p className="text-yellow-500">
                  {"⭐".repeat(review.rating)}
                </p>

                <p>{review.comment}</p>

                <p className="text-sm text-muted-foreground">
                  Technician: {review.technician.user.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}