import { Category } from "./Portfolio";
import { TabsTrigger } from "./ui/tabs";

type Props = {
  tabs: Category[] | null;
  setCategory: (category: null | number) => void;
  handlePageChange: (page: number) => void;
}

export default function Categories({
  tabs,
  setCategory,
  handlePageChange
}: Props) {
  return(
    <>
      <TabsTrigger
        key="tab-trigger-all"
        value="all"
        className="border-b-[3px] py-3 px-5 rounded-none border-border/10 font-bold leading-[140%] tracking-[-0.18px] text-[18px] transition-colors hover:border-border/30 data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary"
        onClick={() => {
          setCategory(null);
          handlePageChange(1);
        }}
      >
        All models
      </TabsTrigger>
      {
        tabs?.map((tab: Category) => (
          <TabsTrigger
            key={tab.id}
            value={tab.name}
            className="border-b-[3px] py-3 px-5 rounded-none border-border/10 font-bold leading-[140%] tracking-[-0.18px] text-[18px] transition-colors hover:border-border/30 data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary"
            onClick={() => {
              setCategory(tab.id);
              handlePageChange(1);
            }}
          >
            {tab.name}
          </TabsTrigger>
        ))
      }
    </>
  )
}