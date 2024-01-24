import Check from "./icons/Check";
import Click from "./icons/Click";
import Message from "./icons/Message";
import Price from "./icons/Price";

export default function WhyChooseUs() {
  return <>
    <section className="flex flex-col max-w-[1140px] w-full pt-[36px] pb-[136px]">
      <h2 className="tracking-[-1.04px] leading-[68px] text-center uppercase font-semibold text-[52px] mb-[60px]">
        WHY CHOOSE US?
      </h2>
      <ul className="flex justify-center gap-[24px] leading-[24px]">
        <li className="flex-1 bg-white flex flex-col py-5 pr-[21px] pl-[19px] gap-[8px] min-w-[200px] max-w-[267px] border border-border/15">
          <div className="self-start rounded-lg p-2 bg-primary-foreground mb-[5px]">
            <Check className="h-8 w-8 shrink-0" />
          </div>
          <h3 className="font-semibold text-[22px] tracking-[-0.44px]">Quality Products</h3>
          <p className="text-[20px] text-foreground/60">Wide range of carefully crafted, accurate and high-quality 3D models and interiors.</p>
        </li>
        <li className="flex-1 bg-white flex flex-col py-5 pr-[21px] pl-[19px] gap-[8px] min-w-[200px] max-w-[267px] border border-border/15">
          <div className="self-start rounded-lg p-2 bg-primary-foreground mb-[5px]">
            <Price className="h-8 w-8 shrink-0" />
          </div>
          <h3 className="font-semibold text-[22px] tracking-[-0.44px]">Low Prices</h3>
          <p className="text-[20px] text-foreground/60">High-quality 3D models and interiors at affordable prices.</p>
        </li>
        <li className="flex-1 bg-white flex flex-col py-5 pr-[21px] pl-[19px] gap-[8px] min-w-[200px] max-w-[267px] border border-border/15">
          <div className="self-start rounded-lg p-2 bg-primary-foreground mb-[5px]">
            <Click className="h-8 w-8 shrink-0" />
          </div>
          <h3 className="font-semibold text-[22px] tracking-[-0.44px]">Convenient</h3>
          <p className="text-[20px] text-foreground/60">Easy-to-navigate website with clear descriptions and images for a hassle-free shopping experience.</p>
        </li>
        <li className="flex-1 bg-white flex flex-col py-5 pr-[21px] pl-[19px] gap-[8px] min-w-[200px] max-w-[267px] border border-border/15">
          <div className="self-start rounded-lg p-2 bg-primary-foreground mb-[5px]">
            <Message className="h-8 w-8 shrink-0" />
          </div>
          <h3 className="font-semibold text-[22px] tracking-[-0.44px]">Expert Team</h3>
          <p className="text-[20px] text-foreground/60">Experienced team of experts available for customer support and assistance.</p>
        </li>
      </ul>
    </section>
  </>
}