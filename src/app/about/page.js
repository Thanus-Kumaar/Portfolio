"use client";
import Navbar from "../components/navbar";
import Cursor from "../components/cursor";

import "../../../public/noScrollbar.css";
import { IoFootball } from "react-icons/io5";
import { MdOutlinePiano } from "react-icons/md";
import { HiPaintBrush } from "react-icons/hi2";
import { FaCameraRetro } from "react-icons/fa";
import { TbKarate } from "react-icons/tb";
import { MdVolunteerActivism } from "react-icons/md";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

export default function About() {
  const others = [
    {
      icon: <IoFootball className="w-full h-full" />,
      name: "Football",
      desc:"Played in college football club"
    },
    {
      icon: <MdOutlinePiano className="w-full h-full" />,
      name: "Keyboard",
      desc: "Grade 4 keyboardist - Trinity College of Music, London"
    },
    {
      icon: <HiPaintBrush className="w-full h-full" />,
      name: "Drawing",
      desc: "District level winner in pencil sketching"
    },
    {
      icon: <FaCameraRetro className="w-full h-full" />,
      name: "Photography",
      desc: "Nature photograpy and mobile photography"
    },
    {
      icon: <TbKarate className="w-full h-full" />,
      name: "Karate",
      desc: "Dan 1 black belt, Shuhari karate association"
    },
    {
      icon: <MdVolunteerActivism className="w-full h-full" />,
      name: "Volunteering",
      desc: "Served in NSS (National Service Scheme) for 3 years"
    },
  ];

  return (
    <main className="bg-primary-dark dark:bg-primary-light text-secondary-light dark:text-primary-dark font-LouisG h-screen flex flex-col">
      <Navbar />
      <Cursor />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark dark:bg-secondary-light mx-auto align-middle overflow-scroll noScrollBar">
        <div className="w-full h-full p-20 flex flex-row gap-20 justify-center">
          <div className="w-[800px] h-full rounded-xl text-black card3D">
            <div className="card3DInner">
              <div className="p-7 dark:bg-primary-light flex flex-col bg-primary-dark dark:text-primary-dark text-secondary-light cardFront">
                <div className="text-4xl font-bold">OTHER INTREST</div>
                <div className="mt-8 flex-1 flex flex-row flex-wrap gap-8 gap-y-8 justify-center">
                  {others.map((item, index) => (
                    <div className="h-[120px] w-[220px] flex flex-col gap-2 bg-secondary-dark dark:bg-secondary-light rounded-lg">
                      <div key={index} className="flex flex-row h-[50px] w-full px-2 text-left justify-center">
                        <div className="w-[30px]">
                          {item.icon}
                        </div>
                        <div className="text-2xl font-bold ml-3 w-fit mt-2">{item.name}</div>
                      </div>
                      <div className="px-2">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-7 dark:bg-primary-light bg-primary-dark dark:text-primary-dark text-secondary-light cardBack">
                <div className="text-4xl font-bold">ABOUT</div>
                <div className="mt-8 text-lg">
                  Currently pursuing a B.Tech in Computer Science at Amrita
                  Vishwa Vidyapeetham, my journey began with a curiosity about
                  computers, leading me to delve into Python, my first
                  programming language. This initial spark ignited a passion
                  that has since guided my academic path. I thrive on exploring
                  diverse technologies, spanning from hardware to software,
                  driven by an insatiable curiosity. <br></br>
                  <br></br>Childhood interests in space science and robotics
                  have left an indelible mark, fueling my desire to innovate and
                  contribute to these fascinating fields. As I continue to learn
                  and grow, I am eager to embrace new challenges and make
                  meaningful contributions to the ever-evolving world of
                  technology.
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              width={310}
              height={500}
              className="rounded-xl"
              src="/Profile.jpeg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
