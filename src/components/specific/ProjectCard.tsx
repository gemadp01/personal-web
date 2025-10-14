import { Button } from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

type TProjectCardProps = {
  image?: string;
  category: string;
  title: string;
  description: string;
  link?: string;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export const ProjectCard = ({
  image,
  category,
  title,
  description,
  link,
  color,
  size,
}: TProjectCardProps) => {
  const isInternal: boolean | undefined = link?.startsWith("/");

  return (
    <div className="rounded-xl overflow-hidden shadow-xl bg-white dark:bg-dark dark:border dark:border-border-dark w-80 h-full flex flex-col">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain object-top"
        />
      )}

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div className="space-y-2">
          <p className="text-sm text-inverse dark:placeholder">
            {category === "UI UX" ? "UI/UX" : category}
          </p>
          <h2 className="text-lg font-semibold text-primary dark:text-secondary font-montserrat">
            {title}
          </h2>
          <p className="text-sm text-description dark:text-placeholder">
            {description}
          </p>
        </div>

        <div className="pt-4">
          <Button
            link={isInternal ? link : undefined}
            href={!isInternal ? link : undefined}
            external={!isInternal}
            icon={ArrowRight}
            iconPosition="right"
            color={color}
            size={size}
          >
            {link?.includes("github") ? "Github" : "Figma"}
          </Button>
        </div>
      </div>
    </div>
  );
};
