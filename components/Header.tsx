import Logo from "./icons/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="max-w-[1200px] w-full flex items-center justify-between gap-[40px] pt-[32px] pb-[16px] border-b-[1px] border-border/20">
      <div className="max-w-[51%] w-full flex items-center justify-between gap-[40px]">
        <nav className="flex items-center shrink-0 gap-[42px] leading-[24px]">
          <Link href="/">
            How it works
          </Link>
          <Link href="/">
            Our portfolio
          </Link>
          <Link href="/">Support</Link>
        </nav>
        <Link href="/">
          <Logo className="shrink-0" />
        </Link>
      </div>
      <Button>Order</Button>
    </header>
  );
}
