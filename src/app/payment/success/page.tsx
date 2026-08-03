import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="container mx-auto py-24 text-center">
      <h1 className="text-4xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <p className="mt-4">
        Your payment has been completed successfully.
      </p>

      <Button asChild className="mt-8">
        <Link href="/dashboard/customer">
          Back to Dashboard
        </Link>
      </Button>
    </div>
  );
}