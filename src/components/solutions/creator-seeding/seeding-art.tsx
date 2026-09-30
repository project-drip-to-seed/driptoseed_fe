// Illustrations for the three "Strategic Distribution Designed for Creators" cards.

const P = "#780AC1";
const MID = "#A24BEA";
const DEEP = "#54078F";
const LAV = "#D59EFB";
const PALE = "#EED7FF";
const GREY = "#BDB6C7";
const FONT = { fontFamily: "var(--font-inter), system-ui, sans-serif" } as const;

const Svg = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <svg viewBox="0 0 400 240" className="size-full" role="img" aria-label={label}>
    {children}
  </svg>
);

const User = ({
  cx,
  cy,
  r = 12,
  color = P,
  stroke = LAV,
}: {
  cx: number;
  cy: number;
  r?: number;
  color?: string;
  stroke?: string;
}) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={stroke} strokeWidth="1.5" />
    <circle cx={cx} cy={cy - r * 0.22} r={r * 0.3} fill={color} />
    <path
      d={`M${cx - r * 0.55} ${cy + r * 0.5}a${r * 0.55} ${r * 0.5} 0 0 1 ${r * 1.1} 0`}
      fill={color}
    />
  </g>
);

const Play = ({ cx, cy, s, fill = "#fff" }: { cx: number; cy: number; s: number; fill?: string }) => {
  const w = s * 0.87;
  const x0 = cx - w * 0.36;
  return (
    <path
      d={`M${x0} ${cy - s / 2}L${x0 + w} ${cy}L${x0} ${cy + s / 2}Z`}
      fill={fill}
      stroke={fill}
      strokeWidth={Math.max(2, s * 0.14)}
      strokeLinejoin="round"
    />
  );
};

/* 1 — Audience-first: content lands in the bullseye of a matched audience, not scattered impressions */
export const AudienceFirstArt = () => (
  <Svg label="A piece of content hitting the centre of a target surrounded by matched audience members, while unmatched viewers sit outside it">
    <defs>
      <linearGradient id="af-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={MID} />
        <stop offset="1" stopColor={DEEP} />
      </linearGradient>
    </defs>
    <circle cx="256" cy="120" r="96" fill="rgba(213,158,251,0.10)" stroke={LAV} strokeWidth="1.5" />
    <circle cx="256" cy="120" r="64" fill="rgba(213,158,251,0.20)" stroke={LAV} strokeWidth="1.5" />
    <circle cx="256" cy="120" r="32" fill={P} />
    <circle cx="256" cy="120" r="12" fill="#fff" />
    <circle cx="256" cy="120" r="5" fill={P} />

    {/* matched audience, inside the rings */}
    <User cx={256} cy={44} />
    <User cx={318} cy={84} />
    <User cx={322} cy={162} />
    <User cx={256} cy={198} />
    <User cx={196} cy={160} />

    {/* unmatched impressions, outside */}
    <User cx={92} cy={48} r={11} color={GREY} stroke="#E6E1EC" />
    <User cx={64} cy={186} r={11} color={GREY} stroke="#E6E1EC" />
    <User cx={370} cy={40} r={11} color={GREY} stroke="#E6E1EC" />
    <User cx={372} cy={206} r={11} color={GREY} stroke="#E6E1EC" />

    {/* the content, travelling to the target */}
    <path d="M62 120H206" stroke={P} strokeWidth="3" strokeLinecap="round" strokeDasharray="1 9" />
    <path d="M200 111l18 9-18 9z" fill={P} stroke={P} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="44" cy="120" r="24" fill="url(#af-g)" />
    <Play cx={44} cy={120} s={18} />
  </Svg>
);

