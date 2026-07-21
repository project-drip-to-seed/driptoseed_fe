const niches = [
  { name: "Fashion", image: "/niche_images/fashion.svg" },
  { name: "Beauty", image: "/niche_images/beauty.svg" },
  { name: "Lifestyle", image: null },
  { name: "Travel", image: null },
  { name: "Fitness", image: null },
  { name: "Food", image: null },
  { name: "Business", image: null },
  { name: "Finance", image: null },
  { name: "Comedy", image: null },
  { name: "Luxury", image: null },
];

const StarIcon = () => (
  <svg viewBox="0 0 19 20" width={15} height={16} aria-hidden="true">
    <path
      fill="#780AC1"
      d="M7.64112 20L7.96664 12.6736L1.86745 16.6493L0 13.3507L6.47611 10L0 6.6493L1.86745 3.35069L7.96664 7.32639L7.64112 0H11.3589L11.0334 7.32639L17.1326 3.35069L19 6.6493L12.5239 10L19 13.3507L17.1326 16.6493L11.0334 12.6736L11.3589 20H7.64112Z"
    />
  </svg>
);

const NicheCard = ({ name, image }: { name: string; image: string | null }) => (
  <div
    className="relative flex-1 min-w-0 aspect-square rounded-3xl overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, rgba(213,158,251,0.08) 11%, rgba(120,10,193,0.08) 142.75%)",
    }}
  >
    <div className="absolute left-[14px] top-[14px] flex items-center gap-2">
      <StarIcon />
      <p className="font-[family-name:var(--font-inter)] font-medium capitalize text-[16px] text-black whitespace-nowrap">
        {name}
      </p>
    </div>

    <div
      className="absolute bottom-0 left-0 w-[88.33%] h-[77.92%] rounded-tr-xl rounded-bl-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(213,158,251,0.16) 11%, rgba(120,10,193,0.16) 142.75%)",
      }}
    >
      {image && (
        <img
          alt={name}
          src={image}
          className="w-full h-full object-cover block"
        />
      )}
    </div>
  </div>
);

const Niches = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[36px] leading-[1.6] whitespace-nowrap">
          <span className="text-black">Built for Every </span>
          <span className="text-[#780AC1]">Creator Niche.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] w-[900px] max-w-full">
          Every niche has a different audience, content style, and
          distribution strategy. That&apos;s why we don&apos;t use a
          one-size-fits-all approach. From fashion creators to finance
          educators, we tailor our clipping, seeding, and distribution
          strategy to match your niche, helping your content reach the
          communities where it matters most.
        </p>
      </div>

      <div className="flex flex-col gap-5 items-start w-full mt-10">
        <div className="flex gap-5 items-center w-full">
          {niches.slice(0, 5).map((niche) => (
            <NicheCard key={niche.name} name={niche.name} image={niche.image} />
          ))}
        </div>
        <div className="flex gap-5 items-center w-full">
          {niches.slice(5, 10).map((niche) => (
            <NicheCard key={niche.name} name={niche.name} image={niche.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Niches;
