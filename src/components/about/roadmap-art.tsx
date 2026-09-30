// Visual for the About roadmap: a climbing path with one milestone per phase.
// Phase 1 + 2 shipped (solid), phase 3 in progress (pulsing), future vision (dashed).

const P = "#780AC1";
const MID = "#A24BEA";
const DEEP = "#54078F";
const LAV = "#D59EFB";
const PALE = "#EED7FF";
const FONT = { fontFamily: "var(--font-inter), system-ui, sans-serif" } as const;

const Node = ({
  cx,
  cy,
  children,
  solid = true,
}: {
  cx: number;
  cy: number;
  children: React.ReactNode;
  solid?: boolean;
}) => (
  <g>
    <circle cx={cx} cy={cy} r="44" fill={solid ? PALE : "none"} opacity={solid ? 0.8 : 1} />
    <circle
      cx={cx}
      cy={cy}
      r="31"
      fill={solid ? "url(#rm-node)" : "#fff"}
      stroke={solid ? "none" : LAV}
      strokeWidth="2.5"
      strokeDasharray={solid ? undefined : "5 6"}
    />
    <g transform={`translate(${cx} ${cy})`}>{children}</g>
  </g>
);

const RoadmapArt = () => (
  <svg
    viewBox="0 0 360 520"
    className="size-full"
    role="img"
    aria-label="A path climbing through four milestones: foundation, clipping infrastructure and the distribution engine in progress, leading to full growth automation"
  >
    <style>{`@media (prefers-reduced-motion: reduce){.rm-anim{display:none}}`}</style>
    <defs>
      <linearGradient id="rm-node" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={MID} />
        <stop offset="0.6" stopColor={P} />
        <stop offset="1" stopColor={DEEP} />
      </linearGradient>
      <radialGradient id="rm-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor={LAV} stopOpacity="0.55" />
        <stop offset="1" stopColor={LAV} stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="270" cy="96" r="170" fill="url(#rm-glow)" />
    <circle cx="90" cy="450" r="150" fill="url(#rm-glow)" opacity="0.7" />

    {/* path: shipped segments solid, what is still ahead dashed */}
    <path
      d="M92 440C160 440 240 410 262 350"
      fill="none"
      stroke={P}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M262 350C282 296 200 262 130 232"
      fill="none"
      stroke={P}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M130 232C82 212 110 150 200 122C232 112 250 106 264 96"
      fill="none"
      stroke={LAV}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeDasharray="2 10"
    />

    {/* 01 Foundation: stacked blocks */}
    <Node cx={92} cy={440}>
      <g fill="#fff">
        <rect x="-13" y="-12" width="12" height="10" rx="2.5" />
        <rect x="1" y="-12" width="12" height="10" rx="2.5" />
        <rect x="-13" y="2" width="12" height="10" rx="2.5" />
        <rect x="1" y="2" width="12" height="10" rx="2.5" opacity="0.6" />
      </g>
    </Node>

    {/* 02 Clipping: play */}
    <Node cx={262} cy={350}>
      <path d="M-6 -12L14 0L-6 12Z" fill="#fff" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
    </Node>

    {/* 03 Distribution engine: hub + spokes (in progress) */}
    <circle cx="130" cy="232" r="52" fill="none" stroke={P} strokeWidth="2" className="rm-anim">
      <animate attributeName="r" values="46;66" dur="2.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.45;0" dur="2.6s" repeatCount="indefinite" />
    </circle>
    <Node cx={130} cy={232}>
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <path d="M0 0L-13 -11M0 0L13 -11M0 0L-13 11M0 0L13 11" />
      </g>
      <circle r="4.5" fill="#fff" />
      {[[-13, -11], [13, -11], [-13, 11], [13, 11]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="3.2" fill="#fff" />
      ))}
    </Node>

    {/* 04 Future: sparkle, dashed outline */}
    <Node cx={264} cy={96} solid={false}>
      <path
        d="M0 -15Q3.6 -3.6 15 0Q3.6 3.6 0 15Q-3.6 3.6 -15 0Q-3.6 -3.6 0 -15Z"
        fill={LAV}
        stroke={P}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Node>

    {/* numerals */}
    <g style={FONT} fontSize="12" fontWeight="600" fill={P} textAnchor="middle" letterSpacing="1.2">
      <text x="92" y="500">01</text>
      <text x="262" y="410">02</text>
      <text x="130" y="302">03</text>
      <text x="264" y="52" fill="#A46BCB">NEXT</text>
    </g>
  </svg>
);

export default RoadmapArt;
