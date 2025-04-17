import { Locale } from "@/i18n";
import { Category } from "./Portfolio";
import { TabsTrigger } from "./ui/tabs";

type Props = {
  tabs: Category[] | null;
  setCategory: (category: null | number) => void;
  handlePageChange: (page: number) => void;
  locale: Locale;
}

export default function Categories({
  tabs,
  setCategory,
  handlePageChange,
  locale
}: Props) {
  return(
    <div className="flex overflow-x-auto whitespace-nowrap">
      <TabsTrigger
        key="tab-trigger-all"
        value="all"
        className="shrink-0 py-[10px] px-[12px] border-b-[3px] rounded-none text-black/75 border-border/10 leading-[1.4] tracking-[-0.14px] text-[14px] transition-colors hover:border-border/30 data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:font-bold md:tracking-[-0.18px] md:text-[18px] md:py-3 md:px-5"
        onClick={() => {
          setCategory(null);
          window.gtag_report_conversion();
          handlePageChange(1);
        }}
      >
        {locale === "en" ? "All models" : (locale === "uz" ? "Barcha modellar" : "Все модели")}
      </TabsTrigger>
      {
        tabs?.map((tab: Category) => (
          <TabsTrigger
            key={tab.id}
            value={tab[`name_${locale}`] || `category-${tab.id}`}
            className="shrink-0 py-[10px] px-[12px] border-b-[3px] rounded-none text-black/75 border-border/10 leading-[1.4] tracking-[-0.14px] text-[14px] transition-colors hover:border-border/30 data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:font-bold md:tracking-[-0.18px] md:text-[18px] md:py-3 md:px-5"
            onClick={() => {
              setCategory(tab.id);
              window.gtag_report_conversion();
              handlePageChange(1);
            }}
          >
            {tab[`name_${locale}`]}
          </TabsTrigger>
        ))
      }
    </div>
  )
}