"use client";

import partnersList from "@/data/partnersData";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import Image from "next/image";

export default function Partners() {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <div className="bg-white w-full flex justify-center">
      <div
        className={`bg-white w-full ${
          s ? "py-[60px] text-center px-[16px]" : "py-[160px] px-[40px]"
        }  max-w-[1440px] max-auto`}
      >
        <span
          className={`text-black ${
            s ? "text-[28px]" : "text-[50px]"
          } font-extrabold font-['OutfitExtraBold'] uppercase`}
        >
          OUR PARTNERS
        </span>
        <div className={`${s ? "mt-[40px]" : "mt-[60px]"} `}>
          <div className="grid grid-cols-3 gap-2 ">
            {partnersList?.map((item) => (
              <div
                key={item.id}
                className={`bg-[#F0F1F4] flex justify-center items-center aspect-[1] ${
                  s ? "rounded-[3.63px]" : "rounded-[12.8px]"
                } p-[1rem]`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  // width={s && item.width}
                  className="mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
