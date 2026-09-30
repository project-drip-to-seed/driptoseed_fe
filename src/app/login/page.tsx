import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LoginForm from "@/components/portal/login-form";
import PageBand, { PortalDown } from "@/components/portal/page-band";
import { dashboardPath, getSession } from "@/lib/portal/server";
import type { Session } from "@/lib/portal/types";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Drip creator, editor or admin dashboard.",
  robots: { index: false, follow: true },
};

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  let session: Session | null;
  try {
    session = await getSession();
  } catch {
    return <PortalDown />;
  }
  if (session) redirect(dashboardPath(session.user.role));

  return (
    <main className="relative bg-white">
      <PageBand title="Welcome back" description="Log in to follow your application, submit content, or manage your clips." />
      <div className="relative z-10 mx-auto -mt-16 max-w-[460px] px-5 pb-24 font-[family-name:var(--font-inter)]">
        <LoginForm />
      </div>
    </main>
  );
}
