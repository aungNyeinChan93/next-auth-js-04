"use client";

import { loginWithCredential } from "@/actions/auth-action";
import { error } from "console";
import { signIn } from "next-auth/react";
import React, { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction] = useActionState(loginWithCredential, undefined);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Login Here!</h1>

        {/* error */}
        {!state?.success && (
          <>
            <p className="text-red-600 p-1"> {state?.error}</p>
          </>
        )}

        {/* Email + Password */}
        <form className="space-y-4" action={formAction}>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            name="password"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        {/* Social logins */}
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900"
        >
          Continue with GitHub
        </button>
        <button
          //   onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
