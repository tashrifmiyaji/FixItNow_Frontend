import CategoryForm from "@/components/dashboard/admin/CategoryForm";
import CategoriesTable from "@/components/dashboard/admin/CategoriesTable";

export default function AdminCategoryPage() {
  return (
    <div className="container mx-auto py-10">

      <h1 className="mb-8 text-4xl font-bold">
        Category Management
      </h1>

      <CategoryForm />

      <CategoriesTable />

    </div>
  );
}