const testimonials = [
  { name: "Aarav Mehta", niche: "Fitness" },
  { name: "Aarav Mehta", niche: "Fitness" },
  { name: "Aarav Mehta", niche: "Fitness" },
  { name: "Aarav Mehta", niche: "Fitness" },
  { name: "Aarav Mehta", niche: "Fitness" },
];

const testimonialQuote =
  "My clips started showing up on pages I'd never even pitched. The system just works in the background. My clips started showing up on pages I'd never even pitched. The system just works in the background. My clips started showing up on pages I'd never even pitched. The system just works in the background.";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className="shrink-0 w-[600px] max-w-full h-[270px] rounded-3xl bg-[#FAF3FF] p-5">
    <div className="flex flex-col gap-5 items-start w-full">
      <div className="flex gap-5 items-center">
        <img
          src="/general_assets/testimonial_avatar.jpg"
          alt={testimonial.name}
          className="size-20 rounded-[40px] object-cover shrink-0"
        />
        <div className="flex flex-col gap-1 items-start">
          <p className="font-[family-name:var(--font-inter)] font-medium capitalize text-[24px] leading-[1.2] text-black">
            {testimonial.name}
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.4] text-[#686868]">
            {testimonial.niche}
          </p>
        </div>
      </div>
      <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
        {testimonialQuote}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="w-full py-20 px-20 bg-white overflow-hidden">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[36px] leading-[1.6] text-black">
          {`Creators `}
          <span className="text-[#780AC1]">Growing With Us.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          Every long-form video is packed with moments that deserve their own
          audience. Whether it&apos;s a podcast, interview, vlog, webinar, or
          educational session, there are countless highlights that often go
          unnoticed after a single upload.
        </p>
      </div>

      <div className="group mt-10 -mx-20 px-20 overflow-hidden">
        <div
          className="flex gap-8 w-max animate-marquee [animation-duration:40s] group-hover:[animation-play-state:paused]"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`a-${index}`} testimonial={testimonial} />
          ))}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`b-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
