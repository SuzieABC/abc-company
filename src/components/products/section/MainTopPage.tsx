"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";
import product_top_bg from "@/assets/images/products/product_top_bg.svg";
import { motion } from "framer-motion";

interface MainTopPageProps {
  title: string;
  subTitle: string;
}

export default function MainTopPage({ title, subTitle }: MainTopPageProps) {
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
        {" "}
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
            className={`text-center text-white pt-[20px] font-['InterExtraLight'] leading-7 font-[350] text-[22px] whitespace-pre`}
          >
            {subTitle}
          </div>
        </motion.div>
      )}
    </div>
  );
}
