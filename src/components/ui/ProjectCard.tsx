import React from "react";
import { Button } from "./Button";

type ProjectCardProps = {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  link?: string;
  buttonTitle: string;
  iconPosition?: "left" | "right";
  withIcon?: React.ReactNode;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  subtitle,
  title,
  description,
  link,
  buttonTitle,
  iconPosition = "right",
  withIcon = false,
  color,
  size,
}) => {
  const isInternal: boolean | undefined = link?.startsWith("/");

  return (
    <div className="rounded-xl overflow-hidden shadow-xl bg-white w-80">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <p className="text-sm text-extended ">{subtitle}</p>
        <h2 className="text-lg font-semibold text-primary dark:text-secondary">
          {title}
        </h2>
        <p className="text-sm text-seventh dark:text-sixth">{description}</p>

        <Button
          link={isInternal ? link : undefined}
          href={!isInternal ? link : undefined}
          external={!isInternal}
          icon={withIcon ? withIcon : undefined}
          iconPosition={withIcon ? iconPosition : undefined}
          color={color}
          size={size}
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};
