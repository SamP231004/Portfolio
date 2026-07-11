import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { MoreProjects } from "@/components/sections/more-projects";
import { OpenSource } from "@/components/sections/open-source";
import { Skills } from "@/components/sections/skills";
import { Learning } from "@/components/sections/learning";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main id="main">
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <FeaturedProjects />
        <MoreProjects />
        <OpenSource />
        <Skills />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
