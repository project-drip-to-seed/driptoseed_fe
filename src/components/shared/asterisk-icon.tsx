const AsteriskIcon = ({
  width = 39,
  height = 40,
  color = "#780AC1",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <svg width={width} height={height} viewBox="0 0 39 40" fill="none" aria-hidden="true">
    <path
      d="M15.6844 40L16.3526 25.3472L3.83318 33.2986L0 26.7014L13.2931 20L0 13.2986L3.83318 6.70139L16.3526 14.6528L15.6844 0H23.3156L22.6474 14.6528L35.1668 6.70139L39 13.2986L25.7069 20L39 26.7014L35.1668 33.2986L22.6474 25.3472L23.3156 40H15.6844Z"
      fill={color}
    />
  </svg>
);

export default AsteriskIcon;
