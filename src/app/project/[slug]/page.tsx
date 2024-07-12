import {
  PortableText,
  PortableTextReactComponents,
  SanityDocument,
} from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowBack, IoGlobe, IoLogoGithub } from "react-icons/io5";

import { Footer } from "@/components/Footer";
import { IconButton } from "@/components/IconButton";
import { NavBar } from "@/components/NavBar";
import { TechIcons } from "@/components/TechIcons";
import { formatDate } from "@/helpers";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { Button } from "@headlessui/react";

const portableTextComponents: Partial<PortableTextReactComponents> = {
  marks: {
    // Estilo para o strong
    strong: ({ children }) => (
      <strong className="text-light-text-secondary dark:text-dark-text-secondary font-heebo font-bold">
        {children}
      </strong>
    ),
    // Estilo para o emphasis
    em: ({ children }) => (
      <em className="text-light-text-secondary dark:text-dark-text-secondary font-heebo italic">
        {children}
      </em>
    ),
  },
  block: {
    // Define como renderizar diferentes estilos de bloco, por exemplo, títulos
    h1: ({ children }) => (
      <h1 className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-3xl font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-2xl font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-xl font-bold">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-light-text-secondary dark:text-dark-text-secondary font-heebo border-l-4 border-gray-500 pl-4 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-lg font-normal pb-4 last:pb-0">
        {children}
      </p>
    ),
  },
  list: {
    // Define como renderizar listas
    bullet: ({ children }) => (
      <ul className="text-light-text-secondary dark:text-dark-text-secondary font-heebo list-disc list-inside">
        {children}
      </ul>
    ),
  },
  listItem: {
    // Define como renderizar itens de lista
    bullet: ({ children }) => <li>{children}</li>,
  },
};

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = await sanityFetch<SanityDocument>({
    query: PROJECT_QUERY,
    params: { slug: params.slug },
  });

  return (
    <>
      <NavBar />
      <section className="flex min-h-screen flex-col justify-between bg-light-surface-background dark:bg-dark-surface-background gap-4">
        <div className=" flex flex-col md:flex-row gap-4 w-full md:px-28 py-8 md:py-24 items-start justify-between">
          <div className="w-full relative md:w-3/5 md:rounded-2xl bg-light-surface-primary dark:bg-dark-surface-primary">
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <Link href="/">
                <IconButton>
                  <IoArrowBack className="h-6 w-6" />
                </IconButton>
              </Link>
            </div>
            <Image
              src={urlForImage(project.image)}
              alt={project.image.alt}
              width={336}
              height={160}
              priority
              className="w-full md:rounded-t-2xl"
            />
            <div className="flex flex-col pb-12 pt-6 px-6 md:p-12 gap-6">
              <div className="flex justify-between">
                <span className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-sm font-normal">
                  {formatDate(project.publishedAt)}
                </span>
                <div className="flex gap-4">
                  <TechIcons techs={project.technologies} />
                </div>
              </div>
              <div>
                <h1 className="text-light-text-primary dark:text-dark-text-primary font-heebo text-3xl font-medium">
                  {project.title}
                </h1>
              </div>
              <div>
                <PortableText
                  value={project.description}
                  components={portableTextComponents}
                />
                {/* <p className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-lg font-normal">
                </p> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 md:rounded-2xl p-8 bg-light-surface-primary dark:bg-dark-surface-primary flex flex-col justify-center items-center gap-6">
            <span className="text-light-text-primary dark:text-dark-text-primary font-heebo text-xl font-medium">
              Dá uma olhada nesse projeto
            </span>
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              className="flex w-full px-6 py-4 justify-between items-center gap-2 rounded-lg bg-light-surface-buttonDefault dark:bg-dark-surface-buttonDefault text-light-text-primary dark:text-dark-text-primary hover:bg-light-surface-buttonHover dark:hover:bg-dark-surface-buttonHover"
            >
              <IoGlobe className="h-6 w-6" />
              Demo
              <FiArrowUpRight className="h-6 w-6" />
            </Button>
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              className="flex w-full px-6 py-4 justify-between items-center gap-2 rounded-lg bg-light-surface-secondary dark:bg-dark-surface-secondary text-light-text-primary dark:text-dark-text-primary hover:bg-light-surface-tertiary dark:hover:bg-dark-surface-tertiary"
            >
              <IoLogoGithub className="h-6 w-6" />
              Código
              <FiArrowUpRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
