"use client";

import { useCategories } from "@/hooks/admin/useCategories";

export default function CategoriesTable() {
  const { data, isLoading } = useCategories();

  if (isLoading) return <p>Loading...</p>;

  return (
    <table className="w-full border">

      <thead>
        <tr className="border-b">
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {data?.data.map((category) => (
          <tr
            key={category.id}
            className="border-b text-center"
          >
            <td>{category.name}</td>

            <td>{category.description}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}