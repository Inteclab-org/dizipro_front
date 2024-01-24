import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import Logo from "./icons/Logo";
import Instagram from "./icons/Instagram";
import Mail from "./icons/Mail";
import Telegram from "./icons/Telegram";
import Twitter from "./icons/Twitter";

const Footer: NextPage = memo(() => {
  return (
    <footer className="max-w-[1112px] w-full pt-[41px] pb-[12px] flex flex-col gap-[32px] leading-[22px]">
        <div className="flex items-start justify-between gap-[40px]">
          <Link href="/">
            <Logo className="shrink-0" />
          </Link>
          <div className="flex justify-between gap-[80px]">
            <div
              className="flex flex-col gap-[8px]"
            >
              <p className="font-semibold tracking-[-0.18px]">Socials</p>
              <div className="flex gap-[6px]">
                <Link href="/" target="_blank" className="p-2 bg-foreground/5 rounded">
                  <Instagram className="w-[24px] h-[24px] shrink-0" />
                </Link>
                <Link href="/" target="_blank" className="p-2 bg-foreground/5 rounded">
                  <Telegram className="w-[24px] h-[24px] shrink-0" />
                </Link>
                <Link href="/" target="_blank" className="p-2 bg-foreground/5 rounded">
                  <Twitter className="w-[24px] h-[24px] shrink-0" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[13px]">
              <p className="font-semibold tracking-[-0.18px]">Contact Us</p>
              <div className="flex gap-[4px] text-base font-medium text-foreground/65">
                <Mail className="w-[22px] h-[22px] shrink-0" />
                contact@halefarm.uz
              </div>
            </div>
          </div>
        </div>
        <p className="text-[14px] text-foreground/55">© 2023 XK MCHJ «Dizipro»</p>
    </footer>
  );
});

export default Footer;