import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <div className="container mx-auto py-24 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Payment Cancelled
      </h1>

      <p className="mt-4">
        You cancelled the payment.
      </p>

      <Button asChild className="mt-8">
        <Link href="/dashboard/customer">
          Back
        </Link>
      </Button>
    </div>
  );
}