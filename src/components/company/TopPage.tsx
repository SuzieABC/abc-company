"use client";

import Image from "next/image";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";
// import company_top_img_pc from "@/assets/images/company/company_top_img_pc.svg";
import company_top_bg from "@/assets/images/company/company_top_bg_pc.svg";
// import company_top_img_tablet from "@/assets/images/company/company_top_image_tablet.svg";
// import mobile from "@/assets/images/company/mobile.svg";
// import dice_L from "@/assets/images/company/dice_L.png";

import dice_360 from "@/assets/images/company/top/company_top_360.png";
import dice_600 from "@/assets/images/company/top/company_top_600.png";

interface TopPageProps {
  desc: string;
  desc_m: string;
  desc_t: string;
  desc_l: string;
  desc_xl: string;
  locale: string;
}

export default function TopPage({
  desc,
  desc_m,
  desc_t,
  desc_l,
  // desc_xl,
  locale,
}: TopPageProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth > 1023 && windowWidth < 1440;
  // const xl = windowWidth > 1439;h

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
        className={`flex flex-col items-center justify-center py-[10px] ${
          s || m || l ? "" : ""
        } h-full max-w-[1440px]`}
      >
        <div
          className={`${
            s ? "mt-[40px]" : m ? "mb-[40px]" : l ? "mb-[60px]" : ""
          }`}
        >
          <Image
            src={s ? dice_360 : m ? dice_600 : dice_600}
            alt="dice"
            className="p-[14px]"
            width={s ? 332 : m ? 377 : l ? 662 : 754}
            height={s ? 286 : m ? 294 : l ? 531 : 612}
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
            className={`flex-col justify-start items-start mt-[20px] px-[40px] ${
              s || m ? "gap-2" : l ? "gap-5" : "gap-5"
            } inline-flex`}
          >
            <div
              className={`self-stretch text-[#686dff] ${
                s
                  ? "text-[23px] text-center"
                  : m
                  ? "text-[28px] text-center"
                  : "text-[30px] "
              } font-outfitExtrabold leading-[34.72px]`}
            >
              About ABC
            </div>
            <div
              className={`self-stretch whitespace-pre ${
                s || m ? "text-center text-[16px]" : "text-[20px]"
              } text-white ${
                locale === "ko" ? "font-pretendard" : "font-interLight"
              } leading-snug `}
            >
              {s ? desc_m : m ? desc_t : l ? desc_l : desc}
            </div>
          </div>
          {/* <div
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
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
