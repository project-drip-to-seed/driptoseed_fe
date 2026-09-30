"use client";

// Form controls used by the apply, login and dashboard forms.

import { useState, type ReactNode } from "react";
import { buttonClasses, inputClasses } from "./ui";

export function Field({
  label,
  error,
  hint,
  required,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[14px] font-medium leading-[1.3] text-black">
        {label}
        {required && <span className="ml-0.5 text-[#780AC1]">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[13px] leading-[1.4] text-[#686868]">{hint}</p>}
      {error && (
        <p role="alert" className="text-[13px] leading-[1.4] text-[#C53030]">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (value: string) => void;
  invalid?: boolean;
};

export function TextInput({ onChange, invalid, className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputClasses} ${invalid ? "!border-[#C53030]" : ""} ${className}`}
    />
  );
}

export function PasswordInput({ onChange, invalid, ...props }: InputProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <TextInput
        {...props}
        type={visible ? "text" : "password"}
        onChange={onChange}
        invalid={invalid}
        className="pr-16"
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-[13px] text-[#780AC1] hover:bg-[#780AC1]/5"
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export function TextArea({
  onChange,
  invalid,
  maxLength,
  value,
  ...props
}: Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value"> & {
  onChange: (value: string) => void;
  invalid?: boolean;
  value: string;
}) {
  return (
    <div className="relative">
      <textarea
        {...props}
        value={value}
        maxLength={maxLength}
        aria-invalid={invalid || undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClasses} min-h-[110px] resize-y ${invalid ? "!border-[#C53030]" : ""}`}
      />
      {maxLength && (
        <span className="pointer-events-none absolute bottom-2 right-3 text-[12px] text-[#9A9A9A]">
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  );
}

export function Select({
  value,
  onChange,
  options,
  placeholder,
  invalid,
  ...props
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  invalid?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value">) {
  return (
    <select
      {...props}
      value={value}
      aria-invalid={invalid || undefined}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputClasses} appearance-none bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'><path d='m1 1.5 5 5 5-5' stroke='%23780AC1' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>")] bg-[length:12px_8px] bg-[right_1rem_center] bg-no-repeat pr-10 ${
        invalid ? "!border-[#C53030]" : ""
      }`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

/** Multi-select as toggle chips. */
export function ChipGroup({
  options,
  value,
  onChange,
  max,
}: {
  options: { value: string; label: string }[];
  value: string[];
  onChange: (value: string[]) => void;
  max?: number;
}) {
  const toggle = (v: string) => {
    if (value.includes(v)) onChange(value.filter((x) => x !== v));
    else if (!max || value.length < max) onChange([...value, v]);
  };
  return (
    <div className="flex flex-wrap gap-2" role="group">
      {options.map((o) => {
        const selected = value.includes(o.value);
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={selected}
            onClick={() => toggle(o.value)}
            className={`rounded-full border px-4 py-2 text-[14px] leading-none transition ${
              selected
                ? "border-[#780AC1] bg-[#780AC1] text-white"
                : "border-[#D59EFB] bg-white text-[#404040] hover:border-[#780AC1]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function Checkbox({
  checked,
  onChange,
  children,
  invalid,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  invalid?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-invalid={invalid || undefined}
        className="mt-0.5 size-4 shrink-0 accent-[#780AC1]"
      />
      <span className="text-[14px] leading-[1.5] text-[#404040]">{children}</span>
    </label>
  );
}

export function FormAlert({ tone = "error", children }: { tone?: "error" | "success"; children: ReactNode }) {
  const styles =
    tone === "error"
      ? "border-[#F5B5B5] bg-[#FDE2E2] text-[#9B1C1C]"
      : "border-[#B7E4C7] bg-[#DDF6E6] text-[#146C3A]";
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`rounded-2xl border px-4 py-3 text-[14px] leading-[1.5] ${styles}`}>
      {children}
    </div>
  );
}

export function SubmitButton({
  loading,
  children,
  loadingText = "Please wait…",
  variant = "primary",
  disabled,
  className = "",
}: {
  loading: boolean;
  children: ReactNode;
  loadingText?: string;
  variant?: keyof typeof buttonClasses;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button type="submit" disabled={loading || disabled} className={`${buttonClasses[variant]} ${className}`}>
      {loading ? loadingText : children}
    </button>
  );
}

/** Small button for inline actions inside tables/cards. */
export function ActionButton({
  onClick,
  loading,
  children,
  variant = "secondary",
  disabled,
}: {
  onClick: () => void;
  loading?: boolean;
  children: ReactNode;
  variant?: keyof typeof buttonClasses;
  disabled?: boolean;
}) {
  return (
    <button type="button" onClick={onClick} disabled={loading || disabled} className={buttonClasses[variant]}>
      {loading ? "Working…" : children}
    </button>
  );
}
