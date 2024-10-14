"use client";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import comingSoon from "@/assets/images/products/comingSoon.svg";
import comingSoonM from "@/assets/images/products/comingSoon_m.svg";
import ABC_Wallet_img_mobile from "@/assets/images/products/aaa.svg";
import ABC_Waas_img_mobile from "@/assets/images/products/cards/wass_M.png";
import BICScan_img_mobile from "@/assets/images/products/cards/bic_M.png";
import { motion } from "framer-motion";

import iphoneXL from "@/assets/images/products/cards/iphone_XL.png";
import wassXL from "@/assets/images/products/cards/wass_XL.png";
import bicXL from "@/assets/images/products/cards/bic_XL.png";

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

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const xs = windowWidth < 360;
  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth > 1439;

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
            : l
            ? "justify-between pl-[100px]"
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
            className={`${
              // !upComing ? l ?"pt-[90px]" :m?"pt-[78.5px]" : "pt-[52.5px]"
              !upComing && l
                ? "py-[78.5px]"
                : // : !upComing && m
                  // ? "py-[52.5px]"
                  !upComing && (s || m) && "pt-[40px]"
            }`}
          >
            <div
              className={`text-[#4b38db] ${
                isIOS
                  ? "font-['Outfit'] font-extrabold tracking-[-0.03em]"
                  : "font-['OutfitBold']"
              } ${s || m ? "text-[20px]" : "text-[28px]"} font-bold ${
                upComing
                  ? s || m
                    ? "pt-[112px]"
                    : "pt-[146px] text-center"
                  : ""
              } mb-[16px] ${
                upComing && locale === "ko"
                  ? isIOS
                    ? "font-['PretendardBold']"
                    : "font-['PretendardBold']"
                  : ""
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
                  ? isIOS
                    ? `font-['pretendard'] font-extrabold tracking-[-0.03em]`
                    : "font-['pretendardExtraBold'] font-extrabold"
                  : isIOS
                  ? `font-['Outfit'] font-extrabold tracking-[-0.03em]`
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
                className={`text-black font-normal ${
                  locale === "ko"
                    ? "font-['PretendardLight']"
                    : "font-['Inter']"
                } mt-[20px] m-auto ${l ? "w-[426px]" : "w-[318px]"} ${
                  m
                    ? "text-[16px] leading-[22.4px]"
                    : "text-[20px] leading-[27.2px]"
                } ${!highlight.includes("wallet-as") && "whitespace-pre"}`}
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
          <div
            className={`flex justify-end ${
              !(title === "ABC Wallet") ? "px-[14px] pt-[40px]" : "pt-[27.95px]"
            }`}
          >
            <Image
              src={
                title === "ABC Wallet" && l
                  ? iphoneXL
                  : title === "ABC Wallet" && (s || m)
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
              alt="ABC_wallet_img"
              className={`${
                title === "ABC Wallet" && l
                  ? "mr-[40px] w-[647px] h-[537px]"
                  : m
                  ? "w-[647px] h-[537px] object-cover"
                  : "w-[529px] h-[537px]"
              } ${
                title === "ABC Wallet"
                  ? s || m
                    ? "pt-[30px] object-cover"
                    : ""
                  : xs
                  ? "object-cover"
                  : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
