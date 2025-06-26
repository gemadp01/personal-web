import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";

const button = cva(
  "inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md shadow-sm transition font-medium",
  {
    variants: {
      color: {
        primary:
          " text-primary border border-dark  dark:text-secondary dark:border-light cursor-pointer",
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

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  href?: string;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & VariantProps<typeof button>;

export const Button: React.FC<ButtonProps> = ({
  children,
  link,
  href,
  external = false,
  className,
  icon,
  iconPosition = "left",
  color,
  size,
  onClick,
}) => {
  const classNames = button({ color, size, className });

  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  if (link) {
    return (
      <Link to={link} className={classNames}>
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
        className={classNames}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} onClick={onClick}>
      {content}
    </button>
  );
};
