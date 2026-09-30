import { testimonials, type Testimonial } from "@/lib/testimonials";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="shrink-0 w-[85vw] sm:w-[420px] lg:w-[600px] max-w-full min-h-[270px] rounded-3xl bg-[#FAF3FF] p-5">
    <div className="flex flex-col gap-5 items-start w-full">
      <div className="flex gap-5 items-center">
        <div
          aria-hidden="true"
          className="flex size-16 sm:size-20 shrink-0 items-center justify-center rounded-[40px] font-kugile text-[28px] sm:text-[32px] text-white"
          style={{
            background: "linear-gradient(180deg, #D59EFB 11%, #780AC1 142.75%)",
          }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex flex-col gap-1 items-start">
          <p className="font-[family-name:var(--font-inter)] font-medium capitalize text-[20px] sm:text-[24px] leading-[1.2] text-black">
            {testimonial.name}
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.4] text-[#686868]">
            {testimonial.service}
          </p>
        </div>
      </div>
      <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white overflow-hidden">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.6] text-black">
          {`Creators `}
          <span className="text-[#780AC1]">Growing With Us.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          From fitness coaches to finance educators, creators use Drip to turn
          a single upload into weeks of reach. Here&apos;s how they describe
          the difference.
        </p>
      </div>

      <div className="group mt-10 -mx-5 px-5 overflow-hidden sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
        <div className="flex gap-8 w-max animate-marquee [animation-duration:40s] group-hover:[animation-play-state:paused]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`a-${testimonial.name}`} testimonial={testimonial} />
          ))}
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={`b-${testimonial.name}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
