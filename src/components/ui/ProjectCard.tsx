// ProjectCard.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  subtitle,
  title,
  description,
  link,
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl bg-white w-80">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-400">{subtitle}</p>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mt-2 border rounded-md font-medium text-sm shadow-sm hover:bg-gray-100 transition"
        >
          Github <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
