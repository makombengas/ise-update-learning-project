import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"


const JobSearch = () => {
  const jobOffers = useTranslations("JobOffers")
 
  return (
    <div className="py-8  md:py-16 w-full xl:border-[.5px] xl:border-dotted  bg-gradient-to-r from-[#2a2a2718] via-[#2a2a2721] to-[#2a2a271b]  rounded-lg mb-16 h-auto max-w-[90rem] gap-8 mx-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3C4448] uppercase text-[1.5rem] text-center md:text-[1.875rem] font-bold">
                    {jobOffers("title")}
            </h1>
            <p className="text-[#3C4448] mx-5 md:mx-16 text-center text-sm md:text-xl font-thin">
                {jobOffers("subtitle")}
            </p>
            <Link href="/" className="  hover:bg-[#D19B2E] border-[#D19B2E] border-2 text-[#D19B2E]  hover:scale-105 hover:border-none  transition-all duration-200 ease-in hover:text-[#3C4448] font-semibold bg-transparent  float-center md:float-start mt-5  px-4 py-2 rounded-md">  {jobOffers("btn")} </Link>
        </div>
        <div className="flex justify-center  items-center">
            <Image src= {jobOffers("image")} className="object-cover mt-2  md:mt-0 w-[47%] xs:w-[70%] md:w-[20rem] xl:w-[30%] h-full" alt="hero" width={1000} height={1000} />
        </div>
    </div>
  )
}

export default JobSearch