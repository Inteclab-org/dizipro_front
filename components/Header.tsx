import Logo from "./icons/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TranslationObject } from '@/lib/i18n/loadTranslation';
import LocaleSelector from "./LocaleSelector";
import { Locale } from "@/i18n";
import ContactDialog from "./ContactDialog";
import Image from "next/image";

interface Props {
  translation: TranslationObject;
  locale: Locale;
}

const Header = ({ translation, locale }: Props) => (
  <header className="max-w-[1200px] w-full flex items-center justify-between gap-[40px] pt-[32px] pb-[16px] px-4 border-b-[1px] border-border/20">
    <Dialog>
      <div className="flex items-center justify-between w-full max-w-[55%] gap-[40px]">
        <nav className="items-center gap-[42px] leading-[24px] hidden md:flex">
          <Link href={`/${locale}/#how-it-works`}>
            {translation('header.navbar.navbar-item-1')}
          </Link>
          <Link href={`/${locale}/portfolio`}>
            {translation('header.navbar.navbar-item-2')}
          </Link>
          <DialogTrigger>
            {translation('header.navbar.navbar-item-3')}
          </DialogTrigger>
        </nav>
        <Link href={`/${locale}/`}>
          <Logo className="shrink-0" />
        </Link>
      </div>
      
      <div className="flex gap-[40px]">
        <LocaleSelector params={{ locale }} />
        <DialogTrigger className="hidden items-center justify-center whitespace-nowrap leading-[22px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 font-medium px-9 py-4 md:flex">
          {translation('header.order-btn.message')}
        </DialogTrigger>
        <Button className="bg-transparent p-[8px] hover:bg-transparent active:bg-transparent md:hidden">
          <Image
            src="/menu.svg" 
            alt="Menu Icon" 
            className="block shrink-0"
            width={24}
            height={16}
          />
        </Button>
      </div>
      <ContactDialog
        title={translation("contact-dialog.title")}
        description={translation("contact-dialog.description")}
      />
    </Dialog>
  </header>
);

export default Header;
