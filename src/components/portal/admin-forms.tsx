"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/portal/client";
import type { Clip } from "@/lib/portal/types";
import { formatDate, compactNumber, formatNumber, inr } from "@/lib/portal/format";
import { ActionButton, Field, FormAlert, TextArea, TextInput } from "./form";
import { Card, ExternalLink, Pill, StatusBadge } from "./ui";

/** Approve / reject an application, with a note the applicant will see. */
export function ReviewPanel({ applicationId, currentStatus }: { applicationId: string; currentStatus: string }) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState<"approve" | "reject" | null>(null);
  const [message, setMessage] = useState<{ tone: "error" | "success"; text: string } | null>(null);

  async function decide(decision: "approve" | "reject") {
    setMessage(null);
    if (decision === "reject" && note.trim().length < 3) {
      setMessage({ tone: "error", text: "Add a short note explaining the decision so the applicant can act on it." });
      return;
    }
    setBusy(decision);
    try {
      await api(`/admin/applications/${applicationId}/review`, { method: "POST", body: { decision, note } });
      setNote("");
      setMessage({ tone: "success", text: decision === "approve" ? "Application approved." : "Application rejected." });
      router.refresh();
    } catch (e) {
      setMessage({ tone: "error", text: e instanceof ApiError ? e.message : "Something went wrong." });
    } finally {
      setBusy(null);
    }
  }

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-kugile text-[20px] text-black">Decision</h2>
        <StatusBadge status={currentStatus} />
      </div>
      {message && <FormAlert tone={message.tone}>{message.text}</FormAlert>}
      <Field
        label="Note to the applicant"
        htmlFor="review-note"
        hint="Required when rejecting. Optional when approving. They'll see this in their dashboard."
      >
        <TextArea id="review-note" value={note} onChange={setNote} maxLength={500} />
      </Field>
      <div className="flex flex-wrap gap-3">
        <ActionButton variant="primary" onClick={() => decide("approve")} loading={busy === "approve"} disabled={busy !== null || currentStatus === "approved"}>
          Approve
        </ActionButton>
        <ActionButton variant="danger" onClick={() => decide("reject")} loading={busy === "reject"} disabled={busy !== null || currentStatus === "rejected"}>
          Reject
        </ActionButton>
      </div>
    </Card>
  );
}

