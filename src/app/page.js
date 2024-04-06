"use client";
import { useRef, useState } from "react";

import { IoIosDocument } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "../../public/noScrollbar.css";

export default function Home() {
  const cursor = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleCursor = (event) => {
    const { pageX, pageY } = event;
    console.log(pageX);
    setPosition({ x: pageX, y: pageY });
  };

  return (
    <main
      className="bg-primary-dark dark:bg-primary-light text-secondary-light dark:text-primary-dark font-sans h-screen flex flex-col"
      onMouseMove={handleCursor}
    >
      {/* <div
        className="absolute"
        ref={cursor}
      >
        <div className="relative w-2 h-2 bg-primary-light rounded-full after:bg-primary-light after:opacity-60 after:w-4 after:h-4 after:content-[''] after:absolute after:rounded-full after:translate-x-[-25%] after:translate-y-[-25%]"></div>
      </div> */}
      <Navbar />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark dark:bg-secondary-light mx-auto align-middle overflow-scroll noScrollBar">
        <div className="flex flex-row justify-evenly px-[80px] py-[50px] h-full gap-20">
          <div className="h-full flex-1 bg-yellow-50"></div>
          <div className="h-full w-[500px] bg-primary-dark dark:bg-primary-light rounded-lg">
            <div className="flex flex-col p-8 h-full justify-between">
              <div className="flex flex-col gap-8 text-lg">
                <div>
                  I am,
                  <br />
                  <span className="text-3xl">Thanus Kumaar A</span>
                </div>
                <div>
                  asdasdasdasdsdfghjkjhgfdfghj jhgfdfg hjkkjhgfds ertyuu hgvb
                  nhgfertyujnb vfesdfgui jnbv<br></br>asdasd asdas da asd Ad as
                  dasd asdasdsfghrte sedfbvcnj sdg ssdfoh uyvsabhcajsh
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row hover:scale-[1.03] transition duration-100">
                  <div className="h-12 w-12 rounded-l-md bg-secondary-dark dark:bg-secondary-light">
                    <IoIosDocument className="h-8 w-8 mx-auto mt-2" />
                  </div>
                  <div
                    className={
                      "relative h-12 w-full bg-secondary-light rounded-r-md transition duration-100 text-primary-dark hover:text-white text-2xl text-center pt-[6px] before:content-[''] before:absolute before:border-8 before:border-[#2a2a2c] before:inset-0 before:bg-[#2a2a2c] before:z-[-1] before:scale-x-0 before:transition before:duration-300 before:origin-left before:mix-blend-color-burn hover:before:z-0 hover:before:scale-x-100"
                    }
                  >
                    Curiculum Vitae
                  </div>
                </div>
                <div className="flex flex-row hover:scale-[1.03] transition duration-100">
                  <div
                    className={
                      "relative h-12 w-full bg-secondary-light rounded-l-md transition duration-100 text-primary-dark hover:text-white text-2xl text-center pt-[6px] before:content-[''] before:absolute before:border-8 before:border-[#2a2a2c] before:inset-0 before:bg-[#2a2a2c] before:z-[-1] before:scale-x-0 before:transition before:duration-300 before:origin-right before:mix-blend-color-burn hover:before:z-0 hover:before:scale-x-100"
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
