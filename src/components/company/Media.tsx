"use client";

import { useState, useEffect } from "react";
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
  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth > 1023;

  const handleShowMore = () => {
    if (!isExpanded) {
      setItemsToShow((prev) => prev + initialItemsToShow);
    } else {
      setItemsToShow(initialItemsToShow); // 처음 6개로 되돌리기
    }
    setIsExpanded((prev) => !prev); // 상태 토글
  };

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
    }
  }, []);

  return (
    <div
      className={`bg-[#F0F1F4] w-full flex justify-center ${
        s || m ? "pb-[82.5px]" : "pb-[180px]"
      }`}
      id="media"
    >
      <div
        className={`bg-[#F0F1F4] text-black  max-w-[1440px] w-[100%] max-auto ${
          s || m ? "px-[16px]" : "px-[40px]"
        }`}
      >
        <div
          className={`text-black font-extrabold ${
            isIOS
              ? "font-['OutfitBold'] tracking-[-0.03em]"
              : "font-['OutfitExtraBold']"
          } uppercase leading-[70px]   ${
            s || m
              ? "pt-[60px] text-[28px] pb-[40px] text-center"
              : "pt-[160px] text-[50px] pb-[58px]"
          }`}
        >
          Media
        </div>
        <div
          className={`grid ${
            s ? "grid-cols-1" : m ? "grid-cols-2" : "grid-cols-3"
          }    gap-3`}
        >
          {MEDIA_LIST?.slice(0, itemsToShow).map((item) => (
            <a
              href={item.url}
              target="_blank"
              key={item.id}
              className={`bg-white border ${
                s || m
                  ? "rounded-[12px] mb-[20px]"
                  : "rounded-[7.71px] mb-[38px]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className={`rounded-tl-[7.71px] rounded-tr-[7.71px] w-full ${
                  s || m ? "h-[160px]" : "h-[245px]"
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
                className={`px-[19px] pt-[21px]  text-black ${
                  isIOS
                    ? "font-bold font-['Pretendard']"
                    : "font-semibold font-['PretendardLight']"
                } line-clamp-2 break-word ${
                  s || m
                    ? "text-[17px] leading-[22.78px] mb-[16px]"
                    : "text-[23.14px] leading-[31.01px] mb-[58px]"
                }`}
              >
                {item.title}
              </div>
              <button
                className={`bg-[#e0e0e0] uppercase font-['Outfit'] text-black font-medium rounded-[28.92px] py-[9.64px] px-[19.28px] ml-[19px] ${
                  s
                    ? "mb-[24px] text-[13px]"
                    : m
                    ? "mb-[22px] text-[12.125px]"
                    : "mb-[49px] text-[14.09px]"
                }`}
                onClick={handleShowMore} // 버튼 클릭 시 상태 변경
              >
                <div className="uppercase font-['Outfit']">{item.tag}</div>
              </button>
            </a>
          ))}
        </div>

        <div
          className={`flex w-full justify-center cursor-pointer ${
            s || m ? "mt-[14.5px]" : "mt-[62px]"
          }`}
        >
          <span
            className={`text-black font-medium font-['OutfitRegular'] uppercase leading-relaxed mr-[8px] flex ${
              s || m ? "text-[16px]" : "text-[21px]"
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
