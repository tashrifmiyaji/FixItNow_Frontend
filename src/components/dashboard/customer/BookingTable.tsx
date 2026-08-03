"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useBookings } from "@/hooks/booking/useBookings";
import { useCreatePayment } from "@/hooks/payment/useCreatePayment";
import ReviewForm from "./ReviewForm";

export default function BookingTable() {
  const { data, isLoading } = useBookings();

  const { mutate: payNow, isPending } = useCreatePayment();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Technician</th>
            <th className="p-3 text-left">Booking Date</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.data.map((booking) => (
            <tr key={booking.id} className="border-t">
              <td className="p-3">
                {booking.service.title}
              </td>

              <td className="p-3">
                {booking.technician.user.name}
              </td>

              <td className="p-3">
                {new Date(booking.bookingDate).toLocaleDateString()}
              </td>

              <td className="p-3">
                ৳{booking.service.price}
              </td>

              <td className="p-3">
                <Badge>{booking.status}</Badge>
              </td>

              <td className="p-3">
                {booking.status === "REQUESTED" && (
                  <Badge variant="secondary">
                    Waiting
                  </Badge>
                )}

                {booking.status === "ACCEPTED" && (
                  <Button
                    disabled={isPending}
                    onClick={() => payNow(booking.id)}
                  >
                    Pay Now
                  </Button>
                )}

                {booking.status === "PAID" && (
                  <Badge>Paid</Badge>
                )}

                {booking.status === "IN_PROGRESS" && (
                  <Badge>In Progress</Badge>
                )}

                {booking.status === "COMPLETED" && (
                  <Badge>Completed</Badge>
                )}

                {booking.status === "COMPLETED" && !booking.review && (
                  <ReviewForm bookingId={booking.id} />
                )}

                {booking.review && (
                  <span className="text-green-600">
                    Review Submitted
                  </span>
                )}

                {booking.status === "DECLINED" && (
                  <Badge variant="destructive">
                    Declined
                  </Badge>
                )}

                {booking.status === "CANCELLED" && (
                  <Badge variant="destructive">
                    Cancelled
                  </Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}