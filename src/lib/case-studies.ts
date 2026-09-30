export type CaseStudy = {
  slug: string;
  title: string;
  creator: string;
  excerpt: string;
  category: string;
  /** Intro paragraph under the headline on the detail page. */
  summary: string;
  /** "Meet the creator" copy. */
  meet: string;
  challenge: string;
  approach: string;
};

// TODO(before launch): these are illustrative write-ups of the kind of work Drip
// does per niche. They are NOT documented results for real, named clients, and
// they deliberately carry no numbers. The site promises "real creators, real
// results", so replace each entry with an actual, permissioned case study
// (including real metrics) or remove it. The Business headline is the only one
// that keeps a number, taken from the original copy: verify it or drop it.
export const caseStudies: CaseStudy[] = [
  {
    slug: "50k-to-2-8m-organic-reach",
    title: "From 50K Views to 2.8M Organic Reach",
    creator: "Business & Entrepreneurship Creator",
    excerpt:
      "A business educator's long-form videos peaked in the first few days. Clipping and seeding gave every upload a second and third life.",
    category: "Business",
    summary:
      "A business educator with a loyal community and a regular publishing schedule, but growth had plateaued. Here is how each upload started reaching people who had never heard of them.",
    meet: "Our client is a business educator creating practical content around entrepreneurship, startups, productivity, and personal finance. Their videos consistently delivered valuable insights, but despite maintaining a regular publishing schedule, growth had plateaued. The content itself wasn't the issue. The challenge was that every upload reached only a small percentage of followers before gradually disappearing from platform feeds. Although the creator had built a loyal community, they struggled to attract new audiences beyond their existing network.",
    challenge:
      "Every upload reached only a small share of existing followers before slipping out of feeds. With no plan for what happened after publishing, the creator's best insights stayed inside the community they had already built.",
    approach:
      "We reviewed the back catalogue, cut long-form videos into single-idea clips, and placed them across business communities, media pages and partner networks on a staggered schedule, then tracked which placements brought in new followers.",
  },
  {
    slug: "beauty-creator-audience-growth",
    title: "From Loyal Followers to Discovery-Led Growth",
    creator: "Beauty & Skincare Creator",
    excerpt:
      "Great tutorials were only reaching people who already followed. Clips placed in beauty communities put them in front of new viewers.",
    category: "Beauty",
    summary:
      "A skincare creator whose tutorials and reviews were loved by followers but rarely travelled beyond them. This is how discovery-minded viewers started finding the content.",
    meet: "Our client creates skincare routines, product reviews and beauty tutorials. The videos were polished and consistent, and followers engaged with them, but very little of that attention reached people searching for their next routine. Most beauty viewers discover creators through short clips, and the creator had almost none.",
    challenge:
      "Long tutorials were published once and then buried by newer posts. Beauty audiences discover creators through short, shareable moments, and there were almost none to find.",
    approach:
      "We clipped tutorials into quick tips, before-and-afters and product reactions, formatted them for Reels, Shorts and TikTok, and seeded them into beauty pages and communities where viewers already look for routines.",
  },
  {
    slug: "fashion-creator-lookbook-clips",
    title: "Turning Every Lookbook Into a Month of Clips",
    creator: "Fashion & Style Creator",
    excerpt:
      "One lookbook shoot became a library of short clips, shared with style pages where trend-led viewers already spend their time.",
    category: "Fashion",
    summary:
      "A style creator who spent days on each shoot and watched the results fade within a week. This is how one lookbook started working for a whole month.",
    meet: "Our client shares lookbooks, drop reviews and styling ideas. Each shoot took days of planning and editing, yet the content peaked quickly and then faded as newer posts pushed it down. The creator had the eye and the audience, but no system for getting more from every shoot.",
    challenge:
      "A single shoot produced a single post. Trend-driven audiences move fast, so the content faded before it could reach anyone new.",
    approach:
      "We cut each lookbook into outfit-by-outfit clips and styling tips, matched them to fashion and lifestyle pages, and staggered placements over several weeks so the content stayed fresh in front of trend-led viewers.",
  },
  {
    slug: "fitness-coach-community-growth",
    title: "From One Workout Video to a Growing Community",
    creator: "Fitness & Wellness Creator",
    excerpt:
      "Long workout videos were clipped into form tips and routines, then seeded into fitness communities to build a steady audience.",
    category: "Fitness",
    summary:
      "A fitness creator whose long-form workouts were valuable but hard to discover. Here is how short, focused clips brought new people into the community.",
    meet: "Our client publishes full-length workouts, form guides and wellness advice. The content genuinely helps people, but a full-length workout is a hard thing for a new viewer to stumble upon, and audience growth had stalled. Nearly all of the value sat inside long videos that newcomers rarely clicked.",
    challenge:
      "The best advice sat inside long workouts that new viewers rarely clicked. Without short, standalone moments, there was little to catch attention in a busy feed.",
    approach:
      "We pulled out form tips, single exercises and quick routines as standalone clips, and seeded them into fitness communities and pages, pointing viewers back to the full workouts.",
  },
  {
    slug: "travel-creator-vlog-clips",
    title: "Giving Every Trip Vlog a Second Life",
    creator: "Travel & Adventure Creator",
    excerpt:
      "Trip vlogs used to fade within days. Clips and staggered placements kept destinations in front of new travellers for weeks.",
    category: "Travel",
    summary:
      "A travel creator whose vlogs took weeks to make and days to fade. This is how each trip kept finding new viewers long after it was posted.",
    meet: "Our client documents trips, hidden gems and destination guides. Each vlog took weeks of travel and editing, but after the first few days it was replaced in feeds by newer content, even though the information stayed useful for months.",
    challenge:
      "Travel content stays useful for months, but feeds reward the newest post. Each vlog received a short burst of attention and then went quiet.",
    approach:
      "We cut vlogs into destination highlights and quick guides, then placed them across travel pages and communities on a staggered schedule so each trip kept reaching people planning their next one.",
  },
  {
    slug: "food-creator-recipe-clips",
    title: "Recipes That Keep Getting Discovered",
    creator: "Food & Recipe Creator",
    excerpt:
      "Recipe videos were clipped into quick, shareable moments and placed on food pages, so dishes kept finding hungry new viewers.",
    category: "Food",
    summary:
      "A recipe creator with beautiful videos that peaked on day one. Here is how dishes kept getting discovered in the weeks after.",
    meet: "Our client shares recipes, taste tests and kitchen tips. The videos looked great and followers loved them, but reach flattened quickly after each upload. Food is one of the most visual and shareable niches, and most of that potential was going unused.",
    challenge:
      "Each recipe got one moment in the feed. The most shareable parts, like the reveal, the first bite and the quick tip, stayed buried inside full-length videos.",
    approach:
      "We cut recipes into reveal shots, quick tips and taste-test reactions, formatted for short-form platforms, and placed them on food pages and communities where viewers browse for what to cook next.",
  },
  {
    slug: "finance-educator-explainer-clips",
    title: "Explainers That Reach Beyond Existing Followers",
    creator: "Finance & Investing Creator",
    excerpt:
      "Long-form money explainers were broken into single-idea clips and placed in finance communities and business publications.",
    category: "Finance",
    summary:
      "A finance educator whose explainers were thorough but only reached people who already followed. This is how single-idea clips took the lessons further.",
    meet: "Our client explains investing, saving and personal finance in depth. The videos earned trust with existing followers, but finance audiences also look for quick, credible answers, and a long explainer is a hard way for a new viewer to meet a creator.",
    challenge:
      "Depth built trust with followers but made discovery hard. New viewers wanted quick, credible answers and had no short way in.",
    approach:
      "We turned each explainer into single-idea clips (one concept, one takeaway) and placed them in finance communities and business-focused pages, where credibility carries over from the source to the creator.",
  },
  {
    slug: "comedy-creator-standalone-clips",
    title: "Getting the Best Bits Seen Beyond the Feed",
    creator: "Comedy & Entertainment Creator",
    excerpt:
      "The funniest moments from longer videos were cut into standalone clips and shared through meme and entertainment pages.",
    category: "Comedy",
    summary:
      "A comedy creator whose best moments were buried in longer videos. Here is how those moments found much bigger audiences.",
    meet: "Our client makes sketches, bloopers and commentary. The funniest moments sat inside longer videos, where most viewers never reached them, so the humor that could travel furthest was the least likely to be seen.",
    challenge:
      "The funniest moments sat inside longer videos. Comedy travels by being shared, and a clip nobody can find can't be shared.",
    approach:
      "We cut standalone clips around the strongest punchlines, optimized hooks and captions, and shared them through meme and entertainment pages, where sharing habits already exist.",
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
