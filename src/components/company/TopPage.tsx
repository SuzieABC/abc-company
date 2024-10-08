"use client";

import company_top_bg from "@/assets/images/company/company_top_bg.svg";
import Image from "next/image";
// import comapny_top_img_m from "@/assets/images/company/company_top_img_m.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";
import company_top from "../../../public/animations/company_top.json";
import Lottie from "react-lottie-player";
import company_top_img_pc from "@/assets/images/company/company_top_img_pc.svg";
import comapny_top_img_m from "@/assets/images/company/company_top_img_m.svg";

interface TopPageProps {
  desc: string;
  desc_m: string;
  locale: string;
}

export default function TopPage({ desc, desc_m, locale }: TopPageProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <div
      id="about"
      className={`flex flex-col items-center justify-center h-screen w-full relative ${
        s ? "mt-[70px]" : "pt-[187px]"
      }`}
      style={{
        backgroundImage: `url(${company_top_bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative flex items-center justify-center h-full">
        <Image
          src={s ? comapny_top_img_m : company_top_img_pc}
          alt="dice"
          className={`${s ? "" : "p-[70px]"}`}
        />
        <Lottie
          loop
          animationData={company_top}
          play
          className={`absolute z-0 ${s ? "w-[300px]" : "h-[197px]"}`}
          // style={{
          //   transform: "translate(-50%, -50%)",
          //   top: "50%",
          //   left: "50%",
          // }} // 중앙 정렬
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div
          className={`${
            s ? "px-[14px] text-[16px] pb-[73.59px]" : "px-[14px] text-[20px]"
          }`}
        >
          <p
            className={`text-center mb-[114.95px] whitespace-pre ${
              locale === "ko" ? "font-[Pretendard]" : "font-[Inter]"
            } ${
              s
                ? "px-[16px] leading-[20.8px]"
                : m
                ? "px-[47px] leading-[27.2px]"
                : "px-[252px] leading-[27.2px]"
            }`}
          >
            {s ? desc_m : desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
