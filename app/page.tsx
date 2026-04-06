import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { FaqSection } from "@/components/sections/faq";
import { ServicesSection } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <HeroSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />
      <AboutSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />
      <ExperienceSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />
      <SkillsSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />
      <ProjectsSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />
      <ServicesSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />
      <FaqSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />
      <ContactSection />
    </div>
  );
}
