import Logo from "./icons/Logo";
import Link from "next/link";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TranslationObject } from '@/lib/i18n/loadTranslation';
import LocaleSelector from "./LocaleSelector";
import { Locale } from "@/i18n";
import ContactDialog from "./ContactDialog";
import Menu from "./Menu";

interface Props {
  translation: TranslationObject;
  locale: Locale;
}

export interface MenuItem {
  name: string;
  link?: string;
}

const Header = ({ translation, locale }: Props) => {
  const menuItems: MenuItem[] = [{
    name: translation('header.navbar.navbar-item-1'),
    link: `/${locale}/#how-it-works`
  }, {
    name: translation('header.navbar.navbar-item-2'),
    link: `/${locale}/portfolio`
  }, {
    name: translation('header.navbar.navbar-item-3')
  }];

  const contactDialog = {
    title: translation("contact-dialog.title"),
    description: translation("contact-dialog.description")
  };

  return <header className="max-w-[1200px] w-full flex items-center justify-between gap-[40px] pt-[32px] pb-[16px] px-4 border-b-[1px] border-border/20">
    <Dialog>
      <div className="flex items-center justify-between gap-[40px] lg:max-w-[55%] lg:w-full">
        <nav className="items-center gap-[42px] leading-[24px] hidden lg:flex">
          {
            menuItems.map((menuItem: MenuItem, index) => (
              !menuItem.link ? (
                <DialogTrigger key={`menu-item-${index + 1}`}>
                  {menuItem.name}
                </DialogTrigger>
              ) : (
                <Link href={menuItem.link} key={`menu-item-${index + 1}`}>
                  {menuItem.name}
                </Link>
              )
            ))
          }
        </nav>
        <Link href={`/${locale}/`}>
          <Logo className="shrink-0 width-[117px] height-[32px]"  />
        </Link>
      </div>
      
      <div className="flex gap-[40px]">
        <LocaleSelector params={{ locale }} />
        <DialogTrigger className="hidden items-center justify-center whitespace-nowrap leading-[22px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 font-medium px-9 py-4 lg:flex">
          {translation('header.order-btn.message')}
        </DialogTrigger>
        <Menu menuItems={menuItems} orderBtn={translation('header.order-btn.message')} contactDialog={contactDialog} locale={locale} />
      </div>
      <ContactDialog locale={locale} {...contactDialog} />
    </Dialog>
  </header>
};

export default Header;
