"use client";

// One form for both roles. Also used (without the account section) to edit and
// resubmit an existing application.

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/portal/client";
import type { Meta } from "@/lib/portal/types";
import { Checkbox, ChipGroup, Field, FormAlert, PasswordInput, Select, SubmitButton, TextArea, TextInput } from "./form";
import { Card } from "./ui";

type Role = "creator" | "editor";

interface Values {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  // creator
  niche: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  linkedin: string;
  website: string;
  audience_size: string;
  content_types: string[];
  publish_frequency: string;
  goals: string;
  // editor
  portfolio_url: string;
  experience: string;
  tools: string[];
  niches: string[];
  platforms: string[];
  weekly_availability: string;
  motivation: string;
  // shared
  sample_links: string[];
  consent: boolean;
}

const EMPTY: Values = {
  full_name: "",
  email: "",
  phone: "",
  password: "",
  niche: "",
  instagram: "",
  youtube: "",
  tiktok: "",
  linkedin: "",
  website: "",
  audience_size: "",
  content_types: [],
  publish_frequency: "",
  goals: "",
  portfolio_url: "",
  experience: "",
  tools: [],
  niches: [],
  platforms: [],
  weekly_availability: "",
  motivation: "",
  sample_links: ["", "", ""],
  consent: false,
};

function fromApplication(data: Record<string, unknown>): Values {
  const socials = (data.socials ?? {}) as Record<string, string>;
  const samples = ((data.sample_links as string[] | undefined) ?? []).slice(0, 3);
  return {
    ...EMPTY,
    niche: String(data.niche ?? ""),
    instagram: socials.instagram ?? "",
    youtube: socials.youtube ?? "",
    tiktok: socials.tiktok ?? "",
    linkedin: socials.linkedin ?? "",
    website: socials.website ?? "",
    audience_size: String(data.audience_size ?? ""),
    content_types: (data.content_types as string[]) ?? [],
    publish_frequency: String(data.publish_frequency ?? ""),
    goals: String(data.goals ?? ""),
    portfolio_url: String(data.portfolio_url ?? ""),
    experience: String(data.experience ?? ""),
    tools: (data.tools as string[]) ?? [],
    niches: (data.niches as string[]) ?? [],
    platforms: (data.platforms as string[]) ?? [],
    weekly_availability: String(data.weekly_availability ?? ""),
    motivation: String(data.motivation ?? ""),
    sample_links: [...samples, "", "", ""].slice(0, 3),
    consent: false, // must be re-confirmed on every submission
  };
}

const blankToUndefined = (v: string) => (v.trim() ? v.trim() : undefined);

function buildPayload(role: Role, v: Values, mode: "create" | "edit") {
  const account =
    mode === "create"
      ? { full_name: v.full_name, email: v.email, phone: v.phone, password: v.password }
      : {};
  const samples = v.sample_links.map((s) => s.trim()).filter(Boolean);

  if (role === "creator") {
    return {
      ...account,
      niche: v.niche,
      socials: {
        instagram: blankToUndefined(v.instagram),
        youtube: blankToUndefined(v.youtube),
        tiktok: blankToUndefined(v.tiktok),
        linkedin: blankToUndefined(v.linkedin),
        website: blankToUndefined(v.website),
      },
      audience_size: v.audience_size,
      content_types: v.content_types,
      publish_frequency: v.publish_frequency,
      sample_links: samples,
      goals: v.goals,
      consent: v.consent,
    };
  }
  return {
    ...account,
    portfolio_url: v.portfolio_url,
    sample_links: samples,
    experience: v.experience,
    tools: v.tools,
    niches: v.niches,
    platforms: v.platforms,
    weekly_availability: v.weekly_availability,
    motivation: v.motivation,
    consent: v.consent,
  };
}

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <Card className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="font-kugile text-[22px] leading-[1.3] text-black">{title}</h2>
        {description && <p className="text-[14px] leading-[1.5] text-[#686868]">{description}</p>}
      </div>
      {children}
    </Card>
  );
}

