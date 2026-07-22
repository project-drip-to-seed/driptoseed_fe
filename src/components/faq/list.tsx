"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Turn Your Editing Skills Into Real Earnings",
    answer:
      "No pitching clients. No chasing invoices. Just edit, submit, and get paid per performance. Join our clipping program and work with creators while earning rewards for high-performing edits.",
  },
  {
    question: "Turn Your Editing Skills Into Real Earnings",
    answer:
      "No pitching clients. No chasing invoices. Just edit, submit, and get paid per performance. Join our clipping program and work with creators while earning rewards for high-performing edits.",
  },
  {
    question: "Turn Your Editing Skills Into Real Earnings",
    answer:
      "No pitching clients. No chasing invoices. Just edit, submit, and get paid per performance. Join our clipping program and work with creators while earning rewards for high-performing edits.",
  },
  {
    question: "Turn Your Editing Skills Into Real Earnings",
    answer:
      "No pitching clients. No chasing invoices. Just edit, submit, and get paid per performance. Join our clipping program and work with creators while earning rewards for high-performing edits.",
  },
];

const PlusIcon = ({ open }: { open: boolean }) => (
  <span
    className="flex items-center justify-center shrink-0 size-8 rounded-full bg-[#EED7FF] text-[#780AC1] transition-transform duration-300"
    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 0V14M0 7H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const FaqCard = ({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`w-full rounded-3xl border border-[#D59EFB] overflow-hidden transition-colors duration-300 ${
      open ? "bg-[#FAF3FF]" : "bg-white"
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className="flex items-center justify-between gap-4 w-full px-5 py-5 text-left"
    >
      <p className="font-[family-name:var(--font-inter)] font-medium capitalize text-[24px] leading-[1.2] text-black">
        {question}
      </p>
      <PlusIcon open={open} />
    </button>
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] px-5 pb-5">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="mx-auto flex max-w-[900px] flex-col gap-3 items-start w-full">
        {faqs.map((faq, index) => (
          <FaqCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={openIndex === index}
            onToggle={() =>
              setOpenIndex((current) => (current === index ? null : index))
            }
          />
        ))}
      </div>
    </section>
  );
};

export default FaqList;
