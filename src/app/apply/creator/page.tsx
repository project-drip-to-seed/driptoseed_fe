import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ApplyForm from "@/components/portal/apply-form";
import PageBand, { PortalDown } from "@/components/portal/page-band";
import { getMeta, getSession } from "@/lib/portal/server";
import type { Meta, Session } from "@/lib/portal/types";

export const metadata: Metadata = {
  title: "Apply as a Creator",
  description:
    "Apply to grow with Drip. We clip your long-form videos, place them across 300+ partner pages and communities, and show you exactly how they perform.",
  alternates: { canonical: "/apply/creator" },
};

export const dynamic = "force-dynamic";

export default async function ApplyCreatorPage() {
  let session: Session | null;
  let meta: Meta;
  try {
    [session, meta] = await Promise.all([getSession(), getMeta()]);
  } catch {
    return <PortalDown />;
  }
  if (session) redirect("/dashboard");

  return (
    <main className="relative bg-white">
      <PageBand
        title="Apply as a Creator"
        description="Tell us about your channel. We review every application, and once you're in, your long-form videos become weeks of clips distributed across our network."
      />
      <div className="relative z-10 mx-auto -mt-16 max-w-[820px] px-5 pb-20 font-[family-name:var(--font-inter)]">
        <ApplyForm role="creator" meta={meta} />
      </div>
    </main>
  );
}
