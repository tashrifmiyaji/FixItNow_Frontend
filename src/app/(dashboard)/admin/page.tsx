import UsersTable from "@/components/dashboard/admin/UsersTable";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-10">

      <h1 className="mb-8 text-4xl font-bold">
        Admin Dashboard
      </h1>

      <UsersTable />

    </div>
  );
}