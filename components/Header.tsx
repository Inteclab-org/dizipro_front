import Logo from "./icons/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TranslationObejct } from '@/lib/i18n/loadTranslation';
import LocaleSelector from "./LocaleSelector";
import { Locale } from "@/i18n";
import ContactDialog from "./ContactDialog";

interface Props {
  translation: TranslationObejct;
  locale: Locale;
}

export default function Header({ translation, locale }: Props) {
  return (
    <>
      <header className="max-w-[1200px] w-full flex items-center justify-between gap-[40px] pt-[32px] pb-[16px] border-b-[1px] border-border/20">
        <Dialog>
          <div className="max-w-[55%] w-full flex items-center justify-between gap-[40px]">
            <nav className="flex items-center shrink-0 gap-[42px] leading-[24px]">
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
            <LocaleSelector params={{locale: locale}} />
            <DialogTrigger>
              <Button>
                {translation('header.order-btn.message')}
              </Button>
            </DialogTrigger>
          </div>
          <ContactDialog
            title={translation("contact-dialog.title")}
            description={translation("contact-dialog.description")}
          />
        </Dialog>
      </header>
    </>
  );
}
