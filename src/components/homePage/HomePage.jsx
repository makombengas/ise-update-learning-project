"use client"
import React from 'react'
import Carousel from '../carousel/Carousel'
import Products from '../products/Products'
import WhatWeDo from '../whatWeDoComponent/WhatWeDo'
import ServiceBanner from '../serciceBanner/ServiceBanner'
import JobSearch from '../jobSearch/JobSearch'
import NewsLetter from '../newsLetter/NewsLetter'
import Support from '../support/Support'
import LogoClouds from '../logoClouds/LogoClouds'
import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton from '../skeleton/Skeleton'

const HomePage = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{       
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    },[])
  return (
  
          <div className="">
            {loading && <Skeleton/>}
            <div className="">
                <Carousel/>
                <Products/>
                <WhatWeDo/>
                <ServiceBanner/>
                <JobSearch/>
                <NewsLetter/>
                <Support/>
                <LogoClouds/>    
            </div>
          </div>
 
  )
}

export default HomePage