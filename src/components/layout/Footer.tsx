import { navLinkClass } from "@/utils/navLinkClass";
import { NavLink } from "react-router-dom";

const navItems = ["About", "Projects", "Contact"];

export const Footer = () => {
  return (
    <footer className="bg-light dark:bg-black ">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-dark max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-12 dark:border-x dark:border-x-border-dark font-montserrat">
        <p className="text-sm text-description dark:text-inverse order-2">
          &copy; 2025 Gema Dodi Pranata. All rights reserved.
        </p>

        <nav className="flex space-x-5 space-y-2">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item === "About" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) => navLinkClass(isActive)}
              {...{ end: item === "About" }}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
};
