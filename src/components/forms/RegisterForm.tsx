"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import registerUser, {
  RegisterPayload,
} from "@/services/authService/registerUser";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterPayload>();

  const onSubmit = async (data: RegisterPayload) => {
    try {
      await registerUser(data);

      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4 rounded-xl border p-6"
    >
      <h2 className="text-center text-3xl font-bold">
        Register
      </h2>

      <Input
        placeholder="Name"
        {...register("name")}
      />

      <Input
        placeholder="Email"
        {...register("email")}
      />

      <Input
        placeholder="Phone"
        {...register("phone")}
      />

      <Input
        type="password"
        placeholder="Password"
        {...register("password")}
      />

      <select
        {...register("role")}
        className="w-full rounded-md border p-2"
      >
        <option value="CUSTOMER">Customer</option>
        <option value="TECHNICIAN">Technician</option>
      </select>

      <Button
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}