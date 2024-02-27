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
    <section className="flex flex-col max-w-[1140px] w-full text-center pt-[64px] pb-[153px]">
      <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[40px]">
        {translation("portfolio.title")}
      </h2>
      <Portfolio locale={params.locale} />
    </section>
  );
}

export interface Category {
  id: number;
  name: string;
}
