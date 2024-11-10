"use client"

import  { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { FaChevronDown } from 'react-icons/fa';

const IntlSwitcherSelect = () => {
  const { locales, locale, push } = useRouter();

  const [selectedLocale, setSelectedLocale] = useState(locale);
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale) => {
    setSelectedLocale(newLocale);
    setIsOpen(false);
    push('/', undefined, { locale: newLocale });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`inline-flex w-full justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ${
          isOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
        }`}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <span className={`mr-2 h-6 w-9 rounded-full bg-cover bg-no-repeat bg-center`}
               style={{ backgroundImage: `url(/flags/${selectedLocale}.svg)` }} />
          <span className="uppercase">{selectedLocale}</span>
        </div>
        <FaChevronDown className="-mr-1 ml-2 h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`flex w-full items-center px-4 py-2 text-sm ${
                  loc === selectedLocale
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className={`mr-2 h-6 w-9 rounded-full bg-cover bg-no-repeat bg-center`}
                     style={{ backgroundImage: `url(/flags/${loc}.svg)` }} />
                <span className="uppercase">{loc}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IntlSwitcherSelect;