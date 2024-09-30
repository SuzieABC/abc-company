"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";
import product_top_bg from "@/assets/images/products/product_top_bg.svg";

interface MainTopPageProps {
  title: string;
  subTitle: string;
}

export default function MainTopPage({ title, subTitle }: MainTopPageProps) {
  const windowWidth = useWindowWidth();
  return (
    <div
      className="h-screen flex flex-col justify-center items-center w-full"
      style={{
        backgroundImage: `url(${product_top_bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover", // 이미지를 화면에 맞게 조정
      }}
    >
      <div
        className={`text-center text-white  font-extrabold font-['OutfitExtraBold'] uppercase whitespace-pre-wrap flex-wrap ${
          windowWidth > 1023
            ? "text-[70px] leading-[84px] w-[593px]"
            : "text-[40px] leading-[49.6px] w-[258px]"
        }`}
      >
        {title}
      </div>
      {windowWidth > 1023 && (
        <div
          className={`text-center text-white pt-[20px] font-['InterExtraLight'] leading-7 font-[350] text-[22px] whitespace-pre`}
        >
          {subTitle}
        </div>
      )}
    </div>
  );
}
