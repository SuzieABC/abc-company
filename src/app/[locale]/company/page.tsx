import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";
import Media from "@/components/company/Media";
import Partners from "@/components/company/Partners";
import TopPage from "@/components/company/TopPage";
import BottomPage from "@/components/company/BottomPage";

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, "company");

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <TopPage
        desc={t("description")}
        desc_m={t("description_m")}
        desc_t={t("description_t")}
        desc_l={t("description_l")}
        desc_xl={t("description_xl")}
        desc_m_1={t("description_t_m_1")}
        desc_m_2={t("description_t_m_2")}
        locale={locale}
      />
      <Partners />
      <Media button={t(`load_more_button`)} />
      <BottomPage desc={t("partner_description")} locale={locale} />
    </div>
  );
}
