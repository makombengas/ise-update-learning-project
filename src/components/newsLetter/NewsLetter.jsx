import { useTranslations } from "next-intl"


const NewsLetter = () => {
    const newsLetter = useTranslations("NewsLetter")
  return (
    <div className=" py-8 px-4 md:py-16 w-full border-none md::border-[.5px] md:border-dotted   mb-16 h-auto max-w-[90rem] gap-8 mx-auto bg-[#D19B2E] ">
        <div className=" grid grid-cols-1 xl:grid-cols-2 place-items-center   gap-4 ">
            <div className="w-full flex  justify-center xl:justify-start items-center xl:items-start flex-col gap-8  xl:gap-4 ">
                <h1 className="text-[#3C4448] text-center xl:text-start md:mx-16 uppercase text-[1.5rem]  md:text-[2.5rem] font-bold">
                    {newsLetter("title")}
                </h1>
                <p className="text-[#3C4448] text-center xl:text-start md:mx-16 text-sm md:text-xl font-thin">
                 {newsLetter("subtitle")}
                </p>
            </div>
            <div className="  md:mt-8 xl:mt-0  rounded-md     flex md:w-[30rem] justify-between items-center  h-[3rem]">
                <input className="   w-full border-r-2 rounded-l-md   px-2 py-2  outline-none" type="text" placeholder={newsLetter("placeholder")} name="" id="" />
                <button className="h-[2.5rem] w-[14rem] text-[.75rem] md:text-[1rem]  bg-[#3C4448] text-white hover:border-[#3C4448]  hover:scale-105 hover:border-2 hover:bg-white transition-all duration-200 ease-in hover:text-[#3C4448] font-semibold   float-center md:float-start   px-4 py-2 rounded-r-md"> {newsLetter("btn")} </button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter