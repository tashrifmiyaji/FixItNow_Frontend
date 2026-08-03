import TechnicianBookingTable from "@/components/dashboard/technician/TechnicianBookingTable";

export default function TechnicianDashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-4xl font-bold">
        Technician Dashboard
      </h1>

      <TechnicianBookingTable />
    </div>
  );
}