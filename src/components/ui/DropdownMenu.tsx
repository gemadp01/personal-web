import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";

export const DropdownMenu = ({ ...props }) => {
  const { items } = props;
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="relative" asChild>
        <button>
          <Menu className="w-6 h-6" />
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content className="border" align="end">
        {items.map((item: string) => (
          <DropdownMenuPrimitive.Item key={item}>
            {item}
          </DropdownMenuPrimitive.Item>
        ))}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};
