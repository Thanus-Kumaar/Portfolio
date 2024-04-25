"use client";
import Button from "./button";
import { Switch } from "@material-tailwind/react";
import { Drawer } from "@material-tailwind/react";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [theme, setTheme] = useState(() => {
    // Check localStorage for theme preference
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      // Check for dark mode preference or system preference
      return storedTheme === "dark" ||
        (!storedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
    }
    // Default to light theme if localStorage is not available
    return "light";
  });

  // Effect to update the class on the root element based on theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Update localStorage when theme changes
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="h-16 lg:h-20 flex flex-row px-6 py-3 justify-between">
      <div
        className="cursor-buttons"
        onClick={() => (window.location.href = "/")}
      >
        <div className="text-xl lg:text-3xl font-medium">Thanus Kumaar</div>
        <div className="pl-1 mb-3 text-xs lg:text-sm">A curious mind</div>
      </div>
      <div className="flex flex-row gap-4 lg:pt-2">
        <div className="pt-2 flex flex-row gap-3 scale-75 lg:scale-100">
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
        <Button
          buttonBody={"Feats"}
          onClick={() => (window.location.href = "/certificates")}
        />
        <Button
          buttonBody={"About"}
          onClick={() => (window.location.href = "/about")}
        />
        <button className="lg:hidden cursor-buttons" onClick={openDrawer}>
          <FaBars className="w-8 h-6" />
        </button>
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="bg-primary-dark dark:bg-primary-light p-4"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between">
            <div className="text-2xl">My Portfolio</div>
            <button className="active:opacity-60" onClick={closeDrawer}>
              <IoCloseCircle className="w-8 h-8 mr-2" />
            </button>
          </div>
          <div
            onClick={() => (window.location.href = "/")}
            className="text-center text-xl mx-1 py-1 rounded-xl bg-secondary-dark dark:bg-secondary-light active:opacity-60"
          >
            Home
          </div>
          <div
            onClick={() => (window.location.href = "/projects")}
            className="text-center text-xl mx-1 py-1 rounded-xl bg-secondary-dark dark:bg-secondary-light active:opacity-60"
          >
            Projects
          </div>
          <div
            onClick={() => (window.location.href = "/skills")}
            className="text-center text-xl mx-1 py-1 rounded-xl bg-secondary-dark dark:bg-secondary-light active:opacity-60"
          >
            Skills
          </div>
          <div
            onClick={() => (window.location.href = "/certificates")}
            className="text-center text-xl mx-1 py-1 rounded-xl bg-secondary-dark dark:bg-secondary-light active:opacity-60"
          >
            Feats
          </div>
          <div
            onClick={() => (window.location.href = "/about")}
            className="text-center text-xl mx-1 py-1 rounded-xl bg-secondary-dark dark:bg-secondary-light active:opacity-60"
          >
            About
          </div>
        </div>
      </Drawer>
    </div>
  );
}
