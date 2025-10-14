import { NavLink } from "react-router-dom";
import { navLinkClass } from "@/utils/navLinkClass";
import { SwitchButton } from "@/components/common/SwitchButton";
import { DropdownMenu } from "@/components/specific/DropdownMenu";
import { useState } from "react";

const navItems = ["About", "Projects", "Contact"];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="dark:bg-black sticky top-0 z-50">
      <nav className="bg-white dark:bg-dark max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-montserrat dark:border-x dark:border-x-border-dark">
        <div className="flex justify-between items-center h-20 ">
          <h2 className="text-h2">Gema Dodi Pranata.</h2>

          <div className="hidden md:flex md:space-x-5">
            <ul className="flex gap-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item === "About" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) => navLinkClass(isActive)}
                    {...{ end: item === "About" }}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>

            <SwitchButton />
          </div>

          <DropdownMenu
            items={navItems}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>
    </header>
  );
};
