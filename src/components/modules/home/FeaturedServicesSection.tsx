"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import useService from "@/hooks/service/useServices";

export default function FeaturedServicesSection() {
  const { data, isLoading } = useService();

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">Featured Services</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Services</h2>

          <Button asChild variant="outline">
            <Link href="/services">View All</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.data.slice(0, 3).map((service) => (
            <Card key={service.id}>
              <CardContent className="space-y-3 p-5">
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {service.description}
                </p>

                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {service.category.name}
                </p>

                <p>
                  <span className="font-semibold">Technician:</span>{" "}
                  {service.technician.user.name}
                </p>

                <p className="text-lg font-bold">${service.price}</p>

                <Button asChild className="w-full">
                  <Link href={`/services/${service.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}