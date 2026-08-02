import Link from "next/link";
import { Wrench, Search, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-muted/30">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="bg-primary/10 text-primary inline-flex items-center rounded-full px-4 py-1 text-sm font-medium">
            Trusted Home Service Marketplace
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Find Skilled Professionals For Every Home Service
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            Book trusted technicians for plumbing, electrical work, painting,
            carpentry, HVAC, and many more services—all in one place.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/services">
                <Search className="mr-2 h-5 w-5" />
                Explore Services
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/register">
                <Wrench className="mr-2 h-5 w-5" />
                Become a Technician
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-background p-6">
              <Search className="text-primary mx-auto h-10 w-10" />
              <h3 className="mt-4 text-lg font-semibold">
                Easy Service Search
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Browse categories and quickly find the right professional.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-6">
              <ShieldCheck className="text-primary mx-auto h-10 w-10" />
              <h3 className="mt-4 text-lg font-semibold">
                Trusted Professionals
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Verified technicians with ratings and completed jobs.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-6">
              <Wrench className="text-primary mx-auto h-10 w-10" />
              <h3 className="mt-4 text-lg font-semibold">
                Fast Booking
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Book services in minutes and manage everything online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;