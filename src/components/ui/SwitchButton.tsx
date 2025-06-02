import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "../../context/ThemeContext";

export const SwitchButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch.Root
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        id="airplane-mode"
        className="relative inline-flex items-center h-[25px] w-[50px] rounded-full bg-[#A2D1FD] inset-shadow-sm bg-[url(/src/assets/dark_mode/clouds.svg)] bg-no-repeat bg-size-[90px] bg-top data-[state=checked]:bg-[#000] data-[state=checked]:bg-[url(/src/assets/dark_mode/stars.svg)] data-[state=checked]:bg-cover transition"
      >
        <Switch.Thumb className="block w-[18px] h-[18px] bg-white rounded-full shadow transition-transform translate-x-1 bg-[#FFC187] data-[state=checked]:translate-x-[26px] data-[state=checked]:bg-light" />
      </Switch.Root>
    </div>
  );
};
