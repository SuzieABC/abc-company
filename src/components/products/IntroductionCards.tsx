"use client";

import Button from "./Button";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import iphoneXL from "@/assets/images/products/cards/iphone_xl_image.png";
import wassXL from "@/assets/images/products/cards/wass_xl_image.png";
import bicXL from "@/assets/images/products/cards/bic_xl_image.png";
import comingSoon from "@/assets/images/products/kty_bg_pc.svg";
import comingSoonM from "@/assets/images/products/kty_bg_mobile.svg";
import ABC_Waas_img_mobile from "@/assets/images/products/cards/wass_m_image.png";
import BICScan_img_mobile from "@/assets/images/products/cards/bic_m_image.png";

interface IntroductionCardsProps {
  title: string;
  highlight: string;
  detail?: string;
  img?: string | StaticImageData;
  button?: string;
  locale?: string;
  url: string;
}

export default function IntroductionCards({
  title,
  highlight,
  detail,
  img,
  button,
  locale,
  url,
}: IntroductionCardsProps) {
  const upComing = highlight === "Coming Soon";
  const windowWidth = useWindowWidth();

  const xs = windowWidth < 360;
  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth < 1440 && windowWidth > 1023;
  const xl = windowWidth > 1439;

  return (
    <div
      className={`${s || m ? "pb-[20px]" : "text-left pb-[120px]"} w-[100%]`}
    >
      <div
        style={{
          backgroundImage: upComing
            ? `url(${s || m ? comingSoonM.src : comingSoon.src})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`bg-[#F0F1F4] rounded-[32px] flex items-center ${
          upComing || s || m
            ? "flex-col items-center"
            : xl
            ? "justify-between pl-[100px] pr-[40px]"
            : "justify-between pl-[60px]"
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
            className={`${upComing && (s || m) && "pt-[57px]"} ${
              !upComing && (s || m) && "pt-[40px]"
            }`}
          >
            <div
              className={`text-[#4b38db] font-outfitSemibold ${
                s || m ? "text-[20px]" : "text-[28px]"
              } font-bold ${upComing && (s || m) && "pt-[50px]"} ${
                upComing
                  ? s || m
                    ? "pt-[112px]"
                    : "pt-[146px] text-center"
                  : ""
              } mb-[16px] ${
                upComing && locale === "ko"
                  ? "font-pretendardExtrabold"
                  : "font-outfitSemibold"
              }`}
            >
              {title}
            </div>
            <div
              className={`text-black ${
                s || m
                  ? "whitespace-pre text-[30px] leading-[35.4px]"
                  : "text-[40px] leading-[52px]"
              } font-extrabold ${
                locale === "ko" && !upComing
                  ? "font-pretendardExtrabold"
                  : "font-outfitExtrabold"
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
                className={`whitespace-pre text-black font-normal ${
                  locale === "ko" ? "font-pretendardLight" : "font-inter"
                } mt-[20px] m-auto ${l ? "w-[426px]" : "w-[318px]"} ${
                  m
                    ? "text-[16px] leading-[22.4px]"
                    : "text-[20px] leading-[27.2px]"
                }`}
              >
                <p>{detail}</p>
              </div>
            )}
            <div
              className={`${
                upComing
                  ? s || m
                    ? "pb-[112px]"
                    : m
                    ? "pt-[20px]"
                    : "pb-[128px]"
                  : s || m
                  ? "pt-[20px]"
                  : "pt-[40px]"
              }`}
            >
              {!upComing && (
                <Button button={button} url={url} locale={locale} />
              )}
            </div>
          </div>
        </motion.div>
        {img && (
          <div className={`flex justify-end`}>
            <Image
              src={
                title === "ABC Wallet" && (xl || m)
                  ? iphoneXL
                  : title === "ABC WaaS" && l
                  ? wassXL
                  : title === "ABC WaaS" && (s || m)
                  ? ABC_Waas_img_mobile
                  : title === "BICScan" && l
                  ? bicXL
                  : title === "BICScan" && (s || m)
                  ? BICScan_img_mobile
                  : img
              }
              alt={title}
              className={`${l && xl ? "pr-[40px]" : ""} ${
                xl
                  ? "w-[665px] h-[565px]"
                  : l
                  ? "w-[556px] h-[549px] object-left-bottom object-cover"
                  : m && !(title === "ABC Wallet")
                  ? "w-[300px] h-[324px] pt-[25px]"
                  : m && title === "ABC Wallet"
                  ? "w-[460px] h-[419px] object-cover pt-[25px]"
                  : s && !(title === "ABC Wallet")
                  ? "w-[300px] h-[324px] pt-[40px]"
                  : s && title === "ABC Wallet"
                  ? "pt-[40px]"
                  : xs && "object-cover h-[339px]"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
