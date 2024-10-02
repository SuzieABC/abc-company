"use client";

import IntroductionCards from "@/components/products/IntroductionCards";
import ABC_Wallet_img from "@/assets/images/products/bbb.svg";
// import ABC_Wallet_img from "@/assets/images/products/aaa.svg";
// import ABC_WaaS_img from "@/assets/images/products/ABC WaaS_img.svg";
// import BICScan_img from "@/assets/images/products/BICScan_img.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

// import ABC_Wallet_img from "@/assets/images/products/bbb.svg";
import ABC_WaaS_img from "@/assets/images/products/waasImage2.svg";
import BICScan_img from "@/assets/images/products/bicImage2.svg";
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

  return (
    <div
      className={`flex flex-col justify-center items-center  pb-[40px] ${
        windowWidth > 1023 ? "px-[40px] pt-[160px]" : "px-[16px] pt-[40px]"
      } w-[100%] bg-white`}
    >
      <div className="max-w-[1440px] w-[100%] max-auto">
        <div
          id="abcWallet"
          style={{
            scrollMarginTop: "94px",
          }}
        >
          {" "}
          <IntroductionCards
            title={walletTitle}
            highlight={walletHighlight}
            detail={walletDetail}
            img={ABC_Wallet_img}
            button={button}
            locale={locale}
          />
        </div>

        <div
          id="abcWaas"
          style={{
            scrollMarginTop: "94px",
          }}
        >
          {" "}
          <IntroductionCards
            title={waasTitle}
            highlight={waasHighlight}
            detail={waasDetail}
            img={ABC_WaaS_img}
            button={button}
            locale={locale}
          />
        </div>

        <div
          id="bicScan"
          style={{
            scrollMarginTop: "94px",
          }}
        >
          {" "}
          <IntroductionCards
            title={bicTitle}
            highlight={bicHighlight}
            detail={bicDetail}
            img={BICScan_img}
            button={button}
            locale={locale}
          />
        </div>

        <IntroductionCards
          title={kytTitle}
          highlight={kytHighlight}
          locale={locale}
        />
      </div>
    </div>
  );
}
