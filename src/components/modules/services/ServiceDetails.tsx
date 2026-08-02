"use client";

import { Button } from "@/components/ui/button";
import { useService } from "@/hooks/service/useServices";

interface Props {
  id: string;
}

export default function ServiceDetails({ id }: Props) {
  const { data, isLoading } = useService(id);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-10">
        <p>Loading...</p>
      </section>
    );
  }

  const service = data?.data;

  if (!service) {
    return (
      <section className="container mx-auto px-4 py-10">
        <p>Service not found.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-2 text-4xl font-bold">{service.title}</h1>

      <p className="mb-6 text-muted-foreground">{service.description}</p>

      <div className="space-y-3 rounded-lg border p-6">
        <p>
          <strong>Category:</strong> {service.category.name}
        </p>

        <p>
          <strong>Price:</strong> ${service.price}
        </p>

        <p>
          <strong>Technician:</strong> {service.technician.user.name}
        </p>

        <p>
          <strong>Experience:</strong> {service.technician.experience} Years
        </p>

        <p>
          <strong>Location:</strong> {service.technician.location}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {service.technician.averageRating}
        </p>

        <p>
          <strong>Completed Jobs:</strong> {service.technician.completedJobs}
        </p>

        <Button className="mt-5">
          Book Now
        </Button>
      </div>
    </section>
  );
}