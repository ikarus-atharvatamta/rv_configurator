import { SWATCHES } from '../data';

export default function SwatchGrid({ selectedColor, onSelect }) {
  return (
    <div className="w-full border border-[#d1d1d1] rounded-xl overflow-hidden">
      {/* Exterior Color row */}
      <div className="flex items-center justify-between h-[68px] px-6 border-b border-[#d1d1d1]">
        <span className="text-[15px] text-[#0c121c]">Exterior Color</span>
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-[#545960]">
            {SWATCHES.find(s => s.name === selectedColor)?.price > 0
              ? `+$${SWATCHES.find(s => s.name === selectedColor).price.toLocaleString()}`
              : 'No Extra Charges'
            }
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#d1d1d1" strokeWidth="1.5" />
            <line x1="12" y1="8" x2="12" y2="16" stroke="#545960" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="12" x2="16" y2="12" stroke="#545960" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Swatches */}
      <div className="p-4">
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
          {SWATCHES.map(sw => (
            <button
              key={sw.name}
              title={sw.price > 0 ? `${sw.name} +$${sw.price}` : sw.name}
              onClick={() => onSelect(sw)}
              className={`aspect-square rounded-md cursor-pointer transition-all hover:scale-105 relative
                ${selectedColor === sw.name ? 'ring-2 ring-offset-2 ring-[#0c121c] scale-105' : ''}
                ${sw.hex === '#ffffff' ? 'border border-[#d1d1d1]' : ''}
              `}
              style={{ backgroundColor: sw.hex }}
            >
              {selectedColor === sw.name && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-6" stroke={sw.hex === '#ffffff' ? '#0c121c' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
        <p className="text-xs text-[#545960] mt-2">{selectedColor}</p>
      </div>
    </div>
  );
}
