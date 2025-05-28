import { DropdownMenu } from "./ui/DropdownMenu";
import { useIsSmallScreen } from "../lib/utils";

export const Header = () => {
  const isSmallScreen = useIsSmallScreen(640);

  const navItems = ["About", "Projects", "Contact"];

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
