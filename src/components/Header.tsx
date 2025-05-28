import { useEffect, useState } from "react";
import { DropdownMenu } from "./ui/DropdownMenu";

export const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const navItems = ["About", "Projects", "Contact"];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="min-w-full px-6 flex justify-between items-center h-24">
      <h2 className="text-primary">Test</h2>

      <nav>
        {isSmallScreen ? (
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`${item.toLowerCase()}`}
                  className="text-primary hover:text-seventh"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <DropdownMenu items={navItems} />
        )}
      </nav>
    </header>
  );
};
