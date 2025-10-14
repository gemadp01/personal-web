import { Button } from "@/components/common/Button";
import { ProjectAccordion } from "@/components/specific/ProjectAccordion";
import { dataDummy } from "@/utils/projects";
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-black">
      <section
        id="projects"
        className="py-20 max-w-7xl mx-auto bg-white dark:bg-dark dark:border-x dark:border-x-border-dark"
      >
        <div className=" px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-5 md:mb-10">
            <Fade cascade damping={0.1} triggerOnce>
              <h1 className="text-h1 font-bold mb-4">Projects</h1>

              <p className="text-sm md:text-xl text-description dark:text-inverse max-w-3xl mx-auto">
                Here are some selected projects that showcase my skills,
                experience, and design approach.
              </p>
            </Fade>
          </div>

          <Fade triggerOnce>
            <div className="flex justify-center flex-wrap gap-y-10 pb-10">
              <ProjectAccordion data={dataDummy} />
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="py-20 mx-auto max-w-7xl md:h-screen flex justify-center items-center bg-gradient-to-br from-inverse via-light to-inverse dark:bg-none dark:bg-dark dark:border-x dark:border-x-border-dark"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 space-y-4">
            <Fade delay={200} cascade damping={0.1} triggerOnce>
              <h2 className="text-h1 font-bold space-y-2">
                <span className="block">Do you have Project Idea?</span>
                <span className="block">Let's discuss your project!</span>
              </h2>
              <p className="text-sm md:text-xl text-description dark:text-inverse">
                Every successful project begins with a well-formed idea — I
                would be glad to help you shape and realize yours.
              </p>
            </Fade>
          </div>

          <div className="w-full flex justify-center">
            <Fade delay={200} triggerOnce>
              <Button
                link="/contact"
                color="primary"
                icon={ArrowRight}
                iconPosition="right"
              >
                Let's Work Together
              </Button>
            </Fade>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
