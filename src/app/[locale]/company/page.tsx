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
  // Make sure to use the correct namespace here.
  const { t } = await createTranslation(locale, "company");

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <TopPage desc={t("description")} />
      <Partners />
      <Media button={t(`load_more_button`)} />
      <BottomPage desc={t("partner_description")} />
    </div>
  );
}
