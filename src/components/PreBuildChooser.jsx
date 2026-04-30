import { useState } from 'react';
import { PREBUILDS } from '../data';

const ChevronDown = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
    <path d="M4 7L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function PreBuildChooser({ selectedId, onSelect }) {
  const [open, setOpen] = useState(false);

  const selected = PREBUILDS.find(p => p.id === selectedId);

  function handleSelect(id) {
    onSelect(selectedId === id ? null : id);
    setOpen(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#0c121c] text-xl font-medium px-1">Chose the trailer for your need</p>

      <div className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full border border-[#d1d1d1] rounded-xl h-[68px] flex items-center justify-between px-6 hover:border-[#b0b0b0] transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px] text-[#0c121c]">
              {selected ? selected.name : 'Chose a pre-build and customize'}
            </span>
            <span className="text-[#b0b0b0]"><InfoIcon /></span>
          </div>
          <span className={`text-[#0c121c] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <ChevronDown />
          </span>
        </button>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-1 border border-[#d1d1d1] rounded-xl bg-white shadow-xl z-20 overflow-hidden">
            {PREBUILDS.map(pb => (
              <button
                key={pb.id}
                onClick={() => handleSelect(pb.id)}
                className={`w-full text-left flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0] last:border-0 hover:bg-[#f8f8f8] transition-colors cursor-pointer
                  ${selectedId === pb.id ? 'bg-[#0c121c]/5' : ''}`}
              >
                <span className={`text-[15px] ${selectedId === pb.id ? 'text-[#0c121c] font-medium' : 'text-[#0c121c]'}`}>
                  {pb.name}
                </span>
                <span className="text-[13px] text-[#545960]">{pb.price}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div className="border border-[#0c121c]/20 rounded-xl bg-[#0c121c]/5 p-4 flex flex-col gap-2">
          {selected.details.map((d, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-[#0c121c]">{d.label}</span>
              <span className={d.free ? 'text-green-600 font-medium' : 'text-[#0c121c]'}>
                {d.cost}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
