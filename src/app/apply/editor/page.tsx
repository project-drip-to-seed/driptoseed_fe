import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ApplyForm from "@/components/portal/apply-form";
import PageBand, { PortalDown } from "@/components/portal/page-band";
import { Card } from "@/components/portal/ui";
import { compactNumber, formatNumber } from "@/lib/portal/format";
import { getMeta, getSession } from "@/lib/portal/server";
import type { Meta, Session } from "@/lib/portal/types";

export const metadata: Metadata = {
  title: "Apply as an Editor",
  description:
    "Turn your editing skills into real earnings. Work remotely on real creator content and get paid per clip that performs.",
  alternates: { canonical: "/apply/editor" },
};

export const dynamic = "force-dynamic";

export default async function ApplyEditorPage() {
  let session: Session | null;
  let meta: Meta;
  try {
    [session, meta] = await Promise.all([getSession(), getMeta()]);
  } catch {
    return <PortalDown />;
  }
  if (session) redirect("/dashboard");

  const { per_clip_inr, views_threshold } = meta.payout;

  return (
    <main className="relative bg-white">
      <PageBand
        title="Apply as an Editor"
        description="No pitching clients. No chasing invoices. Edit, submit, and get paid per performance while working with real creators."
      />
      <div className="relative z-10 mx-auto -mt-16 flex max-w-[820px] flex-col gap-6 px-5 pb-20 font-[family-name:var(--font-inter)]">
        <Card className="flex flex-col items-start gap-1 border-[#780AC1]/30 bg-[#FBF5FF] sm:flex-row sm:items-baseline sm:gap-4">
          <span className="text-[40px] leading-[1.1] text-[#780AC1]">₹{formatNumber(per_clip_inr)}</span>
          <span className="text-[16px] leading-[1.5] text-[#404040]">
            for every clip that reaches {compactNumber(views_threshold)}+ views. Remote, flexible, and it builds your portfolio.
          </span>
        </Card>
        <ApplyForm role="editor" meta={meta} />
      </div>
    </main>
  );
}
