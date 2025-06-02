import {
  // DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Mail, MapPin } from "lucide-react";
import { useIsSmallScreen } from "../lib/utils";

const ContactPage = () => {
  const isSmallScreen = useIsSmallScreen(640);

  return (
    <main className="min-h-[80vh] flex justify-center items-center text-center">
      <section className="bg-gray-50 py-10 px-4 md:px-10 rounded-lg space-y-10">
        <div className="text-center space-y-6">
          {isSmallScreen ? (
            <h1 className="space-y-5 dark:text-secondary">Contact</h1>
          ) : (
            <h4 className="space-y-3 dark:text-secondary">Contact</h4>
          )}
          <p className="text-lg text-seventh dark:text-extended">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me.
          </p>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 dark:text-secondary">
          Let’s discuss your Project
        </h2>

        <div className="space-y-4">
          <div className="flex items-center p-4 bg-white shadow rounded-xl">
            <div className="p-2 bg-gray-100 rounded-full mr-4">
              <MapPin className="w-5 h-5 text-gray-700 dark:text-secondary" />
            </div>
            <div className="text-start">
              <p className="text-sm text-gray-400 dark:text-extended">
                Address:
              </p>
              <p className="text-base text-gray-800 font-medium dark:text-sixth">
                KP. Waas RT 05 RW 01 Kecamatan Pameungpeuk Desa Sukasari
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white shadow rounded-xl">
            <div className="p-2 bg-gray-100 rounded-full mr-4">
              <Mail className="w-5 h-5 text-gray-700 dark:text-secondary" />
            </div>
            <div className="text-start">
              <p className="text-sm text-gray-400 dark:text-extended">
                E-mail:
              </p>
              <p className="text-base text-gray-800 font-medium dark:text-sixth">
                gemadp01@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-start space-x-4 mt-6">
          {/* <a
            href=""
            className="group bg-gray-200 hover:bg-dark  p-2 rounded-lg transition"
          >
            <DiscordLogoIcon className="w-5 h-5 text-primary group-hover:text-secondary" />
          </a> */}
          <a
            href="https://github.com/gemadp01"
            target="_blank"
            className="group bg-gray-200 hover:bg-dark p-2 rounded-lg transition"
          >
            <GitHubLogoIcon className="w-5 h-5 text-primary dark:text-extended group-hover:text-secondary" />
          </a>
          <a
            href="https://www.linkedin.com/in/gemadp"
            target="_blank"
            className="group bg-gray-200 hover:bg-dark p-2 rounded-lg transition"
          >
            <LinkedInLogoIcon className="w-5 h-5 text-primary dark:text-extended group-hover:text-secondary" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
