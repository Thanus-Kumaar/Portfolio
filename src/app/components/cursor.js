'use client'
import { useState, useEffect } from "react";
import gsap from "gsap";
export default function Cursor(){

  useEffect(() => {
    const Ccursor = document.getElementById('custom-cursor');
    const buttons = document.querySelectorAll('.cursor-buttons');

    const onMouseEnter = ()=>{
      gsap.to(Ccursor,{scale:2, duration:0.1})
    }

    const onMouseLeave = ()=>{
      gsap.to(Ccursor,{scale:1, duration:0.1})
    }
    // Event listener for mouse movement
    const handleMouseMove = (e) => {
      gsap.to(Ccursor,{x: e.clientX, y:e.clientY, duration:0.2})
    };
    // Event listener for mouse click
    const handleMouseDown = () => {
      setClicked(true);
      // Reset click state after 800 milliseconds
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    buttons.forEach((button)=>{
      button.addEventListener('mouseenter',onMouseEnter)
      button.addEventListener('mouseleave',onMouseLeave)
    })

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return(
    <div id="custom-cursor" className="custom-cursor"
    ></div>
  )
}