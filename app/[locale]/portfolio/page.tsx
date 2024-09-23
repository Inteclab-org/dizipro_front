import Portfolio from "@/components/Portfolio";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";

interface Props {
  params: {
    locale: Locale;
  };
};

export default async function PortfolioPage({params}: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <section className="flex flex-col max-w-[1140px] px-4 w-full text-center pt-[24px] pb-[100px] md:pt-[64px] md:pb-[153px]">
      <h2 className="tracking-[-0.56px] leading-[1.2] text-[28px] uppercase font-semibold mb-[16px] md:mb-[40px] md:text-[52px] md:tracking-[-1.04px] md:leading-[68px]">
        {translation("portfolio.title")}
      </h2>
      <Portfolio locale={params.locale} />
    </section>
  );
}

export interface Category {
  id: number;
  name_ru: string;
  name_en: string;
  name_uz: string;
}
