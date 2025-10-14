import { useTheme } from "@/contexts/ThemeContext";

export const SwitchButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-[25px] w-[50px] rounded-full transition 
         bg-no-repeat bg-top bg-[length:90px] 
        ${
          theme === "dark"
            ? "bg-black bg-[url(/src/assets/dark_mode/stars.svg)] bg-cover"
            : "bg-[#A2D1FD] bg-[url(/src/assets/dark_mode/clouds.svg)]"
        }
      `}
    >
      <span
        className={`block w-[18px] h-[18px] rounded-full shadow transition-transform duration-300
          ${
            theme === "dark"
              ? "translate-x-[26px] bg-light"
              : "translate-x-1 bg-[#FFC187]"
          }
        `}
      />
    </button>
  );
};
