import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function footer() {
  return (
    <div className="w-full h-2/5 bg-primary-dark dark:bg-primary-light flex flex-row p-5">
      <div className="m-10 flex-1">
        <div className="w-[500px] bg-secondary-dark dark:bg-secondary-light align-bottom rounded-lg h-full ml-36 text-xl flex flex-col justify-evenly px-5">
          <div className="ml-4">EMAIL : thanuskumaara@gmail.com</div>
          <div className="ml-4">PHONE : 8778637550</div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-3xl flex justify-end">ABOUT</div>
        <div className="flex flex-row gap-4 justify-end">
          <div className="h-12 w-12 bg-secondary-dark dark:bg-secondary-light group transition duration-200 rounded-md hover:scale-[1.1]">
            <FaGithub className="h-8 w-8 mx-auto mt-2 transition duration-100 group-hover:scale-[1.05]" />
          </div>
          <div className="h-12 w-12 bg-secondary-dark dark:bg-secondary-light group transition duration-200 rounded-md hover:scale-[1.1]">
            <FaLinkedinIn className="h-8 w-8 mx-auto mt-2 transition duration-100 group-hover:scale-[1.05]" />
          </div>
          <div className="h-12 w-12 bg-secondary-dark dark:bg-secondary-light group transition duration-200 rounded-md hover:scale-[1.1]">
            <RiInstagramFill className="h-8 w-8 mx-auto mt-2 transition duration-100 group-hover:scale-[1.05]" />
          </div>
        </div>
        <div className="text-secondary-light dark:text-primary-dark text-5xl mt-7">
          A curious mind
        </div>
      </div>
    </div>
  );
}
