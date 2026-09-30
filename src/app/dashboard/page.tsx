import { redirect } from "next/navigation";
import { dashboardPath, requireRole } from "@/lib/portal/server";

export const dynamic = "force-dynamic";

// /dashboard sends everyone to the dashboard for their role.
export default async function DashboardIndex() {
  const session = await requireRole();
  redirect(dashboardPath(session.user.role));
}
