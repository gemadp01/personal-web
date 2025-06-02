import {
  createContext,
  Dispatch,
  ReactNode,
  useState,
  SetStateAction,
} from "react";

type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: ReactNode;
};

const DarkModeContextProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
