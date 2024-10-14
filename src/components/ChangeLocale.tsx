"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  usePathname,
  /* useParams, */
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import worldIcon from "@/assets/icons/world_icon.png";
import worldIcon_colour from "@/assets/icons/world_light.svg";
import Image from "next/image";

interface ChnageLocaleProps {
  bgColor: string;
}

const ChangeLocale = ({ bgColor }: ChnageLocaleProps) => {
  const router = useRouter();
  /* const params = useParams(); */
  const urlSegments = useSelectedLayoutSegments();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 여부 상태
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLocaleChange = (newLocale: string) => {
    // 언어 변경 후 드롭다운 닫기
    setIsDropdownOpen(false);
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 열기/닫기
  };

  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="px-5 relative">
      {/* 공 모양 이미지 버튼 */}
      {bgColor === "transparent" ? (
        <Image
          src={worldIcon} // 원하는 공 모양 이미지 경로로 수정
          alt=""
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={toggleDropdown}
        />
      ) : (
        <Image
          src={worldIcon_colour} // 원하는 공 모양 이미지 경로로 수정
          alt=""
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={toggleDropdown}
        />
      )}

      {/* 드롭다운 메뉴 */}
      {isDropdownOpen && (
        <div
          className="absolute top-10 left-[-17px] h-[88px] px-3 bg-white/90 rounded-xl shadow flex-col justify-center items-start inline-flex"
          ref={dropdownRef}
        >
          <div
            className="w-20 h-11 py-3 justify-center items-center gap-2.5 inline-flex cursor-pointer"
            onClick={() => handleLocaleChange("ko")}
          >
            <span
              className={`text-center text-base font-semibold font-['PretendardLight'] uppercase tracking-tight ${
                !pathname.includes("/en/") ? "text-black" : "text-black/50"
              }`}
            >
              한국어
            </span>
          </div>
          <div className="self-stretch h-[0px] origin-top-center rotate-180 border border-black/20"></div>
          <div
            className="w-20 h-11 py-3 justify-center items-center gap-2.5 inline-flex cursor-pointer"
            onClick={() => handleLocaleChange("en")}
          >
            <span
              className={`text-center  text-base font-semibold font-['PretendardLight'] uppercase tracking-tight ${
                pathname.includes("/en/") ? "text-black" : "text-black/50"
              }`}
            >
              English
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLocale;
