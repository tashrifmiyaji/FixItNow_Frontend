"use client";

import useCategories from "@/hooks/category/useCategories";

const CategorySection = () => {
  const { data, isPending, isError } = useCategories();

  if (isPending) {
    return (
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-8 text-3xl font-bold">Categories</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-8 text-3xl font-bold">Categories</h2>
        <p>Something went wrong.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">Service Categories</h2>
        <p className="text-muted-foreground mt-3">
          Browse our most popular home service categories.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {data?.data.map((category) => (
          <div
            key={category.id}
            className="hover:border-primary rounded-xl border p-6 transition-all hover:shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>

            <p className="text-muted-foreground line-clamp-3 text-sm">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;