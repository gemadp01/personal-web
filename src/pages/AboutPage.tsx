import { Button } from "@/components/common/Button";
import { TypingText } from "@/components/common/TypingText";
import { experiences } from "@/utils/experiences";
import { DownloadIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-black">
      {/* Profile Section */}
      <section
        id="profile"
        className="mx-auto bg-gradient-to-bl from-inverse to-secondary max-w-7xl h-screen -mt-14 flex justify-center items-center bg-white dark:bg-none dark:bg-dark dark:border-x dark:border-x-border-dark"
      >
        <div className="px-4 sm:px-6 lg:px-12 text-center space-y-8">
          <h2 className="text-h1 space-y-3 md:space-y-4 dark:text-secondary">
            <Fade cascade damping={0.1} triggerOnce>
              <span className="block">Hi, I’m Gema Dodi Pranata,</span>
              <TypingText
                textSequence={[
                  "a Frontend Developer",
                  3000,
                  "a Fullstack Developer",
                  3000,
                ]}
                className="block"
              />
            </Fade>
          </h2>

          <Fade delay={500} triggerOnce>
            <p className="text-sm md:text-xl text-description dark:text-inverse leading-relaxed tracking-wider text-balance">
              Hi! I’m a frontend developer who enjoys crafting responsive and
              user-friendly web apps. With a strong base in JavaScript, React,
              and Laravel, I love working in agile teams and taking on
              meaningful challenges.{" "}
              <span className="block">
                Let’s build something awesome together!
              </span>
            </p>
          </Fade>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className="max-w-7xl py-20 mx-auto bg-white dark:bg-dark dark:border-x dark:border-x-border-dark"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Fade cascade damping={0.5} triggerOnce>
              <h2 className="text-h1 font-bold mb-4">Work Experience</h2>
              <p className="text-sm md:text-xl text-description dark:text-inverse max-w-3xl mx-auto">
                A timeline of my professional journey and roles I've held along
                the way
              </p>
            </Fade>
          </div>

          <div className="relative">
            {/* middle line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-inverse dark:bg-border-dark"></div>

            <div className="space-y-12">
              {/* dummy */}
              <Fade delay={500} damping={0.5} triggerOnce>
                <div className="flex items-center flex-row-reverse">
                  <div className="w-1/2 pl-8">
                    <div className="bg-light  rounded-lg shadow p-6">
                      <h3 className="text-2xl font-bold text-primary mb-1">
                        Looking for a Job
                      </h3>
                      <p className="text-description">
                        Open to frontend (react) or fullstack (MERN) roles
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              </Fade>

              {/* static data */}
              {experiences.map((experience, index) => (
                <Fade delay={500} cascade damping={0.5} triggerOnce key={index}>
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <div className="bg-white dark:bg-dark dark:border dark:border-border-dark rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-1">
                          {experience.role}
                        </h3>
                        <p className="text-description dark:text-inverse font-medium mb-2">
                          {experience.company}
                        </p>
                        <p className="text-inverse dark:text-description text-sm">
                          {experience.year}
                        </p>
                      </div>
                    </div>

                    {/* middle dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
          <Fade delay={500} triggerOnce>
            <div className="w-full flex justify-center mt-12">
              <Button
                href="https://drive.google.com/drive/folders/1Jjv8nxjC1wTamaphwNzMmUfLZB2dIV7p?usp=sharing"
                icon={DownloadIcon}
                iconPosition="left"
                color="primary"
                external={true}
                className="w-fit"
              >
                Download CV
              </Button>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
