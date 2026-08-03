"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCreateCategory } from "@/hooks/admin/useCreateCategory";

export default function CategoryForm() {
  const { mutate } = useCreateCategory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    mutate({
      name,
      description,
    });

    setName("");
    setDescription("");
  };

  return (
    <div className="mb-8 space-y-3">

      <Input
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button onClick={handleSubmit}>
        Create Category
      </Button>

    </div>
  );
}