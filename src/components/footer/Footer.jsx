// import { nav, products, whatWeDo } from "@/data/data"
// import Logo from "../logo/Logo"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaXing, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
    const nav = useTranslations("Navigation");
    const navArray = nav.raw("nav")
    const explore = useTranslations("Explore");
    const servicesArray = explore.raw("servicesArray")
    const products = useTranslations("Products");
    const allProducts = products.raw("allProducts")
    const footer = useTranslations("Footer");
 
  return (
    <div className="bg-[#3C4448] w-full px-4 text-white h-full">
        <div className="max-w-[90rem] mx-auto py-16 grid grid-cols-1 px-4 place-content-center gap-8  md:grid-cols-3 xl:grid-cols-6 ">
            <div className="flex flex-col justify-center items-center md:items-start  md:justify-start h-full gap-2   ">
               <Image src={footer("image")} priority className=" rounded-lg object-cover  w-[5rem] h-[2.5rem]" alt="hero" width={1000} height={1000} />
                <p className="text-[#b2b2b2] text-[.75rem] text-center md:text-left md:text-[1rem] font-thin  ">
                    {footer("title")}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start  md:justify-start h-full   ">
                <h3 className="text-white uppercase font-bold text-[.875rem] md:text-[1rem] ">
                {footer("aboutUs")}
                </h3>
                <div className="text-[#b2b2b2] text-center md:text-left text-[1rem] flex flex-col mt-4 gap-2">
                    {
                        navArray.map((item, index) => (
                            <Link className="hover:text-[#D19B2E]" href={item.path} key={index}>{item.title}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start  md:justify-start h-full   ">
            <h3 className="text-white uppercase font-bold text-[.875rem] md:text-[1rem] ">
                {footer("services")}
                </h3>
                <div className=" text-[#b2b2b2] text-center md:text-left text-[1rem] flex flex-col mt-4 gap-2">
                    {
                       servicesArray.map((item, index) => (
                            <Link className="hover:text-[#D19B2E]" href={"#"} key={index}>{item.title}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start  md:justify-start h-full ">
                <h3 className="text-white uppercase font-bold text-[.875rem] md:text-[1rem] ">
                {footer("products")}
                </h3>
                <div className="text-[#b2b2b2] text-center md:text-left text-[1rem] flex flex-col mt-4 gap-2">
                    {
                        allProducts.map((item, index) => (
                            <Link className="hover:text-[#D19B2E]" href={"#"} key={index}>{item.title}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start  md:justify-start h-full   ">
                <h3 className="text-white uppercase font-bold text-[.875rem] md:text-[1rem] ">
                    {footer("contact")}
                </h3>
                <div className="text-[#b2b2b2] text-center md:text-left text-lg flex flex-col mt-4 gap-2">
               
                <p className="text-[#b2b2b2] mx-8 md:mx-0 text-center md:text-left text-[1rem] ">
                  {footer("contactSubtitle")}    
                </p>
                </div>
                <div className="text-[#b2b2b2] text-center md:text-left text-[1rem] flex flex-col mt-4 gap-2">
                    <h3 className=" text-white  font-bold text-[.875rem] md:text-[1rem] ">
                    {footer("consultation")}
                    </h3>  
                    <p>T <a className="hover:text-[#D19B2E]" href="tel:++49 441 68006-11">+49 441 68006-11</a></p>
                    <p>F <a className="hover:text-[#D19B2E]" href="tel:++49 441 68006-15">+49 441 68006-15</a></p>
                    <p>E  <a className="hover:text-[#D19B2E]" href="mailto:sales@ise.de">sales@ise.de</a></p>
                </div>

                <div className="text-[#b2b2b2] text-center md:text-left text-[1rem] flex flex-col mt-4 gap-2">
                    <h3 className=" text-white  font-bold text-[.875rem] md:text-[1rem] ">
                        {footer("General")}
                    </h3>  
                    <p>T <a className="hover:text-[#D19B2E]" href="tel:++49 441 68006-0">+49 441 68006-0</a></p>
                    <p>F <a className="hover:text-[#D19B2E]" href="tel:++49 441 68006-10">+49 441 68006-10</a></p>
                    <p>E <a className="hover:text-[#D19B2E]" href="mailto: info@ise.de"> info@ise.de</a></p>
                </div>


            </div>
            <div className="flex  flex-col justify-center items-center md:items-start  md:justify-start h-full  ">
                <h3 className="text-white uppercase font-bold text-[.875rem] md:text-[1rem] ">
                    {footer("follow")}
                </h3>
                <div className=" text-[#b2b2b2] text-[1.5rem] grid grid-cols-5 md:grid-cols-5 mt-4 gap-4">
                <Link href={"#"} className="hover:text-[#D19B2E]" > 
                    <FaFacebook />
                </Link>
                <Link href={"#"} className="hover:text-[#D19B2E]" > 
                    <FaInstagram />           
                </Link>

                <Link href={"#"} className="hover:text-[#D19B2E]">               
                     <FaLinkedin />
                </Link  >
                <Link href={"#"} className="hover:text-[#D19B2E]"> 
                    <FaYoutube />    
                </Link>
                <Link href={"#"} className="hover:text-[#D19B2E]" >    
                    <FaXing />
                </Link>
                </div>

                <div className="text-[#b2b2b2] text-center md:text-left text-lg flex flex-col mt-[2rem]  gap-2">
                    <h3 className=" text-white  font-medium leading-6 text-[.875rem]  md:text-[1rem] ">
                        {footer("emailTitle")}
                    </h3>  
                    <div className="text-[#b2b2b2] border-2 rounded-xl justify-center  md:justify-between  text-center md:text-left text-lg flex items-center mt-4 ">
                        <input className="bg-inherit  max-w-[10.85rem] text-[.875rem] text-slate-100 outline-none p-2 " type="email" name="" placeholder={footer("placeholder")} id="" />
                        <button className="bg-inherit max-w-[2.5rem] flex justify-center items-center mx-auto mr-2 text-[1.5rem] text-white font-bold py-1 px-2"> {">"} </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-[90rem]  mx-auto py-[2.5rem] flex-wrap flex flex-col md:flex-row justify-between items-center gap-8 border-[#b2b2b2]  border-t-[.5px] border-dotted  ">
            <div className="flex justify-center  md:justify-end flex-wrap items-center gap-5">
                <p className="text-white text-[.875rem] text-center md:text-left md:text-[1rem] font-thin  ">
                    {footer("copyright")}
                </p>
             
            </div>
            <div className="flex text-[.875rem] justify-center md:text-[1rem] md:justify-end flex-wrap items-center gap-2 md:gap-5">
              
                <Link href={"#"} className="hover:text-[#D19B2E]" >    
                    {footer("imprint")}
                </Link>
                <Link href={"#"} className="hover:text-[#D19B2E]" >    
                    {footer("support")}
                </Link>
                <Link href={"#"} className="hover:text-[#D19B2E]" >    
                    {footer("terms")}
                </Link>
                <Link href={"#"} className="hover:text-[#D19B2E]" >    
                    {footer("privacy")}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer