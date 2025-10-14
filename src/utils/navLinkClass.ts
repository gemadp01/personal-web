import clsx from "clsx";

export const navLinkClass = (isActive: boolean) => {
  return clsx(
    "text-inverse dark:text-placeholder hover:text-primary dark:hover:text-secondary transition",
    isActive ? "text-primary dark:text-secondary font-semibold" : ""
  );
};
