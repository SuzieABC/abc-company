"use client";

import Image from "next/image";
import { /* usePathname, */ useParams } from "next/navigation";
import ciCompanyIcon from "@/assets/icons/ci_company_icon.png";
import ciCompanyImage from "@/assets/images/ci_company_image.png";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

export default function Footer() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");
  const windowWidth = useWindowWidth();

  const menuHeaderStyle =
    "text-white px-[20px] text-black text-base font-bold font-['Outfit'] uppercase tracking-tight mr-[28px] cursor-pointer py-[10px]";
  const menuStyle =
    "text-white py-[10px] px-[20px] text-white/70 text-base font-light font-['Inter'] tracking-tight cursor-pointer";
  const menuHeaderStyleMobile =
    "text-white text-black px-[12px] text-base font-bold font-['Outfit'] uppercase tracking-tight mr-[28px] cursor-pointer text-[14px]";
  const menuStyleMobile =
    "text-white pb-[10px] px-[12px] text-white/70 text-base font-light font-['Inter'] tracking-tight cursor-pointer text-[14px] pt-[10px] text-sm mb-[24px]";

  const Screen1440 = () => {
    return (
      <footer className="p-[40px] max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-between items-start">
          <div className="flex flex-row justify-between items-center min-w-[245px] w-[245px] cursor-pointer">
            <Image src={ciCompanyIcon} alt="" className="w-[54px]" />
            <Image src={ciCompanyImage} alt="" className="w-[180px]" />
          </div>
          <div className="flex">
            <div className="flex flex flex-col pr-[28px]">
              <div className={`${menuHeaderStyle} mr-[28px]`}>
                {t("footer.products.header")}
              </div>
              <span className={menuStyle}>{t("footer.products.item1")}</span>
              <span className={menuStyle}>{t("footer.products.item2")}</span>
              <span className={menuStyle}>{t("footer.products.item3")}</span>
            </div>
            <div className="flex flex flex-col pr-[28px]">
              <div className={menuHeaderStyle}>
                {t("footer.company.header")}
              </div>
              <span className={menuStyle}>{t("footer.company.item1")}</span>
              <span className={menuStyle}>{t("footer.company.item2")}</span>
              <span className={menuStyle}>{t("footer.company.item3")}</span>
              <span className={menuStyle}>{t("footer.company.item4")}</span>
            </div>
            <div className="flex flex flex-col">
              <div className={menuHeaderStyle}>
                {t("footer.connect.header")}
              </div>
              <span className={menuStyle}>{t("footer.connect.item1")}</span>
              <span className={menuStyle}>{t("footer.connect.item2")}</span>
              <span className={menuStyle}>{t("footer.connect.item3")}</span>
              <span className={menuStyle}>{t("footer.connect.item4")}</span>
            </div>
          </div>
        </div>

        <p className="text-white/50 text-sm font-light font-['Inter'] tracking-tight pb-[60px]">
          © AhnLab Blockchain Company. All rights reserved.
        </p>
      </footer>
    );
  };

  const Mobile = () => {
    return (
      <footer className={`px-[16px] pt-[40px] max-w-[1440px] mx-auto`}>
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between items-center min-w-[175px] w-[175px] cursor-pointer pb-[40px]">
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
          <div className={`flex ${windowWidth < 1024 && "flex-col"}`}>
            <div className={`${menuHeaderStyleMobile} mr-[28px]`}>
              {t("footer.products.header")}
            </div>
            <div className={`flex ${windowWidth > 1023 && "flex-col"}`}>
              <span className={menuStyleMobile}>
                {t("footer.products.item1")}
              </span>
              <span className={menuStyleMobile}>
                {t("footer.products.item2")}
              </span>
              <span className={menuStyleMobile}>
                {t("footer.products.item3")}
              </span>
            </div>
            <div className="flex flex flex-col">
              <div className={menuHeaderStyleMobile}>
                {t("footer.company.header")}
              </div>
              <div className={`flex ${windowWidth > 1023 && "flex-col"}`}>
                <span className={menuStyleMobile}>
                  {t("footer.company.item1")}
                </span>
                <span className={menuStyleMobile}>
                  {t("footer.company.item2")}
                </span>
                <span className={menuStyleMobile}>
                  {t("footer.company.item3")}
                </span>
                <span className={menuStyleMobile}>
                  {t("footer.company.item4")}
                </span>
              </div>
            </div>
            <div className="flex flex flex-col">
              <div className={menuHeaderStyleMobile}>
                {t("footer.connect.header")}
              </div>
              <div className={`flex ${windowWidth > 1023 && "flex-col"}`}>
                <span className={menuStyleMobile}>
                  {t("footer.connect.item1")}
                </span>
                <span className={menuStyleMobile}>
                  {t("footer.connect.item2")}
                </span>
                <span className={menuStyleMobile}>
                  {t("footer.connect.item3")}
                </span>
                <span className={menuStyleMobile}>
                  {t("footer.connect.item4")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/50 text-sm font-light font-['Inter'] tracking-tight pb-[80px] pt-[16px] px-[12px]">
          © AhnLab Blockchain Company. All rights reserved.
        </p>
      </footer>
    );
  };
  return (
    <div className="bg-[#0E0E23] w-full overflow-hidden">
      {windowWidth > 1023 ? <Screen1440 /> : <Mobile />}
    </div>
  );
}
