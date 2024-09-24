import Link from "next/link";
import { memo } from "react";
import Logo from "./icons/Logo";
import Mail from "./icons/Mail";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import { Locale } from "@/i18n";

const Footer = memo(({
  translation,
  locale
}: {
  translation: TranslationObject;
  locale: Locale;
}) => {
  return (
    <footer className="max-w-[1112px] w-full pt-[41px] pb-[12px] px-4 flex flex-col gap-[32px] leading-[22px] text-center sm:text-start">
        <div className="flex gap-[40px] flex-col justify-center items-center sm:justify-start sm:flex-row md:justify-between md:items-start">
          <Link href={`/${locale}/`}>
            <Logo className="shrink-0" />
          </Link>
          <div className="flex justify-between flex-col gap-[32px] sm:ml-[100px] md:ml-0 md:gap-[93px] md:flex-row">
            {
              locale === "uz" && <div className="flex flex-col gap-[13px]">
                <p className="font-semibold tracking-[-0.18px]">
                  {translation("footer.phone-number")}
                </p>
                <div className="text-[22px] font-bold">
                  +998&nbsp;(99)&nbsp;987&nbsp;54&nbsp;32
                </div>
              </div>
            }
            <div className="flex flex-col gap-[13px]">
              <p className="font-semibold tracking-[-0.18px]">
                {translation("footer.contact-us")}
              </p>
              <div className="flex gap-[4px] text-base font-medium text-foreground/65">
                <Mail className="w-[22px] h-[22px] shrink-0" />
                diziprocompany@gmail.com
              </div>
            </div>
          </div>
        </div>
        <p className="text-[14px] text-foreground/55">© 2023 {translation("footer.copyright")}</p>
    </footer>
  );
});

export default Footer;