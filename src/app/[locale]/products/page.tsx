import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";
import MainTopPage from "@/components/products/section/MainTopPage";
import MainCompanyInfo from "@/components/products/section/MainCompanyInfo";
import Products from "@/components/products/section/Products";
import AboutUs from "@/components/products/section/AboutUs";
import * as motion from "framer-motion/client";

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  // Make sure to use the correct namespace here.
  const { t } = await createTranslation(locale, "products");

  return (
    <div className="flex flex-col justify-center items-center text-center w-screen">
      <MainTopPage
        title={t("title")}
        subTitle={t("subtitle")}
        locale={locale}
      />
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
        <MainCompanyInfo
          company_name={t("company_name")}
          company_detail={t("company_detail")}
          locale={locale}
        />
      </motion.div>

      <Products
        walletTitle={t(`item.wallet.title`)}
        walletHighlight={t("item.wallet.highlight")}
        walletDetail={t("item.wallet.detail")}
        waasTitle={t(`item.waas.title`)}
        waasHighlight={t("item.waas.highlight")}
        waasDetail={t("item.waas.detail")}
        bicTitle={t(`item.BIC.title`)}
        bicHighlight={t("item.BIC.highlight")}
        bicDetail={t("item.BIC.detail")}
        kytTitle={t("item.KYT.title")}
        kytHighlight={t("item.KYT.highlight")}
        button={t("products_button")}
        locale={locale}
      />

      <AboutUs buttonText={t("about_us_button")} />
    </div>
  );
}
