"use client";

import { Button } from "@/components/ui/button";

import { useUsers } from "@/hooks/admin/useUsers";
import { useUpdateUserStatus } from "@/hooks/admin/useUpdateUserStatus";

export default function UsersTable() {
  const { data, isLoading } = useUsers();

  const { mutate } = useUpdateUserStatus();

  if (isLoading) return <p>Loading...</p>;

  return (
    <table className="w-full border">
      <thead>
        <tr className="border-b">
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data?.data.map((user) => (
          <tr key={user.id} className="border-b text-center">

            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>{user.role}</td>

            <td>{user.status}</td>

            <td>

              <Button
                size="sm"
                onClick={() =>
                  mutate({
                    id: user.id,
                    status:
                      user.status === "ACTIVE"
                        ? "BLOCKED"
                        : "ACTIVE",
                  })
                }
              >
                {user.status === "ACTIVE"
                  ? "Ban"
                  : "Unban"}
              </Button>

            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}