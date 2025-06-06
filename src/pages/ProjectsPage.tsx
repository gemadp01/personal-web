import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { ProjectCard } from "../components/ui/ProjectCard";
import { useIsSmallScreen } from "../lib/utils";
import { dataDummy } from "../lib/projects";

const ProjectsPage = () => {
  const isSmallScreen: boolean = useIsSmallScreen(640);
  return (
    <main className="relative min-h-[80vh] flex items-center flex-col space-y-12">
      <section id="projects" className="w-full space-y-8 px-10">
        <div className="text-center space-y-6">
          {isSmallScreen ? (
            <h1 className="space-y-5 dark:text-secondary">Projects</h1>
          ) : (
            <h4 className="space-y-3 dark:text-secondary">Projects</h4>
          )}
          <p className="text-lg text-seventh dark:text-extended">
            Here are some selected projects that showcase my skills, experience,
            and design approach.
          </p>
        </div>
        <div className="flex justify-evenly flex-wrap gap-y-10">
          {dataDummy.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              buttonTitle="GitHub"
              withIcon={<ArrowRight className="mr-2 w-4 h-4" />}
              iconPosition="right"
            />
          ))}
        </div>
      </section>
      <section id="cta" className="bg-dark text-center space-y-8 py-12 px-10">
        {isSmallScreen ? (
          <h2 className="text-secondary space-y-2">
            <span className="block">Do you have Project Idea?</span>
            <span className="block">Let's discuss your project!</span>
          </h2>
        ) : (
          <h4 className="text-secondary">
            <span className="block">Do you have Project Idea?</span>
            <span className="block">Let's discuss your project!</span>
          </h4>
        )}
        <p className="text-extended">
          Every successful project begins with a well-formed idea — I would be
          glad to help you shape and realize yours.
        </p>
        <Button
          link="/contact"
          color={"primary"}
          icon={<ArrowRight className="mr-2 w-4 h-4" />}
          iconPosition="right"
        >
          Let's Work Together
        </Button>
      </section>
    </main>
  );
};

export default ProjectsPage;
