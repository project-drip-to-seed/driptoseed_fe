const SectionHeading = ({
  lead,
  accent,
}: {
  lead: string;
  accent: string;
}) => (
  <p className="font-kugile leading-[1.2] text-[36px] text-black w-full">
    {lead}
    <span className="text-[#780AC1]">{accent}</span>
  </p>
);

const SubHeading = ({ children }: { children: string }) => (
  <p className="font-[family-name:var(--font-inter)] font-semibold leading-[1.2] text-[24px] text-black w-full">
    {children}
  </p>
);

const Bullet = ({ label, text }: { label?: string; text: string }) => (
  <li className="leading-[1.6] list-disc ms-[24px]">
    {label && (
      <span className="font-[family-name:var(--font-inter)] font-medium text-[#780AC1]">
        {`${label}: `}
      </span>
    )}
    {text}
  </li>
);

const programTerms = [
  {
    title: "Creator Program",
    intro: "If you apply and are accepted as a creator, the following terms apply:",
    items: [
      {
        label: "Content Ownership",
        text: "You retain ownership of the content you submit for seeding and distribution.",
      },
      {
        label: "License to Distribute",
        text: "You grant us a non-exclusive license to seed, clip, and distribute your content across the platforms and communities in our network.",
      },
      {
        label: "No Guaranteed Results",
        text: "While we work to maximize reach, we do not guarantee specific view counts, engagement, or follower growth.",
      },
    ],
  },
  {
    title: "Editor Program",
    intro: "If you apply and are accepted as an editor, the following terms apply:",
    items: [
      {
        label: "Submissions",
        text: "You may submit edited clips for review; we reserve the right to accept or reject any submission at our discretion.",
      },
      {
        label: "Performance-Based Rewards",
        text: "Payouts are calculated based on the performance of published edits, as described at the time of your application.",
      },
      {
        label: "Original Work",
        text: "You confirm that submitted edits do not infringe on any third party's intellectual property rights.",
      },
    ],
  },
];

const acceptableUse = [
  {
    text: "Upload or submit content that is unlawful, defamatory, or infringes on the rights of others.",
  },
  {
    text: "Attempt to interfere with, disrupt, or gain unauthorized access to our platform or systems.",
  },
  {
    text: "Misrepresent your identity or affiliation when applying to our creator or editor programs.",
  },
  {
    text: "Use our platform to distribute spam, malware, or fraudulent content.",
  },
];

const otherSections = [
  {
    lead: "Disclaimers &",
    accent: " Limitation of Liability",
    body: "Our platform and services are provided “as is” without warranties of any kind. To the fullest extent permitted by law, Drip shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.",
  },
  {
    lead: "Termination ",
    accent: "of Access",
    body: "We may suspend or terminate your access to our platform or programs at any time, with or without notice, if we believe you have violated these Terms or engaged in conduct harmful to our community.",
  },
  {
    lead: "Governing ",
    accent: "Law",
    body: "These Terms are governed by the laws of the jurisdiction in which Drip operates, without regard to its conflict of law principles.",
  },
  {
    lead: "Changes to ",
    accent: "These Terms",
    body: "We may update these Terms from time to time. Continued use of our platform after changes are posted constitutes acceptance of the updated Terms.",
  },
];

const TermsContent = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="mx-auto flex max-w-[900px] flex-col gap-20 items-start">
        <p className="font-[family-name:var(--font-inter)] text-[14px] leading-[1.6] text-[#686868]">
          Last updated: July 22, 2026
        </p>

        {/* Introduction */}
        <div className="flex flex-col gap-3 items-start w-full">
          <p className="font-kugile leading-[1.2] text-[36px] text-black w-full">
            Introduction
          </p>
          <div className="flex flex-col gap-4 items-start w-full">
            <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
              Welcome to Drip. These Terms &amp; Conditions govern your use of
              our website and creator growth platform, including our content
              seeding, clipping, and distribution services, and our Creator
              and Editor programs.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
              By accessing or using our platform, you agree to be bound by
              these Terms. If you do not agree with any part of these Terms,
              please do not use our platform.
            </p>
          </div>
        </div>

        {/* Eligibility */}
        <div className="flex flex-col gap-3 items-start w-full">
          <SectionHeading lead="" accent="Eligibility" />
          <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
            You must be at least 18 years old, or the age of legal majority in
            your jurisdiction, to apply as a creator or editor, or to submit
            information through our contact form. By using our platform, you
            confirm that you meet this requirement.
          </p>
        </div>

        {/* Creator & Editor Program Terms */}
        <div className="flex flex-col gap-6 items-start w-full">
          <SectionHeading lead="Program " accent="Terms" />
          <div className="flex flex-col gap-6 items-start w-full">
            {programTerms.map((program) => (
              <div key={program.title} className="flex flex-col gap-3 items-start w-full">
                <SubHeading>{program.title}</SubHeading>
                <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
                  {program.intro}
                </p>
                <ul className="flex flex-col gap-2 w-full font-[family-name:var(--font-inter)] text-[16px] text-[#686868]">
                  {program.items.map((item, index) => (
                    <Bullet key={index} label={item.label} text={item.text} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Acceptable Use */}
        <div className="flex flex-col gap-3 items-start w-full">
          <SectionHeading lead="Acceptable " accent="Use" />
          <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
            When using our platform, you agree that you will not:
          </p>
          <ul className="flex flex-col gap-2 w-full font-[family-name:var(--font-inter)] text-[16px] text-[#686868]">
            {acceptableUse.map((item, index) => (
              <Bullet key={index} text={item.text} />
            ))}
          </ul>
        </div>

        {otherSections.map((section) => (
          <div key={section.accent} className="flex flex-col gap-3 items-start w-full">
            <SectionHeading lead={section.lead} accent={section.accent} />
            <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
              {section.body}
            </p>
          </div>
        ))}

        <div className="flex flex-col gap-3 items-start w-full">
          <SectionHeading lead="Contact " accent="Us" />
          <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
            If you have any questions about these Terms &amp; Conditions,
            please contact us at{" "}
            <a
              href="mailto:driptoseed@gmail.com"
              className="text-[#780AC1] underline"
            >
              driptoseed@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
