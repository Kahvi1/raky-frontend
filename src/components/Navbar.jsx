import logoWithText from '../assets/brand/logo_ic_text.svg';
import { useState, useRef, useEffect } from 'react';
import { handleSoon } from '../utils/handlers.js';

// ui icons
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid'

export default function NavigationBar() {
  const [isDropdownIconOpen, setIsDropdownIconOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="h-14 md:h-16 flex items-center justify-center px-4 md:px-6 bg-white max-w-7xl mx-auto">
        <a href="http://youtube.com/"><img src={logoWithText} alt="logo with text" className="h-[28px]" /></a>
        <div className="flex-1"></div>
        <div className="lg:hidden">
          <button onClick={(e) => setIsDropdownIconOpen(!isDropdownIconOpen)} className="size-[32px] flex items-center justify-center">
            {isDropdownIconOpen ? <XMarkIcon className="size-[16px] md:size-[24px]" /> : <Bars3Icon className="size-[16px] md:size-[24px]" />}
          </button>
        </div>

        {/* Mobile menu — always rendered, animated via max-h + opacity */}
        <div
          className={`
            absolute top-full left-0 w-full bg-white overflow-hidden
            transition-all duration-300 ease-in-out
            ${isDropdownIconOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
          `}
        >
          <div className="flex flex-col px-4 pt-2 pb-6 gap-1">
            <p className="text-base font-medium text-gray-900 py-3.5 px-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer leading-none">
              Daftar Membership
            </p>
            <p className="text-base text-gray-600 py-3.5 px-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer leading-none">
              Gabung Jadi Editor
            </p>
            <button
              onClick={handleSoon}
              className="mt-3 w-full rounded-full bg-raky-purple cursor-pointer font-semibold text-white py-3 active:scale-[0.98] transition-transform"
            >
              Konsultasi Sekarang
            </button>
          </div>
          <hr className="border-b border-gray-200" />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <p className="text-[#707070] text-sm px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer">
            Gabung Jadi Editor
          </p>
          <p className="text-[#707070] text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer">
            Daftar Membership
          </p>
          <button
            onClick={handleSoon}
            className="ml-2 px-[16px] py-[8px] text-sm rounded-full bg-raky-purple font-semibold text-white cursor-pointer
                       hover:brightness-110 active:scale-[0.97] transition-all duration-150"
          >
            Konsultasi Sekarang
          </button>
        </div>
        </div>
      <hr className="w-full border-b border-gray-200" />
    </nav>
  )
}

