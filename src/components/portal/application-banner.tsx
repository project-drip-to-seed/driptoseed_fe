import type { Application } from "@/lib/portal/types";
import { LinkButton } from "./ui";

/** Tells an applicant where they stand, and what to do next. */
export default function ApplicationBanner({ application }: { application: Application | null }) {
  if (!application) return null;
  const article = application.type === "creator" ? "a creator" : "an editor";

  if (application.status === "approved") {
    return (
      <div className="flex flex-col gap-1 rounded-3xl border border-[#B7E4C7] bg-[#DDF6E6] p-5 text-[#146C3A]">
        <p className="text-[16px] font-medium">You&apos;re approved as {article}.</p>
        <p className="text-[14px] leading-[1.6]">
          {application.review?.note ? `“${application.review.note}” — ` : ""}
          Everything in your dashboard is now unlocked.
        </p>
      </div>
    );
  }

  if (application.status === "rejected") {
    return (
      <div className="flex flex-col gap-3 rounded-3xl border border-[#F5B5B5] bg-[#FDE2E2] p-5 text-[#9B1C1C]">
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-medium">Your application wasn&apos;t approved this time.</p>
          <p className="text-[14px] leading-[1.6]">
            {application.review?.note
              ? `Feedback from the team: “${application.review.note}”`
              : "You can update your application and send it back for review."}
          </p>
        </div>
        <div>
          <LinkButton href="/dashboard/application" variant="danger">
            Update and resubmit
          </LinkButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 rounded-3xl border border-[#F0D68A] bg-[#FFF4D6] p-5 text-[#8A5A00]">
      <p className="text-[16px] font-medium">Your application is under review.</p>
      <p className="text-[14px] leading-[1.6]">
        We look at every application by hand. The decision will show up here, so check back soon. You can still edit
        your details in the Application tab while you wait.
      </p>
    </div>
  );
}
