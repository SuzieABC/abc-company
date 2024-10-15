"use client";

import Image from "next/image";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";
import company_top_img_pc from "@/assets/images/company/company_top_img_pc.svg";
import company_top_bg from "@/assets/images/company/company_top_bg_pc.svg";
import company_top_img_tablet from "@/assets/images/company/company_top_image_tablet.svg";
import mobile from "@/assets/images/company/mobile.svg";
import dice_L from "@/assets/images/company/dice_L.png";

interface TopPageProps {
  desc: string;
  desc_m: string;
  desc_t: string;
  locale: string;
}

export default function TopPage({
  desc,
  desc_m,
  desc_t,
  locale,
}: TopPageProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  // const l = windowWidth > 1023;

  return (
    <div
      id="about"
      className={`flex flex-col items-center justify-center h-screen w-full relative`}
      style={{
        backgroundImage: `url(${company_top_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`relative flex flex-col items-center justify-center h-full p-[10%] ${
          s
            ? "pt-[100px] pb-[1%]"
            : m
            ? "pt-[12%] pb-[1%]"
            : "pt-[6%] pb-[22px]"
        } `}
      >
        <div className="relative">
          <Image
            src={s ? mobile : m ? company_top_img_tablet : company_top_img_pc}
            alt="dice"
            className="z-0"
          />
          <Image
            src={dice_L}
            alt=""
            className={`absolute z-10 ${
              s ? "w-[110px]" : m ? "w-[135.03px]" : "w-[194px]"
            }`}
            style={{
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
            }}
          />
        </div>
        <div className="h-[10%]">&nbsp;</div>

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
              s || m
                ? "px-[14px] text-[16px] pb-[73.59px]"
                : "px-[14px] text-[20px]"
            }`}
          >
            <p
              className={`text-center whitespace-pre  leading-[140%] ${
                locale === "ko" ? "font-pretendardLight" : "font-inter"
              } ${s ? "px-[16px]" : m ? "px-[47px]" : "px-[252px]"}`}
            >
              {s ? desc_m : m ? desc_t : desc}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
