export type Faq = {
  question: string;
  answer: string;
};

// Answers only restate what the site already promises elsewhere (process steps,
// partner network, editor payout, niches). Keep it that way: don't add prices,
// guarantees or timelines here unless they are true and agreed.
export const faqs: Faq[] = [
  {
    question: "What exactly does Drip do?",
    answer:
      "Drip is a creator growth engine. We turn one long-form video into many short-form clips, place them across a network of 300+ niche pages, communities and media partners, and plan it all around your niche and goals — so your content reaches people beyond your existing followers.",
  },
  {
    question: "What kind of content can I share with you?",
    answer:
      "Podcasts, interviews, vlogs, webinars, educational sessions or existing social content. If a video is packed with moments worth sharing, we can turn it into clips and give each one its own chance to be discovered.",
  },
  {
    question: "How does the process work?",
    answer:
      "You share your content, we build a growth strategy around your niche and audience, our editors create the clips, every clip is optimized before it goes out, we distribute it across our partner network, and you get transparent performance reporting so we can keep improving what works.",
  },
  {
    question: "Which niches do you work with?",
    answer:
      "Fashion, beauty, lifestyle, travel, fitness, food, business, finance, comedy and luxury. Every niche has a different audience and content style, so the clipping, seeding and distribution plan is tailored to yours instead of copied from a template.",
  },
  {
    question: "Which platforms do you create clips for?",
    answer:
      "Clips are formatted for Instagram Reels, YouTube Shorts, TikTok, LinkedIn and more, then distributed through relevant communities, media pages and creator networks where your ideal audience is already active.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Transparent and performance-based — not vague retainers or one-off campaigns. Get in touch through the contact page and we'll walk you through a plan that fits your niche and how much content you publish.",
  },
  {
    question: "How will I know it's working?",
    answer:
      "Growth is measured, not guessed. Every campaign includes clear reporting on how your clips perform across the distribution network, and we use those insights to sharpen future content and placements.",
  },
  {
    question: "I'm an editor. How do I get paid?",
    answer:
      "You earn ₹175 for every clip that reaches 200K+ views. No pitching clients and no chasing invoices — edit real creators' videos, post the clips on your own channels, and get paid per performance. It's remote and flexible, and a great way to grow your own audience.",
  },
];
