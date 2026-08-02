import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-xl bg-primary px-6 py-12 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold">
            Need a Professional Home Service?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl">
            Find trusted technicians and book your service in just a few clicks.
          </p>

          <Button asChild variant="secondary">
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}