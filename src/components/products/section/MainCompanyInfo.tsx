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

  return (
    <div
      className={`bg-[#0E0E23] w-screen ${
        windowWidth > 1023 ? "py-[100px]" : "py-[36px]"
      }`}
    >
      <div className="text-center flex flex-col items-center">
        <p
          className={`text-center text-white  font-semibold font-['Outfit'] ${
            windowWidth > 1023
              ? "mx-0 text-[56px] pb-[40px]"
              : "w-[208px] text-[32px] leading-[38.40px] pb-[20px]"
          }`}
        >
          {company_name}
        </p>
        <p
          className={`text-center text-white  font-[300] ${
            windowWidth > 1023
              ? "text-3xl"
              : "text-base leading-tight whitespace-pre"
          } ${locale === "ko" ? "font-['Pretendard']" : "font-['Inter']"}`}
        >
          {company_detail}
        </p>
      </div>
    </div>
  );
}
