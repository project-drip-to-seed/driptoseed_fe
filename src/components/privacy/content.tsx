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

const dataCategories = [
  {
    title: "Personal Information",
    intro: "When you contact us or apply through our platform, we collect:",
    items: [
      {
        label: "Contact Details",
        text: "Name, email address, and phone number submitted through our contact form.",
      },
      {
        label: "Creator Applications",
        text: "Social media handles, content niche, and audience details submitted when applying as a creator.",
      },
      {
        label: "Editor Applications",
        text: "Portfolio links, editing experience, and sample work submitted when applying to become an editor.",
      },
    ],
  },
  {
    title: "Device & Technical Data",
    intro: "We automatically collect certain information when you visit our site:",
    items: [
      {
        label: "Usage Data",
        text: "Pages visited, time spent on the site, and referring URLs.",
      },
      {
        label: "Device Information",
        text: "IP address, browser type, and device type.",
      },
      {
        label: "Cookies",
        text: "Small files stored on your device to remember preferences and understand site usage.",
      },
    ],
  },
  {
    title: "Application & Content Data",
    intro: "As part of our creator and editor programs, we may also collect:",
    items: [
      {
        label: undefined,
        text: "Content samples, clips, and campaign details submitted for review or distribution.",
      },
      {
        label: undefined,
        text: "Performance metrics tied to content we help seed, clip, or distribute on your behalf.",
      },
    ],
  },
];

const usageItems = [
  {
    label: "Respond to Inquiries",
    text: "Answer questions submitted through our contact form and provide requested information about our services.",
  },
  {
    label: "Process Applications",
    text: "Review and respond to creator and editor applications, including verifying eligibility and following up on submissions.",
  },
  {
    label: "Improve Our Services",
    text: "Analyze usage patterns to improve our Creator Growth Framework, website performance, and content strategy.",
  },
  {
    label: "Send Updates",
    text: "Share relevant updates about our services, growth tips, and platform changes, in line with your communication preferences.",
  },
  {
    label: "Ensure Security",
    text: "Monitor for misuse, enforce our terms, and protect the security and integrity of our platform.",
  },
];

const otherSections = [
  {
    lead: "Sharing ",
    accent: "Your Information",
    body: "We do not sell your personal information. We may share information with trusted service providers who help us operate our platform (such as form processing and analytics tools), or when required to comply with applicable law.",
  },
  {
    lead: "Cookies ",
    accent: "and Tracking",
    body: "We use cookies and similar technologies to remember your preferences and understand how visitors interact with our site. You can control cookies through your browser settings, though disabling them may affect certain features.",
  },
  {
    lead: "Data ",
    accent: "Security",
    body: "We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    lead: "Your ",
    accent: "Rights",
    body: "Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to certain processing. To exercise these rights, contact us using the details below.",
  },
  {
    lead: "Changes to ",
    accent: "This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
];

const PrivacyContent = () => {
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
              Welcome to Drip. We are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website and
              creator growth platform, including our content seeding,
              clipping, and distribution services.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
              Your personal data is processed in accordance with this
              Privacy Policy and any applicable data protection laws and
              regulations.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
              By using our platform, you agree to the collection and use of
              information in accordance with this policy. If you do not
              agree with our policies and practices, please do not use our
              platform.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="flex flex-col gap-6 items-start w-full">
          <SectionHeading lead="Information " accent="We Collect" />
          <div className="flex flex-col gap-6 items-start w-full">
            {dataCategories.map((category) => (
              <div key={category.title} className="flex flex-col gap-3 items-start w-full">
                <SubHeading>{category.title}</SubHeading>
                <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
                  {category.intro}
                </p>
                <ul className="flex flex-col gap-2 w-full font-[family-name:var(--font-inter)] text-[16px] text-[#686868]">
                  {category.items.map((item, index) => (
                    <Bullet key={index} label={item.label} text={item.text} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="flex flex-col gap-3 items-start w-full">
          <SectionHeading lead="How We Use " accent="Your Information" />
          <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
            We use the collected information for the following purposes:
          </p>
          <ul className="flex flex-col gap-2 w-full font-[family-name:var(--font-inter)] text-[16px] text-[#686868]">
            {usageItems.map((item, index) => (
              <Bullet key={index} label={item.label} text={item.text} />
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
            If you have any questions about this Privacy Policy, please
            contact us at{" "}
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

export default PrivacyContent;
