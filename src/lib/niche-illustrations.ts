// The illustration for each creator niche, with a description of the picture for people who can't see it and for image
// search. Shared by every place the illustrations are shown (the home page niche tiles, the case studies, the sitemap).

export type NicheIllustration = { name: string; image: string; alt: string };

export const nicheIllustrations: NicheIllustration[] = [
  { name: "Fashion", image: "/niche_images/fashion.svg", alt: "Fashion creator niche: illustration of a dress on a hanger next to a handbag" },
  { name: "Beauty", image: "/niche_images/beauty.svg", alt: "Beauty creator niche: illustration of a compact mirror and a lipstick" },
  { name: "Lifestyle", image: "/niche_images/lifestyle.svg", alt: "Lifestyle creator niche: illustration of a coffee mug and a potted plant" },
  { name: "Travel", image: "/niche_images/travel.svg", alt: "Travel creator niche: illustration of an airplane flying between a location pin and a cloud" },
  { name: "Fitness", image: "/niche_images/fitness.svg", alt: "Fitness creator niche: illustration of a dumbbell with a heartbeat line" },
  { name: "Food", image: "/niche_images/food.svg", alt: "Food creator niche: illustration of a bowl of noodles with chopsticks" },
  { name: "Business", image: "/niche_images/business.svg", alt: "Business creator niche: illustration of a briefcase with a growth bar chart" },
  { name: "Finance", image: "/niche_images/finance.svg", alt: "Finance creator niche: illustration of coins with an upward trend chart" },
  { name: "Comedy", image: "/niche_images/comedy.svg", alt: "Comedy creator niche: illustration of a laughing emoji with a microphone" },
  { name: "Luxury", image: "/niche_images/luxury.svg", alt: "Luxury creator niche: illustration of a diamond" },
];

export const findNicheIllustration = (name: string): NicheIllustration | undefined =>
  nicheIllustrations.find((niche) => niche.name.toLowerCase() === name.toLowerCase());
