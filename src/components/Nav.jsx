import { useState } from 'react';
import { Link } from 'react-router-dom';

const SunflowerLogo = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="5" fill="#e8722a" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse key={i} cx="15" cy="5" rx="2.5" ry="4.5" fill="#e8722a"
        transform={`rotate(${angle} 15 15)`} />
    ))}
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const navLinks = ['Home', 'Shop', 'the escapist', 'Hospitality', 'about', 'contact'];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-[#e2e0d4] h-[70px] flex items-center px-6 lg:px-10 relative z-50 flex-shrink-0 border-b border-[#e8e6e2] ">
      <Link to="/" className="flex items-center gap-2 flex-shrink-0 mr-8 no-underline">
        {/* sunflower logo */}
        <svg width="210" height="31" viewBox="0 0 210 31" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <rect width="210" height="31" fill="url(#pattern0_439_7349)" />
          <defs>
            <pattern id="pattern0_439_7349" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_439_7349" transform="scale(0.0047619 0.0322581)" />
            </pattern>
            <image id="image0_439_7349" width="200" height="30" preserveAspectRatio="none" href="data:image/png;base64,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" />
          </defs>
        </svg>
      </Link>

      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-[100px]">
        {navLinks.map(link => (
          <a key={link} href="#"
            className="text-[#0c121c] text-[15px] font-normal hover:opacity-60 transition-opacity no-underline whitespace-nowrap">
            {link}{link === 'shop' ? ' ↓' : ''}
          </a>
        ))}
      </div>
      {/* 
      <div className="hidden lg:flex items-center gap-3 ml-auto">
        <a href="tel:7704572000"
          className="bg-[#0c121c] text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-[#1a2433] transition-colors whitespace-nowrap no-underline">
          770 457-2000
        </a> 
         <button className="p-1.5 hover:opacity-60 transition-opacity cursor-pointer"><UserIcon /></button>
        <button className="p-1.5 hover:opacity-60 transition-opacity cursor-pointer"><CartIcon /></button> 
       </div> */}

      <button className="lg:hidden ml-auto p-1 cursor-pointer" onClick={() => setMobileOpen(o => !o)}>
        <MenuIcon />
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-[#e8e6e2] shadow-lg px-6 py-4 flex flex-col gap-0 lg:hidden z-50">
          {navLinks.map(link => (
            <a key={link} href="#"
              className="text-[#0c121c] text-base py-3 border-b border-[#e8e6e2] last:border-0 no-underline"
              onClick={() => setMobileOpen(false)}>
              {link}
            </a>
          ))}
          <a href="tel:7704572000" className="text-[#0c121c] font-medium pt-3 no-underline">770 457-2000</a>
        </div>
      )}
    </nav>
  );
}
