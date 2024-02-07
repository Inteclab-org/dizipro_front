import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurWork from "@/components/OurWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Programs from "@/components/Programs";

export default async function Index() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <OurWork />
      <WhyChooseUs />
      <Programs />
    </>
  );
}