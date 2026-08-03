"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useBookings } from "@/hooks/booking/useBookings";
import { useUpdateBookingStatus } from "@/hooks/booking/useUpdateBookingStatus";

export default function TechnicianBookingTable() {
  const { data, isLoading } = useBookings();
  const { mutate } = useUpdateBookingStatus();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const bookings = data?.data || [];

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Booking Date</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t">
              <td className="p-3">
                {booking.customer.name}
              </td>

              <td className="p-3">
                {booking.service.title}
              </td>

              <td className="p-3">
                {new Date(
                  booking.bookingDate
                ).toLocaleDateString()}
              </td>

              <td className="p-3">
                ৳{booking.service.price}
              </td>

              <td className="p-3">
                <Badge>{booking.status}</Badge>
              </td>

              <td className="space-x-2 p-3">
                {booking.status === "REQUESTED" && (
                  <>
                    <Button
                      size="sm"
                      onClick={() =>
                        mutate({
                          id: booking.id,
                          status: "ACCEPTED",
                        })
                      }
                    >
                      Accept
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() =>
                        mutate({
                          id: booking.id,
                          status: "DECLINED",
                        })
                      }
                    >
                      Decline
                    </Button>
                  </>
                )}

                {booking.status === "PAID" && (
                  <Button
                    size="sm"
                    onClick={() =>
                      mutate({
                        id: booking.id,
                        status: "IN_PROGRESS",
                      })
                    }
                  >
                    Start Job
                  </Button>
                )}

                {booking.status === "IN_PROGRESS" && (
                  <Button
                    size="sm"
                    onClick={() =>
                      mutate({
                        id: booking.id,
                        status: "COMPLETED",
                      })
                    }
                  >
                    Complete
                  </Button>
                )}

                {(booking.status === "COMPLETED" ||
                  booking.status === "DECLINED" ||
                  booking.status === "ACCEPTED") && (
                  <span className="text-sm text-muted-foreground">
                    No Action
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {bookings.length === 0 && (
        <p className="p-6 text-center text-muted-foreground">
          No bookings found.
        </p>
      )}
    </div>
  );
}