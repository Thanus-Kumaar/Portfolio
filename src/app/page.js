"use client";
import { useRef, useState } from "react";
import Button from "./components/button";
import { IoIosDocument } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
export default function Home() {
  const cursor = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleCursor = (event) => {
    const { pageX, pageY } = event;
    console.log(pageX);
    setPosition({ x: pageX, y: pageY });
  };

  const redirectProjects = () => {
    console.log("Projects clicked");
  };

  return (
    <main
      className="bg-primary-dark text-secondary-light font-sans h-screen flex flex-col"
      onMouseMove={handleCursor}
    >
      {/* <div
        className="absolute"
        ref={cursor}
      >
        <div className="relative w-2 h-2 bg-primary-light rounded-full after:bg-primary-light after:opacity-60 after:w-4 after:h-4 after:content-[''] after:absolute after:rounded-full after:translate-x-[-25%] after:translate-y-[-25%]"></div>
      </div> */}
      <div className="h-20 flex flex-row px-6 py-3 justify-between">
        <div>
          <div className="text-2xl">Thanus Kumaar</div>
          <div className="pl-1">A curious mind</div>
        </div>
        <div className="flex flex-row gap-4 pt-2">
          <Button buttonBody={"Home"} onClick={redirectProjects} />
          <Button buttonBody={"Projects"} onClick={redirectProjects} />
          <Button buttonBody={"Skills"} onClick={redirectProjects} />
          <Button buttonBody={"About"} onClick={redirectProjects} />
        </div>
      </div>
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark mx-auto align-middle">
        <div className="flex flex-row justify-evenly px-[80px] py-[50px] h-full gap-20">
          <div className="h-full flex-1 bg-yellow-50"></div>
          <div className="h-full w-[500px] bg-primary-dark rounded-lg">
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
                  <div className="h-12 w-12 rounded-md bg-secondary-dark">
                    <IoIosDocument className="h-8 w-8 mx-auto mt-2" />
                  </div>
                  <div
                    className={
                      "h-12 w-full bg-secondary-light rounded-r-md text-primary-dark text-2xl text-center pt-[6px]"
                    }
                  >
                    Curiculum Vitae
                  </div>
                </div>
                <div className="flex flex-row hover:scale-[1.03] transition duration-100">
                  <div
                    className={
                      "h-12 w-full bg-secondary-light rounded-l-md text-primary-dark text-2xl text-center pt-[6px]"
                    }
                  >
                    Projects
                  </div>
                  <div className="h-12 w-12 rounded-md bg-secondary-dark">
                    <FaLightbulb className="h-8 w-8 mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
