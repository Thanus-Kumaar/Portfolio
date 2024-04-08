"use client";
import { useState } from "react";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../../../public/noScrollBar.css";
import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      Title: "AI Study Mate",
      Desc: "AI StudyMate is an innovative learning app designed to enhance your learning experience through intelligent AI assistance. Learn smart, learn simple with our user friendly platform that adapts to your pace.",
      Img: "/AI-Study-Mate.png",
      url: "https://github.com/Thanus-Kumaar/AI-Study-Mate",
      Tags: ["vue","express"]
    },
    {
      Title: "FC Team Forge",
      Desc: "Welcome to FC-TeamForge, the ultimate solution for effortlessly creating balanced football teams from a pool of real-life players. No more debates, no more uneven teams – just smooth, hassle-free team formation!",
      Img: "/FC-Team-Forge.png",
      url: "https://github.com/Thanus-Kumaar/FC-TeamForge-server",
      Tags: ["vue","express"]
    },
    {
      Title: "Quick Attendance",
      Desc: "The Quick Attendance Application modernizes student attendance management at Amrita Vishwa Vidyapeetham. Utilizing Flutter technology, this application combines precision, efficiency, and user-friendliness in attendance tracking.",
      Img: "/AI-Study-Mate.png",
      url: "https://github.com/suman1406/quick_attendance_server_code",
      Tags: ["express","node"]
    },
    {
      Title: "Non-tax revenue analysis",
      Desc: "A DBMS project on rendering and analyzing data related to non tax revenue of India and other countries",
      Img: "/Non-Tax-Revenue.png",
      url: "https://github.com/Thanus-Kumaar/NonTax_Revenue",
      Tags: ["vue","express"]
    },
    {
      Title: "Library Management System",
      Desc: "Introducing a sophisticated e-book management system developed for IIT Madras BS degree, powered by Flask and Jinja2. Seamlessly access e-books through an intuitive interface, enhancing learning experiences for students pursuing their BS degree.",
      Img: "/Library-Management-System.png",
      url: "https://github.com/Thanus-Kumaar/Library-Management-System",
      Tags: ["flask"]

    },
  ]);

  return (
    <main className="bg-primary-dark dark:bg-primary-light text-secondary-light dark:text-primary-dark font-sans h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark dark:bg-secondary-light mx-auto align-middle overflow-scroll noScrollBar">
        <div className="text-[30px] ml-10 mt-4">Projects</div>
        <div className="mx-8 my-5 flex flex-wrap flex-row justify-between gap-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[700px] h-[500px] rounded-xl p-3 bg-primary-dark dark:bg-primary-light"
            >
              <Image
                className="rounded-lg bg-white"
                src={project.Img}
                alt="HELLO"
                height={370}
                width={680}
              />
              <div className="flex flex-row justify-between">
                <div className="text-2xl mt-3">{project.Title}</div>
                <div className="flex flex-row mt-3 gap-3">{project.Tags.map((tag,index)=>(
                  <div key={index} className="rounded-md h-fit text-sm px-2 pb-1 text-center bg-secondary-light text-primary-dark dark:bg-primary-dark dark:text-secondary-light">{tag}</div>
                ))}</div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1 mt-3">{project.Desc}</div>
                <a href={project.url} target="_blank">
                  <FaSquareArrowUpRight className="h-10 w-10 mx-2 mt-2 transition duration-100 hover:cursor-pointer hover:scale-[1.2]" />
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
