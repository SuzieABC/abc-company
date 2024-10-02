"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";
import product_bottom_bg from "@/assets/images/products/04_about.svg";
import { motion } from "framer-motion";

interface AboutUsProps {
  buttonText: string;
}

export default function AboutUs({ buttonText }: AboutUsProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <div className=" w-screen" style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${product_bottom_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.6,
          zIndex: -1,
        }}
      />

      <div className={`${s ? "pt-[112px]" : "pt-[180px]"}`}>
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
            className={`text-center text-white text-[40px] font-light font-['OutfitLight'] ${
              s
                ? "mx-[16px] pb-[32px] leading-[31.2px] text-[24px]"
                : "mx-[40px] pb-[60px] leading-[56px] text-[40px]"
            }`}
          >
            {s ? (
              <span className="text-center font-light text-[24px]">
                Unlock Your Freedom Securely.
                <br />
                Explore with
                <br />
                AhnLab Blockchain Company.
              </span>
            ) : (
              <span className="text-center font-light">
                Unlock Your Freedom Securely.
                <br />
                Explore with AhnLab Blockchain Company.
              </span>
            )}
          </div>

          <div
            className={`py-[16px] px-[51px] bg-white rounded-[10px] justify-center items-center gap-2 inline-flex ${
              s ? "mb-[110px] w-[180px]" : "mb-[180px] w-[240px]"
            }`}
          >
            <div
              className={`text-black ${
                s ? "text-[16px]" : "text-[20px]"
              } font-medium font-['Outfit'] uppercase leading-normal]`}
            >
              <span>{buttonText}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
