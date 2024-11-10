"use client"


import Image from "next/image"
import { useState } from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { RiArrowDropRightFill } from "react-icons/ri";
import { useTranslations } from "use-intl";

const Carousel = () => {
    const carouselArray = useTranslations("Carousel");
  const  carouselData = carouselArray.raw('carousel')
    
    const [carouselIndex, setCarouselIndex] =useState(0)


    const handleNext = () => {
       setCarouselIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1) );
    }

    const handlePrev = () => {
        setCarouselIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1) );
        
    }
    
  return (
    <div className="relative h-full ">
        <div  className="z-20 absolute text-2xl md:text-5xl cursor-pointer bg-slate-50/30 top-1/2 left-4 text-white hover:bg-[#090805]/50 " onClick={handlePrev}>
        <RiArrowDropLeftFill />
        </div>
        <div className=" z-20 absolute text-2xl md:text-5xl cursor-pointer bg-slate-50/30 top-1/2 right-4 text-white hover:bg-[#090805]/50 " onClick={handleNext}>
        <RiArrowDropRightFill />
        </div>

        <div className={`${carouselIndex  ? "  relative w-full flex h-auto md:h-full md:flex-row flex-col  md:gap-6 xl:gap-8 justify-center items-center py-[9rem] px-[2.55rem]" : ""}  md:gap-6 xl:gap-8 relative w-full flex-col md:flex-row flex md:h-full h-screen justify-center items-center bg-gradient-to-r from-[#3C4448] via-[#5D696F] to-[#909CA2] py-[9rem] px-[2.5rem]  `} >
            <div 
         
            
            className={`flex flex-col justify-center items-center `} >
               {carouselData[carouselIndex] && <Image  className=" w-[12rem] md:w-[18rem]  xl:w-[25rem] h-full object-cover" as="image"  priority src={carouselData[carouselIndex]?.image} alt="" width={500} height={500} />  }
            </div>
            <div className=" xl:translate-x-[25%] gap-4 md:right-1/4 w-full h-full md:w-auto md:h-auto p-4 bg-transparent text-white flex flex-col justify-center items-center z-10 ">
                   <h1 className=" text-center text-xl md:text-2xl xl:text-4xl  font-thin">
                       {carouselData[carouselIndex]?.title}
                    </h1>  
                    <p className=" uppercase text-[#D19B2E] px-[2rem] md:px-0 text-center  text-[1rem] md:text-xl xl:text-3xl font-bold text-wrap md:mx-auto  md:max-w-[760px] ">
                        {carouselData[carouselIndex]?.description}
                    </p>
                    <button className="  md:mt-5 rounded-md text-sm md:text-md xl:text-xl   border-2 border-[#fff] px-4 py-2  text-[#fff] hover:border-none transition-all duration-300 ease-linear font-thin hover:bg-[#353635] hover:text-white">
                      {carouselData[carouselIndex]?.btn}
                    </button>  
            </div>	
        </div>
        <div  className="absolute bottom-4 left-1/2 translate-x-[-50%] flex gap-2 z-10">
        
        {
            carouselData[carouselIndex] && carouselData.map(carousel =>
                (
                    <div key={carousel.id} className="w-3.5 h-3.5  md:w-5 md:h-5 flex justify-center items-center cursor-pointer rounded-full border-2 border-white" onClick={() => setCarouselIndex(carousel.id)} >
                        {carousel.id === carouselIndex && <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#D19B2E]" ></div>}
                    </div>
                )
            )
        }
        </div>
    </div>
  )
}

export default Carousel