/** One clip in the review queue: approve/reject and set its view count. */
export function ClipReviewCard({
  clip,
  platformLabel,
  threshold,
}: {
  clip: Clip;
  platformLabel: string;
  threshold: number;
}) {
  const router = useRouter();
  const [views, setViews] = useState(String(clip.views || ""));
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [message, setMessage] = useState<{ tone: "error" | "success"; text: string } | null>(null);

  const viewsNumber = views.trim() === "" ? undefined : Number(views);
  const viewsInvalid = viewsNumber !== undefined && (!Number.isInteger(viewsNumber) || viewsNumber < 0);

  async function run(label: string, fn: () => Promise<unknown>, success: string) {
    setMessage(null);
    setBusy(label);
    try {
      await fn();
      setMessage({ tone: "success", text: success });
      router.refresh();
    } catch (e) {
      setMessage({ tone: "error", text: e instanceof ApiError ? e.message : "Something went wrong." });
    } finally {
      setBusy(null);
    }
  }

  const review = (decision: "approve" | "reject") => {
    if (viewsInvalid) return setMessage({ tone: "error", text: "Views must be a whole number." });
    if (decision === "reject" && note.trim().length < 3) {
      return setMessage({ tone: "error", text: "Add a short note so the editor knows what to fix." });
    }
    return run(
      decision,
      () => api(`/admin/clips/${clip.id}/review`, { method: "POST", body: { decision, note, views: viewsNumber } }),
      decision === "approve" ? "Clip approved." : "Clip rejected.",
    );
  };

  const saveViews = () => {
    if (viewsNumber === undefined || viewsInvalid) return setMessage({ tone: "error", text: "Enter a valid view count." });
    return run("views", () => api(`/admin/clips/${clip.id}`, { method: "PATCH", body: { views: viewsNumber } }), "Views updated.");
  };

  const setPaid = (paid: boolean) =>
    run("paid", () => api(`/admin/clips/${clip.id}`, { method: "PATCH", body: { paid } }), paid ? "Marked as paid." : "Marked as unpaid.");

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={clip.status} />
            <Pill>{platformLabel}</Pill>
            {clip.eligible && <StatusBadge status={clip.paid ? "paid" : "unpaid"} label={clip.paid ? "Paid" : `${inr(clip.payout)} due`} />}
          </div>
          <p className="text-[17px] font-medium leading-[1.35] text-black">{clip.title || clip.content_title}</p>
          <p className="text-[13px] text-[#686868]">
            {clip.editor_name} ({clip.editor_email}) · for “{clip.content_title}” · {formatDate(clip.created_at)}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-[14px] sm:items-end">
          <ExternalLink href={clip.clip_url}>Open clip</ExternalLink>
          {clip.source_url && <ExternalLink href={clip.source_url}>Source video</ExternalLink>}
        </div>
      </div>

      {clip.notes && (
        <p className="rounded-2xl bg-[#FBF5FF] p-3 text-[14px] leading-[1.6] text-[#404040]">
          <span className="mb-0.5 block text-[12px] font-medium uppercase tracking-[0.05em] text-[#686868]">Editor&apos;s note</span>
          {clip.notes}
        </p>
      )}
      {clip.status === "rejected" && clip.review?.note && (
        <p className="rounded-2xl bg-[#FDE2E2] p-3 text-[14px] leading-[1.6] text-[#9B1C1C]">Rejected: {clip.review.note}</p>
      )}

      {message && <FormAlert tone={message.tone}>{message.text}</FormAlert>}

      {clip.status === "pending" && (
        <div className="flex flex-col gap-4 border-t border-[#D59EFB]/30 pt-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Current views" htmlFor={`views-${clip.id}`} hint={`${compactNumber(threshold)}+ views earns the payout.`}>
              <TextInput id={`views-${clip.id}`} inputMode="numeric" placeholder="0" value={views} onChange={setViews} invalid={viewsInvalid} />
            </Field>
            <Field label="Note (required if rejecting)" htmlFor={`note-${clip.id}`}>
              <TextInput id={`note-${clip.id}`} value={note} onChange={setNote} maxLength={500} placeholder="e.g. Audio drifts out of sync" />
            </Field>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionButton variant="primary" onClick={() => review("approve")} loading={busy === "approve"} disabled={busy !== null}>
              Approve
            </ActionButton>
            <ActionButton variant="danger" onClick={() => review("reject")} loading={busy === "reject"} disabled={busy !== null}>
              Reject
            </ActionButton>
          </div>
        </div>
      )}

      {clip.status === "approved" && (
        <div className="flex flex-col gap-4 border-t border-[#D59EFB]/30 pt-4 sm:flex-row sm:items-end">
          <Field label="Views" htmlFor={`views-${clip.id}`} hint={clip.views_updated_at ? `Updated ${formatDate(clip.views_updated_at)}` : "Not updated yet"}>
            <TextInput id={`views-${clip.id}`} inputMode="numeric" value={views} onChange={setViews} invalid={viewsInvalid} />
          </Field>
          <div className="flex flex-wrap gap-3">
            <ActionButton onClick={saveViews} loading={busy === "views"} disabled={busy !== null}>
              Save views
            </ActionButton>
            {clip.eligible && (
              <ActionButton variant={clip.paid ? "ghost" : "primary"} onClick={() => setPaid(!clip.paid)} loading={busy === "paid"} disabled={busy !== null}>
                {clip.paid ? "Mark unpaid" : "Mark paid"}
              </ActionButton>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

export function MarkPaidButton({ editorId, amount, name }: { editorId: string; amount: number; name: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function markPaid() {
    if (!window.confirm(`Mark ${inr(amount)} as paid to ${name}? Only do this after you've sent the money.`)) return;
    setLoading(true);
    setError("");
    try {
      await api(`/admin/payouts/${editorId}/mark-paid`, { method: "POST" });
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <ActionButton variant="primary" onClick={markPaid} loading={loading}>
        Mark paid
      </ActionButton>
      {error && <span role="alert" className="text-[12px] text-[#C53030]">{error}</span>}
    </div>
  );
}

export function UserToggle({ userId, isActive, disabled }: { userId: string; isActive: boolean; disabled?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function toggle() {
    if (isActive && !window.confirm("Disable this account? They'll be signed out immediately.")) return;
    setLoading(true);
    setError("");
    try {
      await api(`/admin/users/${userId}`, { method: "PATCH", body: { is_active: !isActive } });
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <ActionButton variant={isActive ? "danger" : "secondary"} onClick={toggle} loading={loading} disabled={disabled}>
        {isActive ? "Disable" : "Enable"}
      </ActionButton>
      {error && <span role="alert" className="text-[12px] text-[#C53030]">{error}</span>}
    </div>
  );
}
