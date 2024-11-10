 'use client'

import Image from "next/image"
import { useTranslations } from "use-intl"


const WhatWeDo = () => {
    const whatWeDo = useTranslations("WhatWeDo");
    const whatWeDoArray = whatWeDo.raw('whatWeDo')
  return (
    <div className="mt-[1rem] md:mt-[1rem] xl:mt-[2rem] ">
        <div className="grid place-content-center place-items-center md:grid-cols-2  pb-[3rem]  md:py-[3rem]  mx-auto max-w-[90rem] px-4">
           {
            whatWeDoArray.map(item => (
                <div key={item.id}
                style={{backgroundColor: `${item.color}`}}
                 className=" flex justify-center items-center flex-col gap-4 py-4 md:py-16 px-4 w-full">
                <Image style={{width: "20rem", height: "100%"}}  src={item.image} alt="" width={400} height={400} />
                <h1 className="text-[#fff] text-center text-[1rem] md:text-[2rem] font-bold ">
                    {item.title}
                </h1>
                <p className="  text-[#fff]  text-center text-[.85rem] md:text-[1.5rem]  ">{item.subtitle}</p>
                <button style={{backgroundColor: `${item.btnBgColor}`, color: `${item.btnColor}`} } className="text-[.85rem] md:text-[1.25rem]  rounded-md  transition-colors ease-linear duration-300 text-[#fff] hover:border-[#3C4448] hover:bg-[#D19B2E] hover:text-[#3C4448] px-4 py-2 ">
                    {item.btn}
                </button>
            </div>
            ))
           }
            
        </div>
    </div>
  )
}

export default WhatWeDo