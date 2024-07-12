import {
  Button as HButton,
  ButtonProps as HButtonProps,
} from "@headlessui/react";

interface MenuItemProps extends HButtonProps {
  label: string;
}

export function MenuItem({ label, ...props }: Readonly<MenuItemProps>) {
  return (
    <HButton
      {...props}
      className="flex items-center justify-center rounded-lg p-2 border-2 border-transparent focus:border-light-text-primary dark:focus:border-dark-text-primary transition-colors ease-out duration-300 w-fit h-fit"
    >
      <span className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary font-heebo text-base font-normal transition-colors ease-out duration-300">
        {label}
      </span>
    </HButton>
  );
}
