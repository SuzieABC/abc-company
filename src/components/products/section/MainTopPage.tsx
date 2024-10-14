"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";
import products_top from "../../../../public/animations/products_top_test.json";
import Lottie from "react-lottie-player";
import product_top_bg_pc from "@/assets/images/products/product_top_bg_pc.svg";
import product_top_bg_mo from "@/assets/images/products/products_top_bg_mo.svg";
interface MainTopPageProps {
  title: string;
  subTitle: string;
  locale: string;
}

export default function MainTopPage({
  title,
  subTitle,
  locale,
}: MainTopPageProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  // const l = windowWidth > 1023;

  return (
    <div
      className="h-screen flex flex-col justify-center items-center w-screen relative"
      style={{
        backgroundImage: `url(${
          s ? product_top_bg_mo.src : product_top_bg_pc.src
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover", // 이미지를 화면에 맞게 조정
        overflow: "hidden",
      }}
    >
      <Lottie
        loop
        animationData={products_top}
        play
        style={{
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        }} // 중앙 정렬
        // className={`absolute z-0
        //   ${s ? " min-w-[1200px]" : "w-[1500px]"}
        // `}
        className={`absolute z-0
          ${s ? " min-w-[1500px]" : m ? "w-[2000px]" : "w-[3000px]"}
        `}
      />

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
          className={`text-center text-white  font-extrabold font-['OutfitExtraBold'] uppercase whitespace-pre-wrap flex-wrap ${
            windowWidth > 1023
              ? "text-[70px] leading-[84px] w-[593px]"
              : "text-[40px] leading-[49.6px] w-[258px]"
          }`}
        >
          {title}
        </div>
      </motion.div>

      {windowWidth > 599 && (
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
            className={`text-center text-white pt-[20px]  ${
              m ? "text-[16px] leading-tight" : "text-[22px] leading-7"
            } whitespace-pre font-light ${
              locale === "ko"
                ? "font-['Pretendard']"
                : "font-['InterExtraLight']"
            }`}
          >
            {subTitle}
          </div>
        </motion.div>
      )}
    </div>
  );
}
