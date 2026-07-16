import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Milestone from "@/components/milestone";
import Problem from "@/components/problem";
import Services from "@/components/services";
import Journey from "@/components/journey";
import Niches from "@/components/niches";
import Distribution from "@/components/distribution";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Milestone />
      <Problem />
      <Services />
      <Journey />
      <Niches />
      <Distribution />
    </main>
  );
}