"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/portal/client";
import type { ContentStatus, Option } from "@/lib/portal/types";
import { ActionButton, Field, FormAlert, Select, SubmitButton, TextArea, TextInput } from "./form";
import { Card } from "./ui";

export function SubmitContentForm({ niches, maxOpen }: { niches: Option[]; maxOpen: number }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [niche, setNiche] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<{ tone: "error" | "success"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setMessage(null);
    setErrors({});
    setLoading(true);
    try {
      await api("/creator/content", { method: "POST", body: { title, video_url: videoUrl, niche, description } });
      setTitle("");
      setVideoUrl("");
      setNiche("");
      setDescription("");
      setMessage({ tone: "success", text: "Submitted. Editors can now pick it up." });
      router.refresh();
    } catch (e) {
      if (e instanceof ApiError) {
        setErrors(e.fieldErrors);
        setMessage({ tone: "error", text: Object.keys(e.fieldErrors).length ? "Please fix the highlighted fields." : e.message });
      } else {
        setMessage({ tone: "error", text: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5" aria-busy={loading}>
        <div className="flex flex-col gap-1">
          <h2 className="font-kugile text-[20px] text-black">Submit a video for clipping</h2>
          <p className="text-[14px] leading-[1.6] text-[#686868]">
            Share a long-form video (podcast, interview, vlog, webinar). Up to {maxOpen} open items at a time.
          </p>
        </div>
        {message && <FormAlert tone={message.tone}>{message.text}</FormAlert>}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Title" required htmlFor="c-title" error={errors.title}>
            <TextInput id="c-title" value={title} onChange={setTitle} maxLength={120} invalid={!!errors.title} placeholder="e.g. Founder podcast, episode 12" />
          </Field>
          <Field label="Niche" required htmlFor="c-niche" error={errors.niche}>
            <Select id="c-niche" value={niche} onChange={setNiche} options={niches} placeholder="Choose a niche" invalid={!!errors.niche} />
          </Field>
        </div>
        <Field label="Video link" required htmlFor="c-url" error={errors.video_url} hint="A YouTube, Drive or any link editors can open.">
          <TextInput id="c-url" type="url" value={videoUrl} onChange={setVideoUrl} placeholder="https://" invalid={!!errors.video_url} />
        </Field>
        <Field label="Notes for editors" htmlFor="c-desc" error={errors.description} hint="Optional: moments to look for, tone, things to avoid.">
          <TextArea id="c-desc" value={description} onChange={setDescription} maxLength={1000} invalid={!!errors.description} />
        </Field>
        <div>
          <SubmitButton loading={loading} loadingText="Submitting…" disabled={!title || !videoUrl || !niche}>
            Submit video
          </SubmitButton>
        </div>
      </form>
    </Card>
  );
}

export function ContentActions({
  id,
  status,
  canDelete,
}: {
  id: string;
  status: ContentStatus;
  canDelete: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<"status" | "delete" | null>(null);
  const [error, setError] = useState("");

  async function toggle() {
    setBusy("status");
    setError("");
    try {
      await api(`/creator/content/${id}`, { method: "PATCH", body: { status: status === "open" ? "closed" : "open" } });
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong.");
    } finally {
      setBusy(null);
    }
  }

  async function remove() {
    if (!window.confirm("Delete this video? This can't be undone.")) return;
    setBusy("delete");
    setError("");
    try {
      await api(`/creator/content/${id}`, { method: "DELETE" });
      router.push("/dashboard/creator/content");
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong.");
      setBusy(null);
    }
  }

  return (
    <div className="flex flex-col items-start gap-2 sm:items-end">
      <div className="flex flex-wrap gap-2">
        <ActionButton onClick={toggle} loading={busy === "status"} disabled={busy === "delete"}>
          {status === "open" ? "Close to new clips" : "Reopen"}
        </ActionButton>
        {canDelete && (
          <ActionButton variant="danger" onClick={remove} loading={busy === "delete"} disabled={busy === "status"}>
            Delete
          </ActionButton>
        )}
      </div>
      {error && <p role="alert" className="text-[13px] text-[#C53030]">{error}</p>}
    </div>
  );
}
