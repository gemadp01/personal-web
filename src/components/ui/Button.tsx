import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const button = cva(
  "inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-md shadow-sm transition font-medium hover:bg-gray-100",
  {
    variants: {
      color: {
        primary: "border border-primary text-primary",
        secondary: "bg-primary text-secondary",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
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
}) => {
  const classNames = button({ color, size, className });

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <ArrowLeft className="ml-2 w-4 h-4" />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <ArrowRight className="mr-2 w-4 h-4" />
      )}
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

  return <button className={classNames}>{content}</button>;
};
