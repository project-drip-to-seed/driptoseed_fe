export type CaseStudy = {
  slug: string;
  title: string;
  creator: string;
  excerpt: string;
  category: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "50k-to-2-8m-organic-reach",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Business & Entrepreneurship Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Business",
  },
  {
    slug: "beauty-brand-3x-audience",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Beauty & Skincare Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Beauty",
  },
  {
    slug: "fashion-creator-viral-clips",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Fashion & Style Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Fashion",
  },
  {
    slug: "fitness-coach-community-growth",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Fitness & Wellness Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Fitness",
  },
  {
    slug: "travel-creator-global-reach",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Travel & Adventure Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Travel",
  },
  {
    slug: "food-creator-recipe-virality",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Food & Recipe Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Food",
  },
  {
    slug: "finance-educator-scaled-audience",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Finance & Investing Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Finance",
  },
  {
    slug: "comedy-creator-breakout",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Comedy & Entertainment Creator",
    excerpt:
      "Most posts experience their highest engagement within the first few days before rapidly...",
    category: "Comedy",
  },
];

export const caseStudyCategories = [
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

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
