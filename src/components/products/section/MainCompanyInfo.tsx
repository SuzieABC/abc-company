"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface MainCompanyInfoProps {
  company_name: string;
  company_detail: string;
  locale: string;
}

export default function MainCompanyInfo({
  company_name,
  company_detail,
  locale,
}: MainCompanyInfoProps) {
  const windowWidth = useWindowWidth();

  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth > 1023;

  const titleClass = l
    ? "mx-0 text-[56px] pb-[40px]"
    : m
    ? "text-[32px] leading-[38.40px] pb-[20px]"
    : "w-[208px] text-[32px] leading-[38.40px] pb-[20px]";

  const detailClass = l
    ? "text-3xl"
    : m
    ? "text-base font-light leading-tight"
    : "text-base leading-tight";

  return (
    <div
      id="mainCompanyInfo"
      className={`bg-[#0E0E23] w-screen ${
        windowWidth > 1023 ? "py-[100px]" : "py-[36px]"
      }`}
    >
      <div className="text-center flex flex-col items-center">
        <p
          className={`text-center text-white font-semibold font-outfitSemibold ${titleClass}`}
        >
          {company_name}
        </p>
        <p
          className={`text-center text-white font-[300] ${detailClass} ${
            locale === "ko" ? "font-pretendard" : "font-interLight"
          }`}
        >
          {company_detail}
        </p>
      </div>
    </div>
  );
}
