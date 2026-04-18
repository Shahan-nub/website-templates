"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkTemplate({ id, src, link }) {
  return (
    <motion.div
      className="group w-max relative"
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3, type: "tween" }}
      viewport={{ once: true }}
    >
      <div className="rounded-full absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] px-5 py-7 bg-color-1 text-white text-lg group-hover:block hidden z-20 cursor-pointer">
        View
      </div>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex flex-col items-center justify-between p-5 md:p-8 md:bg-glass bg-gradient-to-r from-glass via-[#252b4e] to-glass rounded-lg"
      >
        <Image
          src={src}
          width={280}
          height={570}
          alt={id}
          className="w-[80vw] lg:w-[35vw] lg:h-[110vh] rounded-md hover:scale-[1.03] transition-all duration-300 overflow-hidden"
        />

        <h3 className="mt-6 text-gray-400 font-sans text-sm md:text-base">
          {id}
        </h3>
      </Link>
    </motion.div>
  );
}