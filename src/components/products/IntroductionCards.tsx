"use client";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import STRP from "@/assets/images/products/SRTP-Abstract-Background-35.svg";
import STRP1 from "@/assets/images/products/SRTP-Abstract-Background-v3.3_1.svg";
import STRP2 from "@/assets/images/products/SRTP-Abstract-Background-v3.3_2.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface IntroductionCardsProps {
  title: string;
  highlight: string;
  detail?: string;
  img?: string | StaticImageData;
}

export default function IntroductionCards({
  title,
  highlight,
  detail,
  img,
}: IntroductionCardsProps) {
  const upComing = highlight === "Coming Soon";
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <div
      className={`${
        s ? "text-center pb-[20px] " : "text-left pb-[120px]"
      } w-[100%]`}
    >
      <div
        style={{
          // backgroundImage: upComing
          //   ? `url(${STRP.src}), url(${STRP1.src}), url(${STRP2.src})`
          //   : undefined,
          // backgroundPosition: "center, 300px, -300px", // 각 이미지의 위치
          // backgroundSize: "cover, cover, cover", // 모든 이미지에 동일하게 적용
          // backgroundRepeat: "no-repeat", // 반복 여부

          backgroundImage: upComing
            ? `url(${STRP1.src}), url(${STRP2.src}), url(${STRP.src})`
            : undefined,
          backgroundPosition:
            "calc(100% - 0px) -100px, left bottom, center center", // STRP1.src 위치 조정
          backgroundSize: "885px, 885px, 80rem",
          backgroundRepeat: "no-repeat",
        }}
        className={`bg-[#F0F1F4]  rounded-[32px] relative flex flex-wrap ${
          upComing || s
            ? "justify-center flex-col items-center"
            : "justify-between pl-[60px]"
        }  `}
      >
        <div
          className={`${
            l && !upComing ? "pt-[78.5px]" : upComing ? "" : "pt-[52.5px]"
          }`}
        >
          <div
            className={`text-[#4b38db] ${
              s ? "text-[20px]" : "text-[28px]"
            } font-bold font-['OutfitBold'] ${
              upComing ? (s ? "pt-[142px]" : "pt-[146px] text-center") : ""
            } mb-[20px]`}
          >
            {title}
          </div>
          <div
            className={`text-black ${
              s
                ? "text-[30px] leading-[35.4px] whitespace-pre"
                : "text-[40px] leading-[52px] "
            } font-extrabold font-['OutfitExtraBold'] uppercase mb-[20px] ${
              l ? "w-[426px] pr-[19px]" : "w-[328px] "
            } ${highlight.includes("wallet-as-a-") && "whitespace-pre"} ${
              highlight.includes("인텔리전스") && "whitespace-pre"
            } ${upComing && "text-center"}`}
          >
            <p>{highlight}</p>
          </div>
          <div
            className={`text-black font-normal font-['Inter'] m-auto ${
              l ? "w-[426px]" : "w-[318px]"
            } ${
              s
                ? "text-[16px] leading-[22.4px]"
                : "text-[20px] leading-[27.2px]"
            } ${!highlight.includes("wallet-as-a-") && "whitespace-pre"} ${
              highlight.includes("인텔리전스") && "whitespace-pre"
            }`}
          >
            <p>{detail}</p>
          </div>
          <div
            className={`pt-[40px] ${
              upComing
                ? "pb-[80.04px]"
                : l
                ? "pb-[78.5px]"
                : s
                ? "pb-[19.5px]"
                : "pb-[52.5px]"
            }`}
          >
            {!upComing && <Button />}
          </div>
        </div>

        {img && (
          <div>
            {" "}
            <Image
              src={img}
              alt="ABC_wallet_img"
              className={`${
                title === "ABC Wallet"
                  ? s
                    ? "pt-[19.5px]"
                    : "pt-[41px]"
                  : s
                  ? ""
                  : "pt-[65px]"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
