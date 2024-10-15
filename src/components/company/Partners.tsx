"use client";

import { useState, useEffect } from "react";
import partnersList from "@/data/partnersData";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  const l = windowWidth > 1023;

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
    }
  }, []);

  return (
    <div className="bg-white w-full flex justify-center" id="partners">
      <div
        className={`bg-white w-full ${
          s || m ? "py-[60px] text-center px-[16px]" : "py-[160px] px-[40px]"
        }  max-w-[1440px] max-auto`}
      >
        <span
          className={`text-black ${s || m ? "text-[28px]" : "text-[50px]"} ${
            isIOS
              ? "font-['OutfitBold'] tracking-[-0.03em]"
              : "font-['OutfitExtraBold']"
          } font-extrabold uppercase`}
        >
          OUR PARTNERS
        </span>
        <div className={`${s || m ? "mt-[40px]" : "mt-[60px]"} `}>
          <div
            className={`grid grid-cols-3 ${
              s || m ? "gap-[7.96px]" : "gap-[15.82px]"
            }`}
          >
            {partnersList?.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  y: { duration: 1 },
                }}
              >
                <div
                  key={item.id}

                  // className={`bg-[#F0F1F4] flex justify-center items-center aspect-[1] ${
                  //   s ? "rounded-[3.63px]" : "rounded-[12.8px]"
                  // } p-[1rem]`}
                >
                  <Image
                    src={s || m ? item.image_s : item.image}
                    alt={item.name}
                    className="mix-blend-multiply w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
