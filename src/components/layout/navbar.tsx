"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { solutionLinks } from "@/lib/navigation";

const navItems = [
  {
    name: "Networks",
    href: "/network",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
  >
    <path
      d="m3.5 5.25 3.5 3.5 3.5-3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSolutionsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSolutionsOpen]);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 flex h-20 items-center justify-between px-20">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-[10px]">
        <Image
          src="/general_assets/drip_logo.svg"
          alt="Drip"
          width={77.7}
          height={40}
        />
      </Link>

      {/* Nav Items */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsSolutionsOpen((prev) => !prev)}
              className="flex cursor-pointer list-none items-center gap-1.5 whitespace-nowrap font-[family-name:var(--font-inter)] text-base font-normal capitalize leading-[1.2] text-white"
            >
              Solutions
              <ChevronIcon isOpen={isSolutionsOpen} />
            </button>
            {isSolutionsOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-[250px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#D59EFB] bg-white p-2 shadow-[0_12px_32px_rgba(55,7,87,0.18)]">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block rounded-xl px-4 py-3 font-[family-name:var(--font-inter)] text-sm font-normal text-[#404040] transition-colors hover:bg-[#EED7FF66] hover:text-[#780AC1] focus-visible:bg-[#EED7FF66] focus-visible:text-[#780AC1] focus-visible:outline-none"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-[family-name:var(--font-inter)] text-white text-base font-normal leading-[1.2] capitalize whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="/become-editor"
            className="border border-white text-white px-6 py-3 rounded-full font-normal whitespace-nowrap"
          >
            Become An Editor
          </a>

          <a
            href="/become-creator"
            className="bg-white text-[#780AC1] px-6 py-3 rounded-full font-normal whitespace-nowrap"
          >
            Become A Creator
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
