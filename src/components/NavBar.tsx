"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu, IoMoon, IoSunny } from "react-icons/io5";

import { useRefs } from "@/context";

import { IconButton } from "./IconButton";
import { MenuItem } from "./MenuItem";

export function NavBar() {
  const { resumeRef, aboutRef, projectsRef, contactRef } = useRefs();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false);
  };

  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <nav className="flex w-full pl-4 py-2 pr-2 md:px-20 md:py-4 bg-light-surface-background dark:bg-dark-surface-background shadow-lg sticky top-0 justify-between items-center z-10">
        <div>
          <Link href={"/"} className="flex gap-2">
            <span className="text-light-text-primary dark:text-dark-text-primary font-kalam text-3xl font-light">
              David
            </span>
            <span className="text-light-text-secondary dark:text-dark-text-secondary font-kalam text-3xl font-bold">
              França
            </span>
          </Link>
        </div>
        <IconButton className="md:hidden" onClick={toggleDrawer}>
          {isDrawerOpen ? <IoClose /> : <IoMenu />}
        </IconButton>
        <div className="gap-4 flex-row items-center hidden md:flex">
          <MenuItem label="Resumo" onClick={() => scrollToSection(resumeRef)} />
          <MenuItem label="Sobre" onClick={() => scrollToSection(aboutRef)} />
          <MenuItem
            label="Projetos"
            onClick={() => scrollToSection(projectsRef)}
          />
          <MenuItem
            label="Contato"
            onClick={() => scrollToSection(contactRef)}
          />
          <IconButton onClick={darkModeHandler}>
            {!dark ? <IoSunny /> : <IoMoon />}
          </IconButton>
        </div>
      </nav>
      <div
        className={`fixed top-16 left-0 right-0 z-20 h-[calc(100vh-4rem)] flex flex-col bg-light-surface-primary dark:bg-dark-surface-primary px-4 py-6 md:hidden transition-transform duration-500 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          <MenuItem
            label="Resumo"
            onClick={() => {
              scrollToSection(resumeRef);
            }}
          />
          <MenuItem
            label="Sobre"
            onClick={() => {
              scrollToSection(aboutRef);
            }}
          />
          <MenuItem
            label="Projetos"
            onClick={() => {
              scrollToSection(projectsRef);
            }}
          />
          <MenuItem
            label="Contato"
            onClick={() => {
              scrollToSection(contactRef);
            }}
          />
        </div>
      </div>
    </>
  );
}
