"use client"

import Image from 'next/image'
import Link from 'next/link'
import  { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useSelectedLayoutSegment } from 'next/navigation'
import { useTranslations } from 'next-intl'

import LanguageSwitcher from '../IntlSwitcherComponent/LanguageSwitcher'
import BackToTop from '../backToop/BackToTop';
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openSubnav, setOpenSubnav] = useState(null)
  const [openProduct, setOpenProduct] = useState(null)
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname ;
  const navigationArray = useTranslations("Navigation");
  const nav = navigationArray.raw('nav');
  const search = useTranslations("Search");
  const handleSubNav =(subNav) => {
    setOpenSubnav(subNav)
  }
  const handleProducts =(subItem) => {
    if (!subItem || !subItem.productsArray  ) return;
    const findProduct = subItem.productsArray.find(product => product.id === openSubnav.id)  
    setOpenProduct(subItem.productsArray)
    }
  // console.log("openNav", openSubnav.subNav)
  return (
    <div className="bg-gradient-to-r from-[#3C4448] via-[#5D696F] to-[#909CA2]  fixed w-full z-40 ">

      <div className="absolute top-0 right-0  z-40">
         <BackToTop/>
      </div>

      <div className=" mx-auto max-w-[90rem] flex justify-between items-center xl:gap-4 py-2 px-4">
        <div className="z-50" onMouseEnter={() => setOpenSubnav(false)}>
        <Link href={"/"} rel='preload' onClick={() => setOpenNav(false)} >  <Image as="image" className='z-50  w-[3.5rem]  md:w-[4rem]  xl:w-[5rem] h-full object-cover' src="/images/iseLogo.png" alt="" width={100} height={100} /></Link>
        </div>
          {/* Handy and Menu  component*/}
          <div className=" mr-5 flex justify-center items-center gap-4">
          <div className={` ${openNav ? " absolute flex flex-col justify-center  h-screen md:h-auto md:bg-transparent md:static md:flex-row left-0 right-0 top-0 bottom-0 bg-[#3C4448]" : "hidden"}  md:flex justify-end items-center gap-4  `} >
            {
              nav.map(item => (
                <div key={item.id} className={`${isActive === item.path ? "text-gray-300 border-b-2 border-[#D19B2E]" : ""}  hover:border-b-2  hover:border-[#D19B2E] md:text-[.75rem] xl:text-lg text-white uppercase  flex justify-end items-center gap-4`}  >
                      <Link  className='z-30 hover:text-gray-300   md:z-50' rel="preload" href={item.path} onMouseEnter={() => handleSubNav(item)}  >{item.title}</Link>
                      <div  className={` ${openSubnav?.id === item.id  ? " fixed md:backdrop-blur-sm z-40 md:-z-50  w-screen h-screen md:h-full  flex flex-col   md:flex-row left-0 right-0 top-0 bottom-0   bg-[#3C4448] md:bg-[#000000]/60" : "hidden"} `}  >
                        <div className="w-full  absolute inset-y-0 md:inset-y-auto -top-16  flex justify-between items-center py-[4rem] bg-gradient-to-r from-[#3C4448] via-[#5D696F] to-[#909CA2]   " onMouseLeave={() => setOpenSubnav(false)}  >
                          <div className="px-6  place-content-between w-full mx-auto max-w-[90rem]  md:gap-x-[2.5rem]   grid grid-cols-2  md:mt-[4rem] md:h-full md:px-4 gap-4">
                       
                              <div className="w-auto flex flex-col gap-4 md:gap-0  mt-16 md:mt-0">
                              {
                                    item.subNav.map(subItem => (
                                      <div key={subItem.id} className="md:text-[.75rem] xl:text-lg text-white uppercase   flex flex-col  md:gap-4">
                                          <Link className='hover:text-gray-400  ' href={subItem.path} rel="preload" onMouseEnter={() => handleProducts(subItem)} >{subItem.title}</Link>
                                  <div className="">
                                  </div>
                                      </div>
                                    ))
                                  }
                              </div>


                              <div className=" grid md:grid-cols-3 place-content-center place-items-center gap-4">
                             
                              {
                                  nav[0].id === item.id &&  openProduct?.map(product => (
                                      <div key={product.id} className="  md:text-[.75rem] xl:text-lg text-white uppercase  flex flex-col justify-center items-center  md:gap-4">
                                      {  product.image ?   <Image src={product.image} alt="" width={200} height={200} className="w-[5rem] md:w-full object-cover" />:null}
                                  <div className="flex justify-center items-center flex-col">
                                  <Link className='text-[.55rem] md:text-lg  hover:text-gray-400 text-center' href={product.link} rel="preload" >{product.title}</Link>
                                  </div>
                                      </div>
                                    ))
                                  }
                              
                              </div>
                           
                          
                          </div>
                      
                      
                       
                        </div>
                      </div>
                </div>
              ))
            }
             {/* Search component*/}
            <div className=""  onMouseEnter={() => setOpenSubnav(false)}  >
                <CiSearch className='text-2xl z-50  font-bold text-white cursor-pointer' onClick={() => setOpenSearch(!openSearch)} />

                 {openSearch && <div className="absolute backdrop-blur-xl z-30  md:-z-10   h-screen flex flex-col justify-center items-center  md:flex-row left-0 right-0 top-0 bottom-0 bg-[#3C4448] md:bg-[#3C4448]/80">
                  <TfiClose className="absolute top-[15%] right-5 md:right-[14%]  z-30  md:text-3xl text-white cursor-pointer" onClick={() => setOpenSearch(!openSearch)} />
                   <div className="w-full md:w-1/2 mx-auto max-w-[50rem] flex justify-center items-center ">
                     <input className="  md:w-full h-[3rem] bg-transparent text-white  border-b-2 border-[#D19B2E] text-lg focus:border-[#D19B2E] outline-none" type="text" placeholder={search('placeholder')} />
                     <button className="w-[3rem] h-[3rem] bg-transparent text-white text-center border-b-2 border-[#D19B2E] text-lg focus:border-[#D19B2E] outline-none">
                       <CiSearch className='text-2xl z-50  font-bold text-white cursor-pointer' onClick={() => setOpenSearch(!openSearch)} />
                     </button>
                   </div>
                    
                 </div>}
            </div>
          </div>
             {/* Lang component*/}
           <div className="z-50 relative ">
            {/* <IntlSwitcherSelect /> */}
            <LanguageSwitcher />
           </div>
          </div>
              {/* Handy Menu icon component*/}
          <div className="md:hidden flex relative flex-col gap-[.35rem] w-[1.75rem]  items-center z-50 " onClick={() => setOpenNav(!openNav)} >
                <hr className={` ${openNav ? 'transition-rotate ease-linear duration-300  rotate-45 translate-y-[.3rem] w-[1.75rem]' : 'transition-rotate ease-linear duration-300   w-[1.75rem]'} border w-full border-[#fff] `} />
                <hr className={` ${openNav ? 'transition-opacity ease-linear duration-300   opacity-0 translate-y-[.3rem] w-[1.75rem]' : 'transition-opacity ease-linear duration-300    w-[1.75rem]'} border w-full border-[#fff] `} />
                <hr className={` ${openNav ? 'transition-rotate ease-linear duration-300   -rotate-45 translate-y-[.3rem] w-[1.75rem] absolute ' : 'transition-rotate ease-linear duration-300   w-[1.75rem]'} border w-full border-[#fff] `} />
            </div>
       
      </div>
    </div>
  )
}

export default Navbar