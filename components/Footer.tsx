import type { NextPage } from "next";
import Link from "next/link";
import { memo } from "react";
import Logo from "./icons/Logo";
import Mail from "./icons/Mail";

const Footer: NextPage = memo(() => {
  return (
    <footer className="max-w-[1112px] w-full pt-[41px] pb-[12px] flex flex-col gap-[32px] leading-[22px]">
        <div className="flex items-start justify-between gap-[40px]">
          <Link href="/">
            <Logo className="shrink-0" />
          </Link>
          <div className="flex flex-col gap-[13px]">
            <p className="font-semibold tracking-[-0.18px]">Contact Us</p>
            <div className="flex gap-[4px] text-base font-medium text-foreground/65">
              <Mail className="w-[22px] h-[22px] shrink-0" />
              contact@halefarm.uz
            </div>
          </div>
        </div>
        <p className="text-[14px] text-foreground/55">© 2023 XK MCHJ «Dizipro»</p>
    </footer>
  );
});

export default Footer;