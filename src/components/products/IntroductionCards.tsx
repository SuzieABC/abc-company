"use client";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import comingSoon from "@/assets/images/products/comingSoon.svg";
import comingSoonM from "@/assets/images/products/comingSoon_m.svg";
import ABC_Wallet_img_mobile from "@/assets/images/products/aaa.svg";
import ABC_Waas_img_mobile from "@/assets/images/products/no_shadow_ABC WaaS_img.svg";
import BICScan_img_mobile from "@/assets/images/products/no_shadow_BICScan_img.svg";
import { motion } from "framer-motion";

interface IntroductionCardsProps {
  title: string;
  highlight: string;
  detail?: string;
  img?: string | StaticImageData;
  button?: string;
  locale?: string;
}

export default function IntroductionCards({
  title,
  highlight,
  detail,
  img,
  button,
  locale,
}: IntroductionCardsProps) {
  const upComing = highlight === "Coming Soon";
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <div className={`${s ? "pb-[20px]" : "text-left pb-[120px]"} w-[100%]`}>
      <div
        style={{
          backgroundImage: upComing
            ? `url(${s ? comingSoonM.src : comingSoon.src})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`bg-[#F0F1F4] rounded-[32px] flex ${
          upComing || s
            ? "flex-col items-center"
            : m
            ? "justify-between pl-[60px]"
            : "justify-between pl-[100px]"
        }  `}
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
          <div
            className={`${
              // !upComing ? l ?"pt-[90px]" :m?"pt-[78.5px]" : "pt-[52.5px]"
              !upComing && l
                ? "py-[78.5px]"
                : !upComing && m
                ? "py-[52.5px]"
                : !upComing && s && "pt-[40px]"
            }`}
          >
            <div
              className={`text-[#4b38db] ${
                s ? "text-[20px]" : "text-[28px]"
              } font-bold font-['OutfitBold'] ${
                upComing ? (s ? "pt-[112px]" : "pt-[146px] text-center") : ""
              } mb-[20px]`}
            >
              {title}
            </div>
            <div
              className={`text-black ${
                s
                  ? "whitespace-pre text-[30px] leading-[35.4px]"
                  : "text-[40px] leading-[52px]"
              } font-extrabold ${
                locale === "ko" && !upComing
                  ? "font-['pretendardExtraBold'] font-extrabold"
                  : "font-['OutfitExtraBold']"
              } uppercase ${
                l ? "w-[426px] pr-[19px] whitespace-pre" : "w-[328px] "
              } ${highlight.includes("wallet-as-a-") && "whitespace-pre"} ${
                highlight.includes("인텔리전스") && "whitespace-pre"
              } ${upComing && "text-center"}`}
            >
              <p>{highlight}</p>
            </div>
            {!s && (
              <div
                className={`text-black font-normal font-['Inter'] mt-[20px] m-auto ${
                  l ? "w-[426px]" : "w-[318px]"
                } ${
                  s
                    ? "text-[16px] leading-[22.4px]"
                    : "text-[20px] leading-[27.2px]"
                } ${!highlight.includes("wallet-as-a-") && "whitespace-pre"} ${
                  highlight.includes("인텔리전스") && "whitespace-pre"
                }`}
              >
                <p>{detail}</p>
              </div>
            )}
            <div
              className={`${
                upComing
                  ? s
                    ? "pb-[112px]"
                    : m
                    ? "pb-[127px]"
                    : "pb-[128px]"
                  : s
                  ? "pt-[20px]"
                  : "pt-[40px]"
              }`}
            >
              {!upComing && <Button button={button} />}
            </div>
          </div>
        </motion.div>
        {img && (
          <div
            className={`flex justify-end ${
              !(title === "ABC Wallet") ? "px-[14px]" : "pt-[41px]"
            }`}
          >
            <Image
              src={
                title === "ABC Wallet" && s && windowWidth > 555
                  ? ABC_Wallet_img_mobile
                  : title === "ABC WaaS" && s
                  ? ABC_Waas_img_mobile
                  : title === "BICScan" && s
                  ? BICScan_img_mobile
                  : img
              }
              // src={img}
              alt="ABC_wallet_img"
              className={`${
                title === "ABC Wallet" ? (s ? "pt-[19.5px]" : "") : s ? "" : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
