const TRAILER_IMG = 'https://backyardescapism.com/cdn/shop/files/Exterior_8.5x24TA_Blackout_StudioShot_CurbSide_720x720.jpg';

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

const STEPS = [
  { id: 'basics',   label: '1. Basics/Standard' },
  { id: 'exterior', label: '2. Exterior' },
  { id: 'interior', label: '3. Interior' },
];

export default function OrderSummary({
  isOpen,
  onClose,
  basePrice,
  addOns,
  savingsPct,
  modelName,
  selectedOptions = {},
  activeStep = 'exterior',
}) {
  const discount = savingsPct != null ? Math.round((basePrice + addOns) * (savingsPct / 100)) : 0;
  const subtotal  = basePrice + addOns;
  const total     = subtotal - discount;

  return (
    <div
      className={`absolute inset-0 z-10 bg-[#ffffff] flex flex-col overflow-y-auto scrollbar-hide
        transition-transform duration-300 ease-in-out mx-6 pl-4 pr-8
        ${isOpen ? 'translate-y-0 pointer-events-auto' : 'translate-y-full pointer-events-none'}`}
    >
      {/* Drag handle / close */}
        <div className="px-6 pt-5 pb-3 flex items-center justify-between flex-shrink-0 ">
                  <h3 className="text-[22px] font-semibold text-[#0c121c]">Your Cart</h3>
      <button
        onClick={onClose}
        className="cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
        </div>

      <div className="flex flex-col gap-4 px-4 pb-6 pt-2 ">

      <div
      className="border border-[#e4e2de] rounded-2xl p-4">   {/* Card 1: Trailer header */}
        <div className="bg-white rounded-2xl border border-[#e4e2de] p-4 flex items-center gap-4 mb-4 ">
          <img
            src={TRAILER_IMG}
            alt="trailer"
            className="w-[88px] h-[56px] object-cover rounded-lg flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-[#0c121c] leading-snug truncate">
              {modelName || 'Enclosed Trailer Model Name'}
            </p>
            <p className="text-[26px] font-bold text-[#0c121c] leading-tight mt-0.5">
              ${basePrice.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Step tabs */}
        <div className="flex items-end justify-between px-1">
          {STEPS.map(step => {
            const isActive = step.id === activeStep;
            return (
              <div key={step.id} className="flex flex-col items-center gap-1.5 mb-2">
                <span className={`text-[15px] whitespace-nowrap ${isActive ? 'text-[#0c121c] font-semibold' : 'text-[#aaa]'}`}>
                  {step.label}
                </span>
                <div className={`h-[2px] w-full rounded-full ${isActive ? 'bg-[#0c121c]' : 'bg-transparent'}`} />
              </div>
            );
          })}
        </div>

        {/* Selected options list */}
        <div className="flex flex-col gap-3 px-1 pb-1">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-[#888]">Exterior Color</span>
            <span className="text-[13px] text-[#888]">No Extra Charges</span>
          </div>
          {Object.entries(selectedOptions).map(([id, price]) => (
            <div key={id} className="flex items-center justify-between">
              <span className="text-[13px] text-[#888]">{OPTION_LABELS[id] || id}</span>
              <span className="text-[13px] text-[#888]">${Number(price).toLocaleString()}</span>
            </div>
          ))}
        </div></div>

        {/* Card 2: Order Summary form */}
        <div className="bg-white rounded-2xl border border-[#e4e2de] p-5 flex flex-col gap-5">
          <h2 className="text-[22px] font-semibold text-[#0c121c]">Order Summary</h2>

          <div className="h-px bg-[#ebebeb]" />

          <div className="flex flex-col gap-2">
            <label className="text-[12px] text-[#888]">Special Instructions</label>
            <textarea
              rows={2}
              className="border border-[#dcdcdc] rounded-xl px-4 py-3 text-[13px] text-[#aaa] resize-none outline-none focus:border-[#aaa] transition-colors"
              placeholder="I need it for an event, so I'd expect it within 2 weeks"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] text-[#888]">Discount Code</label>
            <input
              type="text"
              className="border border-[#dcdcdc] rounded-xl px-4 py-3 text-[13px] text-[#bbb] outline-none focus:border-[#aaa] transition-colors"
              placeholder="XXXX-XXXX-XXXX"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#666]">Subtotal</span>
              <span className="text-[14px] text-[#666]">${subtotal.toLocaleString()}</span>
            </div>
            {savingsPct != null && (
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-green-600">Discount (-{savingsPct}%)</span>
                <span className="text-[14px] text-green-600">-${discount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex items-center justify-between mt-1">
              <span className="text-[20px] font-bold text-[#0c121c]">Total</span>
              <span className="text-[20px] font-bold text-[#0c121c]">${total.toLocaleString()}</span>
            </div>
          </div>

          <button className="w-full rounded-xl bg-[#0c121c] text-white text-[15px] font-medium py-4 hover:bg-[#1e2a3a] transition-colors cursor-pointer">
            Proceed To Checkout
          </button>
        </div>

      </div>
    </div>
  );
}
