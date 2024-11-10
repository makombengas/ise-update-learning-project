import React from 'react'
import Carousel from '../carousel/Carousel'
import Products from '../products/Products'
import WhatWeDo from '../whatWeDoComponent/WhatWeDo'
import ServiceBanner from '../serciceBanner/ServiceBanner'
import JobSearch from '../jobSearch/JobSearch'
import NewsLetter from '../newsLetter/NewsLetter'
import Support from '../support/Support'
import LogoClouds from '../logoClouds/LogoClouds'

const HomePage = () => {
  return (
  
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
 
  )
}

export default HomePage