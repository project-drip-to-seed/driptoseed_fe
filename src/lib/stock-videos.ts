// Placeholder videos for the Creator Clipping page.
//
// The footage is free stock from Mixkit (https://mixkit.co/free-stock-video/), whose Stock Video Free License
// allows commercial use without attribution. It stands in for Drip's own creator footage.
//
// Each tile has its OWN small file in /public/media/creator-clipping/, re-encoded at the size that tile is shown at
// (silent, a few seconds, about 20 to 250 KB each) plus a tiny preview image that shows instantly. Together they
// weigh under 2 MB, where the full-size originals were about 27 MB.
//
// To use your own footage: export clips the same way (H.264 .mp4, no audio, a few seconds, about the tile's size
// at 1.2x to 1.5x), put them in that folder with a matching .webp preview, and point `src` / `poster` at them.
// File names end in -v1 because they are cached for a year: change the number when you replace a file.

export type StockClip = {
  /** The small .mp4 file for this tile. */
  src: string;
  /** A still of the first frame, shown until the video is needed. */
  poster: string;
  /** What the clip shows (read out by screen readers, and used as the video's title for search engines). */
  label: string;
  /** The file's size in pixels and its length in whole seconds (search engines ask for these). */
  width: number;
  height: number;
  seconds: number;
};

// The four sizes the clips were re-encoded at (see the comment at the top).
const sizes = {
  hero: { width: 288, height: 504, seconds: 6 },
  library: { width: 540, height: 360, seconds: 6 },
  thumb: { width: 360, height: 200, seconds: 5 },
  strip: { width: 160, height: 200, seconds: 5 },
};

const clip = (name: string, size: keyof typeof sizes, label: string): StockClip => ({
  src: `/media/creator-clipping/${name}-v1.mp4`,
  poster: `/media/creator-clipping/${name}-v1.webp`,
  label,
  ...sizes[size],
});

export const stockVideos = {
  // The three big landscape tiles: "the long-form video" seen from different angles.
  longForm: [
    clip("library-1", "library", "People recording a podcast in a studio"),
    clip("library-2", "library", "Presenters recording a podcast"),
    clip("library-3", "library", "A man speaking into a microphone in a recording studio"),
  ],

  // The small "source video" thumbnail next to the row of short clips.
  sourceThumbnail: clip("source-thumb", "thumb", "People recording a podcast in a studio"),

  // Seven tall cards across the top of the page (left to right).
  heroClips: [
    clip("hero-1", "hero", "A woman recording a podcast"),
    clip("hero-2", "hero", "An influencer talking to the camera"),
    clip("hero-3", "hero", "A broadcaster speaking into a microphone"),
    clip("hero-4", "hero", "A man talking in front of a radio microphone"),
    clip("hero-5", "hero", "A woman talking lively to a microphone"),
    clip("hero-6", "hero", "A youtuber vlogging in his studio"),
    clip("hero-7", "hero", "A bearded announcer in close-up"),
  ],

  // Eleven short clips "cut from" the long video.
  clipStrip: [
    clip("strip-1", "strip", "A broadcaster speaking into a microphone"),
    clip("strip-2", "strip", "A woman recording a podcast"),
    clip("strip-3", "strip", "A woman talking lively to a microphone"),
    clip("strip-4", "strip", "A youtuber vlogging in his studio"),
    clip("strip-5", "strip", "A bearded announcer in close-up"),
    clip("strip-6", "strip", "Three women talking on a podcast"),
    clip("strip-7", "strip", "Two men having a chat for a podcast"),
    clip("strip-8", "strip", "A couple of broadcasters recording"),
    clip("strip-9", "strip", "Broadcasters talking at a recording studio"),
    clip("strip-10", "strip", "An announcer recording a podcast"),
    clip("strip-11", "strip", "A radio announcer in a studio"),
  ],
} satisfies Record<string, StockClip | StockClip[]>;

/** Every distinct clip on the page, in the order they appear (for the video markup and the video sitemap). */
export const allStockClips: StockClip[] = [
  ...stockVideos.heroClips,
  ...stockVideos.longForm,
  stockVideos.sourceThumbnail,
  ...stockVideos.clipStrip,
];
