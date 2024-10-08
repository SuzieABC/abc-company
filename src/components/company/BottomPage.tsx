"use client";

import company_bottom_bg from "@/assets/images/company_bottom_bg.svg";
import company_bottom_shape_L from "@/assets/images/company/company_bottom_shape_L.svg";
import company_bottom_shape_S from "@/assets/images/company/company_bottom_shape_S.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";

interface BottomPageProps {
  desc: string;
  locale: string;
}

export default function BottomPage({ desc, locale }: BottomPageProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;
  return (
    <div
      id="contact"
      className="bg-[#0E0E23] w-full text-center"
      style={{
        backgroundImage: `url(${
          s ? company_bottom_shape_S.src : company_bottom_shape_L.src
        })`,
        // backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={` font-['OutfitExtraBold'] mix-blend-color-dodge text-[#d9d9d9] text-[50px] font-extrabold uppercase ${
          s
            ? "pb-[24px] mt-[120px] leading-[45.6px]"
            : "pb-[40px] mt-[201px] leading-[70px]"
        }`}
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
          {s ? (
            <span>
              BECOME <br /> A PARTNER
            </span>
          ) : (
            <span>BECOME A PARTNER</span>
          )}
        </motion.div>
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
        <div className={`${s ? "mb-[122px]" : "mb-[201px]"}`}>
          <p
            className={`pb-[18px] text-center text-white  font-light font-['Outfit']  ${
              s
                ? "text-[24px] px-[30px] leading-[30.24px]"
                : "text-[40px] leading-[50px]"
            }`}
          >
            {windowWidth < 600 ? (
              <span>
                contact@ahnlabblockchain
                <br />
                .company
              </span>
            ) : (
              <span>contact@ahnlabblockchain.company</span>
            )}
          </p>
          <p
            className={`text-center text-white font-[350] ${
              locale === "ko" ? "font-['Pretendard']" : "font-['Inter']"
            } leading-7 ${s ? "text-[17px] px-[38px]" : "text-[22px]"}`}
          >
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
