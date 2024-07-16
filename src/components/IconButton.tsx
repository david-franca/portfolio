"use client";

import {
  Button as HButton,
  ButtonProps as HButtonProps,
} from "@headlessui/react";

interface IconButtonProps extends HButtonProps {
  variant?: "default" | "surface";
}

export function IconButton({
  children,
  variant = "default",
  ...props
}: Readonly<IconButtonProps>) {
  const variantClasses: Record<string, string> = {
    default:
      "bg-light-surface-background dark:bg-dark-surface-background hover:bg-surface-primary dark:hover:bg-dark-surface-primary",
    surface:
      "bg-light-surface-secondary dark:bg-dark-surface-secondary hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary",
  };

  return (
    <HButton
      {...props}
      aria-label="button icon"
      className={`flex w-fit h-fit p-3 gap-2 rounded-lg border-2 border-transparent focus:border-light-text-primary dark:focus:border-dark-text-primary transition-colors ease-out duration-300 text-light-text-primary dark:text-dark-text-primary *:w-6 *:h-6 ${variantClasses[variant]} ${props.className}`}
    >
      {children}
    </HButton>
  );
}
