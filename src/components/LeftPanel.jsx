import { useState, useRef } from 'react';

const TRAILER_IMG = '/design images/image-removebg-preview.png';

export default function LeftPanel({ onSave }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const panelRef = useRef(null);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      panelRef.current?.requestFullscreen().catch(() => {});
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
            className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
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
            className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
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
          <button className="flex items-center gap-2.5 bg-[#d1d5dc]  hover:bg-[#e4e4e4] text-[#1a1a1a] text-[14px] font-medium h-12 px-6 rounded-xl transition-colors cursor-pointer">
            View In AR
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </button>
          <button className="flex items-center gap-2.5 bg-[#d1d5dc] hover:bg-[#e4e4e4] text-[#1a1a1a] text-[14px] font-medium h-12 px-6 rounded-xl transition-colors cursor-pointer">
            Dimensions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
