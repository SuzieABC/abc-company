"use client";

import { useRef, useState, useEffect } from "react";
import { /* usePathname, */ useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ChangeLocale from "./ChangeLocale";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { usePathname } from "next/navigation";
import logo_transparent from "@/assets/images/company_logo_white_image.svg";
import logo_colour from "@/assets/images/company_logo_black_image.svg";
import menu from "@/assets/icons/hamburger_menu_icon.svg";
import menu_colour from "@/assets/icons/hamburger_menu_black_icon.svg";
import x from "@/assets/icons/closing_button_icon.svg";

export default function Header() {
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
                        className={`text-base uppercase tracking-[0.16px] ${
                          bgColor === "transparent"
                            ? "text-white"
                            : "text-black"
                        } ${
                          pathname.includes(item)
                            ? "font-light font-outfitSemibold"
                            : bgColor === "transparent"
                            ? "text-white/50 font-outfitLight"
                            : "text-black/50 font-outfitLight"
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
            className="flex flex-col absolute top-0 bg-[#0E0E23] pt-[62px] pb-[48px] w-full"
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
                        className={`w-full h-full text-base  uppercase tracking-tight px-[20px] py-[12px] mb-[8px] ${
                          pathname.includes(item)
                            ? "font-outfitSemibold"
                            : "font-outfitLight text-white/50"
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
        )}
      </div>
    );
  };

  return <>{windowWidth > 1023 ? <Screen1440 /> : <Mobile />}</>;
}
