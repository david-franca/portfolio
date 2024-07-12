"use client";

import { useRefs } from "@/context";
import Image from "next/image";

export function Resume() {
  const { resumeRef } = useRefs();

  return (
    <section
      className="flex px-6 py-12 md:px-28 md:py-24 md:flex-row relative"
      ref={resumeRef}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex order-last md:order-none flex-col gap-8 w-full md:w-1/2">
          <span className="font-kalam w-fit text-4xl md:text-5xl bg-gradient-to-r from-light-primary-400 dark:from-dark-primary-400 to-light-secondary dark:to-dark-secondary bg-clip-text text-transparent">
            Olá, Eu sou David.
          </span>
          <span className="text-light-text-primary dark:text-dark-text-primary font-heebo text-2xl font-medium">
            Desenvolvedor Full-Stack e entusiasta de tecnologia.
          </span>
          <span className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-base font-normal ">
            Mais de 5 anos de experiência na indústria de tecnologia. Sou
            especialista na construção de aplicativos web inovadores usando
            tecnologias como React e Node.js.
          </span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/home.svg"
            alt="Home"
            width={336}
            height={160}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full absolute -bottom-12 md:-bottom-8 left-0">
        <Image
          src="/graphic.svg"
          alt="arrow"
          width={120}
          height={120}
          className="w-16 h-16 md:w-32 md:h-32"
        />
      </div>
    </section>
  );
}
