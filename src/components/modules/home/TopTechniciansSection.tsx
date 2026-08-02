"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import useTechnicians from "@/hooks/technician/useTechnicians";

export default function TopTechniciansSection() {
  const { data, isLoading } = useTechnicians();

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">Top Technicians</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Top Technicians</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.data.slice(0, 3).map((technician) => (
            <Card key={technician.id}>
              <CardContent className="space-y-3 p-5">
                <h3 className="text-xl font-semibold">
                  {technician.user.name}
                </h3>

                <p>{technician.bio}</p>

                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {technician.experience} Years
                </p>

                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {technician.location}
                </p>

                <p>
                  <span className="font-semibold">Rating:</span>{" "}
                  {technician.averageRating}
                </p>

                <Button className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}