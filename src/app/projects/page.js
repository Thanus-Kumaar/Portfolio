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
      Desc: "aas asda cdaw csadacw acsdadfgb vjhbkjn kgudac sdkcu asduh asudho jhsadlaksd liho asdasd asdasd asdasdsacq crtrcctvu saverawt vysaeetyr",
      Img: "/images/AI-Study-Mate.png",
    },
    {
      Title: "AI Study Mate",
      Desc: "aas asda cdaw csadacw acsdad",
      Img: "/images/AI-Study-Mate.png",
    },
    {
      Title: "AI Study Mate",
      Desc: "aas asda cdaw csadacw acsdad",
      Img: "/images/AI-Study-Mate.png",
    },
    {
      Title: "AI Study Mate",
      Desc: "aas asda cdaw csadacw acsdad",
      Img: "/images/AI-Study-Mate.png",
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
              <div className="text-2xl mt-3">{project.Title}</div>
              <div className="flex flex-row">
                <div className="flex-1 mt-2">{project.Desc}</div>
                <FaSquareArrowUpRight className="h-10 w-10 mx-2 mt-2 transition duration-100 hover:cursor-pointer hover:scale-[1.2]" />
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
