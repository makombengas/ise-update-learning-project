import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import JobSearch from "@/components/jobSearch/JobSearch";
import LogoClouds from "@/components/logoClouds/LogoClouds";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import Products from "@/components/products/Products";
import ServiceBanner from "@/components/serciceBanner/ServiceBanner";
import Support from "@/components/support/Support";
import WhatWeDo from "@/components/whatWeDoComponent/WhatWeDo";


export default function Home() {
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
      <Footer/>
    </div>
  );
}
