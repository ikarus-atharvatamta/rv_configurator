export default function BottomBar({ modelName, basePrice, addOns, onDownload, savingsPct }) {
  const discount = savingsPct != null ? Math.round((basePrice + addOns) * (savingsPct / 100)) : null;
  const effective = basePrice + addOns - (discount ?? 0);

  return (
    <div className="w-full bg-[#1a1a1a] flex-shrink-0 sticky bottom-0 z-50 flex items-center px-6 lg:px-8 h-[64px] lg:h-[72px]">

      {/* Mobile: Total Price */}
      <div className="flex flex-col lg:hidden">
        <span className="text-[#888] text-[10px] uppercase tracking-wide leading-none mb-0.5">Total Price</span>
        <span className="text-white text-[18px] font-bold">${effective.toLocaleString()}</span>
      </div>

      {/* Desktop: model name */}
      <span className="hidden lg:block text-white text-[20px] font-bold tracking-tight whitespace-nowrap">
        {modelName}
      </span>

      {/* Desktop: price breakdown */}
      <div className="hidden lg:flex items-center gap-4 mx-auto">
        <div className="flex flex-col items-start">
          <span className="text-[#666] text-[9px] uppercase tracking-widest leading-none mb-1">Base Price</span>
          <span className="text-white text-[15px] font-semibold">${basePrice.toLocaleString()}</span>
        </div>

        <span className="text-[#555] text-[14px] font-light">+</span>

        <div className="flex flex-col items-start">
          <span className="text-[#666] text-[9px] uppercase tracking-widest leading-none mb-1">Add-Ons</span>
          <span className="text-white text-[15px] font-semibold">${addOns.toLocaleString()}</span>
        </div>

        {discount != null && (
          <>
            <span className="text-[#555] text-[14px] font-light">-</span>
            <div className="flex flex-col items-start">
              <span className="text-[#666] text-[9px] uppercase tracking-widest leading-none mb-1">Discount</span>
              <span className="text-white text-[15px] font-semibold">{savingsPct}%</span>
            </div>
          </>
        )}

        <span className="text-[#555] text-[14px] font-light">=</span>

        <div className="flex flex-col items-start">
          <span className="text-[#666] text-[9px] uppercase tracking-widest leading-none mb-1">Effective Price</span>
          <span className="text-white text-[18px] font-bold">${effective.toLocaleString()}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={onDownload}
          className="h-9 px-5 rounded-lg border border-[#555] text-white text-[13px] font-normal hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
        >
          <span className="hidden lg:inline">Download Quote</span>
          <span className="lg:hidden">Quote ↓</span>
        </button>
        <button className="h-9 px-5 rounded-lg border border-[#555] text-white text-[13px] font-normal hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
          Add to Cart
        </button>
        <button className="lg:hidden w-9 h-9 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-[#444] transition-colors cursor-pointer flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
    </div>
  );
}
