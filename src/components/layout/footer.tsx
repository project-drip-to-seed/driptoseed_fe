"use client";

import Image from "next/image";
import Link from "next/link";
import {
  solutionLinks,
  solutionsLink,
  type NavigationLink,
} from "@/lib/navigation";

const platformLinks: NavigationLink[] = [solutionsLink, ...solutionLinks];

const companyLinks: NavigationLink[] = [
  { name: "About", href: "/about" },
  { name: "Our Framework", href: "/network" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const getStartedLinks: NavigationLink[] = [
  { name: "Apply as Creator", href: "/become-creator" },
  { name: "Become an Editor", href: "/become-editor" },
  { name: "Book a Call", href: "/contact" },
];

const legalLinks = ["Privacy Policy", "Terms & Condition", "FAQs"];

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: NavigationLink[];
}) => (
  <div className="flex flex-col gap-5 items-start w-[157px] shrink-0">
    <p className="font-[family-name:var(--font-inter)] font-medium uppercase text-[20px] leading-[1.2] text-white whitespace-nowrap">
      {title}
    </p>
    <div className="flex flex-col gap-5 items-start">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[16px] font-normal capitalize leading-[1.2] text-white transition-opacity hover:opacity-75"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

const SocialIcon = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href="#"
    aria-label={label}
    className="flex items-center justify-center shrink-0 size-12 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
  >
    {children}
  </a>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M4 9H14M14 9L9.5 4.5M14 9L9.5 13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden px-20 pt-[60px] pb-10"
      style={{
        background: "linear-gradient(180deg, #D59EFB 11%, #780AC1 142.75%)",
      }}
    >
      <div className="flex justify-between items-start w-full flex-wrap gap-y-10">
        <div className="flex flex-col gap-[14px] items-start w-[324px] shrink-0">
          <Image
            src="/general_assets/drip_logo.svg"
            alt="Drip"
            width={77.7}
            height={40}
          />
          <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-white">
            We help creators grow beyond algorithms through strategic content
            seeding, clipping, and distribution. Every piece of content gets
            multiple opportunities to be discovered by the right audience.
          </p>
        </div>

        <FooterColumn title="Platform" links={platformLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Get Started" links={getStartedLinks} />

        <div className="flex flex-col gap-8 items-start w-[321px] shrink-0">
          <div className="flex flex-col gap-5 items-start">
            <p className="font-[family-name:var(--font-inter)] font-medium uppercase text-[20px] leading-[1.2] text-white whitespace-nowrap">
              Growth Tips
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.2] text-white whitespace-nowrap">
              Monthly, no spam.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-start w-full">
            <p className="font-[family-name:var(--font-inter)] font-medium uppercase text-[20px] leading-[1.2] text-white w-full">
              Subscribe our newsletter
            </p>
            <form
              className="relative w-full h-12 rounded-full bg-white overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full h-full pl-5 pr-[60px] bg-transparent outline-none font-[family-name:var(--font-inter)] font-normal capitalize text-[14px] text-[#686868] placeholder:text-[#686868]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 top-0 flex items-center justify-center size-12 rounded-full bg-[#780AC1] text-white"
              >
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-center w-full mt-[60px]">
        <SocialIcon label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48ZM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21h3.95v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
              fill="currentColor"
            />
          </svg>
        </SocialIcon>
        <SocialIcon label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
          </svg>
        </SocialIcon>
        <SocialIcon label="X (Twitter)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M18.9 3H22l-7.6 8.68L23.3 21h-7.02l-5.5-6.63L4.4 21H1.3l8.13-9.29L1 3h7.2l4.97 6.06L18.9 3Zm-1.23 16.17h1.73L7.42 4.73H5.56l12.11 14.44Z"
              fill="currentColor"
            />
          </svg>
        </SocialIcon>
        <SocialIcon label="YouTube">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="5.5" width="20" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
          </svg>
        </SocialIcon>
      </div>

      <div className="w-full h-px bg-white/40 mt-10" />

      <div className="flex items-center justify-between w-full mt-5 flex-wrap gap-4">
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.2] text-white whitespace-nowrap">
          © 2026 Distro. All rights reserved.
        </p>
        <div className="flex gap-5 items-center flex-wrap">
          {legalLinks.map((link) => (
            <p
              key={link}
              className="flex items-center gap-2 font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.2] text-white whitespace-nowrap"
            >
              <span aria-hidden="true">•</span>
              {link}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
