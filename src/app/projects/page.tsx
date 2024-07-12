import { Footer } from "@/components/Footer";
import { IconButton } from "@/components/IconButton";
import { NavBar } from "@/components/NavBar";
import { ProjectCard } from "@/components/ProjectCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

export default async function Projects() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: PROJECTS_QUERY,
  });

  return (
    <main className="min-h-screen bg-light-surface-background dark:bg-dark-surface-background">
      <NavBar />
      <section className="relative flex md:px-28 md:py-16 gap-10 flex-col px-12 py-6">
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <span className="font-kalam text-light-secondary dark:text-dark-secondary text-base font-normal">
            Projetos
          </span>
        </div>
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <Link href={"/"}>
            <IconButton variant="surface">
              <IoArrowBack className="h-6 w-6" />
            </IconButton>
          </Link>
        </div>
        <div className="grid gap-10 w-full md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
