"use client";
import Button from "./button";
import { Switch } from "@material-tailwind/react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

import { useEffect, useState } from "react";

export default function NavBar() {
  const redirectProjects = () => {
    console.log("Projects clicked");
  };

  const [theme, setTheme] = useState(() => {
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem("theme");
    // Check for dark mode preference or system preference
    return storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";
  });

  // Effect to update the class on the root element based on theme
  useEffect(() => {
    console.log(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="h-20 flex flex-row px-6 py-3 justify-between">
      <div>
        <div className="text-3xl">Thanus Kumaar</div>
        <div className="pl-1 mb-2 text-md">A curious mind</div>
      </div>
      <div className="flex flex-row gap-4 pt-2">
        <div className="pt-2 flex flex-row gap-3">
          <CiDark className="w-7 h-7 transition duration-200 hover:scale-[1.15]" />
          <div className="mt-1">
            <Switch
              value={theme}
              checked={theme == "dark" ? true : false}
              onChange={toggleTheme}
            />
          </div>
          <CiLight className="w-8 h-8 transition duration-200 hover:scale-[1.15]" />
        </div>
        <Button
          buttonBody={"Home"}
          onClick={() => (window.location.href = "/")}
        />
        <Button
          buttonBody={"Projects"}
          onClick={() => (window.location.href = "/projects")}
        />
        <Button
          buttonBody={"Skills"}
          onClick={() => (window.location.href = "/skills")}
        />
        <Button buttonBody={"About"} onClick={redirectProjects} />
      </div>
    </div>
  );
}
