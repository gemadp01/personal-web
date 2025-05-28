import { useIsSmallScreen } from "../lib/utils";

const AboutPage = () => {
  const isSmallScreen = useIsSmallScreen(640);

  return (
    <main className="min-h-[80vh] flex items-center text-center">
      <div className="space-y-10 md:space-y-14 px-10">
        {isSmallScreen ? (
          <h2 className="space-y-5">
            <span className="block">Hi, I’m Test,</span>
            <span className="block">a Frontend Engineer</span>
          </h2>
        ) : (
          <h4 className="space-y-3">
            <span className="block">Hi, I’m Test,</span>
            <span className="block">a Frontend Engineer</span>
          </h4>
        )}
        <p className="text-seventh">
          Hi! I’m a frontend developer who enjoys crafting responsive and
          user-friendly web apps. With a strong base in JavaScript, React, and
          Laravel, I love working in agile teams and taking on meaningful
          challenges. Let’s build something awesome together!
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
