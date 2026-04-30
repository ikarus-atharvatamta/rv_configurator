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
        <div className="flex items-center justify-center gap-3 p-3 flex-shrink-0">
          <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#333] text-[13px] h-9 px-4 rounded-lg transition-colors cursor-pointer shadow-sm border border-[#e8e6e2]">
            View in AR
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
          </button>
          <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#333] text-[13px] h-9 px-4 rounded-lg transition-colors cursor-pointer shadow-sm border border-[#e8e6e2]">
            Dimensions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="21" x2="21" y2="21" />
              <line x1="3" y1="21" x2="3" y2="3" />
              <polyline points="7 21 7 16 17 16 17 21" />
              <line x1="12" y1="3" x2="12" y2="16" />
              <polyline points="9 6 12 3 15 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
