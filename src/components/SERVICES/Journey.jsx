"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import {motion} from "framer-motion";


export default function Journey() {
  const router = useRouter();
  return (
    <div className="flex w-full my-10  px-5 lg:px-8 justify-between">

      <div className="basis-[45%] hidden lg:flex relative">
        <motion.div
        whileInView={{y:500,opacity:[1,1,1,0]}}
        transition={{duration:1,delay:.3}}
        viewport={{once:true}}
        className="absolute w-full h-full bg-color-2 rounded-lg">
        </motion.div>
        <Image
          src="/assets/Servicesvertical.png"
          alt="services"
          height={800}
          width={700}
          className="rounded-lg"
        ></Image>
      </div>

      <motion.div 
      initial={{y:300,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:.5,delay:.2}}
      viewport={{once:true}}
      className="lg:basis-[45%] px-10 lg:px-0 flex flex-col justify-center gap-5 lg:gap-9">
        <Heading
          text1="Your journey into the"
          text2=" future starts now"
        ></Heading>
        <p className="text-color-3 lg:text-xl font-light text-sm w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime
          sequi incidunt vel alias excepturi beatae at non, omnis qui?
        </p>
        <ul className="flex flex-col gap-3 lg:gap-6 text-white marker:text-cyan-400 font-medium lg:font-semibold list-disc px-4 lg:px-5 lg:text-lg">
          <li>Create algorithms.</li>
          <li>Opt for the right platform.</li>
          <li>Train the algorithms.</li>
        </ul>
        <div className="w-max">
          <button
            onClick={() => router.push("/services/ai-design-generator")}
            className="px-8 py-3 bg-color-1 text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get started
          </button>
        </div>
      </motion.div>
    </div>
  );
}
