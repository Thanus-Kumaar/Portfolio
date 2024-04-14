import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function footer() {
  return (
    <div className="w-full h-2/5 bg-primary-dark dark:bg-primary-light flex flex-row p-5">
      <div className="m-10 flex-1">
        <div className="relative z-[10] w-[500px] bg-secondary-dark dark:bg-secondary-light align-bottom rounded-lg h-full ml-36 text-xl flex flex-col justify-evenly px-5 before:absolute before:content-[''] before:inset-0 before:z-[9] before:border-2 before:border-secondary-light dark:before:border-primary-dark before:translate-x-[10px] before:translate-y-[10px] before:rounded-lg before:transition before:duration-200 hover:before:translate-x-0 hover:before:translate-y-0 active:before:translate-x-[-5px] active:before:translate-y-[-5px]">
          <div className="ml-4">EMAIL : thanuskumaara@gmail.com</div>
          <div className="ml-4">PHONE : 8778637550</div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-3xl flex justify-end">ABOUT</div>
        <div className="flex flex-row gap-4 justify-end">
          <a
            href="https://github.com/Thanus-Kumaar"
            target="_blank"
            className="h-12 w-12 cursor-none bg-secondary-dark dark:bg-secondary-light group transition duration-200 rounded-md hover:scale-[1.1] cursor-buttons"
          >
              <FaGithub className="h-8 w-8 mx-auto mt-2 transition duration-100 group-hover:scale-[1.05]" />
          </a>
          <a href="https://www.linkedin.com/in/thanus-kumaar/" target="_blank" className="h-12 w-12 cursor-none bg-secondary-dark dark:bg-secondary-light group transition duration-200 rounded-md hover:scale-[1.1] cursor-buttons">
            <FaLinkedinIn className="h-8 w-8 mx-auto mt-2 transition duration-100 group-hover:scale-[1.05]" />
          </a>
          <a href="https://www.instagram.com/thanus_kumaar/" target="_blank" className="h-12 w-12 cursor-none bg-secondary-dark dark:bg-secondary-light group transition duration-200 rounded-md hover:scale-[1.1] cursor-buttons">
            <RiInstagramFill className="h-8 w-8 mx-auto mt-2 transition duration-100 group-hover:scale-[1.05]" />
          </a>
        </div>
        <div className="text-secondary-light dark:text-primary-dark text-5xl mt-7">
          A curious mind
        </div>
      </div>
    </div>
  );
}
