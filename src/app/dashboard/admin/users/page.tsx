import type { Metadata } from "next";
import { UserToggle } from "@/components/portal/admin-forms";
import {
  EmptyState,
  FilterTabs,
  PageHeader,
  Pagination,
  StatusBadge,
  inputClasses,
  tableClasses,
} from "@/components/portal/ui";
import { formatDate, pageToOffset } from "@/lib/portal/format";
import { portalGet, requireRole } from "@/lib/portal/server";
import type { AdminUser, Page } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Users" };
export const dynamic = "force-dynamic";

const LIMIT = 15;

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string; q?: string; page?: string }>;
}) {
  const session = await requireRole("admin");
  const sp = await searchParams;
  const role = ["creator", "editor", "admin"].includes(sp.role ?? "") ? sp.role : undefined;
  const q = sp.q?.trim().slice(0, 80) || undefined;
  const offset = pageToOffset(sp.page, LIMIT);

  const query = new URLSearchParams({ limit: String(LIMIT), offset: String(offset) });
  if (role) query.set("role", role);
  if (q) query.set("q", q);
  const list = await portalGet<Page<AdminUser>>(`/admin/users?${query}`);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Users" description="Everyone with an account. Disabling an account signs them out immediately." />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <FilterTabs
          basePath="/dashboard/admin/users"
          paramName="role"
          active={role}
          otherParams={{ q }}
          options={[
            { value: "", label: "All" },
            { value: "creator", label: "Creators" },
            { value: "editor", label: "Editors" },
            { value: "admin", label: "Admins" },
          ]}
        />
        <form method="get" className="flex gap-2">
          {role && <input type="hidden" name="role" value={role} />}
          <input
            name="q"
            defaultValue={q}
            placeholder="Search name or email"
            maxLength={80}
            className={`${inputClasses} !w-[240px] !py-2.5`}
            aria-label="Search users"
          />
          <button type="submit" className="rounded-full bg-[#780AC1] px-5 py-2.5 text-[14px] leading-none text-white">
            Search
          </button>
        </form>
      </div>

      {list.items.length === 0 ? (
        <EmptyState title="No users match" />
      ) : (
        <div className={tableClasses.wrapper}>
          <table className={tableClasses.table}>
            <thead>
              <tr>
                {["User", "Role", "Application", "Joined", "Last login", "Account", ""].map((h) => (
                  <th key={h} className={tableClasses.th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.items.map((u) => (
                <tr key={u.id}>
                  <td className={tableClasses.td}>
                    <div className="flex flex-col">
                      <span className="font-medium">{u.full_name}</span>
                      <span className="text-[12px] text-[#686868]">{u.email}</span>
                    </div>
                  </td>
                  <td className={`${tableClasses.td} capitalize`}>{u.role}</td>
                  <td className={tableClasses.td}>{u.application_status ? <StatusBadge status={u.application_status} /> : "—"}</td>
                  <td className={tableClasses.td}>{formatDate(u.created_at)}</td>
                  <td className={tableClasses.td}>{formatDate(u.last_login_at)}</td>
                  <td className={tableClasses.td}>
                    <StatusBadge status={u.is_active ? "active" : "disabled"} />
                  </td>
                  <td className={tableClasses.td}>
                    {u.role !== "admin" && u.id !== session.user.id && <UserToggle userId={u.id} isActive={u.is_active} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination basePath="/dashboard/admin/users" total={list.total} limit={list.limit} offset={list.offset} params={{ role, q }} />
    </div>
  );
}
