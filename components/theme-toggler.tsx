"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
export function ToogleTheme() {
  const theme = useTheme();
  const toggleTheme = () => {
    theme.theme === "dark" ? theme.setTheme("light") : theme.setTheme("dark");
  };
  return (
    <Button variant="outline" size={"icon"} onClick={toggleTheme}>
      <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all  dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute w-5 h-5 rotate-180 scale-0 transition-all  dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
