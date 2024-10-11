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
  const [isExpanded, setIsExpanded] = useState(false); // 상태 추가

  const windowWidth = useWindowWidth();
  const s = windowWidth < 1024;

  const handleShowMore = () => {
    if (!isExpanded) {
      setItemsToShow((prev) => prev + initialItemsToShow);
    } else {
      setItemsToShow(initialItemsToShow); // 처음 6개로 되돌리기
    }
    setIsExpanded((prev) => !prev); // 상태 토글
  };

  return (
    <div
      className={`bg-[#F0F1F4] w-full flex justify-center ${
        s ? "pb-[82.5px]" : "pb-[180px]"
      }`}
      id="media"
    >
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
              className={`bg-white border ${
                s ? "rounded-[12px] mb-[20px]" : "rounded-[7.71px] mb-[38px]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className={`rounded-tl-[7.71px] rounded-tr-[7.71px] w-full ${
                  s ? "h-[160px]" : "h-[245px]"
                }`}
                style={{ objectFit: "cover" }}
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
                    : "text-[23.14px] leading-[31.01px] mb-[58px]"
                }`}
              >
                {item.title}
              </div>
              <button
                className={`bg-[#e0e0e0] uppercase font-['Outfit'] text-black font-medium rounded-[28.92px] py-[9.64px] px-[19.28px] ml-[19px] ${
                  s ? "mb-[24px] text-[13px]" : "mb-[49px] text-[14.09px]"
                }`}
                onClick={handleShowMore} // 버튼 클릭 시 상태 변경
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.tag}
                </a>
              </button>
            </div>
          ))}
        </div>

        <div
          className={`flex w-full justify-center cursor-pointer ${
            s ? "mt-[14.5px]" : "mt-[62px]"
          }`}
        >
          <span
            className={`text-black font-medium font-['Outfit'] uppercase leading-relaxed mr-[8px] flex ${
              s ? "text-[16px]" : "text-[21px]"
            }`}
            onClick={handleShowMore}
          >
            {button}
            <Image
              src={arrowDown}
              alt="arrow down icon"
              className={`ml-[14px] transform ${
                isExpanded ? "rotate-180" : ""
              }`} // 아이콘 회전
            />
          </span>
        </div>
      </div>
    </div>
  );
}