export default function ApplyForm({
  role,
  meta,
  mode = "create",
  initial,
}: {
  role: Role;
  meta: Meta;
  mode?: "create" | "edit";
  initial?: Record<string, unknown>;
}) {
  const router = useRouter();
  const [values, setValues] = useState<Values>(initial ? fromApplication(initial) : EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear the message for a field as soon as the user touches it.
    setErrors((prev) => {
      if (!prev[key] && !Object.keys(prev).some((k) => k.startsWith(`${key}.`))) return prev;
      const next = { ...prev };
      delete next[key];
      for (const k of Object.keys(next)) if (k.startsWith(`${key}.`)) delete next[k];
      return next;
    });
  };

  const err = (name: string): string | undefined =>
    errors[name] ?? Object.entries(errors).find(([k]) => k.startsWith(`${name}.`))?.[1];

  const setSample = (index: number, value: string) => {
    const next = [...values.sample_links];
    next[index] = value;
    set("sample_links", next);
  };

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormError("");
    setSaved(false);
    setLoading(true);
    try {
      const payload = buildPayload(role, values, mode);
      if (mode === "create") {
        await api(`/applications/${role}`, { method: "POST", body: payload });
        router.push("/dashboard");
        router.refresh();
      } else {
        await api("/applications/me", { method: "PUT", body: payload });
        setSaved(true);
        setValues((prev) => ({ ...prev, consent: false }));
        window.scrollTo({ top: 0, behavior: "smooth" });
        router.refresh();
      }
    } catch (e) {
      if (e instanceof ApiError) {
        setErrors(e.fieldErrors);
        setFormError(
          Object.keys(e.fieldErrors).length
            ? "Please fix the highlighted fields and try again."
            : e.message,
        );
        if (Object.keys(e.fieldErrors).length) {
          requestAnimationFrame(() =>
            document.querySelector('[aria-invalid="true"], [role="alert"]')?.scrollIntoView({ block: "center", behavior: "smooth" }),
          );
        }
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6" aria-busy={loading}>
      {formError && <FormAlert>{formError}</FormAlert>}
      {saved && <FormAlert tone="success">Your application was updated and sent back for review.</FormAlert>}

      {mode === "create" && (
        <Section
          title="Your account"
          description="You'll use this to log in and follow your application."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required error={err("full_name")} htmlFor="full_name">
              <TextInput id="full_name" autoComplete="name" value={values.full_name} onChange={(v) => set("full_name", v)} invalid={!!err("full_name")} maxLength={80} />
            </Field>
            <Field label="Phone number" required error={err("phone")} htmlFor="phone">
              <TextInput id="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" value={values.phone} onChange={(v) => set("phone", v)} invalid={!!err("phone")} />
            </Field>
            <Field label="Email" required error={err("email")} htmlFor="email">
              <TextInput id="email" type="email" autoComplete="email" value={values.email} onChange={(v) => set("email", v)} invalid={!!err("email")} />
            </Field>
            <Field label="Password" required error={err("password")} hint="At least 8 characters, with a letter and a number." htmlFor="password">
              <PasswordInput id="password" autoComplete="new-password" value={values.password} onChange={(v) => set("password", v)} invalid={!!err("password")} maxLength={128} />
            </Field>
          </div>
        </Section>
      )}

      {role === "creator" ? (
        <>
          <Section title="About your channel" description="Help us understand your content and audience.">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Main niche" required error={err("niche")} htmlFor="niche">
                <Select id="niche" value={values.niche} onChange={(v) => set("niche", v)} options={meta.niches} placeholder="Choose a niche" invalid={!!err("niche")} />
              </Field>
              <Field label="Audience size" required error={err("audience_size")} htmlFor="audience_size">
                <Select id="audience_size" value={values.audience_size} onChange={(v) => set("audience_size", v)} options={meta.audience_sizes} placeholder="Roughly how many followers?" invalid={!!err("audience_size")} />
              </Field>
              <Field label="How often do you publish?" required error={err("publish_frequency")} htmlFor="publish_frequency">
                <Select id="publish_frequency" value={values.publish_frequency} onChange={(v) => set("publish_frequency", v)} options={meta.publish_frequencies} placeholder="Choose one" invalid={!!err("publish_frequency")} />
              </Field>
            </div>
            <Field label="What kind of long-form content do you make?" required error={err("content_types")}>
              <ChipGroup options={meta.content_types} value={values.content_types} onChange={(v) => set("content_types", v)} />
            </Field>
          </Section>

          <Section title="Where can we find you?" description="Add at least one link to a channel or profile.">
            {err("socials") && <p role="alert" className="text-[13px] text-[#C53030]">{err("socials")}</p>}
            <div className="grid gap-5 sm:grid-cols-2">
              {(
                [
                  ["instagram", "Instagram", "https://instagram.com/yourname"],
                  ["youtube", "YouTube", "https://youtube.com/@yourchannel"],
                  ["tiktok", "TikTok", "https://tiktok.com/@yourname"],
                  ["linkedin", "LinkedIn", "https://linkedin.com/in/yourname"],
                  ["website", "Website", "https://"],
                ] as const
              ).map(([key, label, placeholder]) => (
                <Field key={key} label={label} error={err(`socials.${key}`)} htmlFor={key}>
                  <TextInput id={key} type="url" placeholder={placeholder} value={values[key]} onChange={(v) => set(key, v)} invalid={!!err(`socials.${key}`)} />
                </Field>
              ))}
            </div>
          </Section>

          <SamplesAndNotes
            values={values}
            err={err}
            setSample={setSample}
            samplesLabel="Links to your best long-form videos"
            samplesHint="Up to 3, optional. Helps us see what we'd be clipping."
            notesKey="goals"
            notesLabel="What do you want to achieve with Drip?"
            set={set}
          />
        </>
      ) : (
        <>
          <Section title="Your editing" description="Tell us how you edit and what you've made.">
            <Field label="Portfolio link" required error={err("portfolio_url")} hint="Reel, Behance, Drive folder, website: anything that shows your work." htmlFor="portfolio_url">
              <TextInput id="portfolio_url" type="url" placeholder="https://" value={values.portfolio_url} onChange={(v) => set("portfolio_url", v)} invalid={!!err("portfolio_url")} />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Experience" required error={err("experience")} htmlFor="experience">
                <Select id="experience" value={values.experience} onChange={(v) => set("experience", v)} options={meta.experience_levels} placeholder="Years editing" invalid={!!err("experience")} />
              </Field>
              <Field label="Weekly availability" required error={err("weekly_availability")} htmlFor="weekly_availability">
                <Select id="weekly_availability" value={values.weekly_availability} onChange={(v) => set("weekly_availability", v)} options={meta.weekly_availability} placeholder="Hours per week" invalid={!!err("weekly_availability")} />
              </Field>
            </div>
            <Field label="Tools you use" required error={err("tools")}>
              <ChipGroup options={meta.editing_tools} value={values.tools} onChange={(v) => set("tools", v)} />
            </Field>
          </Section>

          <Section title="What you edit" description="We match you with creators in the niches you know.">
            <Field label="Niches" required error={err("niches")} hint="Pick up to 5.">
              <ChipGroup options={meta.niches} value={values.niches} onChange={(v) => set("niches", v)} max={5} />
            </Field>
            <Field label="Platforms you edit for" required error={err("platforms")}>
              <ChipGroup options={meta.platforms} value={values.platforms} onChange={(v) => set("platforms", v)} />
            </Field>
          </Section>

          <SamplesAndNotes
            values={values}
            err={err}
            setSample={setSample}
            samplesLabel="Links to sample clips you've edited"
            samplesHint="Up to 3, optional."
            notesKey="motivation"
            notesLabel="Why do you want to edit for Drip?"
            set={set}
          />
        </>
      )}

      <Card className="flex flex-col gap-5">
        <Checkbox checked={values.consent} onChange={(v) => set("consent", v)} invalid={!!err("consent")}>
          I agree to the{" "}
          <Link href="/privacy" target="_blank" className="text-[#780AC1] underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" target="_blank" className="text-[#780AC1] underline">
            Terms &amp; Conditions
          </Link>
          , and I confirm the details above are accurate.
        </Checkbox>
        {err("consent") && <p role="alert" className="-mt-3 text-[13px] text-[#C53030]">{err("consent")}</p>}
        <div className="flex flex-wrap items-center gap-4">
          <SubmitButton loading={loading} loadingText={mode === "create" ? "Submitting…" : "Saving…"}>
            {mode === "create" ? "Submit application" : "Save and resubmit"}
          </SubmitButton>
          {mode === "create" && (
            <p className="text-[13px] text-[#686868]">
              Already applied?{" "}
              <Link href="/login" className="text-[#780AC1] underline">
                Log in
              </Link>
            </p>
          )}
        </div>
      </Card>
    </form>
  );
}

function SamplesAndNotes({
  values,
  err,
  setSample,
  set,
  samplesLabel,
  samplesHint,
  notesKey,
  notesLabel,
}: {
  values: Values;
  err: (name: string) => string | undefined;
  setSample: (index: number, value: string) => void;
  set: <K extends keyof Values>(key: K, value: Values[K]) => void;
  samplesLabel: string;
  samplesHint: string;
  notesKey: "goals" | "motivation";
  notesLabel: string;
}) {
  return (
    <Section title="A bit more">
      <Field label={samplesLabel} hint={samplesHint} error={err("sample_links")}>
        <div className="flex flex-col gap-3">
          {values.sample_links.map((link, i) => (
            <div key={i} className="flex flex-col gap-1">
              <TextInput
                type="url"
                aria-label={`Sample link ${i + 1}`}
                placeholder="https://"
                value={link}
                onChange={(v) => setSample(i, v)}
                invalid={!!err(`sample_links.${i}`)}
              />
              {err(`sample_links.${i}`) && <p role="alert" className="text-[13px] text-[#C53030]">{err(`sample_links.${i}`)}</p>}
            </div>
          ))}
        </div>
      </Field>
      <Field label={notesLabel} error={err(notesKey)} htmlFor={notesKey}>
        <TextArea id={notesKey} value={values[notesKey]} onChange={(v) => set(notesKey, v)} maxLength={1000} invalid={!!err(notesKey)} />
      </Field>
    </Section>
  );
}
