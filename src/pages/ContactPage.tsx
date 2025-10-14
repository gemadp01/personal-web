import { Button } from "@/components/common/Button";
import { IconButton } from "@/components/common/IconButton";
import { ContactCard } from "@/components/specific/ContactCard";
import { contactCardItems, contactIconItems } from "@/utils/contactCardItems";
import { SendIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-black">
      <section
        id="contact"
        className="mx-auto flex flex-col py-20 h-fit justify-center items-center max-w-7xl bg-white dark:bg-dark dark:border-x dark:border-x-border-dark"
      >
        <div className="px-4 sm:px-6 lg:px-12 text-center mb-10">
          <Fade cascade damping={0.1} triggerOnce>
            <h1 className="text-h1 space-y-5">Contact</h1>

            <p className="text-sm md:text-xl text-description dark:text-inverse">
              I’m open to both full-time roles and freelance projects.
            </p>
            <p className="text-sm md:text-xl text-description dark:text-inverse">
              Feel free to reach out if you have any questions or opportunities!
            </p>
          </Fade>
        </div>
        <div className="px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Fade delay={500} cascade damping={0.1} triggerOnce>
              <h2 className="text-h2 text-center mb-8">
                Let's discuss your Project
              </h2>

              <div className="space-y-6">
                {contactCardItems.map((item, index) => (
                  <ContactCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
              </div>
              <div className="flex justify-start space-x-4 mt-6">
                {contactIconItems.map((item, index) => (
                  <IconButton key={index} icon={item.icon} to={item.link} />
                ))}
              </div>
            </Fade>
          </div>

          <Fade delay={1000} cascade damping={0.1} triggerOnce>
            <div className="bg-gradient-to-br from-inverse via-light to-inverse dark:bg-none dark:border dark:border-border-dark rounded-lg shadow-lg p-8">
              <h2 className="text-center text-h2 mb-6">Get In Touch</h2>
              <div>
                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your e-mail"
                      className="w-full bg-transparent border border-border-dark rounded-lg px-4 py-3 text-primary dark:text-secondary placeholder-description focus:outline-none dark:focus:border-light transition"
                      autoFocus
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-transparent border border-border-dark rounded-lg px-4 py-3 text-primary dark:text-secondary placeholder-description focus:outline-none dark:focus:border-light transition"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="w-full bg-transparent border border-border-dark rounded-lg px-4 py-3 text-primary dark:text-secondary placeholder-description dark:placeholder-inverse focus:outline-none dark:focus:border-light transition resize-none"
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      icon={SendIcon}
                      iconPosition="right"
                      className="w-full"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
