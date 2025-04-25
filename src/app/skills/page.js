"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import "../../../public/noScrollbar.css";
import Footer from "../components/footer";
import Cursor from "../components/cursor";

import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaVuejs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io5";
import {
  SiExpress,
  SiScala,
  SiNextdotjs,
  SiSqlite,
  SiMongodb,
  SiFlask,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVisualstudio,
  SiPostman,
  SiBeekeeperstudio,
  SiEclipseide,
  SiBlender,
  SiGnubash,
  SiGo,
  SiHaskell,
  SiTauri,
  SiMysql,
  SiGooglecloud,
  SiRender
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp, TbLetterC } from "react-icons/tb";
import { FaJava, FaDatabase } from "react-icons/fa6";
import { BsRegex } from "react-icons/bs";
import { FaRust, FaChrome } from "react-icons/fa";

export default function Skills() {
  const skillSet = [
    {
      Title: "Web development",
      Desc: "Experienced web developer proficient in front-end and back-end technologies, delivering high-quality, responsive websites and web applications.",
      imgURL: "/web_dev.svg",
      Icons: [
        {
          icon: <FaHtml5 className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <FaCss3Alt className="skill-icon" />,
          iconDesc: "CSS 3",
        },
        {
          icon: <IoLogoJavascript className="skill-icon" />,
          iconDesc: "Javascript",
        },
        {
          icon: <FaVuejs className="skill-icon" />,
          iconDesc: "Vue JS",
        },
        {
          icon: <FaReact className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiNextdotjs className="skill-icon" />,
          iconDesc: "Next JS",
        },
        {
          icon: <SiExpress className="skill-icon" />,
          iconDesc: "Express JS",
        },
        {
          icon: <IoLogoNodejs className="skill-icon" />,
          iconDesc: "Node JS",
        },
        {
          icon: <SiFlask className="skill-icon" />,
          iconDesc: "Flask",
        },
        {
          icon: <SiMysql className="skill-icon" />,
          iconDesc: "MySQL",
        },
        {
          icon: <BiLogoPostgresql className="skill-icon" />,
          iconDesc: "Postgres SQL",
        },
        {
          icon: <SiSqlite className="skill-icon" />,
          iconDesc: "Sqlite3",
        },
        {
          icon: <SiMongodb className="skill-icon" />,
          iconDesc: "Mongo DB",
        },
        {
          icon: <SiTailwindcss className="skill-icon" />,
          iconDesc: "Tailwind CSS",
        },
        {
          icon: <FaBootstrap className="skill-icon" />,
          iconDesc: "Bootstrap",
        },
        {
          icon: <FaChrome className="skill-icon" />,
          iconDesc: "Chrome Extension",
        },
      ],
    },
    {
      Title: "Development tools",
      Desc: "Utilizing development tools to streamline coding, debug efficiently, and enhance project workflow for smoother software development processes.",
      imgURL: "/tools.svg",
      Icons: [
        {
          icon: <FaGitAlt className="skill-icon" />,
          iconDesc: "Git",
        },
        {
          icon: <FaGithub className="skill-icon" />,
          iconDesc: "GitHub",
        },
        {
          icon: <FaFigma className="skill-icon" />,
          iconDesc: "Figma",
        },
        {
          icon: <SiPostman className="skill-icon" />,
          iconDesc: "Postman",
        },
        // {
        //   icon: <SiBeekeeperstudio className="skill-icon" />,
        //   iconDesc: "Beekeeper studio",
        // },
        {
          icon: <SiVisualstudiocode className="skill-icon" />,
          iconDesc: "VS code",
        },
        {
          icon: <SiVisualstudio className="skill-icon" />,
          iconDesc: "Visual Studio",
        },
        {
          icon: <SiEclipseide className="skill-icon" />,
          iconDesc: "Eclipse",
        },
        {
          icon: <SiBlender className="skill-icon" />,
          iconDesc: "Blender",
        },
        {
          icon: <SiGooglecloud className="skill-icon" />,
          iconDesc: "Google Cloud",
        },
      ],
    },
    {
      Title: "Programming languages",
      Desc: "Exploring, coding, and problem-solving across various programming languages to develop efficient and innovative solutions.",
      imgURL: "/prog.svg",
      Icons: [
        {
          icon: <FaPython className="skill-icon" />,
          iconDesc: "Python",
        },
        {
          icon: <TbBrandCpp className="skill-icon" />,
          iconDesc: "C++",
        },
        {
          icon: <TbLetterC className="skill-icon" />,
          iconDesc: "C language",
        },
        {
          icon: <FaJava className="skill-icon" />,
          iconDesc: "Java",
        },
        {
          icon: <RiJavascriptFill className="skill-icon" />,
          iconDesc: "Javascript",
        },
        {
          icon: <BiLogoTypescript className="skill-icon" />,
          iconDesc: "Typescript",
        },
        {
          icon: <SiGnubash className="skill-icon" />,
          iconDesc: "Bash scripting",
        },
        {
          icon: <FaDatabase className="skill-icon" />,
          iconDesc: "Structured Query Language",
        },
        {
          icon: <BsRegex className="skill-icon" />,
          iconDesc: "regular expression",
        },
        {
          icon: <SiGo className="skill-icon" />,
          iconDesc: "Go lang",
        },
        {
          icon: <SiHaskell className="skill-icon" />,
          iconDesc: "Haskell",
        },
        {
          icon: <FaRust className="skill-icon" />,
          iconDesc: "Rust",
        },
        {
          icon: <SiTauri className="skill-icon" />,
          iconDesc: "Tauri",
        },
        {
          icon: <SiScala className="skill-icon" />,
          iconDesc: "Scala",
        },
      ],
    },
  ];
  return (
    <main className="bg-primary-dark dark:bg-primary-light text-secondary-light dark:text-primary-dark font-LouisG h-screen flex flex-col">
      <Navbar />
      <Cursor />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark dark:bg-secondary-light mx-auto align-middle overflow-scroll noScrollBar">
        <Carousel
          className="rounded-xl overflow-hidden"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 text-white dark:text-primary-dark cursor-buttons"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 text-white dark:text-primary-dark cursor-buttons"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 cursor-buttons">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1  rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 dark:bg-primary-dark bg-white"
                      : "w-4 bg-white/50 dark:bg-primary-dark/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {skillSet.map((skill, index) => (
            <div
              key={index}
              className="flex h-full flex-col lg:flex-row text-center mt-20 lg:mt-0 p-4"
            >
              <div className="lg:flex-1 flex lg:h-full flex-col justify-center gap-10 lg:px-28">
                <div className="flex flex-col gap-12">
                  <div className="text-4xl lg:text-6xl font-semibold">
                    {skill.Title}
                  </div>
                  <div className="text-xl">{skill.Desc}</div>
                </div>
              </div>
              <div className="lg:w-[40%] lg:h-fit mx-auto mb-20 mt-20 lg:mt-10 lg:mr-10 grid grid-cols-4 gap-8 lg:gap-16">
                {skill.Icons.map((i, index) => (
                  <div
                    title={i.iconDesc}
                    key={index}
                    className="h-10 w-10 lg:h-20 lg:w-20 dark:bg-primary-light bg-primary-dark rounded-xl transition duration-200 hover:scale-[1.05]"
                  >
                    {i.icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
        <Footer />
      </div>
    </main>
  );
}
