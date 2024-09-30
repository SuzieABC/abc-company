"use client";

import { useState } from "react";
import Image from "next/image";
import MEDIA_LIST from "@/data/mediaData";
import arrowDown from "@/assets/icons/arrow_down.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface MediaProps {
  button: string;
}

export default function Media({ button }: MediaProps) {
  const initialItemsToShow = 6;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + initialItemsToShow);
  };

  return (
    <div className="bg-[#F0F1F4] w-full flex justify-center">
      <div
        className={`bg-[#F0F1F4] text-black  max-w-[1440px] w-[100%] max-auto ${
          s ? "px-[16px]" : "px-[40px]"
        }`}
      >
        <div
          className={`text-black font-extrabold font-['OutfitExtraBold'] uppercase leading-[70px]   ${
            s
              ? "pt-[60px] text-[28px] pb-[40px] text-center"
              : "pt-[160px] text-[50px] pb-[58px]"
          }`}
        >
          Media
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {MEDIA_LIST?.slice(0, itemsToShow).map((item) => (
            <div
              key={item.id}
              className={` bg-white border ${
                s ? "rounded-[12px] mb-[20px]" : "rounded-[7.71px] mb-[38px]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-tl-[7.71px] rounded-tr-[7.71px] h-[255px]"
              />

              <div
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2, // 두 줄로 제한
                  overflow: "hidden",
                  wordBreak: "break-word",
                }}
                className={`px-[19px] pt-[21px]  text-black font-semibold font-['Pretendard'] line-clamp-2 break-word ${
                  s
                    ? "text-[17px] leading-[22.78px] mb-[16px]"
                    : m
                    ? "text-[22.54px] mb-[57px] leading-[30.21px]"
                    : "text-[23.14px] leading-[31.01px] mb-[58px]"
                }`}
              >
                {item.title}
              </div>
              <button
                className={`bg-[#e0e0e0] uppercase font-['Outfit'] text-black font-medium rounded-[28.92px] py-[9.64px] px-[19.28px] ml-[19px]  ${
                  s ? "mb-[24px] text-[13px]" : "mb-[49px] text-[14.09px]"
                }`}
              >
                <a href={item.url} target="_blank">
                  Product
                </a>
              </button>
            </div>
          ))}
        </div>
        {itemsToShow < MEDIA_LIST.length && (
          <div
            className={`flex w-full justify-center cursor-pointer  ${
              s ? "pb-[82.5px] mt-[14.5px]" : "pb-[180px] mt-[62px]"
            }`}
          >
            <span
              className={`text-black font-medium font-['Outfit'] uppercase leading-relaxed mr-[8px] ${
                s ? "text-[16px]" : "text-[21px]"
              }`}
              onClick={handleShowMore}
            >
              {button}
            </span>
            <Image src={arrowDown} alt="arrow down icon" />
          </div>
        )}
      </div>
    </div>
  );
}
