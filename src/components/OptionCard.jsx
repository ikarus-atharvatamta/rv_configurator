const PlusIcon = ({ selected }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke={selected ? '#0c121c' : '#d1d1d1'} strokeWidth="1.5"
      fill={selected ? '#0c121c' : 'transparent'} />
    {selected ? (
      <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <>
        <line x1="12" y1="8" x2="12" y2="16" stroke="#545960" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="#545960" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )}
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function OptionCard({ name, price, selected, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`w-full border rounded-xl h-[68px] flex items-center justify-between px-6 cursor-pointer transition-all
        ${selected
          ? 'border-[#0c121c] bg-[#0c121c]/5'
          : 'border-[#d1d1d1] hover:border-[#b0b0b0]'
        }`}
    >
      <div className="flex items-center gap-2">
        <span className={`text-[15px] ${selected ? 'text-[#0c121c] font-medium' : 'text-[#0c121c]'}`}>{name}</span>
        <span className="text-[#b0b0b0]"><InfoIcon /></span>
      </div>
      <div className="flex items-center gap-3">
        {price > 0 && (
          <span className="text-[13px] text-[#545960]">+${price.toLocaleString()}</span>
        )}
        <PlusIcon selected={selected} />
      </div>
    </div>
  );
}
