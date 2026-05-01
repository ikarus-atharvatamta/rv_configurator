import { useState, useRef } from 'react';

const TRAILER_IMG = '/design images/image-removebg-preview.png';
const CubeScanIcon = ({ size = 64, stroke = "black", strokeWidth = 2 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cube */}
      <path
        d="M32 10 L50 20 L50 44 L32 54 L14 44 L14 20 Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M32 10 L32 54"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M14 20 L32 30 L50 20"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Corner brackets */}
      <path d="M6 18 V6 H18" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M46 6 H58 V18" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M58 46 V58 H46" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M18 58 H6 V46" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
};

export default function LeftPanel({ onSave }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const panelRef = useRef(null);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      panelRef.current?.requestFullscreen().catch(() => { });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }

  return (
    <div className="w-full min-w-0 min-h-0 p-3 flex flex-col lg:flex-1">
      <div
        ref={panelRef}
        className="w-full h-[38vh] lg:h-full border border-[#e8e6e2] rounded-xl flex flex-col overflow-hidden bg-white"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      >
        {/* Top controls */}
        <div className="flex items-start justify-end p-2 lg:p-3 gap-2 lg:gap-5 flex-shrink-0">
          <button
            onClick={onSave}
            className="w-8 h-8 lg:w-12 lg:h-12 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            title="Save Build"
          >
            <svg width="16" height="16" className="lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </button>
          <button
            onClick={toggleFullscreen}
            className="w-8 h-8 lg:w-12 lg:h-12 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            title="Fullscreen"
          >
            {isFullscreen ? (
              <svg width="16" height="16" className="lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" />
                <line x1="10" y1="14" x2="3" y2="21" /><line x1="21" y1="3" x2="14" y2="10" />
              </svg>
            ) : (
              <svg width="16" height="16" className="lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            )}
          </button>
        </div>

        {/* Trailer image */}
        <div className="flex-1 flex items-center justify-center px-4 lg:px-8 min-h-0">
          <img
            src={TRAILER_IMG}
            alt="Trailer preview"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-center gap-4 p-4 flex-shrink-0">
          <button className="flex items-center gap-2.5 bg-[#e5e7eb]  hover:bg-[#d1d5dc] text-[#1a1a1a] text-[14px] font-medium h-12 px-6 rounded-md transition-colors cursor-pointer">
            View In AR
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </button>
          <button className="flex items-center gap-2.5 bg-[#e5e7eb]  hover:bg-[#d1d5dc] text-[#1a1a1a] text-[14px] font-medium h-12 px-6 rounded-md transition-colors cursor-pointer">
            Dimensions
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /><path d="m14.5 12.5 2-2" /><path d="m11.5 9.5 2-2" /><path d="m8.5 6.5 2-2" /><path d="m17.5 15.5 2-2" /></svg>          </button>
        </div>
      </div>
    </div>
  );
}
