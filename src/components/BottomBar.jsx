import { useState } from 'react';

const OPTION_LABELS = {
  blackout: 'Blackout Package',
  'side-door': 'Side Door',
  'service-window': 'Service Window',
  'rear-ramp-door': 'Rear Doors',
  'rear-barn-door': 'Rear Doors',
  mag: 'Aluminum Mag Wheels',
  torsion: 'Torsion Axles',
  ejack: 'Electric Jack',
  recessed: 'Recessed Tire Box',
  diamond: 'Diamond Plate Floor',
  rubber: 'Rubber Coin Mat Floor',
  etrack: 'E-Track Wall Rails',
  cabinets: 'Custom Cabinet System',
  '30amp': '30A Shore Power Package',
  '50amp': '50A Shore Power Package',
  radio: 'Radio Package',
  ac: '12k Mini Split A/C',
};

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12M7 11l5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default function BottomBar({ modelName, basePrice, addOns, onDownload, savingsPct, onOpenSummary, selectedOptions = {} }) {
  const [panelOpen, setPanelOpen] = useState(false);
  const discount  = savingsPct != null ? Math.round((basePrice + addOns) * (savingsPct / 100)) : null;
  const effective = basePrice + addOns - (discount ?? 0);
  const optionEntries = Object.entries(selectedOptions);

  return (
    <div className="w-full flex-shrink-0 sticky bottom-0 z-50">

      {/* MOBILE EXPANDED PANEL */}
      <div
        className={`lg:hidden w-full bg-[#1a1a1a] border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          panelOpen ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pt-5 pb-4 overflow-y-auto max-h-[60vh] scrollbar-hide">
          <p className="text-white text-[20px] font-semibold mb-4">
            {modelName || 'Enclosed Trailer'}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-[15px]">Exterior Color</span>
              <span className="text-white/70 text-[15px]">No Extra Charges</span>
            </div>
            {optionEntries.map(([id, price]) => (
              <div key={id} className="flex items-center justify-between">
                <span className="text-white/70 text-[15px]">{OPTION_LABELS[id] || id}</span>
                <span className="text-white/70 text-[15px]">${Number(price).toLocaleString()}</span>
              </div>
            ))}
            {optionEntries.length === 0 && (
              <p className="text-white/40 text-[13px]">No add-ons selected yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* BAR */}
      <div className="w-full bg-[#1a1a1a] px-4 lg:px-8 h-[72px] lg:h-[100px] flex items-center">

        {/* MOBILE LAYOUT */}
        <div className="flex lg:hidden items-center w-full gap-3">
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[#888] text-[11px] uppercase tracking-widest leading-none mb-1">Total Price</span>
            <span className="text-white text-[22px] font-bold leading-none">${effective.toLocaleString()}</span>
          </div>

          <button
            onClick={onDownload}
            className="flex items-center gap-1.5 h-10 px-4 rounded-lg bg-[#2e2e2e] text-white text-[13px] font-medium whitespace-nowrap cursor-pointer"
          >
            Quote <DownloadIcon />
          </button>

          <button
            className="h-10 px-4 rounded-lg bg-white text-[#0c121c] text-[13px] font-medium whitespace-nowrap"
          >
            Add To Cart
          </button>

          {/* Toggle panel button */}
          <button
            onClick={() => setPanelOpen(prev => !prev)}
            className={`h-10 w-10 flex-shrink-0 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
              panelOpen ? 'bg-[#e87070] text-white' : 'bg-[#2e2e2e] text-white'
            }`}
          >
            {panelOpen ? <CloseIcon /> : <ChevronUpIcon />}
          </button>
        </div>

        {/* DESKTOP LAYOUT */}
        <span className="hidden lg:block text-white text-[30px] font-bold tracking-tight whitespace-nowrap">
          {modelName}
        </span>

        <div className="hidden lg:flex items-center ml-auto mr-5 gap-10">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[#666] text-[15px] uppercase tracking-widest ">Base Price</span>
              <span className="text-white text-[30px] font-semibold">${basePrice.toLocaleString()}</span>
            </div>
            <span className="text-[#555] text-[30px]">+</span>
            <div className="flex flex-col">
              <span className="text-[#666] text-[15px] uppercase tracking-widest ">Add-Ons</span>
              <span className="text-white text-[30px] font-semibold">${addOns.toLocaleString()}</span>
            </div>
            <span className="text-[#555] text-[30px]">-</span>
            <div className="flex flex-col">
              <span className="text-[#666] text-[15px] uppercase tracking-widest ">Discount</span>
              <span className="text-white text-[30px] font-bold">{savingsPct}%</span>
            </div>
            <span className="text-[#555] text-[30px]">=</span>
            <div className="flex flex-col">
              <span className="text-[#666] text-[15px] uppercase tracking-widest ">Effective Price</span>
              <span className="text-white text-[30px] font-bold">${effective.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownload}
              className="h-10 px-6 rounded-lg bg-white text-black text-[16px] font-medium whitespace-nowrap cursor-pointer"
            >
              Download Quote
            </button>
            <button
              onClick={onOpenSummary}
              className="h-10 px-6 rounded-lg bg-white text-black text-[16px] font-medium whitespace-nowrap cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
