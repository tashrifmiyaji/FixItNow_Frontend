"use client";

import { useState } from "react";

import ServiceCard from "./ServiceCard";
import ServiceFilter from "./ServiceFilter";

import {useServices} from "@/hooks/service/useServices";

export default function ServicesContainer() {
  const { data, isLoading } = useServices();

  const [search, setSearch] = useState("");

  const services =
    data?.data.filter((service) =>
      service.title.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">All Services</h1>
        <p className="text-muted-foreground">
          Find your desired home service.
        </p>
      </div>

      <ServiceFilter search={search} setSearch={setSearch} />

      {isLoading ? (
        <p className="mt-10">Loading...</p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  );
}