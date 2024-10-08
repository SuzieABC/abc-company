"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";
import product_top_bg from "@/assets/images/products/product_top_bg.svg";
import { motion } from "framer-motion";
import products_top from "../../../../public/animations/products_top.json";
import Lottie from "react-lottie-player";

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
  return (
    <div
      className="h-screen flex flex-col justify-center items-center w-screen"
      style={{
        backgroundImage: `url(${product_top_bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover", // 이미지를 화면에 맞게 조정
      }}
    >
      <Lottie
        loop
        animationData={products_top}
        play
        className={`absolute z-0`}
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

      {windowWidth > 1023 && (
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
            className={`text-center text-white pt-[20px] leading-7 text-[22px] whitespace-pre font-light ${
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
