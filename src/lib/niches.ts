export type Niche = {
  name: string;
  subtitle: string;
  audience: string;
  bestChannels: string;
};

// Shared by /solutions/creator-growth and /solutions/distribution-strategy.
export const niches: Niche[] = [
  {
    name: "Fashion",
    subtitle: "Style, drops & lookbooks",
    audience: "18–34, trend-driven",
    bestChannels: "Instagram, TikTok",
  },
  {
    name: "Lifestyle",
    subtitle: "Routines, vlogs & day-in-the-life",
    audience: "20–35, aspirational",
    bestChannels: "Instagram, YouTube",
  },
  {
    name: "Beauty",
    subtitle: "Tutorials, reviews & get-ready-with-me",
    audience: "16–30, discovery-heavy",
    bestChannels: "TikTok, YouTube Shorts",
  },
  {
    name: "Travel",
    subtitle: "Guides, itineraries & hidden gems",
    audience: "22–40, experience-seeking",
    bestChannels: "Instagram, YouTube",
  },
  {
    name: "Food",
    subtitle: "Recipes, reviews & taste tests",
    audience: "18–35, visually-driven",
    bestChannels: "TikTok, Instagram Reels",
  },
  {
    name: "Fitness",
    subtitle: "Workouts, form tips & transformations",
    audience: "18–32, goal-oriented",
    bestChannels: "YouTube, TikTok",
  },
  {
    name: "Business",
    subtitle: "Founder stories, tactics & case studies",
    audience: "25–45, career-focused",
    bestChannels: "LinkedIn, YouTube",
  },
  {
    name: "Finance",
    subtitle: "Money tips, investing & explainers",
    audience: "24–40, growth-minded",
    bestChannels: "YouTube, LinkedIn",
  },
  {
    name: "Comedy",
    subtitle: "Skits, bloopers & relatable humor",
    audience: "16–28, entertainment-first",
    bestChannels: "TikTok, Instagram Reels",
  },
  {
    name: "Luxury",
    subtitle: "Premium products, travel & living",
    audience: "25–45, aspirational spenders",
    bestChannels: "Instagram, YouTube",
  },
];
