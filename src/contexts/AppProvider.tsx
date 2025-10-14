import { ThemeProvider } from "@/contexts/ThemeProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
