'use client'

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl"

const Products = () => {
    const products = useTranslations("Products");
    const productsArray = products.raw('allProducts')
    const title = products.raw('title')
    const subtitle = products.raw('subtitle')
    const [product, setProduct] = useState(productsArray[0])
    const [allProduct, setAllProduct] = useState(null)
    const handleProduct = (item) => {
        setProduct(productsArray[item])
    }

    const handleAllProduct = (item) => {
        setAllProduct(item)
    }

    console.log(allProduct)
  return (
    <div className=" mt-[1rem] md:mt-[1rem] xl:mt-[2rem] ">
        <div className="flex justify-center items-center flex-col gap-2 md:gap-4 py-[3rem]  mx-auto max-w-[90rem] px-4 ">
            <h1 className="text-center text-[1.5rem] md:text-[2.5rem]">
                {title}
            </h1>
            <p className="text-[#5D696F]  text-center text-[.85rem] md:text-[1.5rem]">
               {subtitle}
            </p>
            <div className="md:mt-5 py-[.5rem] md:py-[1rem]">
                <div className="grid  place-content-center place-items-center grid-cols-3  md:gap-4">
                {
                    productsArray.map(item => (
                        <div key={item.id} className="">
                            <div className="text-center text-[.55rem] md:text-[1rem] xl:text-[1.25rem] " onClick={() => {handleProduct(item.id), setAllProduct(null) }}>
                                <button className={`${item.id === product.id ? "border-b-2   border-[#D19B2E]" : ""} hover:border-b-2   hover:border-[#D19B2E]  `}  >
                                    {item.title}
                                </button>
                            </div>
                        </div>
                    ))
                        
                }
                </div>
            </div>
                <div className=" mt-[.5rem]  md:mt-[1rem] xl:mt-[2rem]">
                <div className="grid  place-content-center place-items-center grid-cols-2  md:gap-4">
                        <div className="">
                         <Image src={product.image} alt={product.title} className=" " width={1000} height={1000} />
                              
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 p-4 ">
                            <h1 className="font-extrabold  text-center text-[.65rem] md:text-[1.5rem] xl:text-[2.55rem]">

                                {product.title}
                            </h1>
                          
                            <p className="font-thin text-[#5D696F]  text-center text-[.55rem] md:text-[1rem] xl:text-[1.25rem]">
                                {product.subtitle.slice(0, 100)}...
                            </p>

                                <button className=" md:mt-5 px-2 py-1 text-[.65rem] md:text-[1.25rem] text-gray-200 rounded-md bg-[#3C4448]" onClick={() => handleAllProduct(product)}  >
                                    {product.btn}
                                </button>
                           
                        </div>
                   </div>
                </div>
                <div className="grid  place-content-center place-items-center grid-cols-3  md:gap-4">
                        {
                            allProduct?.productsArray.map(item => (
                                <div key={item.id} className="group md:mx-16 px-4 flex flex-col justify-center items-center gap-2 p-4">
                                     <Image src={item.image} alt={item.title} className=" " width={300} height={300} />
                                     <h1 className="block group-hover:hidden  font-extrabold  text-center text-[.65rem] md:text-[1rem] xl:text-[1.25rem]">
                                        {item.title}
                                    </h1>
                                    <button className="  md:hidden group-hover:block md:mt-5 px-2 py-1 text-[.65rem] md:text-[1.25rem] text-gray-200 rounded-md bg-[#3C4448]" onClick={() => handleAllProduct(product)}  >
                                        {item.btn}
                                    </button>
                                </div>
                            ))
                        }
                </div>
        </div>
    </div>
  )
}

export default Products