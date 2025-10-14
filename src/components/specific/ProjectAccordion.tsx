import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "../common/Button";

type TProjectType = {
  title: string;
  category: string;
  description: string;
  image?: string;
  link: string;
};

type TProjectAccordionProps = {
  data: TProjectType[];
};

const categories = ["Fullstack", "Frontend", "Backend", "UI UX"];

export const ProjectAccordion = ({ data }: TProjectAccordionProps) => {
  const [activeTab, setActiveTab] = useState("Fullstack");

  const filteredProjects = data.filter(
    (project) => project.category === activeTab
  );

  return (
    <div className="space-y-6 w-full">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {categories.map((category) => (
          <Button
            color={activeTab === category ? "active" : "primary"}
            key={category}
            onClick={() => setActiveTab(category)}
          >
            {category === "UI UX" ? "UI/UX" : category}
          </Button>
        ))}
      </div>

      <div className="flex justify-evenly flex-wrap gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
