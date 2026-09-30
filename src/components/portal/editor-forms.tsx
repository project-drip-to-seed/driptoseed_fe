"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/portal/client";
import type { Option } from "@/lib/portal/types";
import { ActionButton, Field, FormAlert, Select, SubmitButton, TextArea, TextInput } from "./form";

export function ClaimButton({ contentId }: { contentId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function claim() {
    setLoading(true);
    setError("");
    try {
      await api(`/editor/content/${contentId}/claim`, { method: "POST" });
      router.push("/dashboard/editor/jobs");
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong.");
      setLoading(false);
      router.refresh(); // the item may have just been taken; show the current state
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <ActionButton variant="primary" onClick={claim} loading={loading}>
        Take this on
      </ActionButton>
      {error && <p role="alert" className="text-[13px] text-[#C53030]">{error}</p>}
    </div>
  );
}

export function JobActions({
  contentId,
  contentOpen,
  canRelease,
  platforms,
}: {
  contentId: string;
  contentOpen: boolean;
  canRelease: boolean;
  platforms: Option[];
}) {
  const router = useRouter();
  const [formOpen, setFormOpen] = useState(false);
  const [clipUrl, setClipUrl] = useState("");
  const [platform, setPlatform] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<{ tone: "error" | "success"; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [releasing, setReleasing] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setMessage(null);
    setErrors({});
    setSubmitting(true);
    try {
      await api("/editor/clips", {
        method: "POST",
        body: { content_id: contentId, clip_url: clipUrl, platform, title, notes },
      });
      setClipUrl("");
      setTitle("");
      setNotes("");
      setMessage({ tone: "success", text: "Clip submitted for review." });
      router.refresh();
    } catch (e) {
      if (e instanceof ApiError) {
        setErrors(e.fieldErrors);
        setMessage({ tone: "error", text: Object.keys(e.fieldErrors).length ? "Please fix the highlighted fields." : e.message });
      } else {
        setMessage({ tone: "error", text: "Something went wrong. Please try again." });
      }
    } finally {
      setSubmitting(false);
    }
  }

  async function release() {
    if (!window.confirm("Release this job so another editor can take it?")) return;
    setReleasing(true);
    try {
      await api(`/editor/content/${contentId}/release`, { method: "POST" });
      router.refresh();
    } catch (e) {
      setMessage({ tone: "error", text: e instanceof ApiError ? e.message : "Something went wrong." });
      setReleasing(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {contentOpen ? (
          <ActionButton variant={formOpen ? "secondary" : "primary"} onClick={() => setFormOpen((v) => !v)}>
            {formOpen ? "Hide form" : "Submit a clip"}
          </ActionButton>
        ) : (
          <span className="rounded-full bg-[#ECECEC] px-4 py-2 text-[13px] text-[#4A4A4A]">Closed to new clips</span>
        )}
        {canRelease && (
          <ActionButton variant="ghost" onClick={release} loading={releasing}>
            Release job
          </ActionButton>
        )}
      </div>

      {message && !formOpen && <FormAlert tone={message.tone}>{message.text}</FormAlert>}

      {formOpen && contentOpen && (
        <form onSubmit={submit} noValidate className="flex flex-col gap-4 rounded-2xl bg-[#FBF5FF] p-4 sm:p-5" aria-busy={submitting}>
          {message && <FormAlert tone={message.tone}>{message.text}</FormAlert>}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Clip link" required htmlFor={`clip-url-${contentId}`} error={errors.clip_url} hint="The published or shareable link to your edit.">
              <TextInput id={`clip-url-${contentId}`} type="url" placeholder="https://" value={clipUrl} onChange={setClipUrl} invalid={!!errors.clip_url} />
            </Field>
            <Field label="Platform" required htmlFor={`clip-platform-${contentId}`} error={errors.platform}>
              <Select id={`clip-platform-${contentId}`} value={platform} onChange={setPlatform} options={platforms} placeholder="Where is it posted?" invalid={!!errors.platform} />
            </Field>
          </div>
          <Field label="Clip title" htmlFor={`clip-title-${contentId}`} error={errors.title}>
            <TextInput id={`clip-title-${contentId}`} value={title} onChange={setTitle} maxLength={120} invalid={!!errors.title} />
          </Field>
          <Field label="Notes for the reviewer" htmlFor={`clip-notes-${contentId}`} error={errors.notes}>
            <TextArea id={`clip-notes-${contentId}`} value={notes} onChange={setNotes} maxLength={500} invalid={!!errors.notes} />
          </Field>
          <div>
            <SubmitButton loading={submitting} loadingText="Submitting…" disabled={!clipUrl || !platform}>
              Submit clip
            </SubmitButton>
          </div>
        </form>
      )}
    </div>
  );
}
