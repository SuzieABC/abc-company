"use client";

import IntroductionCards from "@/components/products/IntroductionCards";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import ABC_Wallet_img from "@/assets/images/products/cards/iphone_L.png";
import ABC_WaaS_img from "@/assets/images/products/waasImage2.svg";
import BICScan_img from "@/assets/images/products/bicImage2.svg";
// import test from "@/assets/images/products/test.png";

interface ProductsProps {
  walletTitle: string;
  walletHighlight: string;
  walletDetail: string;
  waasTitle: string;
  waasHighlight: string;
  waasDetail: string;
  bicTitle: string;
  bicHighlight: string;
  bicDetail: string;
  kytTitle: string;
  kytHighlight: string;
  button: string;
  locale: string;
}

export default function Products({
  walletTitle,
  walletHighlight,
  walletDetail,
  waasTitle,
  waasHighlight,
  waasDetail,
  bicTitle,
  bicHighlight,
  bicDetail,
  kytTitle,
  kytHighlight,
  button,
  locale,
}: ProductsProps) {
  const windowWidth = useWindowWidth();
  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth > 1023;

  return (
    <div
      className={`flex flex-col justify-center items-center  pb-[40px] ${
        windowWidth > 1023 ? "px-[40px] pt-[160px]" : "px-[16px] pt-[60px]"
      } w-full overflow-y-scroll bg-white`}
    >
      <div className="max-w-[1440px] w-[100%] max-auto">
        <div
          id="abcWallet"
          style={{
            scrollMarginTop: s || m ? "53px" : "78px",
          }}
        >
          <IntroductionCards
            title={walletTitle}
            highlight={walletHighlight}
            detail={walletDetail}
            img={ABC_Wallet_img}
            button={button}
            locale={locale}
            url="https://myabcwallet.io"
          />
        </div>

        <div
          id="abcWaas"
          style={{
            scrollMarginTop: s || m ? "53px" : "78px",
          }}
        >
          <IntroductionCards
            title={waasTitle}
            highlight={waasHighlight}
            detail={waasDetail}
            img={ABC_WaaS_img}
            button={button}
            locale={locale}
            url="https://abcwaas.com"
          />
        </div>

        <div
          id="bicScan"
          style={{
            scrollMarginTop: s || m ? "53px" : "78px",
          }}
        >
          <IntroductionCards
            title={bicTitle}
            highlight={bicHighlight}
            detail={bicDetail}
            img={BICScan_img}
            button={button}
            locale={locale}
            url="https://bicscan.io/"
          />
        </div>

        <IntroductionCards
          title={kytTitle}
          highlight={kytHighlight}
          locale={locale}
          url={`${locale}/company`}
        />
      </div>
    </div>
  );
}
