"use client";

import { /* usePathname, */ useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ChangeLocale from "./ChangeLocale";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import ciCompanyIcon from "@/assets/icons/ci_company_icon.png";
import ciCompanyImage from "@/assets/images/ci_company_image.png";
import { useRef, useState, useEffect } from "react";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import menu from "@/assets/icons/Menu.svg";
import x from "@/assets/icons/x.svg";
import {
  /* useParams, */
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const urlSegments = useSelectedLayoutSegments();
  //   /*   const pathName = usePathname(); */
  const windowWidth = useWindowWidth();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");

  const items = ["products", "company"];
  const [touchedMenuIcon, setTouchedMenuIcon] = useState(false);

  const pathname = usePathname();

  const handleTouchStart = () => {
    setTouchedMenuIcon(!touchedMenuIcon);
  };

  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  useEffect(() => {
    setTouchedMenuIcon(false);
  }, [pathname]);

  const Screen1440 = () => {
    return (
      <div className="flex justify-center bg-[#211837] fixed w-full z-50">
        <header className="flex flex-col px-10 py-5 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-row w-full justify-between items-center px-2">
            <Link
              href="/company"
              className="flex flex-row justify-between items-center min-w-[245px] w-[245px]"
            >
              <Image src={ciCompanyIcon} alt="" className="w-[54px]" />
              <Image src={ciCompanyImage} alt="" className="w-[180px]" />
            </Link>
            <div className="flex flex-row">
              <nav className="flex flex-row justify-center items-center">
                {items.map((item) => {
                  return (
                    <Link
                      key={item}
                      href={`/${locale}/${item}`}
                      className={`flex flex-row px-5 cursor-pointer justify-center items-center text-white`}
                    >
                      <span
                        className={`w-full h-full text-base font-['Outfit'] uppercase tracking-tight ${
                          pathname.includes(item)
                            ? "font-bold"
                            : "font-thin text-white/50"
                        }`}
                      >
                        {t(`${item}`)}
                      </span>
                    </Link>
                  );
                })}
              </nav>
              <ChangeLocale />
            </div>
          </div>
        </header>
      </div>
    );
  };

  const Mobile = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent | null) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e?.target as Node)
      ) {
        setTouchedMenuIcon(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div className="flex justify-center bg-[#211837] fixed w-full z-50">
        <header className="flex flex-col px-[8px] py-[6px] w-full max-w-[1440px] mx-auto">
          <div className="flex flex-row w-full justify-between items-center px-2">
            <div className="flex flex-row justify-between items-center min-w-[175px] w-[175px] cursor-pointer">
              <Image
                src={ciCompanyIcon}
                alt="company logo"
                className="w-[38.38px]"
              />
              <Image
                src={ciCompanyImage}
                alt="company name"
                className="w-[128.47px]"
              />
            </div>
            <Image
              src={menu}
              alt="menu"
              className="cursor-pointer"
              onClick={handleTouchStart}
            />
          </div>
        </header>
        {touchedMenuIcon && (
          <div
            className="flex flex-col absolute top-0 bg-[#0E0E23] pt-[62px] pb-[24px] w-full"
            ref={dropdownRef}
          >
            <Image
              src={x}
              alt="close"
              onClick={handleTouchStart}
              className="mx-[16px] mt-[26px] absolute top-0 right-0 cursor-pointer"
            />
            <div className="mt-[10px]">
              <nav className="flex flex-col justify-center items-center">
                {items.map((item) => {
                  return (
                    <Link
                      key={item}
                      href={`/${locale}/${item}`}
                      className={`flex flex-row px-5 cursor-pointer justify-center items-center text-white pb-[8px]`}
                    >
                      <span
                        className={`w-full h-full text-base font-['Outfit'] uppercase tracking-tight px-[20px] py-[12px] mb-[8px] ${
                          pathname.includes(item)
                            ? "font-bold"
                            : "font-light text-white/50"
                        }`}
                      >
                        {t(`${item}`)}
                      </span>
                    </Link>
                  );
                })}
              </nav>
              <div className="flex justify-center text-white text-center">
                <span
                  className={`px-[20px] py-[13px] font-['Pretendard']text-center text-base  cursor-pointer ${
                    !pathname.includes("/en/")
                      ? "font-semibold"
                      : "text-white/50 font-light"
                  }`}
                  onClick={() => handleLocaleChange("ko")}
                >
                  한국어
                </span>
                <div className="w-[1px] h-[20px] bg-white/30 mt-[13.5px]"></div>
                <span
                  className={`px-[20px] py-[13px] font-['Pretendard'] text-center text-base uppercase cursor-pointer ${
                    pathname.includes("/en/")
                      ? "font-semibold"
                      : "text-white/50 font-light"
                  }`}
                  onClick={() => handleLocaleChange("en")}
                >
                  ENGLISH
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return <>{windowWidth > 1023 ? <Screen1440 /> : <Mobile />}</>;
}
