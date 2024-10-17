"use client";

import Image from "next/image";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";
import company_top_bg from "@/assets/images/company/company_top_bg_pc.svg";
import dice_360 from "@/assets/images/company/top/company_top_360.png";
import dice_600 from "@/assets/images/company/top/company_top_600.png";

interface TopPageProps {
  desc: string;
  desc_m: string;
  desc_t: string;
  desc_l: string;
  desc_xl: string;
  locale: string;
  desc_m_1: string;
  desc_m_2: string;
}

export default function TopPage({
  desc,
  desc_m,
  desc_t,
  desc_l,
  desc_m_1,
  desc_m_2,
  // desc_xl,
  locale,
}: TopPageProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth > 1023 && windowWidth < 1440;
  const xl = windowWidth > 1439;

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
        className={`flex flex-col items-center justify-center h-full max-w-[1440px]`}
      >
        <div className="flex flex-col items-center py-[10px]">
          <div
            className={`${
              s ? "mt-[40px]" : m ? "mb-[40px]" : l ? "mb-[60px]" : ""
            }`}
          >
            <Image
              src={s ? dice_360 : m ? dice_600 : dice_600}
              alt="dice"
              className={`${s ? "px-[14px]" : l || xl ? "px-[11%]" : ""}`}
              width={s ? 332 : m ? 375 : l ? 678 : 754}
              height={s ? 286 : m ? 302 : l ? 531 : 612}
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
              className={`flex-col justify-start items-start ${
                s || m ? "px-[16px]" : "px-[40px]"
              } ${s || m ? "gap-2" : l ? "gap-5" : "gap-5"} inline-flex`}
            >
              <div
                className={`${
                  s ? "pt-[28px]" : "pt-[35px]"
                } self-stretch text-[#686dff] ${
                  s || m ? "text-[24px] text-center" : "text-[30px] "
                } font-outfitExtrabold leading-[34.72px]`}
              >
                About ABC
              </div>
              <div
                className={`self-stretch ${
                  s || m ? "text-center text-[16px]" : "text-[20px]"
                } text-white ${
                  locale === "ko"
                    ? "font-pretendardLight whitespace-normal"
                    : "font-interLight"
                } leading-snug `}
              >
                {s ? (
                  <span>
                    {locale === "ko" && (
                      <p className="whitespace-pre">{desc_m_1}</p>
                    )}
                    {locale === "ko" ? desc_m_2 : desc_m}
                  </span>
                ) : m ? (
                  <span>
                    {locale === "ko" && (
                      <p className="whitespace-pre">{desc_m_1}</p>
                    )}
                    {locale === "ko" ? desc_m_2 : desc_t}
                  </span>
                ) : l ? (
                  desc_l
                ) : (
                  desc
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
