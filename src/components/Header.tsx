"use client";

import { useRef, useState, useEffect } from "react";
import { /* usePathname, */ useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ChangeLocale from "./ChangeLocale";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import {
  /* useParams, */
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { usePathname } from "next/navigation";
import logo_transparent from "@/assets/images/logo_transparent.svg";
import logo_colour from "@/assets/images/logo_colour.svg";
import menu from "@/assets/icons/Menu.svg";
import menu_colour from "@/assets/icons/Menu_colour.svg";
import x from "@/assets/icons/x.svg";

export default function Header() {
  const router = useRouter();
  const urlSegments = useSelectedLayoutSegments();
  //   /*   const pathName = usePathname(); */
  const windowWidth = useWindowWidth();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");

  const items = ["products", "company"];
  const [touchedMenuIcon, setTouchedMenuIcon] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("#fff");
      } else {
        setBgColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div
        className={`flex justify-center fixed w-full z-50 ${
          bgColor === "transparent" ? "bg-[transparent]" : "bg-[#fff]"
        }`}
      >
        <header
          className={`flex flex-col px-10 py-[12px] w-full max-w-[1440px] mx-auto `}
        >
          <div className="flex flex-row w-full justify-between items-center px-2">
            <Link
              href={`/${locale}/products`}
              className="flex flex-row justify-between items-center min-w-[245px] w-[245px]"
            >
              {bgColor === "transparent" ? (
                <Image src={logo_transparent} alt="" />
              ) : (
                <Image src={logo_colour} alt="" />
              )}
            </Link>
            <div className="flex flex-row">
              <nav className="flex flex-row justify-center items-center">
                {items.map((item) => {
                  return (
                    <Link
                      key={item}
                      href={`/${locale}/${item}`}
                      className={`flex flex-row px-5 cursor-pointer justify-center items-center`}
                    >
                      <span
                        className={`w-full h-full text-base font-['OutfitLight'] uppercase tracking-[0.16px] ${
                          bgColor === "transparent"
                            ? "text-white"
                            : "text-black"
                        } ${
                          pathname.includes(item)
                            ? "font-semibold"
                            : bgColor === "transparent"
                            ? "font-light text-white/50"
                            : "font-light text-black/50"
                        }`}
                      >
                        {t(`${item}`)}
                      </span>
                    </Link>
                  );
                })}
              </nav>
              <ChangeLocale bgColor={bgColor} />
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

    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
      if (typeof navigator !== "undefined") {
        setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
      }
    }, []);

    return (
      <div className={`flex justify-center fixed w-full z-50 bg-[${bgColor}]`}>
        <header
          className={`flex flex-col px-[8px] py-[6px] w-full max-w-[1440px] mx-auto`}
        >
          <div className="flex flex-row w-full justify-between items-center px-2">
            <Link
              href={`/${locale}/products`}
              className="flex flex-row justify-between items-center min-w-[175px] w-[175px]"
            >
              {bgColor === "transparent" ? (
                <Image
                  src={logo_transparent}
                  alt="company_logo"
                  className="my-[1.31px]"
                />
              ) : (
                <Image src={logo_colour} alt="company_logo" />
              )}
            </Link>
            <div>
              {bgColor === "transparent" ? (
                <Image
                  src={menu}
                  alt="menu"
                  className="cursor-pointer"
                  onClick={handleTouchStart}
                />
              ) : (
                <Image
                  src={menu_colour}
                  alt="menu"
                  className="cursor-pointer"
                  onClick={handleTouchStart}
                />
              )}
            </div>
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
              className="mx-[16px] mt-[26px] absolute top-0 right-0 cursor-pointer]"
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
                        className={`w-full h-full text-base font-['OutfitLight'] uppercase tracking-tight px-[20px] py-[12px] mb-[8px] ${
                          pathname.includes(item)
                            ? isIOS
                              ? "font-semibold"
                              : "font-bold"
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
                  className={`px-[20px] py-[13px] font-['OutfitLight'] text-center text-base uppercase cursor-pointer ${
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
