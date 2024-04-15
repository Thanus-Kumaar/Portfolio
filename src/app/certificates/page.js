'use client'
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cursor from "../components/cursor";
import "../../../public/noScrollbar.css";

export default function Certifications() {

  const cert = [
    {
      title: "IITM BS Degree Foundation Certificate",
      desc: "Completion of foundation level in BS degree in Data Science from IIT Madras",
      img: "/certificates/IITM Foundation Level Certificate.jpg",
    },
    {
      title: "Cisco Virtual Internship",
      desc: "Virtual internship program in networking essentials from cisco networking academy",
      img: "/certificates/Cisco Final Certificate.jpg",
    },
    {
      title: "Space Tech Summit 2023 Participation",
      desc: "Participation in workshops conducted by IIT Madras at spcae tech summit 2023",
      img: "/certificates/Space Tech Summit Tier 2 Certificate.jpg",
    },
    {
      title: "Git and GitHub essentials",
      desc: "Completion of 'Introduction to Git and Github' course offered by google in coursera",
      img: "/certificates/Git and GitHub Google Certificate.jpg",
    },
    {
      title: "Introduction to web development",
      desc: "Completion of 'Introduction to web development using HTML, CSS and Javascript' course offered by IBM in coursera",
      img: "/certificates/HTML, CSS, Javascript Certificate.jpg",
    },
  ];
  return (
    <main className="bg-primary-dark dark:bg-primary-light text-secondary-light dark:text-primary-dark font-LouisG h-screen flex flex-col">
      <Navbar />
      <Cursor />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark dark:bg-secondary-light mx-auto align-middle overflow-scroll noScrollBar">
        <div className="w-full h-full overflow-scroll noScrollBar" id="Cert-Scroll">
        <div className="text-[30px] ml-10 mx-auto font-bold text-center">
          CERTIFICATIONS
        </div>
          <div className="w-full px-8 py-4 flex flex-wrap flex-row justify-evenly gap-8 text-center">
            {cert.map((c,index)=>(
              <div key={index} className="w-[400px] group overflow-hidden h-[250px] rounded-xl text-center bg-primary-dark dark:bg-primary-light certies">
                <div className="w-[95%] mx-auto mt-[10px] mb-[10px] h-[480px] flex flex-col justify-between gap-4 transition duration-1000 hover:-translate-y-[54%]">
                  <div className="relative w-full h-[230px]">
                    <Image sizes="" fill className="rounded-lg border-2 border-secondary-light dark:border-primary-dark" src={c.img}/>
                  </div>
                  <div className="w-full h-[230px] flex flex-col justify-center gap-4">
                    <span className="text-2xl font-bold">{c.title}</span>
                    <span>{c.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
