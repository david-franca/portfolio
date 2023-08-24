import { NavSection } from "@/_pages/Nav";
import { ExperienceSection } from "@/_pages/Experience";
import { HeroSection } from "@/_pages/Hero";
import { AboutSection } from "@/_pages/About";
import { ContactSection } from "@/_pages/Contact";
import { FooterSection } from "@/_pages/Footer";
import { ProjectSection } from "@/_pages/Project";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <NavSection locale={locale} />
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ProjectSection locale={locale} />
      <ContactSection locale={locale} />
      <FooterSection locale={locale} />
    </>
  );
}
