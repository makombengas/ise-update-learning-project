"use client"

import { useEffect, useState } from "react";
import { CiDesktopMouse2 } from "react-icons/ci";
import {  MdOutlineKeyboardArrowUp } from "react-icons/md";
const BackToTop = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          
         
        }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if ( window.scrollY > 80) {	
                setShowBackToTop(true);
              }else{
                setShowBackToTop(false);
              }
        })
    }, [])
    
   
  return (
    <div className="fixed text-[2.5rem] bottom-10 md:text-[3rem] xl:text-[4rem] -right-4 md:right-0 xl:right-10" >
        {
            showBackToTop ? <button className="px-4 py-2 relative rounded-full" onClick={handleBackToTop}>
            <CiDesktopMouse2 className=" text-[#f39900]" />
            <MdOutlineKeyboardArrowUp className="text-[#f39900] absolute text-[1.5rem] animate-pulse translate-x-[-50%] top-[40%] md:top-[45%] xl:top-[50%] left-[50%]" />
            </button>:null
        }
    </div>
  )
}

export default BackToTop