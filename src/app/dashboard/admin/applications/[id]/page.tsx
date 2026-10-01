import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReviewPanel } from "@/components/portal/admin-forms";
import ApplicationDetails, { ApplicationHistory, ChannelsToCheck } from "@/components/portal/application-details";
import { Card, DefinitionRow, StatusBadge } from "@/components/portal/ui";
import { formatDate } from "@/lib/portal/format";
import { getMeta, NotFoundError, portalGet, requireRole } from "@/lib/portal/server";
import type { Application } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Review application" };
export const dynamic = "force-dynamic";

export default async function AdminApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await requireRole("admin");
  const { id } = await params;

  let application: Application;
  try {
    application = await portalGet<Application>(`/admin/applications/${encodeURIComponent(id)}`);
  } catch (error) {
    if (error instanceof NotFoundError) notFound();
    throw error;
  }
  const meta = await getMeta();
  const applicant = application.applicant;

  return (
    <div className="flex flex-col gap-6">
      <Link href="/dashboard/admin/applications" className="w-fit text-[14px] text-[#780AC1] hover:underline">
        ← Back to applications
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-kugile text-[26px] leading-[1.3] text-black sm:text-[32px]">{applicant?.full_name}</h1>
        <StatusBadge status={application.status} />
        <span className="rounded-full bg-[#EED7FF66] px-3 py-1 text-[12px] capitalize text-[#780AC1]">{application.type}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-6">
          <ChannelsToCheck application={application} />
          <Card>
            <h2 className="mb-2 font-kugile text-[20px] text-black">Applicant</h2>
            <dl>
              <DefinitionRow label="Email">
                <a href={`mailto:${applicant?.email}`} className="text-[#780AC1] underline">
                  {applicant?.email}
                </a>
              </DefinitionRow>
              <DefinitionRow label="Phone">{applicant?.phone || "—"}</DefinitionRow>
              <DefinitionRow label="Applied">{formatDate(application.created_at)}</DefinitionRow>
              <DefinitionRow label="Account">
                <StatusBadge status={applicant?.is_active ? "active" : "disabled"} />
              </DefinitionRow>
            </dl>
          </Card>
          <Card>
            <h2 className="mb-2 font-kugile text-[20px] text-black">Application</h2>
            <ApplicationDetails application={application} meta={meta} showChannels={false} />
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <ReviewPanel applicationId={application.id} currentStatus={application.status} />
          <Card>
            <h2 className="mb-4 font-kugile text-[20px] text-black">Timeline</h2>
            <ApplicationHistory application={application} />
          </Card>
        </div>
      </div>
    </div>
  );
}
