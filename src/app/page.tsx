import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { WorkExperienceSection } from "@/components/work-experience-section";
import { FloatingNavigationWrapper } from "@/components/floating-navigation-wrapper";

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="work">
        <WorkExperienceSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="certifications">
        <CertificationsSection />
      </section>
      <FloatingNavigationWrapper />
    </>
  );
}
