"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/portal/client";
import { detectPlatform } from "@/lib/portal/channels";
import type { Option } from "@/lib/portal/types";
import ChannelList from "./channel-list";
import { ActionButton, Checkbox, Field, FormAlert, Select, SubmitButton, TextArea, TextInput } from "./form";

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

/**
 * Submit a posted video for payment. The editor edits the video, posts it on one of their OWN channels (the
 * ones the admin approved when they applied), and the link to that post is the proof. The server checks the
 * link against those channels, and the admin confirms the views.
 */
export function JobActions({
  contentId,
  contentOpen,
  canRelease,
  platforms,
  channels,
}: {
  contentId: string;
  contentOpen: boolean;
  canRelease: boolean;
  /** Only the platforms this editor listed a channel for. */
  platforms: Option[];
  /** The editor's approved channels, by platform. */
  channels: Record<string, string>;
}) {
  const router = useRouter();
  const [formOpen, setFormOpen] = useState(false);
  const [clipUrl, setClipUrl] = useState("");
  const [platform, setPlatform] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [ownChannel, setOwnChannel] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<{ tone: "error" | "success"; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [releasing, setReleasing] = useState(false);

  const canSubmit = platforms.length > 0;

  // Pasting a link picks the platform for them, as long as it's one they have a channel on.
  function onLink(value: string) {
    setClipUrl(value);
    const detected = detectPlatform(value);
    if (detected && platforms.some((p) => p.value === detected)) setPlatform(detected);
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setMessage(null);
    setErrors({});
    setSubmitting(true);
    try {
      await api("/editor/clips", {
        method: "POST",
        body: { content_id: contentId, clip_url: clipUrl, platform, title, notes, own_channel: ownChannel },
      });
      setClipUrl("");
      setTitle("");
      setNotes("");
      setOwnChannel(false);
      setMessage({
        tone: "success",
        text: "Submitted. Our team will check the video is on your approved channel and confirm its views.",
      });
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
            {formOpen ? "Hide form" : "Submit a posted video"}
          </ActionButton>
        ) : (
          <span className="rounded-full bg-[#ECECEC] px-4 py-2 text-[13px] text-[#4A4A4A]">Closed to new videos</span>
        )}
        {canRelease && (
          <ActionButton variant="ghost" onClick={release} loading={releasing}>
            Release job
          </ActionButton>
        )}
      </div>

      {message && !formOpen && <FormAlert tone={message.tone}>{message.text}</FormAlert>}

      {formOpen && contentOpen && !canSubmit && (
        <FormAlert>
          Your application doesn&apos;t list a channel we can match, so videos can&apos;t be submitted yet. Please contact the Drip
          team to add your channels.
        </FormAlert>
      )}

      {formOpen && contentOpen && canSubmit && (
        <form onSubmit={submit} noValidate className="flex flex-col gap-4 rounded-2xl bg-[#FBF5FF] p-4 sm:p-5" aria-busy={submitting}>
          {message && <FormAlert tone={message.tone}>{message.text}</FormAlert>}

          <div className="flex flex-col gap-2 text-[14px] leading-[1.6] text-[#404040]">
            <p>
              Edit the video, <strong>post it on one of your own approved channels</strong>, and once it has the views, paste the link
              to your post here. That link is your proof for payment.
            </p>
            <ChannelList socials={channels} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Link to your posted video" required htmlFor={`clip-url-${contentId}`} error={errors.clip_url} hint="It must be on one of the channels above.">
              <TextInput id={`clip-url-${contentId}`} type="url" placeholder="https://" value={clipUrl} onChange={onLink} invalid={!!errors.clip_url} />
            </Field>
            <Field label="Platform" required htmlFor={`clip-platform-${contentId}`} error={errors.platform}>
              <Select id={`clip-platform-${contentId}`} value={platform} onChange={setPlatform} options={platforms} placeholder="Where is it posted?" invalid={!!errors.platform} />
            </Field>
          </div>
          <Field label="Title" htmlFor={`clip-title-${contentId}`} error={errors.title}>
            <TextInput id={`clip-title-${contentId}`} value={title} onChange={setTitle} maxLength={120} invalid={!!errors.title} />
          </Field>
          <Field label="Notes for the reviewer" htmlFor={`clip-notes-${contentId}`} error={errors.notes}>
            <TextArea id={`clip-notes-${contentId}`} value={notes} onChange={setNotes} maxLength={500} invalid={!!errors.notes} />
          </Field>
          <div className="flex flex-col gap-1">
            <Checkbox checked={ownChannel} onChange={setOwnChannel} invalid={!!errors.own_channel}>
              I posted this video on my own approved channel.
            </Checkbox>
            {errors.own_channel && <p role="alert" className="text-[13px] text-[#C53030]">{errors.own_channel}</p>}
          </div>
          <div>
            <SubmitButton loading={submitting} loadingText="Submitting…" disabled={!clipUrl || !platform || !ownChannel}>
              Submit for payment
            </SubmitButton>
          </div>
        </form>
      )}
    </div>
  );
}

/**
 * What an editor can do about a submitted video: take back one that is still waiting (a mistyped link), or
 * send a rejected one back for review (e.g. once it has reached the view threshold).
 */
export function ClipActions({ clipId, status }: { clipId: string; status: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [ownChannel, setOwnChannel] = useState(false);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function run(action: () => Promise<unknown>) {
    setLoading(true);
    setError("");
    try {
      await action();
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong.");
      setLoading(false);
    }
  }

  if (status === "pending") {
    return (
      <div className="flex flex-col items-start gap-1">
        <ActionButton
          variant="ghost"
          loading={loading}
          onClick={() => {
            if (window.confirm("Withdraw this video? You can submit it again later.")) {
              void run(() => api(`/editor/clips/${clipId}`, { method: "DELETE" }));
            }
          }}
        >
          Withdraw
        </ActionButton>
        {error && <span role="alert" className="text-[12px] text-[#C53030]">{error}</span>}
      </div>
    );
  }

  if (status !== "rejected") return <>—</>;

  return (
    <div className="flex min-w-[220px] flex-col items-start gap-2">
      <ActionButton variant="secondary" onClick={() => setOpen((v) => !v)}>
        {open ? "Cancel" : "Submit again"}
      </ActionButton>
      {open && (
        <div className="flex w-full flex-col gap-2">
          <TextArea value={notes} onChange={setNotes} maxLength={500} placeholder="Optional note, e.g. now at 2.3 lakh views" />
          <Checkbox checked={ownChannel} onChange={setOwnChannel}>
            It&apos;s on my own approved channel.
          </Checkbox>
          <ActionButton
            variant="primary"
            loading={loading}
            disabled={!ownChannel}
            onClick={() => run(() => api(`/editor/clips/${clipId}/resubmit`, { method: "POST", body: { own_channel: ownChannel, notes } }))}
          >
            Send for review
          </ActionButton>
        </div>
      )}
      {error && <span role="alert" className="text-[12px] text-[#C53030]">{error}</span>}
    </div>
  );
}
