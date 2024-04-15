'use client'
import { useState, useEffect } from "react";
import gsap from "gsap";
export default function Cursor(){

  useEffect(() => {
    const Ccursor = document.getElementById('custom-cursor');
    const CcursorO = document.getElementById('custom-cursor-overlay');
    const buttons = document.querySelectorAll('.cursor-buttons');
    const certs = document.querySelectorAll('.certies');

    const onMouseEnter = ()=>{
      gsap.to(Ccursor,{scale:3, duration:0.1})
      gsap.to(CcursorO,{scale:0, duration:0.1})
    }

    const onMouseLeave = ()=>{
      gsap.to(Ccursor,{scale:1, duration:0.1})
      gsap.to(CcursorO,{scale:1, duration:0.1})
    }

    const onMouseEnterCert = ()=>{
      gsap.to(CcursorO,{scale:0, duration:0.2})
    }

    const onMouseLeaveCert = ()=>{
      gsap.to(CcursorO,{scale:1, duration:0.2})
    }

    const handleMouseMove = (e) => {
      gsap.to(Ccursor,{x: e.clientX, y:e.clientY, duration:0.2})
      gsap.to(CcursorO,{x: e.clientX, y:e.clientY, duration:0.4})
    };


    buttons.forEach((button)=>{
      button.addEventListener('mouseenter',onMouseEnter)
      button.addEventListener('mouseleave',onMouseLeave)
    })

    certs.forEach((c)=>{
      c.addEventListener('mouseenter',onMouseEnterCert)
      c.addEventListener('mouseleave',onMouseLeaveCert)
    })

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return(
    <div>
      <div id="custom-cursor" className="h-[10px] w-[10px] bg-[#b1ff76]  dark:bg-[#ccffc0] custom-cursor"
      ></div>
      <div id="custom-cursor-overlay" className="h-[30px] w-[30px] border-2 border-[#b1ff76] dark:border-[#ccffc0] custom-cursor"
      ></div>
    </div>
  )
}