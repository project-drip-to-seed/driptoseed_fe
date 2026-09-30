"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/portal/client";
import { Field, FormAlert, PasswordInput, SubmitButton, TextInput } from "./form";
import { Card } from "./ui";

export default function AccountForms({
  fullName,
  phone,
  email,
}: {
  fullName: string;
  phone: string;
  email: string;
}) {
  const router = useRouter();

  const [name, setName] = useState(fullName);
  const [tel, setTel] = useState(phone);
  const [profileMsg, setProfileMsg] = useState<{ tone: "error" | "success"; text: string } | null>(null);
  const [profileErrors, setProfileErrors] = useState<Record<string, string>>({});
  const [savingProfile, setSavingProfile] = useState(false);

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [pwMsg, setPwMsg] = useState<{ tone: "error" | "success"; text: string } | null>(null);
  const [pwErrors, setPwErrors] = useState<Record<string, string>>({});
  const [savingPw, setSavingPw] = useState(false);

  async function saveProfile(event: React.FormEvent) {
    event.preventDefault();
    setProfileMsg(null);
    setProfileErrors({});
    setSavingProfile(true);
    try {
      await api("/auth/profile", { method: "PATCH", body: { full_name: name, phone: tel } });
      setProfileMsg({ tone: "success", text: "Profile updated." });
      router.refresh();
    } catch (e) {
      if (e instanceof ApiError) {
        setProfileErrors(e.fieldErrors);
        setProfileMsg({ tone: "error", text: Object.keys(e.fieldErrors).length ? "Please fix the highlighted fields." : e.message });
      }
    } finally {
      setSavingProfile(false);
    }
  }

  async function changePassword(event: React.FormEvent) {
    event.preventDefault();
    setPwMsg(null);
    setPwErrors({});
    setSavingPw(true);
    try {
      await api("/auth/change-password", { method: "POST", body: { current_password: current, new_password: next } });
      setCurrent("");
      setNext("");
      setPwMsg({ tone: "success", text: "Password changed. Your other devices have been signed out." });
    } catch (e) {
      if (e instanceof ApiError) {
        setPwErrors(e.fieldErrors);
        setPwMsg({ tone: "error", text: Object.keys(e.fieldErrors).length ? "Please fix the highlighted fields." : e.message });
      }
    } finally {
      setSavingPw(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <form onSubmit={saveProfile} noValidate className="flex flex-col gap-5">
          <h2 className="font-kugile text-[20px] text-black">Profile</h2>
          {profileMsg && <FormAlert tone={profileMsg.tone}>{profileMsg.text}</FormAlert>}
          <Field label="Email" hint="Your email is your login and can't be changed here.">
            <TextInput value={email} onChange={() => {}} disabled readOnly />
          </Field>
          <Field label="Full name" htmlFor="acc-name" error={profileErrors.full_name}>
            <TextInput id="acc-name" value={name} onChange={setName} maxLength={80} invalid={!!profileErrors.full_name} />
          </Field>
          <Field label="Phone" htmlFor="acc-phone" error={profileErrors.phone}>
            <TextInput id="acc-phone" type="tel" value={tel} onChange={setTel} invalid={!!profileErrors.phone} />
          </Field>
          <div>
            <SubmitButton loading={savingProfile} loadingText="Saving…">
              Save profile
            </SubmitButton>
          </div>
        </form>
      </Card>

      <Card>
        <form onSubmit={changePassword} noValidate className="flex flex-col gap-5">
          <h2 className="font-kugile text-[20px] text-black">Change password</h2>
          {pwMsg && <FormAlert tone={pwMsg.tone}>{pwMsg.text}</FormAlert>}
          <Field label="Current password" htmlFor="acc-current" error={pwErrors.current_password}>
            <PasswordInput id="acc-current" autoComplete="current-password" value={current} onChange={setCurrent} invalid={!!pwErrors.current_password} />
          </Field>
          <Field label="New password" htmlFor="acc-new" hint="At least 8 characters, with a letter and a number." error={pwErrors.new_password}>
            <PasswordInput id="acc-new" autoComplete="new-password" value={next} onChange={setNext} invalid={!!pwErrors.new_password} />
          </Field>
          <div>
            <SubmitButton loading={savingPw} loadingText="Updating…" disabled={!current || !next}>
              Update password
            </SubmitButton>
          </div>
        </form>
      </Card>
    </div>
  );
}
