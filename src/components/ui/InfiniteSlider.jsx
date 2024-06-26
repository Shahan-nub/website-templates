"use client"
import { PiAsterisk } from "react-icons/pi";
import {motion } from "framer-motion";


export default function InfiniteSlider({bg_text_style,title}) {
  return (
    <div className={`SCROLLER w-full overflow-hidden text-2xl lg:text-7xl my-6 lg:my-20 ${bg_text_style}`}>
      <div 
      className="SCROLLER-INNER animate-infinite-scroll-mobile lg:animate-infinite-scroll  flex items-center gap-5 lg:gap-10 whitespace-nowrap text-nowrap py-3 lg:py-6 ">
        ~
        <h1 className="  font-semibold">{title} </h1>
        ~
        <h1 className="  font-semibold">{title} </h1>
        ~
        <h1 className="  font-semibold">{title} </h1>
        ~
      </div>
    </div>
  )
}
