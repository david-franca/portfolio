"use client";

import { IoArrowForward } from "react-icons/io5";

import { SanityDocument } from "next-sanity";

import { Button } from "./Button";
import { ProjectCard } from "./ProjectCard";
import { useRefs } from "@/context";
import { useRouter } from "next/navigation";

export function Projects({
  projects,
}: Readonly<{
  projects: SanityDocument[];
}>) {
  const { projectsRef } = useRefs();
  const router = useRouter();

  return (
    <section
      className="flex md:px-28 md:py-16 gap-10 flex-col px-12 py-6"
      id="projects"
      ref={projectsRef}
    >
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <span className="font-kalam text-light-secondary dark:text-dark-secondary text-base font-normal">
          Projetos
        </span>
        <span className="font-heebo text-2xl font-medium text-light-text-primary dark:text-dark-text-primary">
          Dê uma olhada nos meus projetos em destaque
        </span>
      </div>
      <div className="grid gap-10 w-full md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <Button
          label="Ver todos os projetos"
          variant="surface"
          icon={IoArrowForward}
          onClick={() => router.push("/projects")}
        />
      </div>
    </section>
  );
}
