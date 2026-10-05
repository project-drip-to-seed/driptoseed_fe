import { redirect } from "next/navigation";
import ApplyForm from "@/components/portal/apply-form";
import PageBand, { PortalDown } from "@/components/portal/page-band";
import PageSchema from "@/components/shared/page-schema";
import { metadataFor } from "@/lib/page-seo";
import { getMeta, getSession } from "@/lib/portal/server";
import type { Meta, Session } from "@/lib/portal/types";

export const metadata = metadataFor("applyCreator");

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
      <PageSchema page="applyCreator" />
      <PageBand
        title="Apply as a Creator"
        description="Brand, influencer, or anyone with a video: tell us about you and your channels. We review every application, and once you're in, your videos become clips that our editors post on their own channels."
      />
      <div className="relative z-10 mx-auto -mt-16 max-w-[820px] px-5 pb-20 font-[family-name:var(--font-inter)]">
        <ApplyForm role="creator" meta={meta} />
      </div>
    </main>
  );
}
