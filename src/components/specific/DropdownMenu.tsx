import { SwitchButton } from "@/components/common/SwitchButton";
import { navLinkClass } from "@/utils/navLinkClass";
import { Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

type TDropdownMenuProps = {
  items: string[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export const DropdownMenu = ({
  items,
  isMenuOpen,
  setIsMenuOpen,
}: TDropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current || !event.target) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex space-x-4 md:hidden">
        <SwitchButton />

        <div className="after:border after:border-inverse"></div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary dark:text-secondary cursor-pointer"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-20 right-4 bg-white dark:bg-dark border border-border-dark rounded-lg shadow-lg w-40 z-50"
        >
          <ul className="flex flex-col">
            {items.map((item, index) => (
              <li
                key={index}
                className="border-b border-b-border-dark last:border-b-0"
              >
                <NavLink
                  to={item === "About" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    navLinkClass(isActive) + " block px-4 py-2"
                  }
                  {...{ end: item === "About" }}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
