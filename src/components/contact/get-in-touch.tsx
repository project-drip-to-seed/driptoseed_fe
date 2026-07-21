"use client";

import { useState } from "react";

const MailIcon = () => (
  <svg width="24" height="17" viewBox="0 0 24 17" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="22" height="15" rx="2" stroke="#686868" strokeWidth="1.4" />
    <path d="M1.5 1.8 12 9.5l10.5-7.7" stroke="#686868" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" aria-hidden="true">
    <path
      d="M3 2h5l1.5 4.5L7 8.5a11 11 0 0 0 6.5 6.5l2-2.5 4.5 1.5v5a2 2 0 0 1-2 2C8.94 21 -0.94 12.06 1 3a2 2 0 0 1 2-2Z"
      transform="translate(0 1) scale(0.85)"
      stroke="#686868"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
    <path
      d="M10 22s7.5-6.6 7.5-12.5a7.5 7.5 0 1 0-15 0C2.5 15.4 10 22 10 22Z"
      stroke="#686868"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="9.5" r="2.75" stroke="#686868" strokeWidth="1.4" />
  </svg>
);

const FormField = ({
  label,
  required,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) => (
  <label className="flex w-full flex-col gap-3 items-start">
    <span className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-[#404040] capitalize">
      {label}
      {required && <span className="text-[#780AC1]">*</span>}
    </span>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border-0 border-b border-[#780AC1]/40 bg-transparent pb-2 font-[family-name:var(--font-inter)] text-[16px] text-black outline-none focus:border-[#780AC1]"
    />
  </label>
);

const GetInTouch = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-10">
        <div className="flex w-[620px] max-w-full flex-col gap-10 items-start">
          <div className="flex flex-col gap-1 items-start capitalize">
            <h2 className="font-kugile text-[36px] leading-[1.4] text-black">
              Get in
              <span className="text-[#780AC1]">{` touch`}</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
              Every day, creators invest countless hours researching ideas,
              writing scripts, filming videos, editing content, and
              publishing across multiple platforms.
            </p>
          </div>

          <div className="flex w-[405px] max-w-full flex-col gap-10 items-start">
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.2] text-black capitalize">
                Contact us at:
              </p>
              <div className="flex flex-wrap gap-10 items-center">
                <div className="flex gap-3 items-center">
                  <MailIcon />
                  <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.2] text-[#686868] capitalize whitespace-nowrap">
                    info@pyromedia.com
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <PhoneIcon />
                  <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.2] text-[#686868] whitespace-nowrap">
                    +91 00000 00000
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.2] text-black capitalize">
                Visit us at:
              </p>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 pt-0.5">
                  <PinIcon />
                </div>
                <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.4] text-[#686868] capitalize">
                  H-32, Shanti Bhawan, Sai-dulajab, Saket,
                  <br />
                  New Delhi - 110030
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-[640px] max-w-full shrink-0 rounded-[24px] p-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(213, 158, 251, 0.12) 11%, rgba(120, 10, 193, 0.12) 142.75%)",
          }}
        >
          <div className="flex flex-col gap-3 items-start capitalize">
            <p className="font-[family-name:var(--font-inter)] font-medium text-[24px] leading-[1.2] text-[#780AC1]">
              Get in touch
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040]">
              Let&apos;s start a conversation and explore how we can help
              your brand grow.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-8 items-start w-full">
              <FormField
                label="Full name"
                required
                value={form.fullName}
                onChange={(v) => setForm((f) => ({ ...f, fullName: v }))}
              />
              <div className="flex items-start justify-between gap-10 w-full">
                <FormField
                  label="Email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                />
                <FormField
                  label="Phone Number"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                />
              </div>
              <FormField
                label="How can we help you?"
                value={form.message}
                onChange={(v) => setForm((f) => ({ ...f, message: v }))}
              />
            </div>

            <label className="flex gap-2 items-center cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="size-4 shrink-0 rounded-sm border border-[#404040] accent-[#780AC1]"
              />
              <span className="font-[family-name:var(--font-inter)] font-normal text-[12px] leading-[1.2] text-[#404040] capitalize">
                The banking and finance industry is at the forefront of
                digital changeover.
              </span>
            </label>

            <button
              type="submit"
              className="flex h-10 w-[180px] items-center justify-center rounded-[40px] border border-[#780AC1] font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-[#780AC1] capitalize"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
