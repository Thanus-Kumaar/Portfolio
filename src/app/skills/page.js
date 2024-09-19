"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import "../../../public/noScrollbar.css";
import Footer from "../components/footer";
import Cursor from "../components/cursor";

import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiEclipseide } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { TbLetterC } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { BsRegex } from "react-icons/bs";
import { FaRust } from "react-icons/fa";
import { SiTauri } from "react-icons/si";

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
          iconDesc: "HTML 5",
        },
        {
          icon: <FaVuejs className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <FaReact className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiNextdotjs className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiExpress className="skill-icon" />,
          iconDesc: "Express JS",
        },
        {
          icon: <IoLogoNodejs className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiFlask className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiMysql className="skill-icon" />,
          iconDesc: "HTML 5",
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
          icon: <SiTailwindcss className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <FaBootstrap className="skill-icon" />,
          iconDesc: "HTML 5",
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
          iconDesc: "HTML 5",
        },
        {
          icon: <FaGithub className="skill-icon" />,
          iconDesc: "CSS 3",
        },
        {
          icon: <FaFigma className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiPostman className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiVisualstudiocode className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiVisualstudio className="skill-icon" />,
          iconDesc: "HTML 5",
        },
        {
          icon: <SiEclipseide className="skill-icon" />,
          iconDesc: "Eclipse",
        },
        {
          icon: <SiBlender className="skill-icon" />,
          iconDesc: "Blender",
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
          icon: <FaRust className="skill-icon" />,
          iconDesc: "Rust",
        },
        {
          icon: <SiTauri className="skill-icon" />,
          iconDesc: "Tauri",
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