/* 2 — Community-based reach: one post carried by several trusted communities */
const Bubble = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => (
  <g>
    <line x1={cx} y1={cy} x2="200" y2="120" stroke={LAV} strokeWidth="1.5" strokeDasharray="4 6" />
    <circle cx={cx} cy={cy} r={r} fill="rgba(213,158,251,0.18)" stroke={LAV} strokeWidth="1.5" />
    <circle cx={cx - r * 0.32} cy={cy + r * 0.12} r={r * 0.16} fill={P} opacity="0.85" />
    <circle cx={cx + r * 0.32} cy={cy + r * 0.12} r={r * 0.16} fill={P} opacity="0.6" />
    <circle cx={cx} cy={cy - r * 0.28} r={r * 0.19} fill={P} />
    <circle cx={cx + r * 0.72} cy={cy - r * 0.72} r="9" fill={P} stroke="#fff" strokeWidth="2" />
    <path
      d={`M${cx + r * 0.72 - 3.6} ${cy - r * 0.72}l2.6 2.6 4.6-4.8`}
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
);

export const CommunityReachArt = () => (
  <Svg label="One post at the centre carried outward by five verified communities">
    <defs>
      <linearGradient id="cr-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={MID} />
        <stop offset="0.6" stopColor={P} />
        <stop offset="1" stopColor={DEEP} />
      </linearGradient>
    </defs>
    <Bubble cx={82} cy={78} r={40} />
    <Bubble cx={92} cy={182} r={30} />
    <Bubble cx={318} cy={64} r={32} />
    <Bubble cx={326} cy={170} r={42} />
    <Bubble cx={200} cy={212} r={20} />
    <rect x="168" y="72" width="64" height="96" rx="13" fill="url(#cr-g)" />
    <Play cx={200} cy={110} s={20} />
    <rect x="178" y="138" width="34" height="5" rx="2.5" fill="#fff" opacity="0.9" />
    <rect x="178" y="148" width="22" height="5" rx="2.5" fill="#fff" opacity="0.6" />
  </Svg>
);

/* 3 — Long-term visibility: one-off spike vs staggered placements that keep compounding */
const placements = [
  { x: 76, y: 130 },
  { x: 146, y: 112 },
  { x: 216, y: 90 },
  { x: 286, y: 78 },
  { x: 356, y: 70 },
];

export const LongTermVisibilityArt = () => (
  <Svg label="A one-off post spikes and fades within days, while staggered placements keep reach climbing across four weeks">
    <defs>
      <linearGradient id="lt-area" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={P} stopOpacity="0.32" />
        <stop offset="1" stopColor={P} stopOpacity="0.02" />
      </linearGradient>
    </defs>

    {/* legend */}
    <g style={FONT} fontSize="11" fill="#686868">
      <path d="M28 22h22" stroke={GREY} strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      <text x="58" y="26">Single post</text>
      <path d="M140 22h22" stroke={P} strokeWidth="3" strokeLinecap="round" />
      <text x="170" y="26">With seeding</text>
    </g>

    {/* baseline + week ticks */}
    <path d="M28 196H382" stroke={PALE} strokeWidth="2" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <path d={`M${76 + i * 70} 196v6`} stroke={LAV} strokeWidth="1.5" />
        <text x={76 + i * 70} y="218" textAnchor="middle" fontSize="11" fill="#686868" style={FONT}>
          {`Week ${i + 1}`}
        </text>
      </g>
    ))}

    {/* the typical one-off spike */}
    <path
      d="M28 196C44 196 54 62 70 64C90 68 100 160 150 186C190 194 300 194 382 195"
      fill="none"
      stroke={GREY}
      strokeWidth="2.5"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />

    {/* staggered, compounding reach */}
    <path
      d="M28 196C50 168 58 138 76 130C102 118 122 118 146 112C176 104 192 96 216 90C244 84 262 80 286 78C316 74 336 72 356 70L382 68L382 196L28 196Z"
      fill="url(#lt-area)"
    />
    <path
      d="M28 196C50 168 58 138 76 130C102 118 122 118 146 112C176 104 192 96 216 90C244 84 262 80 286 78C316 74 336 72 356 70L382 68"
      fill="none"
      stroke={P}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {placements.map((pt) => (
      <g key={pt.x}>
        <line x1={pt.x} y1={pt.y} x2={pt.x} y2="196" stroke={LAV} strokeWidth="1.5" strokeDasharray="2 4" />
        <circle cx={pt.x} cy={pt.y} r="6.5" fill={P} stroke="#fff" strokeWidth="2.5" />
      </g>
    ))}
  </Svg>
);
