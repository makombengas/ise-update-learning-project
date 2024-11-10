'use client'

import Image from "next/image"
import { useTranslations } from "use-intl"


const ServiceBanner = () => {
    const ServiceBanner = useTranslations("ServiceBanner");
    const serviceBannerArray = ServiceBanner.raw('serviceBanner')
  return (
    <div className="mt-[1rem] md:mt-[1rem] py-16 xl:mt-[2rem] ">
        <div className=" md:border-2 md:shadow-[#3c4448]/40 md:shadow-sm gap-16 grid place-content-center place-items-center md:grid-cols-2  pb-[3rem]  md:py-[3rem]  mx-auto max-w-[90rem] px-4">
           {
            serviceBannerArray.map(item => (
                <div key={item.id}
             
                 className=" flex justify-center items-center flex-col gap-4  px-4 w-full">
                <Image style={{width: "12rem", height: "100%"}}  src={item.image} alt="" width={300} height={300} />
                <h1 className="text-[#3C4448] text-center text-[1rem] md:text-[2rem] font-bold ">
                    {item.title}
                </h1>
                <p className="text-[#3C4448] px-5  text-center text-[.85rem] md:text-[1.25rem]  ">{item.subtitle}</p>
                <button  className="mt-5 text-[.85rem] md:text-[1.25rem]  rounded-md  transition-colors ease-linear duration-300 text-[#fff] hover:border-[#3C4448] hover:bg-[#D19B2E] bg-[#3C4448] hover:text-[#3C4448] px-4 py-2 ">
                    {item.btn}
                </button>
            </div>
            ))
           }
            
        </div>
    </div>
  )
}

export default ServiceBanner