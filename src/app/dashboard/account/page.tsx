import type { Metadata } from "next";
import AccountForms from "@/components/portal/account-forms";
import { PageHeader } from "@/components/portal/ui";
import { requireRole } from "@/lib/portal/server";

export const metadata: Metadata = { title: "Account" };
export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const { user } = await requireRole();
  return (
    <div className="flex flex-col gap-2">
      <PageHeader title="Account" description="Your profile and sign-in details." />
      <AccountForms fullName={user.full_name} phone={user.phone} email={user.email} />
    </div>
  );
}
