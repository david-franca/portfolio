import React from "react";
import { BiLogoRedux } from "react-icons/bi";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoVue,
} from "react-icons/io5";
import {
  SiChakraui,
  SiNestjs,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const TechIcons = ({
  techs,
}: {
  techs: { tech: string; slug: string; _id: string }[];
}) => {
  const techIcons = {
    javascript: IoLogoJavascript,
    nodejs: IoLogoNodejs,
    react: IoLogoReact,
    "styled components": SiStyledcomponents,
    css: IoLogoCss3,
    github: IoLogoGithub,
    html: IoLogoHtml5,
    redux: BiLogoRedux,
    "nest.js": SiNestjs,
    vue: IoLogoVue,
    tailwind: SiTailwindcss,
    typescript: SiTypescript,
    "next.js": SiNextdotjs,
    chakra: SiChakraui,
  };
  const iconClassName =
    "text-light-surface-techs dark:text-dark-surface-techs h-6 w-6";

  return (
    <>
      {techs.map((tech) => {
        const Icon =
          techIcons[tech.tech as keyof typeof techIcons] || IoLogoJavascript;
        const IconComponent = <Icon key={tech._id} className={iconClassName} />;
        return IconComponent;
      })}
    </>
  );
};
