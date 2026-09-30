import type { Metadata } from "next";
import ApplicationBanner from "@/components/portal/application-banner";
import ApplicationDetails, { ApplicationHistory } from "@/components/portal/application-details";
import ApplyForm from "@/components/portal/apply-form";
import { Card, PageHeader, StatusBadge } from "@/components/portal/ui";
import { formatDate } from "@/lib/portal/format";
import { getMeta, requireRole } from "@/lib/portal/server";

export const metadata: Metadata = { title: "Application" };
export const dynamic = "force-dynamic";

export default async function ApplicationPage() {
  const session = await requireRole("creator", "editor");
  const application = session.application;
  const meta = await getMeta();

  if (!application) {
    return <PageHeader title="Application" description="We couldn't find an application for your account." />;
  }
  const editable = application.status !== "approved";

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Your application"
        description={`Submitted ${formatDate(application.created_at)} as ${
          application.type === "creator" ? "a creator" : "an editor"
        }.`}
        action={<StatusBadge status={application.status} />}
      />

      <ApplicationBanner application={application} />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card>
          <h2 className="mb-2 font-kugile text-[20px] text-black">Details</h2>
          <ApplicationDetails application={application} meta={meta} />
        </Card>
        <Card>
          <h2 className="mb-4 font-kugile text-[20px] text-black">Timeline</h2>
          <ApplicationHistory application={application} />
        </Card>
      </div>

      {editable && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-kugile text-[22px] text-black">Edit and resubmit</h2>
            <p className="text-[14px] leading-[1.6] text-[#686868]">
              Update anything below and send it back for review. This puts your application back in the queue.
            </p>
          </div>
          <ApplyForm role={application.type} meta={meta} mode="edit" initial={application.data} />
        </div>
      )}
    </div>
  );
}
