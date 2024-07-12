import { PortableText, SanityDocument, toPlainText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";

import { urlForImage } from "@/sanity/lib/image";

import { IconButton } from "./IconButton";
import { TechIcons } from "./TechIcons";
import { formatDate } from "@/helpers";

interface ProjectProps {
  project: SanityDocument;
}

export function ProjectCard({ project }: Readonly<ProjectProps>) {
  return (
    <div className="flex flex-col relative group w-fit">
      <Link href={`/project/${project.slug.current}`} passHref>
        <div className="flex p-6 flex-col gap-6 bg-light-surface-primary dark:bg-dark-surface-primary rounded-2xl border-[1.5px] border-transparent hover:border-light-secondary dark:hover:border-dark-secondary hover:shadow-card ease-out duration-300 transition-all">
          <div className="flex justify-center">
            <Image
              src={urlForImage(project.image)}
              alt={project.image.alt}
              width={336}
              height={160}
              className="rounded-t-lg w-full"
            />
          </div>
          <div className="flex justify-between flex-row">
            <span className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-sm font-normal">
              {formatDate(project.publishedAt)}
            </span>

            <div className="flex gap-4">
              <TechIcons techs={project.technologies} />
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-lg">
            <span className="text-light-text-primary dark:text-dark-text-primary font-heebo text-xl font-medium">
              {project.title}
            </span>
            <div>
              <span className="text-ellipsis text-light-text-secondary dark:text-dark-text-secondary font-heebo text-sm line-clamp-3">
                {toPlainText(project.description)}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex absolute top-4 right-4 flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="appearance-none"
        >
          <IconButton>
            <IoLogoGithub />
          </IconButton>
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="appearance-none"
        >
          <IconButton>
            <FiArrowUpRight />
          </IconButton>
        </a>
      </div>
    </div>
  );
}
