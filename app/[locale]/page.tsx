import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurWork from "@/components/OurWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Programs from "@/components/Programs";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import { TimelineItemProps } from "@/components/TimelineItem";

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default async function Index({ params }: Props) {
  const translation = await getTranslation(params.locale);
  const timeline: TimelineItemProps[] = [
    {
      icon: "start-contact",
      text: translation("how-it-works.timeline.item-1")
    },
    {
      icon: "object",
      text: translation("how-it-works.timeline.item-2")
    },
    {
      icon: "negotiation",
      text: translation("how-it-works.timeline.item-3")
    },
    {
      icon: "rendering",
      text: translation("how-it-works.timeline.item-4")
    },
    {
      icon: "payment",
      text: translation("how-it-works.timeline.item-5")
    },
    {
      icon: "finish-order",
      text: translation("how-it-works.timeline.item-6")
    }
  ];

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
      <HowItWorks
        title={translation("how-it-works.title")}
        timeline={timeline}
      />
      <OurWork />
      <WhyChooseUs />
      <Programs />
    </>
  );
}