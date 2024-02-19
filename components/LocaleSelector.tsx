'use client';

import { Locale, i18nConfig } from '@/i18n';
import redirectToLocale from '@/lib/i18n/redirectToLocale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type Props = {
  params: {
    locale: Locale;
  };
};

export default function LocaleSelector({ params }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const localeInfo = {
    en: {
      native: 'English',
      english: 'English',
      short: 'ENG'
    },
    ru: { native: 'Русский', english: 'Russian', short: 'RUS' },
  };

  return (
    <div className='relative'>
      <button
        className={`flex gap-2 px-2 items-center justify-center rounded-lg text-[16px] hover:bg-neutral-100 h-full ${
          isOpen ? 'bg-neutral-100' : ''
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{localeInfo[params.locale].short}</span>
        <div className='w-0 h-0 border-t-[4px] border-t-black border-x-[4px] border-x-transparent border-solid' />
      </button>

      {isOpen && (
        <div className="absolute mt-2">
          <div className='flex py-1 w-48 flex-col rounded-md border border-neutral-200 bg-white'>
            <ul className="flex w-full flex-col divide-y divide-neutral-200">
              {i18nConfig.locales.map((locale, index) => {
                return (
                  <Link key={index} href={redirectToLocale(locale, pathname)}>
                    <li className="flex w-full flex-col items-start justify-center px-3 py-1 hover:bg-neutral-100">
                      <h2 className="text-md font-medium text-neutral-950">
                        {localeInfo[locale].native}
                      </h2>
                      <p className="text-xs text-neutral-600">
                        {localeInfo[locale].english}
                      </p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
