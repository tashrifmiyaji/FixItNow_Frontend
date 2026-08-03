"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">
        Something went wrong!
      </h1>

      <button
        onClick={reset}
        className="rounded bg-black px-5 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}