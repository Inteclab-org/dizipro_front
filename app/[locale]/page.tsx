import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurWork from "@/components/OurWork";
import WhyChooseUs, { BenefitType } from "@/components/WhyChooseUs";
import Programs from "@/components/Programs";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import { TimelineItemProps } from "@/components/TimelineItem";
import Click from "@/components/icons/Click";
import Message from "@/components/icons/Message";
import Price from "@/components/icons/Price";
import Check from "@/components/icons/Check";

interface Props {
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

  const benefits: BenefitType[] = [
    {
      title: translation("why-choose-us.benefits.item-1.title"),
      text: translation("why-choose-us.benefits.item-1.body"),
      icon: <Check className="h-8 w-8 shrink-0" />,
    },
    {
      title: translation("why-choose-us.benefits.item-2.title"),
      text: translation("why-choose-us.benefits.item-2.body"),
      icon: <Price className="h-8 w-8 shrink-0" />,
    },
    {
      title: translation("why-choose-us.benefits.item-3.title"),
      text: translation("why-choose-us.benefits.item-3.body"),
      icon: <Click className="h-8 w-8 shrink-0" />,
    },
    {
      title: translation("why-choose-us.benefits.item-4.title"),
      text: translation("why-choose-us.benefits.item-4.body"),
      icon: <Message className="h-8 w-8 shrink-0" />,
    },
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
        dialog={{
          title: translation("contact-dialog.title"),
          description: translation("contact-dialog.description")
        }}
      />
      <HowItWorks
        title={translation("how-it-works.title")}
        timeline={timeline}
      />
      <OurWork
        title={translation("our-work.title")}
        buttonMessage={translation("our-work.show-btn.message")}
        locale={params.locale}
      />
      <WhyChooseUs title={translation("why-choose-us.title")} benefits={benefits} />
      <Programs title={translation("programs-we-use.title")} />
    </>
  );
}