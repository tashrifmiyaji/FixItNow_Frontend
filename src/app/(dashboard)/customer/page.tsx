import BookingTable from "@/components/dashboard/customer/BookingTable";

export default function CustomerDashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-4xl font-bold">
        Customer Dashboard
      </h1>

      <BookingTable />
    </div>
  );
}