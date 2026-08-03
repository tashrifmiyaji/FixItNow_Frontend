import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">404</h1>

      <p>Page Not Found</p>

      <Link
        href="/"
        className="rounded bg-black px-5 py-2 text-white"
      >
        Go Home
      </Link>
    </div>
  );
}