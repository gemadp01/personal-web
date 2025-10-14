import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";
import clsx from "clsx";

const button = cva(
  "inline-flex justify-center items-center gap-2 px-5 py-2 mt-2 rounded-md shadow-sm transition font-medium",
  {
    variants: {
      color: {
        primary:
          " text-primary border border-dark  dark:text-secondary dark:border-light cursor-pointer hover:bg-dark hover:text-secondary dark:hover:bg-light dark:hover:text-primary",
        secondary:
          " text-secondary border border-light dark:bg-light dark:text-primary",
        active: "bg-dark text-secondary dark:bg-secondary dark:text-primary",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "sm",
    },
  }
);

type TButtonProps = {
  children: React.ReactNode;
  link?: string;
  href?: string;
  external?: boolean;
  className?: string;
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & VariantProps<typeof button>;

export const Button = ({
  children,
  link,
  href,
  external = false,
  className,
  icon: Icon,
  iconPosition = "left",
  color,
  size,
  onClick,
}: TButtonProps) => {
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="mr-2 w-4 h-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-1 w-4 h-4" />}
    </>
  );

  if (link) {
    return (
      <Link to={link} className={clsx(button({ color, size }), className)}>
        {content}
      </Link>
    );
  }

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(button({ color, size }), className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={clsx(button({ color, size }), className)}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
