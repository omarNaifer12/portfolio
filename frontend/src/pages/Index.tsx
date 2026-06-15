import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Tech } from "@/components/portfolio/Tech";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { OpenSource } from "@/components/portfolio/OpenSource";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Tech />
      <OpenSource/>
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
