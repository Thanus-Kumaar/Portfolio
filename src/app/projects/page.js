"use client";
import { useState } from "react";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cursor from "../components/cursor";
import "../../../public/noScrollbar.css";
import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      Title: "Internship at LogicFlow AI",
      Desc: "Built a web app that integrates AI tools into workflows, built with React and Django, featuring seamless APIs and interactive interfaces like chat bots and flow diagrams.",
      Img: "/LogicFlo.png",
      url: "https://logicflo.ai/",
      Tags: ["react js", "tailwind", "reactflow", "django", "ai agents"],
    },
    {
      Title: "Anokha Website",
      Desc: "Experience the vibrant spirit of Anokha, the pinnacle of technology excitement, through our website. Dive into Amrita Vishwa Vidyapeetham's Coimbatore Campus extravaganza right from your screen!",
      Img: "/Anokha2.png",
      url: "https://anokha.amrita.edu",
      Tags: ["next js", "tailwind"],
    },
    {
      Title: "Mediclined",
      Desc: "Mediclined is a comprehensive web application designed to streamline the relationship between college/university clinics and students through digital healthcare management.",
      Img: "/Mediclined.png",
      url: "https://github.com/orgs/Project-Mediclined/repositories",
      Tags: ["next js", "tailwind", "MUI", "express", "mysql", "mongo", "esp32"],
    },
    {
      Title: "Portfolio Website",
      Desc: "Discover my portfolio website, meticulously crafted to showcase my expertise and passion for technology. Explore with admiration, as my skills come to life on every page.",
      Img: "/Portfolio.png",
      url: "https://github.com/Thanus-Kumaar/Portfolio",
      Tags: ["next js", "tailwind"],
    },
    {
      Title: "AI Study Mate",
      Desc: "AI StudyMate is an innovative learning app designed to enhance your learning experience through intelligent AI assistance. Learn smart, learn simple with our user friendly platform that adapts to your pace.",
      Img: "/AI-Study-Mate.png",
      url: "https://github.com/Thanus-Kumaar/AI-Study-Mate",
      Tags: ["vue", "express", "mysql"],
    },
    {
      Title: "FC Team Forge",
      Desc: "Welcome to FC-TeamForge, the ultimate solution for effortlessly creating balanced football teams from a pool of real-life players. No more debates, no more uneven teams – just smooth, hassle-free team formation!",
      Img: "/FC-Team-Forge.png",
      url: "https://github.com/Thanus-Kumaar/FC-TeamForge-server",
      Tags: ["vue", "express", "mysql"],
    },
    {
      Title: "Quick Attendance",
      Desc: "The Quick Attendance Application modernizes student attendance management at Amrita Vishwa Vidyapeetham. Utilizing Flutter technology, this application combines precision, efficiency, and user-friendliness in attendance tracking.",
      Img: "/Quick-Attendance.jpeg",
      url: "https://github.com/suman1406/quick_attendance_server_code",
      Tags: ["express", "node"],
    },
    {
      Title: "Library Management System",
      Desc: "Introducing a sophisticated e-book management system developed for IIT Madras BS degree, powered by Flask and Jinja2. Seamlessly access e-books through an intuitive interface, enhancing learning experiences for students pursuing their BS degree.",
      Img: "/Library-Management-System.png",
      url: "https://github.com/Thanus-Kumaar/Library-Management-System",
      Tags: ["flask"],
    },
    {
      Title: "Library Management System V2",
      Desc: "Version 2 of the e-book management system for IIT Madras BS degree students now uses Vue.js, Flask, Redis, and Bootstrap. It offers faster access to e-books with a more responsive interface, enhancing the overall learning experience.",
      Img: "/Library-Management-System-V2.png",
      url: "https://github.com/Thanus-Kumaar/Library-Management-System-V2",
      Tags: ["flask", "redis", "vue js", "bootstrap"],
    },
    {
      Title: "Home network management system",
      Desc: "A DSA project on implementing a hybrid data structure for managing home networks effectively by a single application. This uses tree as base data structure for rendering hierarchical structure.",
      Img: "/Network-Manager.png",
      url: "https://github.com/Abishek-45/IOT---Hybrid-Datastructures",
      Tags: ["next js", "tailwind"],
    },
    {
      Title: "Smart Todo Application",
      Desc: "A project that uses modified heaps to help us complete our tasks effectively. Witness my brand new application developed using Rust and Tauri that can assist you in completing your tasks on time and keeps you ahead of others.",
      Img: "/Tauri-App.png",
      url: "https://github.com/Thanus-Kumaar/Smart-Todo-Application",
      Tags: ["rust", "tauri", "react js", "tailwind"],
    },
    {
      Title: "Non-tax revenue analysis",
      Desc: "A DBMS project on rendering and analyzing data related to non tax revenue of India and other countries",
      Img: "/Non-Tax-Revenue.png",
      url: "https://github.com/Thanus-Kumaar/NonTax_Revenue",
      Tags: ["vue", "express"],
    },
  ]);

  return (
    <main className="bg-primary-dark dark:bg-primary-light text-secondary-light dark:text-primary-dark font-LouisG h-screen flex flex-col">
      <Navbar />
      <Cursor />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark dark:bg-secondary-light mx-auto align-middle overflow-scroll noScrollBar">
        <div className="text-[30px] lg:ml-10 mt-4 mx-auto font-bold text-center">
          WORKS & PROJECTS
        </div>
        <div className="mx-8 my-5 flex flex-wrap flex-row justify-between gap-y-10 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[700px] h-fit lg:min-h-[500px] rounded-xl p-4 bg-primary-dark dark:bg-primary-light transition duration-200 hover:scale-[1.01]"
            >
              <Image
                className="rounded-lg bg-white"
                src={project.Img}
                alt="HELLO"
                height={370}
                width={680}
              />
              <div className="flex flex-col lg:flex-row justify-between mt-2">
                <div className="text-2xl mt-3 font-semibold">
                  {project.Title}
                </div>
                <div className="flex flex-row mt-3 gap-3">
                  {project.Tags.map((tag, index) => (
                    <div
                      key={index}
                      className="rounded-md h-fit text-sm px-2 text-center bg-secondary-light text-primary-dark dark:bg-primary-dark dark:text-secondary-light"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 mt-3">{project.Desc}</div>
                <a
                  href={project.url}
                  target="_blank"
                  className="ml-auto mt-2 lg:m-0 cursor-none cursor-buttons"
                >
                  <FaSquareArrowUpRight className="h-10 w-10 mx-2 mt-2 transition duration-100 hover: hover:scale-[1.2]" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
