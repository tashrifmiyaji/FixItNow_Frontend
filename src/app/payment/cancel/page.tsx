import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          Payment Cancelled
        </h1>

        <p>Your payment was cancelled.</p>

        <Button asChild variant="outline">
          <Link href="/dashboard/customer">
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}