// Illustrations for the "One Video. Endless Content Opportunities." cards.
// Text-free on purpose so they scale cleanly inside the square tiles.

const P = "#780AC1";
const MID = "#A24BEA";
const DEEP = "#54078F";
const LAV = "#D59EFB";
const PALE = "#EED7FF";
const INK = "#2A0846";

const Svg = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <svg viewBox="0 0 300 300" className="size-full" role="img" aria-label={label}>
    {children}
  </svg>
);

/** Rounded play triangle centred on (cx, cy). */
const Play = ({ cx, cy, s, fill = "#fff" }: { cx: number; cy: number; s: number; fill?: string }) => {
  const h = s;
  const w = s * 0.87;
  const x0 = cx - w * 0.36;
  return (
    <path
      d={`M${x0} ${cy - h / 2}L${x0 + w} ${cy}L${x0} ${cy + h / 2}Z`}
      fill={fill}
      stroke={fill}
      strokeWidth={Math.max(2, s * 0.14)}
      strokeLinejoin="round"
    />
  );
};

const Star = ({ cx, cy, r, fill = "#fff" }: { cx: number; cy: number; r: number; fill?: string }) => {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.45;
    return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
  });
  return <polygon points={pts.join(" ")} fill={fill} />;
};

/* 1 — Find the moments that matter: a waveform with the best moments picked out */
const BARS = [18, 30, 46, 28, 60, 84, 66, 38, 24, 42, 70, 96, 74, 44, 30, 22, 52, 80, 62, 36, 26, 40, 58, 32];
const PICKS: [number, number][] = [
  [4, 7],
  [10, 13],
  [17, 19],
];
const inPick = (i: number) => PICKS.some(([a, b]) => i >= a && i <= b);

export const FindMomentsArt = () => (
  <Svg label="An audio waveform with the strongest moments highlighted">
    {BARS.map((h, i) => (
      <rect
        key={i}
        x={32 + i * 10}
        y={140 - h / 2}
        width="6"
        height={h}
        rx="3"
        fill={inPick(i) ? P : LAV}
        opacity={inPick(i) ? 1 : 0.75}
      />
    ))}
    {PICKS.map(([a, b]) => {
      const x = 32 + a * 10 - 7;
      const w = (b - a) * 10 + 6 + 14;
      return (
        <g key={a}>
          <rect x={x} y="84" width={w} height="112" rx="12" fill="rgba(120,10,193,0.07)" stroke={P} strokeWidth="2" />
          <circle cx={x + w / 2} cy="72" r="12" fill={P} />
          <Star cx={x + w / 2} cy={72} r={6.5} />
          <rect x={x + 3} y="230" width={w - 6} height="10" rx="5" fill={P} />
        </g>
      );
    })}
    <rect x="32" y="230" width="236" height="10" rx="5" fill={PALE} opacity="0.9" />
    {PICKS.map(([a, b]) => {
      const x = 32 + a * 10 - 7;
      const w = (b - a) * 10 + 6 + 14;
      return <rect key={`t-${a}`} x={x + 3} y="230" width={w - 6} height="10" rx="5" fill={P} />;
    })}
    {/* playhead */}
    <line x1="150" y1="112" x2="150" y2="252" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <path d="M143 104h14l-7 12z" fill={INK} />
  </Svg>
);

