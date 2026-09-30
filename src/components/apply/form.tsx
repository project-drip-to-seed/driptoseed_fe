"use client";

import { useState } from "react";

type Role = "creator" | "editor";

const NICHE_OPTIONS = [
  "Fashion",
  "Beauty",
  "Lifestyle",
  "Travel",
  "Fitness",
  "Food",
  "Business",
  "Finance",
  "Comedy",
  "Luxury",
];

const FOLLOWER_OPTIONS = ["Under 10K", "10K – 50K", "50K – 200K", "200K+"];

const EXPERIENCE_OPTIONS = ["Under 1 year", "1 – 2 years", "3 – 5 years", "5+ years"];

const TOOL_OPTIONS = [
  "Premiere Pro",
  "CapCut",
  "DaVinci Resolve",
  "After Effects",
  "Final Cut Pro",
];

const ArrowUpRightIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
    <path
      d="M4.5 12.5L12.5 4.5M12.5 4.5H5.5M12.5 4.5V11.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FormField = ({
  label,
  required,
  value,
  onChange,
  type = "text",
  placeholder,
  as = "input",
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea";
}) => (
  <label className="flex w-full flex-col gap-3 items-start">
    <span className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-[#404040] capitalize">
      {label}
      {required && <span className="text-[#780AC1]">*</span>}
    </span>
    {as === "textarea" ? (
      <textarea
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full resize-none border-0 border-b border-[#780AC1]/40 bg-transparent pb-2 font-[family-name:var(--font-inter)] text-[16px] text-black outline-none placeholder:text-[#949494] focus:border-[#780AC1]"
      />
    ) : (
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-0 border-b border-[#780AC1]/40 bg-transparent pb-2 font-[family-name:var(--font-inter)] text-[16px] text-black outline-none placeholder:text-[#949494] focus:border-[#780AC1]"
      />
    )}
  </label>
);

const ChipGroup = ({
  label,
  options,
  value,
  onToggle,
}: {
  label: string;
  options: string[];
  value: string[];
  onToggle: (option: string) => void;
}) => (
  <div className="flex w-full flex-col gap-3 items-start">
    <span className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-[#404040] capitalize">
      {label}
      <span className="text-[#780AC1]">*</span>
    </span>
    <div className="flex flex-wrap gap-2 items-center">
      {options.map((option) => {
        const active = value.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            aria-pressed={active}
            className={`rounded-full px-4 py-2 font-[family-name:var(--font-inter)] font-normal text-[13px] leading-[1.2] capitalize whitespace-nowrap transition-colors duration-200 ${
              active
                ? "bg-[#780AC1] text-white"
                : "bg-[rgba(238,215,255,0.4)] text-[#780AC1] hover:bg-[rgba(238,215,255,0.7)]"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
);

const ROLE_CONFIG: Record<
  Role,
  {
    linkLabel: string;
    linkPlaceholder: string;
    primaryLabel: string;
    primaryOptions: string[];
    primaryMulti: boolean;
    secondaryLabel: string;
    secondaryOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  }
> = {
  creator: {
    linkLabel: "Primary platform / handle",
    linkPlaceholder: "e.g. instagram.com/yourhandle",
    primaryLabel: "Content niche",
    primaryOptions: NICHE_OPTIONS,
    primaryMulti: false,
    secondaryLabel: "Follower count",
    secondaryOptions: FOLLOWER_OPTIONS,
    messageLabel: "Tell us about your content",
    messagePlaceholder: "What do you create, and what are you hoping to grow?",
    submitLabel: "Apply as a Creator",
  },
  editor: {
    linkLabel: "Portfolio / reel link",
    linkPlaceholder: "e.g. drive.google.com/your-reel",
    primaryLabel: "Editing experience",
    primaryOptions: EXPERIENCE_OPTIONS,
    primaryMulti: false,
    secondaryLabel: "Editing software",
    secondaryOptions: TOOL_OPTIONS,
    messageLabel: "Tell us about your editing style",
    messagePlaceholder: "What kind of clips do you enjoy editing most?",
    submitLabel: "Apply as an Editor",
  },
};

const ApplyForm = ({ role }: { role: Role }) => {
  const config = ROLE_CONFIG[role];

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    link: "",
    message: "",
  });
  const [primary, setPrimary] = useState<string[]>([]);
  const [secondary, setSecondary] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const togglePrimary = (option: string) => {
    setPrimary(config.primaryMulti ? toggleInList(primary, option) : [option]);
  };
  const toggleSecondary = (option: string) => {
    setSecondary(toggleInList(secondary, option));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          ...form,
          [config.primaryLabel]: primary,
          [config.secondaryLabel]: secondary,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ fullName: "", email: "", phone: "", link: "", message: "" });
      setPrimary([]);
      setSecondary([]);
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="w-full shrink-0 rounded-[24px] p-5 sm:p-6 lg:w-[640px] lg:max-w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(213, 158, 251, 0.12) 11%, rgba(120, 10, 193, 0.12) 142.75%)",
      }}
    >
      <div className="flex flex-col gap-3 items-start capitalize">
        <p className="font-[family-name:var(--font-inter)] font-medium text-[24px] leading-[1.2] text-[#780AC1]">
          {role === "creator" ? "Apply as a Creator" : "Apply as an Editor"}
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040]">
          Fill in your details and we&apos;ll be in touch within a few
          business days.
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
          <div className="flex flex-col items-start justify-between gap-6 w-full sm:flex-row sm:gap-10">
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
            label={config.linkLabel}
            required
            type="url"
            placeholder={config.linkPlaceholder}
            value={form.link}
            onChange={(v) => setForm((f) => ({ ...f, link: v }))}
          />
          <ChipGroup
            label={config.primaryLabel}
            options={config.primaryOptions}
            value={primary}
            onToggle={togglePrimary}
          />
          <ChipGroup
            label={config.secondaryLabel}
            options={config.secondaryOptions}
            value={secondary}
            onToggle={toggleSecondary}
          />
          <FormField
            as="textarea"
            label={config.messageLabel}
            placeholder={config.messagePlaceholder}
            value={form.message}
            onChange={(v) => setForm((f) => ({ ...f, message: v }))}
          />
        </div>

        <label className="flex gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="size-4 shrink-0 rounded-sm border border-[#404040] accent-[#780AC1]"
          />
          <span className="font-[family-name:var(--font-inter)] font-normal text-[12px] leading-[1.2] text-[#404040] capitalize">
            I agree to be contacted by Drip about my application.
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex items-center gap-[10px] h-10 px-6 rounded-full font-[family-name:var(--font-inter)] font-normal text-[16px] text-white capitalize whitespace-nowrap disabled:opacity-50"
          style={{ background: "linear-gradient(117deg, #D59EFB 2%, #780AC1 64%)" }}
        >
          {status === "submitting" ? "Submitting..." : config.submitLabel}
          <ArrowUpRightIcon />
        </button>

        {status === "success" && (
          <p className="font-[family-name:var(--font-inter)] text-[14px] text-green-600">
            Thanks for applying! We&apos;ll be in touch shortly.
          </p>
        )}
        {status === "error" && (
          <p className="font-[family-name:var(--font-inter)] text-[14px] text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

const toggleInList = (list: string[], value: string) =>
  list.includes(value) ? list.filter((item) => item !== value) : [...list, value];

export default ApplyForm;
