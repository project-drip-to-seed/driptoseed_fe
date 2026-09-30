export type Testimonial = {
  /** Creator label. Anonymized on purpose, matching the case-study style. */
  name: string;
  /** What they used Drip for. */
  service: string;
  quote: string;
};

// TODO(before launch): these quotes were written as stand-ins, they are NOT
// feedback from real creators. Publishing invented testimonials is misleading
// (and against consumer-protection rules in most markets), so replace each entry
// with a real, permissioned quote — or delete the entry / the section — first.
export const testimonials: Testimonial[] = [
  {
    name: "Fitness & Wellness Creator",
    service: "Clipping & Distribution",
    quote:
      "My clips started showing up on pages I'd never even pitched. The system just works in the background.",
  },
  {
    name: "Beauty & Skincare Creator",
    service: "Clipping & Seeding",
    quote:
      "I was posting one video a week and hoping for the best. Now every upload turns into a stack of clips, and I never have to chase a single page owner.",
  },
  {
    name: "Finance & Investing Creator",
    service: "Creator Seeding",
    quote:
      "Long explainers used to disappear in a day. Getting them clipped and placed in the right communities gave my older videos a second life.",
  },
  {
    name: "Fashion & Style Creator",
    service: "Growth Strategy",
    quote:
      "The reporting is what sold me. I can see where every clip landed instead of guessing what the algorithm did.",
  },
  {
    name: "Travel & Adventure Creator",
    service: "Clipping & Distribution",
    quote:
      "One trip vlog became weeks of content. I stayed focused on filming while Drip handled the clipping and the distribution.",
  },
];
