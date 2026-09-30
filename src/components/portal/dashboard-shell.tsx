"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { api } from "@/lib/portal/client";
import type { ApplicationStatus, Role } from "@/lib/portal/types";
import { StatusBadge } from "./ui";

type IconName = "home" | "film" | "search" | "briefcase" | "clip" | "rupee" | "users" | "file" | "user" | "inbox";

const ICONS: Record<IconName, string> = {
  home: "M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9",
  film: "M4 5h16v14H4zM8 5v14M16 5v14M4 9.5h4M16 9.5h4M4 14.5h4M16 14.5h4",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16-3.5-3.5",
  briefcase: "M4 8h16v11H4zM9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8M4 13h16",
  clip: "M6 6l12 12M6 18 18 6M5.5 7.5a2 2 0 1 0 0-.01M5.5 17.5a2 2 0 1 0 0-.01",
  rupee: "M7 5h10M7 9h10M7 5h3.5a3.5 3.5 0 0 1 0 7H7l8 7",
  users: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-6 8a6 6 0 0 1 12 0M17 11a2.5 2.5 0 1 0 0-5M21 19a5 5 0 0 0-4-4.9",
  file: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 8a8 8 0 0 1 16 0",
  inbox: "M4 13l2-8h12l2 8M4 13v6h16v-6M4 13h5l1 2h4l1-2h5",
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

interface NavItem {
  href: string;
  label: string;
  icon: IconName;
  exact?: boolean;
}

const NAV: Record<Role, NavItem[]> = {
  creator: [
    { href: "/dashboard/creator", label: "Overview", icon: "home", exact: true },
    { href: "/dashboard/creator/content", label: "My content", icon: "film" },
    { href: "/dashboard/application", label: "Application", icon: "file" },
    { href: "/dashboard/account", label: "Account", icon: "user" },
  ],
  editor: [
    { href: "/dashboard/editor", label: "Overview", icon: "home", exact: true },
    { href: "/dashboard/editor/available", label: "Find content", icon: "search" },
    { href: "/dashboard/editor/jobs", label: "My jobs", icon: "briefcase" },
    { href: "/dashboard/editor/clips", label: "My clips", icon: "clip" },
    { href: "/dashboard/editor/earnings", label: "Earnings", icon: "rupee" },
    { href: "/dashboard/application", label: "Application", icon: "file" },
    { href: "/dashboard/account", label: "Account", icon: "user" },
  ],
  admin: [
    { href: "/dashboard/admin", label: "Overview", icon: "home", exact: true },
    { href: "/dashboard/admin/applications", label: "Applications", icon: "inbox" },
    { href: "/dashboard/admin/clips", label: "Clip review", icon: "clip" },
    { href: "/dashboard/admin/payouts", label: "Payouts", icon: "rupee" },
    { href: "/dashboard/admin/users", label: "Users", icon: "users" },
    { href: "/dashboard/account", label: "Account", icon: "user" },
  ],
};

const ROLE_LABEL: Record<Role, string> = { creator: "Creator", editor: "Editor", admin: "Admin" };

export default function DashboardShell({
  user,
  applicationStatus,
  children,
}: {
  user: { full_name: string; email: string; role: Role };
  applicationStatus?: ApplicationStatus | null;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  async function logout() {
    setLoggingOut(true);
    try {
      await api("/auth/logout", { method: "POST" });
    } finally {
      router.push("/login");
      router.refresh();
    }
  }

  const isActive = (item: NavItem) =>
    item.exact ? pathname === item.href : pathname === item.href || pathname.startsWith(`${item.href}/`);

  const sidebar = (
    <div className="flex h-full flex-col gap-6 p-5">
      <Link href="/" aria-label="Drip home" className="px-2 pt-1">
        <Image src="/brand/drip_logo_color.svg" alt="Drip" width={605} height={350} className="h-10 w-auto" style={{ width: "auto" }} />
      </Link>

      <nav className="flex flex-1 flex-col gap-1" aria-label="Dashboard">
        {NAV[user.role].map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] leading-none transition ${
                active ? "bg-[#780AC1] text-white" : "text-[#404040] hover:bg-[#EED7FF66] hover:text-[#780AC1]"
              }`}
            >
              <Icon name={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-3 rounded-2xl bg-[#FBF5FF] p-4">
        <div className="flex flex-col gap-0.5">
          <p className="truncate text-[14px] font-medium text-black">{user.full_name || user.email}</p>
          <p className="truncate text-[12px] text-[#686868]">{user.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#780AC1] px-3 py-1 text-[11px] font-medium uppercase leading-none tracking-[0.06em] text-white">
            {ROLE_LABEL[user.role]}
          </span>
          {applicationStatus && user.role !== "admin" && <StatusBadge status={applicationStatus} />}
        </div>
        <button
          type="button"
          onClick={logout}
          disabled={loggingOut}
          className="rounded-full border border-[#780AC1] py-2 text-[14px] leading-none text-[#780AC1] transition hover:bg-[#780AC1]/5 disabled:opacity-50"
        >
          {loggingOut ? "Logging out…" : "Log out"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF7FD] font-[family-name:var(--font-inter)] lg:flex">
      <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 border-r border-[#D59EFB]/40 bg-white lg:block">{sidebar}</aside>

      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#D59EFB]/40 bg-white px-5 py-3 lg:hidden">
        <Link href="/" aria-label="Drip home">
          <Image src="/brand/drip_logo_color.svg" alt="Drip" width={605} height={350} className="h-9 w-auto" style={{ width: "auto" }} />
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle dashboard menu"
          className="flex size-10 items-center justify-center rounded-full text-[#780AC1] hover:bg-[#780AC1]/5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d={menuOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-[61px] z-20 overflow-y-auto bg-white lg:hidden">{sidebar}</div>
      )}

      <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[1100px]">{children}</div>
      </main>
    </div>
  );
}
