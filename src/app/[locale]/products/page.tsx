import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";
import MainTopPage from "@/components/products/section/MainTopPage";
import MainCompanyInfo from "@/components/products/section/MainCompanyInfo";
import Products from "@/components/products/section/Products";
import AboutUs from "@/components/products/section/AboutUs";

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  // Make sure to use the correct namespace here.
  const { t } = await createTranslation(locale, "products");

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <MainTopPage title={t("title")} subTitle={t("subtitle")} />
      <MainCompanyInfo
        company_name={t("company_name")}
        company_detail={t("company_detail")}
      />
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
      />
      <AboutUs buttonText={t("about_us_button")} />
    </div>
  );
}
