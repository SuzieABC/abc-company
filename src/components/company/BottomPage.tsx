"use client";
import company_bottom_shape_L from "@/assets/images/company/partner_shape_pc_image.svg";
import company_bottom_shape_S from "@/assets/images/company/partner_shape_mobile_image.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { motion } from "framer-motion";

interface BottomPageProps {
  desc: string;
  locale: string;
}

export default function BottomPage({ desc, locale }: BottomPageProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;

  const backgroundImage = s
    ? company_bottom_shape_S.src
    : company_bottom_shape_L.src;

  const contactEmail = () => {
    if (s && windowWidth > 321) {
      return (
        <span>
          contact@
          <br /> ahnlabblockchain.company
        </span>
      );
    } else if (windowWidth < 322) {
      return (
        <span>
          contact
          <br />
          @ahnlabblockchain.
          <br />
          company
        </span>
      );
    }
    return <span>contact@ahnlabblockchain.company</span>;
  };

  return (
    <div
      id="contact"
      className="bg-[#0E0E23] w-full text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center top 25%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`font-outfitExtrabold mix-blend-color-dodge text-[#d9d9d9]  font-extrabold uppercase ${
          s || m
            ? "pb-[24px] mt-[120px] leading-[45.6px] text-[40px]"
            : "pb-[40px] mt-[201px] leading-[70px] text-[50px]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            y: { duration: 1 },
          }}
        >
          {s ? (
            <span>
              BECOME <br /> A PARTNER
            </span>
          ) : (
            <span>BECOME A PARTNER</span>
          )}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className={`${s ? "mb-[122px]" : "mb-[201px]"}`}>
          <p
            className={`pb-[18px] text-center text-white font-light font-outfitLight ${
              s
                ? "text-[24px] px-[30px] leading-[30.24px]"
                : m
                ? "text-[26px] px-[30px] leading-[30.24px]"
                : "text-[40px] leading-[50px]"
            }`}
          >
            {contactEmail()}
          </p>
          <p
            className={`text-center text-white ${
              locale === "ko" ? "font-pretendard" : "font-interLight"
            } leading-[22.1px] ${s && "whitespace-pre"} ${
              s || m ? "text-[17px]" : "text-[22px]"
            }`}
          >
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
