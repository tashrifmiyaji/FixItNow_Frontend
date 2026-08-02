"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthProvider";

const UserMenu = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>

        <Button asChild>
          <Link href="/register">Register</Link>
        </Button>
      </div>
    );
  }

  return (
    <Button asChild>
      <Link href="/dashboard">Dashboard</Link>
    </Button>
  );
};

export default UserMenu;