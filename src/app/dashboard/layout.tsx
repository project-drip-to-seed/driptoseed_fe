import type { Metadata } from "next";
import { redirect } from "next/navigation";
import DashboardShell from "@/components/portal/dashboard-shell";
import { PortalDown } from "@/components/portal/page-band";
import { getSession } from "@/lib/portal/server";
import type { Session } from "@/lib/portal/types";

export const metadata: Metadata = {
  title: { default: "Dashboard", template: "%s | Drip Dashboard" },
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  let session: Session | null;
  try {
    session = await getSession();
  } catch {
    return <PortalDown />;
  }
  if (!session) redirect("/login");

  return (
    <DashboardShell
      user={{ full_name: session.user.full_name, email: session.user.email, role: session.user.role }}
      applicationStatus={session.application?.status ?? null}
    >
      {children}
    </DashboardShell>
  );
}
