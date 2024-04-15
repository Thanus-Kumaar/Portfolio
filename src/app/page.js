"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import { IoIosDocument } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cursor from "./components/cursor";
import "../../public/noScrollbar.css";

export default function Home() {
  return (
    <main className="bg-primary-dark dark:bg-primary-light text-secondary-light dark:text-primary-dark font-LouisG h-screen flex flex-col">
      <Cursor />
      <Navbar />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark dark:bg-secondary-light mx-auto align-middle overflow-scroll noScrollBar">
        <div className="flex flex-row justify-center px-[80px] py-[50px] h-full">
          <div className="h-full w-fit">
            <Image
              src={"/Profile2.jpeg"}
              className="rounded-l-lg float-end"
              height={480}
              width={480}
            />
          </div>
          <div className="h-full w-[800px] bg-primary-dark dark:bg-primary-light rounded-r-lg">
            <div className="flex flex-col px-14 py-8 h-full justify-between">
              <div className="flex flex-col gap-8 text-2xl">
                <div>
                  I am,
                  <br />
                  <span className="text-6xl underline font-bold underline-offset-8 decoration-2">
                    Thanus Kumaar
                  </span>
                </div>
                <div className="text-xl font-light">
                  <span className="block mt-3">
                    <span className="text-2xl font-semibold">
                      Full Stack developer | Student
                    </span>{" "}
                    <br></br>
                    <br></br>Studying at Amrita Vishwa Vidyapeetham, Coimbatore.
                    Full stack developer in web development and data science.
                    Committed to learning, embracing challenges in technology's
                    evolution.
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-6 w-[85%] mx-auto">
                <div className="flex flex-row hover:scale-[1.03] active:scale-[0.98] group transition duration-100">
                  <div className="h-12 w-12 rounded-l-md bg-secondary-dark dark:bg-secondary-light">
                    <IoIosDocument className="h-8 w-8 mx-auto mt-2" />
                  </div>
                  <div
                    className={
                      "relative h-12 w-full bg-secondary-light rounded-r-md transition duration-100 text-primary-dark group-hover:text-white text-2xl text-center pt-[6px] before:content-[''] before:absolute before:rounded-r-md before:border-8 before:border-[#0f1c10] before:inset-0 before:bg-[#0f1c10] before:z-[-1] before:scale-x-0 before:transition before:duration-300 before:origin-left before:mix-blend-color-burn group-hover:before:z-0 group-hover:before:scale-x-100 cursor-buttons"
                    }
                  >
                    Curiculum Vitae
                  </div>
                </div>
                <div className="flex flex-row hover:scale-[1.03] active:scale-[0.98] group transition duration-100"
                onClick={()=>window.location.href = '/projects'}>
                  <div
                    className={
                      "relative h-12 w-full bg-secondary-light rounded-l-md transition duration-100 text-primary-dark group-hover:text-white text-2xl text-center pt-[6px] before:content-[''] before:absolute before:rounded-l-md before:border-8 before:border-[#0f1c10] before:inset-0 before:bg-[#0f1c10] before:z-[-1] before:scale-x-0 before:transition before:duration-300 before:origin-right before:mix-blend-color-burn group-hover:before:z-0 group-hover:before:scale-x-100 cursor-buttons"
                    }
                  >
                    Projects
                  </div>
                  <div className="h-12 w-12 rounded-r-md bg-secondary-dark dark:bg-secondary-light">
                    <FaLightbulb className="h-8 w-8 mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
