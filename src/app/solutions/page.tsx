import SolutionsHero from "@/components/solutions/hero";
import SolutionsProblem from "@/components/solutions/problem";
import SolutionsServices from "@/components/solutions/services";
import Reveal from "@/components/shared/reveal";

const SolutionsPage = () => {
  return (
    <main className="relative">
      <SolutionsHero />
      <Reveal>
        <SolutionsProblem />
      </Reveal>
      <Reveal>
        <SolutionsServices />
      </Reveal>
    </main>
  );
};

export default SolutionsPage;
