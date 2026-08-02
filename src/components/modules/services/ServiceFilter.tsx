"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function ServiceFilter({
  search,
  setSearch,
}: Props) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search services..."
      className="w-full rounded-md border px-4 py-2"
    />
  );
}