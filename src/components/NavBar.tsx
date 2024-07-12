"use client";

import { IoLanguage, IoMoon, IoSunny } from "react-icons/io5";

import { useRefs } from "@/context";

import { IconButton } from "./IconButton";
import { MenuItem } from "./MenuItem";
import {
  Menu,
  MenuButton,
  MenuItem as HMenuItem,
  MenuItems,
} from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

export function NavBar() {
  const { resumeRef, aboutRef, projectsRef, contactRef } = useRefs();

  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="flex w-full px-20 py-4 bg-light-surface-background dark:bg-dark-surface-background shadow-lg sticky top-0 justify-between items-center z-10">
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
      <div className="flex gap-4 flex-row items-center">
        <MenuItem label="Resumo" onClick={() => scrollToSection(resumeRef)} />
        <MenuItem label="Sobre" onClick={() => scrollToSection(aboutRef)} />
        <MenuItem
          label="Projetos"
          onClick={() => scrollToSection(projectsRef)}
        />
        <MenuItem label="Contato" onClick={() => scrollToSection(contactRef)} />
        {/* <IconButton onClick={darkModeHandler}>
          {dark ? <IoSunny /> : <IoMoon />}
        </IconButton>
        <Menu>
          <MenuButton>
            <IconButton>
              <IoLanguage />
            </IconButton>
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-light-text-primary dark:text-dark-text-primary transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-20"
          >
            <HMenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 font-heebo">
                Português
              </button>
            </HMenuItem>
            <HMenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 font-heebo">
                English
              </button>
            </HMenuItem>
          </MenuItems>
        </Menu> */}
      </div>
    </nav>
  );
}
