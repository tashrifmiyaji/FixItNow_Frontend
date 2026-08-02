import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Service } from "@/types/service";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <h2 className="text-xl font-semibold">{service.title}</h2>

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
        <p className="text-sm text-muted-foreground">
          {service.technician.averageRating} • {service.technician.completedJobs} Jobs
        </p>
      </CardContent>
    </Card>
  );
}