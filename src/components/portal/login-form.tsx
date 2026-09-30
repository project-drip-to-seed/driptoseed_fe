"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/portal/client";
import { Field, FormAlert, PasswordInput, SubmitButton, TextInput } from "./form";
import { Card } from "./ui";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }
    setLoading(true);
    try {
      await api("/auth/login", { method: "POST", body: { email, password } });
      router.push("/dashboard");
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <Card className="flex flex-col gap-6 !p-6 sm:!p-8">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5" aria-busy={loading}>
        {error && <FormAlert>{error}</FormAlert>}
        <Field label="Email" htmlFor="email">
          <TextInput id="email" type="email" autoComplete="username" value={email} onChange={setEmail} autoFocus />
        </Field>
        <Field label="Password" htmlFor="password">
          <PasswordInput id="password" autoComplete="current-password" value={password} onChange={setPassword} maxLength={128} />
        </Field>
        <SubmitButton loading={loading} loadingText="Logging in…" className="w-full !py-3.5">
          Log in
        </SubmitButton>
      </form>
      <div className="border-t border-[#D59EFB]/40 pt-5 text-[14px] leading-[1.6] text-[#686868]">
        New to Drip?{" "}
        <Link href="/apply/creator" className="text-[#780AC1] underline">
          Apply as a creator
        </Link>{" "}
        or{" "}
        <Link href="/apply/editor" className="text-[#780AC1] underline">
          apply as an editor
        </Link>
        .
      </div>
    </Card>
  );
}
