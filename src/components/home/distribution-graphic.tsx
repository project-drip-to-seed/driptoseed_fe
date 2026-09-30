// Hub-and-spoke diagram for the "Your Content. Everywhere It Matters." section.
// The eight nodes are the partner types already listed in the Services section.

type IconName =
  | "media"
  | "star"
  | "users"
  | "briefcase"
  | "creator"
  | "heart"
  | "smile"
  | "pin";

const nodes: { label: string; angle: number; icon: IconName }[] = [
  { label: "Media Publications", angle: -90, icon: "media" },
  { label: "Entertainment Pages", angle: -45, icon: "star" },
  { label: "Communities", angle: 0, icon: "users" },
  { label: "Industry Platforms", angle: 45, icon: "briefcase" },
  { label: "Creator Networks", angle: 90, icon: "creator" },
  { label: "Fan Communities", angle: 135, icon: "heart" },
  { label: "Meme Pages", angle: 180, icon: "smile" },
  { label: "Regional Pages", angle: 225, icon: "pin" },
];

const CX = 300;
const CY = 260;
const RX = 215;
const RY = 190;
const NODE_R = 30;
const HUB_R = 54;
const PURPLE = "#780AC1";
const LAVENDER = "#D59EFB";

const Icon = ({ name }: { name: IconName }) => {
  const p = {
    fill: "none",
    stroke: PURPLE,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "media":
      return (
        <g {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 9h10M7 13h10M7 17h6" />
        </g>
      );
    case "star":
      return (
        <path
          {...p}
          d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"
        />
      );
    case "users":
      return (
        <g {...p}>
          <circle cx="9" cy="9" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M17 13.5c2.5 0 4.5 2 4.5 4.5" />
        </g>
      );
    case "briefcase":
      return (
        <g {...p}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
        </g>
      );
    case "creator":
      return (
        <g {...p}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </g>
      );
    case "heart":
      return (
        <path
          {...p}
          d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"
        />
      );
    case "smile":
      return (
        <g {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14c1 2 2.5 3 4 3s3-1 4-3" />
          <circle cx="9" cy="10" r="0.6" fill={PURPLE} />
          <circle cx="15" cy="10" r="0.6" fill={PURPLE} />
        </g>
      );
    case "pin":
      return (
        <g {...p}>
          <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </g>
      );
  }
};

const DistributionGraphic = () => {
  const placed = nodes.map((node) => {
    const rad = (node.angle * Math.PI) / 180;
    return {
      ...node,
      x: +(CX + RX * Math.cos(rad)).toFixed(1),
      y: +(CY + RY * Math.sin(rad)).toFixed(1),
      above: Math.sin(rad) < -0.1,
    };
  });

  return (
    <svg
      viewBox="0 0 600 520"
      className="size-full"
      role="img"
      aria-label="Diagram: your content flows from one hub out to eight kinds of distribution partners — media publications, entertainment pages, communities, industry platforms, creator networks, fan communities, meme pages and regional pages."
    >
      <style>{`@media (prefers-reduced-motion: reduce){.drip-anim{display:none}}`}</style>
      <defs>
        <radialGradient id="dg-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor="#F2E7F9" />
          <stop offset="1" stopColor="#FFFFFF" />
        </radialGradient>
        <linearGradient id="dg-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A24BEA" />
          <stop offset="0.55" stopColor="#780AC1" />
          <stop offset="1" stopColor="#54078F" />
        </linearGradient>
      </defs>

      <rect width="600" height="520" fill="url(#dg-bg)" />

      {/* orbit rings */}
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX}
        ry={RY}
        fill="none"
        stroke={LAVENDER}
        strokeWidth="1"
        strokeDasharray="2 7"
        opacity="0.8"
      />
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX * 0.58}
        ry={RY * 0.58}
        fill="none"
        stroke={LAVENDER}
        strokeWidth="1"
        strokeDasharray="2 7"
        opacity="0.6"
      />

      {/* spokes + travelling packets */}
      {placed.map((node, i) => (
        <g key={node.label}>
          <line
            x1={CX}
            y1={CY}
            x2={node.x}
            y2={node.y}
            stroke={LAVENDER}
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <circle r="4.5" fill={PURPLE} className="drip-anim" opacity="0">
            <animateMotion
              dur="3.2s"
              begin={`${(i * 0.4).toFixed(1)}s`}
              repeatCount="indefinite"
              path={`M${CX} ${CY} L${node.x} ${node.y}`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.85;1"
              dur="3.2s"
              begin={`${(i * 0.4).toFixed(1)}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* pulse rings */}
      <circle
        cx={CX}
        cy={CY}
        r={HUB_R}
        fill="none"
        stroke={PURPLE}
        strokeWidth="2"
        className="drip-anim"
      >
        <animate attributeName="r" values={`${HUB_R};${HUB_R + 44}`} dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.35;0" dur="2.8s" repeatCount="indefinite" />
      </circle>

      {/* hub */}
      <circle cx={CX} cy={CY} r={HUB_R + 10} fill="#EED7FF" opacity="0.7" />
      <circle cx={CX} cy={CY} r={HUB_R} fill="url(#dg-hub)" />
      <path
        d="M290 241.5 L317 260 L290 278.5 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <rect
        x={CX - 64}
        y={CY + HUB_R + 15}
        width="128"
        height="28"
        rx="14"
        fill="#FFFFFF"
        stroke="#EED7FF"
      />
      <text
        x={CX}
        y={CY + HUB_R + 34}
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        letterSpacing="1.6"
        fill={PURPLE}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        YOUR CONTENT
      </text>

      {/* partner nodes */}
      {placed.map((node) => (
        <g key={`n-${node.label}`}>
          <circle cx={node.x} cy={node.y} r={NODE_R + 7} fill="#F2E7F9" opacity="0.8" />
          <circle
            cx={node.x}
            cy={node.y}
            r={NODE_R}
            fill="#FFFFFF"
            stroke={LAVENDER}
            strokeWidth="1.5"
          />
          <g transform={`translate(${node.x - 12} ${node.y - 12})`}>
            <Icon name={node.icon} />
          </g>
          <text
            x={node.x}
            y={node.above ? node.y - NODE_R - 14 : node.y + NODE_R + 26}
            textAnchor="middle"
            fontSize="15"
            fontWeight="500"
            fill="#2A0846"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default DistributionGraphic;
