"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import loginUser from "@/services/authService/loginUser";
import { useAuth } from "@/providers/AuthProvider";
import { getCurrentUser } from "@/services/authService/getCurrentUser";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const { refetchUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginData>();

 const onSubmit = async (data: LoginData) => {
  try {
    await loginUser(data);

    await refetchUser();

    const currentUser = await getCurrentUser();

    const role = currentUser.data.role;

    if (role === "ADMIN") {
      router.push("/dashboard/admin");
    } else if (role === "TECHNICIAN") {
      router.push("/dashboard/technician");
    } else {
      router.push("/dashboard/customer");
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-5 rounded-xl border p-6"
    >
      <h2 className="text-center text-3xl font-bold">
        Login
      </h2>

      <Input
        placeholder="Email"
        {...register("email")}
      />

      <Input
        type="password"
        placeholder="Password"
        {...register("password")}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging..." : "Login"}
      </Button>
    </form>
  );
}