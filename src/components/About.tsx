"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import {
  SiNextdotjs,
  SiReaddotcv,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { useRefs } from "@/context";

import { Button } from "./Button";

export function About() {
  const router = useRouter();
  const { aboutRef } = useRefs();

  return (
    <section className="flex md:p-10 gap-32" ref={aboutRef}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 md:p-16 md:rounded-2xl bg-light-surface-primary dark:bg-dark-surface-primary w-full">
        <div className="w-full sm:2/5 md:2/5 lg:2/5">
          <Image
            src="/about.svg"
            alt="About"
            width={336}
            height={160}
            className="w-full"
          />
        </div>
        <div className="w-full sm:2/5 flex gap-8 flex-col">
          <div className="flex gap-4">
            <IoLogoJavascript className="text-light-surface-techs dark:text-dark-surface-techs h-6 w-6" />
            <IoLogoReact className="text-light-surface-techs dark:text-dark-surface-techs h-6 w-6" />
            <IoLogoNodejs className="text-light-surface-techs dark:text-dark-surface-techs h-6 w-6" />
            <SiTailwindcss className="text-light-surface-techs dark:text-dark-surface-techs h-6 w-6" />
            <SiTypescript className="text-light-surface-techs dark:text-dark-surface-techs h-6 w-6" />
            <SiRedux className="text-light-surface-techs dark:text-dark-surface-techs h-6 w-6" />
            <SiNextdotjs className="text-light-surface-techs dark:text-dark-surface-techs h-6 w-6" />
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-kalam text-base text-light-secondary dark:text-dark-secondary font-normal">
              Sobre mim
            </span>
            <span className="text-light-text-primary dark:text-dark-text-primary font-heebo text-2xl font-medium">
              Sou um desenvolvedor de software apaixonado em busca de minha
              primeira oportunidade internacional
            </span>
            <span className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-base font-normal text-justify">
              Além da programação, sou um amante de livros, sou cristão e passo
              meu tempo livre ao lado da minha maravilhosa esposa assistindo
              filmes e séries. Atualmente, estou buscando oportunidades para
              trazer minhas habilidades e entusiasmo para uma empresa de
              tecnologia nos Estados Unidos ou na Europa e estou entusiasmado
              com a perspectiva de me mudar para enfrentar novos desafios.
            </span>
          </div>
          <Button
            label="Saiba mais"
            icon={SiReaddotcv}
            onClick={() => router.push("/about")}
          />
        </div>
      </div>
    </section>
  );
}
