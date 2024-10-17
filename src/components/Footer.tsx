"use client";

import Image from "next/image";
import { /* usePathname, */ useParams } from "next/navigation";
import ciCompanyIcon from "@/assets/icons/ci_company_icon.png";
import ciCompanyImage from "@/assets/images/ci_company_image.png";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");
  const windowWidth = useWindowWidth();
  const pathname = usePathname();

  // const s = windowWidth < 600;
  // const m = windowWidth > 599 && windowWidth < 1024;
  // const l = windowWidth > 1023;

  const menuHeaderStyle = `text-white px-[20px] text-black text-base font-bold font-outfitSemibold uppercase tracking-[0.14px] mr-[28px] py-[10px] smooth-scroll`;
  const menuStyle =
    "text-white py-[10px] px-[20px] text-white/70 text-base font-light font-interLight tracking-[0.14px] cursor-pointer smooth-scroll";
  const menuHeaderStyleMobile = `text-white text-black px-[12px] text-base font-outfitSemibold uppercase tracking-[0.14px] mr-[28px] cursor-pointer text-[14px] smooth-scroll`;
  const menuStyleMobile =
    "text-white pb-[10px] px-[12px] text-white/70 text-base font-light font-interLight tracking-[0.14px] cursor-pointer text-[14px] pt-[10px] text-sm mb-[24px] smooth-scroll";

  const Screen1440 = () => {
    return (
      <footer className="p-[40px] max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-between items-start">
          <div className="flex flex-row justify-between items-center min-w-[245px] w-[245px]">
            <Image src={ciCompanyIcon} alt="logo" className="w-[54px]" />
            <Image src={ciCompanyImage} alt="logo" className="w-[180px]" />
          </div>
          <div className="flex">
            <div className="flex flex-col pr-[28px]">
              <Link href={`/${locale}/products#abcWallet`}>
                <div className={`${menuHeaderStyle} mr-[28px]`}>
                  {t("footer.products.header")}
                </div>
              </Link>

              <Link
                href={`/${locale}/products#abcWallet`}
                /**Scroll to the section */
                // onClick={() => scrollTo("abcWallet")}
                className={menuStyle}
              >
                <span>{t("footer.products.item1")}</span>
              </Link>
              <Link href={`/${locale}/products#abcWaas`} className={menuStyle}>
                <span>{t("footer.products.item2")}</span>
              </Link>
              <Link href={`/${locale}/products#bicScan`} className={menuStyle}>
                <span>{t("footer.products.item3")}</span>
              </Link>
            </div>
            <div className="flex flex-col pr-[28px]">
              <Link href={`/${locale}/company`}>
                <div className={menuHeaderStyle}>
                  {t("footer.company.header")}
                </div>
              </Link>
              <Link href={`/${locale}/company/#about`} className={menuStyle}>
                <span>{t("footer.company.item1")}</span>
              </Link>
              <Link href={`/${locale}/company/#partners`} className={menuStyle}>
                <span>{t("footer.company.item2")}</span>
              </Link>
              <Link href={`/${locale}/company/#media`} className={menuStyle}>
                <span>{t("footer.company.item3")}</span>
              </Link>
              <Link href={`/${locale}/company/#contact`} className={menuStyle}>
                <span>{t("footer.company.item4")}</span>
              </Link>
            </div>
            <div className="flex flex-col">
              <div className={menuHeaderStyle}>
                {t("footer.connect.header")}
              </div>
              <Link
                target="_blank"
                href="https://www.facebook.com/abcwallet2022"
                className={menuStyle}
              >
                <span>{t("footer.connect.item1")}</span>
              </Link>

              <Link
                target="_blank"
                href="https://x.com/AhnLab_ABC"
                className={menuStyle}
              >
                <span>{t("footer.connect.item2")}</span>
              </Link>
              <Link
                target="_blank"
                href="https://medium.com/@AhnLabBlockchainCompany"
                className={menuStyle}
              >
                <span>{t("footer.connect.item3")}</span>
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@ABC_Wallet"
                className={menuStyle}
              >
                <span>{t("footer.connect.item4")}</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="text-white/50 text-sm font-light font-interLight tracking-tight pb-[60px]">
          © AhnLab Blockchain Company. All rights reserved.
        </p>
      </footer>
    );
  };

  const Mobile = () => {
    return (
      <footer className={`px-[16px] pt-[40px] max-w-[1440px] mx-auto`}>
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between items-center min-w-[175px] w-[175px] pb-[40px]">
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
            <Link href={`/${locale}/products#abcWallet`}>
              <div className={`${menuHeaderStyleMobile} mr-[28px]`}>
                {t("footer.products.header")}
              </div>
            </Link>
            <div className={`flex ${windowWidth > 1023 && "flex-col"}`}>
              <Link
                className={menuStyleMobile}
                href={`/${locale}/products#abcWallet`}
              >
                <span>{t("footer.products.item1")}</span>
              </Link>
              <Link
                href={`/${locale}/products#abcWaas`}
                className={menuStyleMobile}
              >
                <span>{t("footer.products.item2")}</span>
              </Link>
              <Link
                href={`/${locale}/products#bicScan`}
                className={menuStyleMobile}
              >
                <span>{t("footer.products.item3")}</span>
              </Link>
            </div>

            <div className="flex flex flex-col">
              <Link
                href={pathname.includes("en") ? "/en/company" : "/company"}
                className={menuHeaderStyleMobile}
              >
                <div>{t("footer.company.header")}</div>
              </Link>
              <div className={`flex ${windowWidth > 1023 && "flex-col"}`}>
                <Link
                  href={`/${locale}/company/#about`}
                  className={menuStyleMobile}
                >
                  <span>{t("footer.company.item1")}</span>
                </Link>
                <Link
                  href={`/${locale}/company/#partners`}
                  className={menuStyleMobile}
                >
                  <span>{t("footer.company.item2")}</span>
                </Link>
                <Link
                  href={`/${locale}/company/#media`}
                  className={menuStyleMobile}
                >
                  <span>{t("footer.company.item3")}</span>
                </Link>
                <Link
                  href={`/${locale}/company/#contact`}
                  className={menuStyleMobile}
                >
                  <span>{t("footer.company.item4")}</span>
                </Link>
              </div>
            </div>
            <div className="flex flex flex-col">
              <div className={menuHeaderStyleMobile}>
                {t("footer.connect.header")}
              </div>
              <div className={`flex ${windowWidth > 1023 && "flex-col"}`}>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/abcwallet2022"
                  className={menuStyleMobile}
                >
                  <span>{t("footer.connect.item1")}</span>
                </Link>

                <Link
                  target="_blank"
                  href="https://x.com/AhnLab_ABC"
                  className={menuStyleMobile}
                >
                  <span>{t("footer.connect.item2")}</span>
                </Link>
                <Link
                  target="_blank"
                  href="https://medium.com/@AhnLabBlockchainCompany"
                  className={menuStyleMobile}
                >
                  <span>{t("footer.connect.item3")}</span>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@ABC_Wallet"
                  className={menuStyleMobile}
                >
                  <span>{t("footer.connect.item4")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/50 text-[12px] font-light font-interLightß tracking-[0.12px] pb-[80px] pt-[16px] px-[12px]">
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
