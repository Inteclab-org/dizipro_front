import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogTrigger } from "./ui/dialog";
import ContactDialog from "./ContactDialog";
import { MenuItem } from "./Header";
import { Locale } from "@/i18n";

interface ContactDialogProps {
  title: string;
  description: string;
}

interface Props {
  menuItems: MenuItem[];
  orderBtn: string;
  contactDialog: ContactDialogProps;
  locale?: Locale;
}

export default function Menu({ menuItems, orderBtn, contactDialog, locale }: Props) {
  return (
    <Sheet>
      <SheetTrigger className="flex shrink-0 bg-transparent p-[8px] hover:bg-transparent active:bg-transparent lg:hidden">
        <Image
          src="/menu.svg" 
          alt="Menu Icon" 
          className="block shrink-0"
          width={24}
          height={16}
        />
      </SheetTrigger>
      <SheetContent side="top" className="menu-sheet w-full max-w-full sm:max-w-full bottom-0 flex flex-col justify-center">
        <SheetHeader className="hidden">
          <SheetTitle>Navbar</SheetTitle>
          <SheetDescription>
            Navbar items
          </SheetDescription>
        </SheetHeader>
        <Dialog>
          <nav className="items-center gap-[42px] leading-[24px] flex flex-col pt-[150px] pb-[70px] grow">
            {
              menuItems.map((menuItem: MenuItem, index) => (
                !menuItem.link ? (
                  <DialogTrigger key={`menu-item-${index + 1}`} className="text-[38px] tracking-[-0.84px] leading-[1.1] font-bold uppercase text-black/70 text-center">
                    {menuItem.name}
                  </DialogTrigger>
                ) : (
                  <Link key={`menu-item-${index + 1}`} href={menuItem.link} className="text-[38px] tracking-[-0.84px] leading-[1.1] font-bold uppercase text-black/70 text-center">
                    {menuItem.name}
                  </Link>
                )
              ))
            }
          </nav>
          <SheetFooter className="sm:flex-col">
            <DialogTrigger className="items-center justify-center whitespace-nowrap leading-[22px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 font-medium px-9 py-4">
              {orderBtn}
            </DialogTrigger>
          </SheetFooter>
          <ContactDialog locale={locale} {...contactDialog} />
        </Dialog>
      </SheetContent>
    </Sheet>
  )
}