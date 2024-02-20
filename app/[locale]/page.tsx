import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurWork from "@/components/OurWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Programs from "@/components/Programs";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default async function Index({ params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <>
      <Hero
        title={{
          firstPart: translation("hero.title.firstPart"),
          mainPart: translation("hero.title.mainPart"),
          lastPart: translation("hero.title.lastPart")
        }}
        body={translation("hero.body")}
        buttonMessage={translation("hero.start-btn.message")}
      />
      <HowItWorks />
      <OurWork />
      <WhyChooseUs />
      <Programs />
    </>
  );
}