import { DropdownMenu } from "./ui/DropdownMenu";
import { useIsSmallScreen } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isSmallScreen = useIsSmallScreen(640);

  const navItems = ["About", "Projects", "Contact"];

  return (
    <header className="w-full px-6 flex justify-between items-center h-24">
      <h4 className="text-primary">Gema Dodi Pranata.</h4>

      <nav>
        {isSmallScreen ? (
          <ul className="flex gap-6">
            {navItems.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = currentPath.startsWith(path);
              return (
                <li key={item}>
                  <Link
                    to={path}
                    className={`${
                      isActive
                        ? "text-seventh pointer-events-none"
                        : "text-primary hover:text-seventh"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <DropdownMenu items={navItems} />
        )}
      </nav>
    </header>
  );
};
