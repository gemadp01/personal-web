import { useEffect, useState } from "react";

export function useIsSmallScreen(breakpoint: number = 640): boolean {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= breakpoint);
    };

    handleResize(); // cek awal
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmallScreen;
}
