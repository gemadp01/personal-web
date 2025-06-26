import { DownloadIcon } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useIsSmallScreen } from "../lib/utils";

const AboutPage = () => {
  const isSmallScreen: boolean = useIsSmallScreen(640);

  return (
    <main className="min-h-[80vh] flex items-center text-center">
      <div className="space-y-10 md:space-y-14 px-10">
        {isSmallScreen ? (
          <h2 className="space-y-5 dark:text-secondary">
            <span className="block">Hi, I’m Gema Dodi Pranata,</span>
            <span className="block">a Frontend Engineer</span>
          </h2>
        ) : (
          <h4 className="space-y-3">
            <span className="block">Hi, I’m Gema Dodi Pranata,</span>
            <span className="block">a Frontend Engineer</span>
          </h4>
        )}
        <p className="text-seventh dark:text-extended">
          Hi! I’m a frontend developer who enjoys crafting responsive and
          user-friendly web apps. With a strong base in JavaScript, React, and
          Laravel, I love working in agile teams and taking on meaningful
          challenges. Let’s build something awesome together!
        </p>
        <Button
          href="https://drive.google.com/file/d/13IpPGjuM2PqLxS2BbQ5uVd1RtbN1gQRp/view?usp=sharing"
          icon={<DownloadIcon className="mr-2 w-4 h-4" />}
          iconPosition="left"
          color="primary"
          external={true}
        >
          Download CV
        </Button>
      </div>
    </main>
  );
};

export default AboutPage;
