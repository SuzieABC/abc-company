"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";
import Company_to_bg from "@/assets/images/company/Company_top_bg.svg";

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
        backgroundImage: `url(${Company_to_bg.src}`,
        backgroundPosition: "0px 0px, right top, left bottom",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "100% auto",
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

      <div
        className={`text-center text-white pt-[20px] font-['InterExtraLight'] leading-7 font-[350] ${
          windowWidth > 1023
            ? "text-[22px] whitespace-pre"
            : "text-base w-[296px]"
        }`}
      >
        {subTitle}
      </div>
    </div>
  );
}
