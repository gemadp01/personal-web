import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const DropdownMenu = ({ ...props }: { items: string[] }) => {
  const { items }: { items: string[] } = props;
  const location = useLocation();
  const currentPath: string = location.pathname;

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button>
          <Menu className="w-6 h-6 dark:text-secondary" />
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="border border-dark rounded bg-secondary "
          align="end"
        >
          {items.map((item: string) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = currentPath === path;
            return (
              <DropdownMenuPrimitive.Item asChild className="flex">
                <Link
                  key={item}
                  to={path}
                  className={`flex px-10 py-3 ${
                    isActive
                      ? "text-light pointer-events-none bg-dark"
                      : "text-primary hover:text-light hover:bg-dark"
                  }`}
                >
                  {item}
                </Link>
              </DropdownMenuPrimitive.Item>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
