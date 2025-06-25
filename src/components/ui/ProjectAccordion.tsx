import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./Button";

type ProjectType = {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

type ProjectAccordionProps = {
  data: ProjectType[];
};

const categories = ["Fullstack", "Frontend", "Backend", "UI UX"];

export const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ data }) => {
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
            {category}
          </Button>
        ))}
      </div>

      <div className="flex justify-evenly flex-wrap gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            withIcon={<ArrowRight className="mr-2 w-4 h-4" />}
            iconPosition="right"
          />
        ))}
      </div>
    </div>
  );
};
