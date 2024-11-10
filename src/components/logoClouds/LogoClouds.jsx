import { companyLogos } from "@/data/data"
import { useTranslations } from "next-intl"
import Image from "next/image"

const LogoClouds = () => {
  const partners = useTranslations('Partners');
  const logos = partners.raw('partners')
    return (
      <div className="bg-white py-0 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <h2 className="font-bold text-[1.25rem] md:text-[1.5rem] text-center text-[#3C4448] ">
                {partners('title')}
        </h2>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4  place-items-center items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none md:grid-cols-4 lg:grid-cols-4">
            {
                logos.map((logo)=>(
                    <Image
                        key={logo.id}
                        alt="Transistor"
                        src={logo.image}
                        width={1000}
                        height={1000}
                        className="col-span-2  w-full object-contain lg:col-span-1"
                    />
                ))
            }
            
          </div>
        </div>
      </div>
    )
  }

export default LogoClouds
  