/* 2 — One long video becomes several standalone vertical stories */
export const StandaloneStoriesArt = () => (
  <Svg label="One landscape video splitting into three vertical short-form clips">
    <defs>
      {[MID, P, DEEP].map((c, i) => (
        <linearGradient key={i} id={`sa-g${i}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c} />
          <stop offset="1" stopColor={DEEP} />
        </linearGradient>
      ))}
    </defs>
    {[67, 150, 233].map((y, i) => (
      <g key={y}>
        <path
          d={`M128 144C172 144 172 ${y} 212 ${y}`}
          fill="none"
          stroke={LAV}
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <rect x="214" y={y - 37} width="44" height="74" rx="9" fill={`url(#sa-g${i})`} />
        <Play cx={236} cy={y - 8} s={14} />
        <rect x="222" y={y + 14} width="28" height="4" rx="2" fill="#fff" opacity="0.9" />
        <rect x="222" y={y + 22} width="18" height="4" rx="2" fill="#fff" opacity="0.6" />
      </g>
    ))}
    <rect x="22" y="110" width="108" height="68" rx="11" fill="#fff" stroke={P} strokeWidth="2.5" />
    <Play cx={76} cy={140} s={26} fill={P} />
    <rect x="36" y="162" width="60" height="5" rx="2.5" fill={LAV} />
    <circle cx="128" cy="144" r="5" fill={P} />
  </Svg>
);

/* 3 — Built for how people watch today: vertical video on a phone */
export const WatchTodayArt = () => (
  <Svg label="A phone playing a vertical video with captions and reaction buttons">
    <defs>
      <linearGradient id="wt-screen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={MID} />
        <stop offset="1" stopColor={DEEP} />
      </linearGradient>
    </defs>
    <rect x="96" y="24" width="108" height="252" rx="22" fill={INK} />
    <rect x="102" y="30" width="96" height="240" rx="17" fill="url(#wt-screen)" />
    <rect x="132" y="37" width="36" height="6" rx="3" fill={INK} />
    <Play cx={148} cy={118} s={32} />
    {/* reaction column */}
    {[168, 194, 220].map((y) => (
      <circle key={y} cx="181" cy={y} r="8.5" fill="#fff" opacity="0.92" />
    ))}
    <path d="M181 172.5s-4.5-2.8-4.5-6.3a2.5 2.5 0 0 1 4.5-1.5 2.5 2.5 0 0 1 4.5 1.5c0 3.5-4.5 6.3-4.5 6.3z" fill={P} />
    <rect x="177" y="191" width="8" height="6" rx="2" fill={P} />
    <path d="M177.5 220l7-3v6z" fill={P} />
    {/* captions + progress */}
    <rect x="110" y="222" width="56" height="9" rx="4.5" fill="#fff" />
    <rect x="110" y="236" width="38" height="9" rx="4.5" fill="#fff" opacity="0.7" />
    <rect x="110" y="256" width="80" height="4" rx="2" fill="#fff" opacity="0.3" />
    <rect x="110" y="256" width="46" height="4" rx="2" fill="#fff" />
    {/* floating accents */}
    <g>
      <rect x="20" y="62" width="50" height="30" rx="15" fill="#fff" stroke={LAV} strokeWidth="2" />
      <rect x="35" y="70" width="12" height="14" rx="3" fill="none" stroke={P} strokeWidth="2" />
      <rect x="53" y="76" width="9" height="2.5" rx="1.25" fill={LAV} />
    </g>
    <g>
      <circle cx="240" cy="92" r="17" fill="#fff" stroke={LAV} strokeWidth="2" />
      <Play cx={240} cy={92} s={13} fill={P} />
    </g>
    <Star cx={252} cy={188} r={9} fill={LAV} />
    <Star cx={44} cy={206} r={7} fill={LAV} />
    <circle cx="56" cy="150" r="4" fill={P} opacity="0.5" />
    <circle cx="256" cy="140" r="3" fill={P} opacity="0.5" />
  </Svg>
);

/* 4 — Weeks of content from one recording: a calendar filling up with clips */
export const WeeksOfContentArt = () => {
  const cols = 7;
  const rows = 4;
  const filled = 22;
  return (
    <Svg label="One recording feeding a four-week calendar full of clips">
      <defs>
        <linearGradient id="wc-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={MID} />
          <stop offset="1" stopColor={DEEP} />
        </linearGradient>
      </defs>
      <rect x="44" y="30" width="212" height="48" rx="14" fill="#fff" stroke={P} strokeWidth="2.5" />
      <circle cx="72" cy="54" r="15" fill="url(#wc-g)" />
      <Play cx={72} cy={54} s={13} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <rect
          key={i}
          x={100 + i * 14}
          y={54 - [8, 14, 9, 18, 12, 6, 16, 10, 13, 7][i] / 2}
          width="7"
          height={[8, 14, 9, 18, 12, 6, 16, 10, 13, 7][i]}
          rx="3.5"
          fill={LAV}
        />
      ))}
      <path d="M150 84v22" stroke={P} strokeWidth="2" strokeDasharray="3 5" strokeLinecap="round" />
      <path d="M143 100l7 9 7-9" fill="none" stroke={P} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {Array.from({ length: rows * cols }, (_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const x = 44 + c * 31;
        const y = 122 + r * 41;
        const on = i < filled;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="27"
              height="34"
              rx="7"
              fill={on ? "url(#wc-g)" : PALE}
              opacity={on ? 1 - r * 0.07 : 0.8}
            />
            {on && <Play cx={x + 13.5} cy={y + 17} s={9} />}
          </g>
        );
      })}
    </Svg>
  );
};
