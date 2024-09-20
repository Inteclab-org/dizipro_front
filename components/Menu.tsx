import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import Image from "next/image";
import { Locale } from "@/i18n";
import Link from "next/link";
import { Dialog, DialogTrigger } from "./ui/dialog";
import ContactDialog from "./ContactDialog";
import { MenuItem } from "./Header";

interface Props {
  translation: TranslationObject;
  locale: Locale;
  menuItems: MenuItem[];
}

export default function Menu({ translation, locale, menuItems }: Props) {
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent p-[8px] hover:bg-transparent active:bg-transparent md:hidden">
        <Image
          src="/menu.svg" 
          alt="Menu Icon" 
          className="block shrink-0"
          width={24}
          height={16}
        />
      </SheetTrigger>
      <SheetContent side="top" className="w-full max-w-full sm:max-w-full bottom-0">
        <SheetHeader className="hidden">
          <SheetTitle>Navbar</SheetTitle>
          <SheetDescription>
            Navbar items
          </SheetDescription>
        </SheetHeader>
        <Dialog>
          <nav className="items-center gap-[42px] leading-[24px] flex flex-col">
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
          <ContactDialog
            title={translation("contact-dialog.title")}
            description={translation("contact-dialog.description")}
          />
        </Dialog>
      </SheetContent>
    </Sheet>
  )
}