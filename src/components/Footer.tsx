"use client";

import { IoArrowUp } from "react-icons/io5";

import { IconButton } from "./IconButton";
import { MenuItem } from "./MenuItem";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="w-full flex-col md:flex-row px-4 py-6 md:px-28 md:py-8 flex items-center justify-between gap-6 bg-light-surface-background dark:bg-dark-surface-background shadow-[0_-4px_8px_0_rgba(0,0,0,0.15)]">
      <span className="text-light-text-secondary text-center md:text-start dark:text-dark-text-secondary font-heebo text-sm">
        David França © {new Date().getFullYear()}. Todos os direitos
        reservados. Layout baseado no template Rocketseat
      </span>
      <div className="flex gap-2 md:gap-6 items-center">
        <MenuItem
          label="Github"
          onClick={() => openLink("https://github.com/david-franca")}
        />
        <MenuItem
          label="Linkedin"
          onClick={() => openLink("https://www.linkedin.com/in/davidecfranca")}
        />
        <MenuItem
          label="Instagram"
          onClick={() => openLink("https://www.instagram.com/davidecfranca/")}
        />
        <IconButton onClick={scrollToTop}>
          <IoArrowUp />
        </IconButton>
      </div>
    </footer>
  );
}
