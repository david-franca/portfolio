import { SanityDocument } from "next-sanity";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Resume } from "@/components/Home";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { sanityFetch } from "@/sanity/lib/fetch";
import { FAVORITE_PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: FAVORITE_PROJECTS_QUERY,
  });

  return (
    <>
      <NavBar />
      <main className="flex flex-col justify-between bg-light-surface-background dark:bg-dark-surface-background gap-4">
        <Resume />
        <About />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
