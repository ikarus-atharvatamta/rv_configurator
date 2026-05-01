import { useState, useRef } from 'react';

const SlidersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="6" y1="3" x2="6" y2="21" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="18" y1="3" x2="18" y2="21" />
    <circle cx="6" cy="14" r="2" fill="white" />
    <circle cx="12" cy="8" r="2" fill="white" />
    <circle cx="18" cy="16" r="2" fill="white" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8.2L6.4 11.4L13 4.8" />
  </svg>
);

const EXTERIOR_PREVIEW_IMG = 'https://backyardescapism.com/cdn/shop/files/Exterior_8.5x24TA_Blackout_StudioShot_CurbSide_720x720.jpg';

const COLOR_SWATCHES = [
  { name: 'Charcoal', hex: '#8d8b83', priceLabel: 'No Extra Charges' },
  { name: 'Indigo Blue', hex: '#1f3f73', priceLabel: 'No Extra Charges', previewImg: '/design images/model_images/Gemini_Generated_Image_ewznwewznwewznwe.png' },
  { name: 'Silver Mist', hex: '#8d8e97', priceLabel: 'No Extra Charges', previewImg: '/design images/model_images/Gemini_Generated_Image_ez6yblez6yblez6y.png' },
  { name: 'Slate Blue', hex: '#465579', priceLabel: 'No Extra Charges' },
  { name: 'Cobalt', hex: '#1f63bf', priceLabel: 'No Extra Charges' },
  { name: 'Green', hex: '#24990a', priceLabel: 'No Extra Charges' },
  { name: 'Red', hex: '#d70039', priceLabel: 'No Extra Charges' },
  { name: 'Orange', hex: '#ef4a02', priceLabel: 'No Extra Charges' },
  { name: 'Yellow', hex: '#f0ae00', priceLabel: 'No Extra Charges' },
  {name: "Forest Green", hex: "#004024", priceLabel: 'No Extra Charges'},
  { name: 'Grey', hex: '#616878', priceLabel: 'No Extra Charges' },
  { name: 'Steel', hex: '#a7a1a1', priceLabel: 'No Extra Charges' },
];

const REAR_DOOR_OPTIONS = [
  { id: 'rear-ramp-door', label: 'Rear Ramp Door', price: 1000 },
  { id: 'rear-barn-door', label: 'Rear Barn Door', price: 600 },
];

function PlusMinusIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <line x1="5" y1="10" x2="15" y2="10" />
      {!open && <line x1="10" y1="5" x2="10" y2="15" />}
    </svg>
  );
}

function OptionToggle({ selected, disabled }) {
  if (disabled) return null;

  return (
    <div className={`flex items-center justify-center transition-colors ${selected ? 'text-[#0c121c]' : 'text-[#525760]'}`}>
      <PlusMinusIcon open={selected} />
    </div>
  );
}

function OptionRow({ label, info, price, disabled, selected, onToggle, multiChoice }) {
  const infoText = disabled
    ? 'Configuration Not Supported'
    : multiChoice
      ? info || 'Two Choices'
      : price > 0
        ? `$${price.toLocaleString()}`
        : info || 'No Extra Charges';

  return (
    <button
      type="button"
      className={`w-full rounded-md border min-h-[54px] px-5 py-3 flex items-center justify-between text-left transition-colors ${
        disabled
          ? 'opacity-40 cursor-default border-[#d2d2d2] bg-white'
          : selected
            ? 'cursor-pointer border-[#28453a] bg-[#f8fbf7]'
            : 'cursor-pointer border-[#d2d2d2] bg-white hover:bg-[#fafafa]'
      }`}
      onClick={disabled ? undefined : onToggle}
    >
      <span className={`text-[15px] leading-none ${disabled ? 'text-[#9d9d9d]' : 'text-[#0c121c]'}`}>{label}</span>
      <div className="flex items-center gap-4 flex-shrink-0">
        <span className={`text-[15px] leading-none ${disabled ? 'text-[#ababab]' : 'text-[#0c121c]'}`}>{infoText}</span>
        {!disabled && (
          <span className={selected ? 'text-[#28453a]' : 'text-[#525760]'}>
            {selected ? <CheckIcon /> : <PlusMinusIcon open={false} />}
          </span>
        )}
      </div>
    </button>
  );
}

function ExpandedOptionRow({ label, price, selected, onToggle, description, detailPrice }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full rounded-md border px-5 py-4 text-left transition-colors ${
        selected
          ? 'border-[#28453a] bg-[#f8fbf7]'
          : 'border-[#d2d2d2] bg-white hover:bg-[#fafafa]'
      } cursor-pointer`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-[15px] leading-none text-[#0c121c]">{label}</span>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-[15px] leading-none text-[#0c121c]">${price.toLocaleString()}</span>
          <span className={`${selected ? 'text-[#28453a]' : 'text-[#525760]'}`}>
            {selected ? <CheckIcon /> : <PlusMinusIcon open={false} />}
          </span>
        </div>
      </div>

      {selected && (
        <div className="mt-4 flex items-start justify-between gap-4">
          <p className="max-w-[70%] text-[14px] leading-[1.35] text-[#58605d]">
            {description}
          </p>
          <span className="text-[15px] leading-none text-[#0c121c] flex-shrink-0">
            +${detailPrice.toLocaleString()}
          </span>
        </div>
      )}
    </button>
  );
}

function FunctionalOptionRow({ label, price, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full rounded-md border px-5 py-3 min-h-[54px] flex items-center justify-between text-left transition-colors cursor-pointer ${
        selected
          ? 'border-[#28453a] bg-[#f8fbf7]'
          : 'border-[#d2d2d2] bg-white hover:bg-[#fafafa]'
      }`}
    >
      <span className="text-[15px] leading-none text-[#0c121c]">{label}</span>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-[15px] leading-none text-[#0c121c]">${price.toLocaleString()}</span>
        <span className={selected ? 'text-[#28453a]' : 'text-[#525760]'}>
          {selected ? <CheckIcon /> : <PlusMinusIcon open={false} />}
        </span>
      </div>
    </button>
  );
}

function RearDoorRow({ selectedOptions, onToggleOption }) {
  const [open, setOpen] = useState(false);
  const selectedRearDoors = REAR_DOOR_OPTIONS.filter(option => selectedOptions[option.id] !== undefined);
  const summaryText = selectedRearDoors.length > 0
    ? selectedRearDoors.map(option => option.label).join(', ')
    : 'Choose One';

  return (
    <div className={`w-full rounded-md border px-4 py-4 flex flex-col gap-4 ${
      open || selectedRearDoors.length > 0 ? 'border-[#28453a] ' : 'border-[#d2d2d2] bg-white'
    }`}>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className="text-[13px] text-[#0c121c] leading-none">Rear Door</span>
        <div className="flex items-center gap-3 text-[#0c121c]">
          <span className="text-[13px] leading-none">{summaryText}</span>
          <span className={selectedRearDoors.length > 0 ? 'text-[#28453a]' : 'text-[#525760]'}>
            {selectedRearDoors.length > 0 ? <CheckIcon /> : <PlusMinusIcon open={open} />}
          </span>
        </div>
      </button>

      {open && (
        <>
          <div className="overflow-hidden rounded-[6px]">
            <img
              src={EXTERIOR_PREVIEW_IMG}
              alt="Rear door preview"
              className="w-full h-[172px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            {REAR_DOOR_OPTIONS.map(option => {
              const isSelected = selectedOptions[option.id] !== undefined;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onToggleOption(option.id, option.price)}
                  className={`w-full rounded-md border px-4 py-4 text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#28453a] bg-[#f8fbf7]'
                      : 'border-[#dcdcdc] bg-white hover:bg-[#fafafa]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[14px] text-[#0c121c] leading-none">{option.label}</span>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-[14px] text-[#0c121c] leading-none">${option.price.toLocaleString()}</span>
                      <span className={isSelected ? 'text-[#28453a]' : 'text-[#525760]'}>
                        {isSelected ? <CheckIcon /> : <PlusMinusIcon open={false} />}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function ColorRow({ selectedColor, onSelect }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [hoveredSwatch, setHoveredSwatch] = useState(null);
  const current = COLOR_SWATCHES.find(s => s.name === selectedColor) ?? null;
  const summaryText = current ? `${current.name} · ${current.priceLabel}` : 'No Extra Charges';

  function handleCommitSelection() {
    setIsExpanded(false);
  }

  if (!isExpanded) {
    return (
      <button
        type="button"
        onClick={() => {
          onSelect({ name: '' });
          setIsExpanded(true);
        }}
        className={`w-full rounded-md min-h-[54px] px-4 py-3 flex items-center justify-between text-left cursor-pointer transition-colors ${
          current ? 'border border-[#28453a] bg-[#f8fbf7]' : 'border border-[#d2d2d2] bg-white'
        }`}
      >
        <span className="text-[13px] text-[#0c121c] leading-none">Exterior Color</span>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-[13px] text-[#0c121c] leading-none">{summaryText}</span>
          <span className="text-[#28453a]">
            {current ? <CheckIcon /> : <PlusMinusIcon open={false} />}
          </span>
        </div>
      </button>
    );
  }

  return (
    <div className="w-full rounded-md border border-[#28453a] bg-white px-4 py-4 flex flex-col gap-4">
      <button
        type="button"
        onClick={handleCommitSelection}
        className="w-full flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className="text-[13px] text-[#0c121c] leading-none">Exterior Color</span>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-[13px] text-[#0c121c] leading-none">{summaryText}</span>
          <span className="text-[#525760]">
            <PlusMinusIcon open={false} />
          </span>
        </div>
      </button>

      <div className="overflow-hidden rounded-[6px]">
        <img
          src={current?.previewImg ?? EXTERIOR_PREVIEW_IMG}
          alt="Exterior color preview"
          className="w-full h-[172px] object-cover transition-opacity duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        {[COLOR_SWATCHES.slice(0, 6), COLOR_SWATCHES.slice(6)].map((row, rowIndex) => {
          const rowHasHover = row.some(s => s.name === hoveredSwatch);
          return (
            <div key={rowIndex} className="flex gap-2">
              {row.map(sw => {
                const isHovered = hoveredSwatch === sw.name;
                const isSelected = current?.name === sw.name;
                const flexGrow = isHovered ? 2.5 : rowHasHover ? 0.87 : 1;

                return (
                  <div
                    key={sw.name}
                    className="relative h-[36px] min-w-0"
                    style={{ flexGrow, flexShrink: 1, flexBasis: 0, transition: 'flex-grow 0.3s ease-out' }}
                  >
                    <button
                      type="button"
                      onClick={() => onSelect(sw)}
                      onMouseEnter={() => setHoveredSwatch(sw.name)}
                      onMouseLeave={() => setHoveredSwatch(null)}
                      title={sw.name}
                      style={{ background: sw.hex }}
                      className={`w-full h-full rounded-[6px] cursor-pointer overflow-hidden transition-shadow duration-300 ease-out ${
                        isHovered ? 'shadow-[0_6px_20px_rgba(0,0,0,0.24)]' : ''
                      } ${isSelected ? 'ring-2 ring-[#28453a] ring-offset-1' : ''}`}
                    >
                      <span
                        className={`flex h-full items-center justify-center px-3 text-[12px] font-medium text-white whitespace-nowrap transition-opacity duration-200 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {sw.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Section({ title, defaultOpen = false, children, disabled }) {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = !!children;

  return (
    <section className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => hasChildren && setOpen(prev => !prev)}
        className={`w-full flex items-center justify-between text-left px-4 py-1 ${
          hasChildren ? 'cursor-pointer' : 'cursor-default'
        }`}
      >
        <span className={`text-[18px] leading-tight tracking-[-0.02em] ${disabled ? 'text-[#9d9d9d]' : 'text-[#0c121c]'}`}>
          {title}
        </span>
        <span className={`${disabled ? 'text-[#b6b6b6]' : 'text-[#0c121c]'}`}>
          <PlusMinusIcon open={open} />
        </span>
      </button>

      {open && hasChildren && (
        <div className="flex flex-col gap-3">
          {children}
        </div>
      )}
    </section>
  );
}

const EXT_TABS = [
  { id: 'color', label: 'Color And Appearance' },
  { id: 'doors', label: 'Doors & Access Points' },
  { id: 'functional', label: 'Exterior Functional Add-Ons' },
  { id: 'roof', label: 'Roof' },
  { id: 'security', label: 'Security' },
];

const INT_TABS = [
  { id: 'floor', label: 'Flooring' },
  { id: 'cargo', label: 'Cargo Control' },
  { id: 'electrical', label: 'Electrical & Power' },
  { id: 'climate', label: 'Climate Control' },
];

const TAB_OPTIONS = {
  color:      ['blackout'],
  doors:      ['rear-ramp-door', 'rear-barn-door', 'side-door', 'service-window'],
  functional: ['mag', 'torsion', 'ejack', 'recessed'],
  roof:       [],
  security:   [],
  floor:      ['diamond', 'rubber'],
  cargo:      ['etrack', 'cabinets'],
  electrical: ['30amp', '50amp', 'radio'],
  climate:    ['ac'],
};

export default function RightPanel({
  activeStep,
  selectedOptions,
  onToggleOption,
  selectedColor,
  onColorSelect,
  onSubStepChange,
  onScrollChange,
}) {
  const [activeSubTab, setActiveSubTab] = useState('color');
  const scrollRef = useRef(null);
  const tabScrollRef = useRef(null);

  const tabs = activeStep === 'interior' ? INT_TABS : EXT_TABS;

  function handleSubTab(id) {
    setActiveSubTab(id);
    onSubStepChange?.(tabs.findIndex(t => t.id === id) + 1);
    const container = scrollRef.current;
    const section = document.getElementById(`section-${id}`);
    if (container && section) {
      container.scrollTo({ top: section.offsetTop - container.offsetTop, behavior: 'smooth' });
    }
  }

  const isSelected = id => !!selectedOptions[id];

  return (
    <div className="w-[full] flex-1 flex flex-col bg-white overflow-hidden min-h-0">
      <div className="hidden lg:flex items-center justify-between px-5 pt-5 pb-3 flex-shrink-0">
        <h2 className="text-[#0c121c] text-[24px] font-bold leading-tight">
          Enclosed Trailer<br />Configurator
        </h2>
        <button className="w-10 h-10 rounded-md bg-[#efefef] hover:bg-[#e4e4e4] flex items-center justify-center text-[#1a1a1a] transition-colors cursor-pointer flex-shrink-0">
          <SlidersIcon />
        </button>
      </div>

      <div className="hidden lg:flex items-center flex-shrink-0 overflow-hidden lg:px-6">
        <div ref={tabScrollRef} className="flex-1 flex items-center overflow-x-auto scrollbar-hide mb-2">
          {tabs.map(tab => {
            const isActive = activeSubTab === tab.id;
            const hasSelection = TAB_OPTIONS[tab.id]?.some(id => selectedOptions[id] !== undefined);
            return (
              <button
                key={tab.id}
                onClick={() => handleSubTab(tab.id)}
                className={`mt-4 flex-shrink-0 text-[16px] px-4 h-9 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? hasSelection
                      ? 'border-[#28453a] text-[#28453a] font-medium'
                      : 'border-[#0c121c] text-[#0c121c] font-medium'
                    : 'border-transparent text-[#999] hover:text-[#555]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => tabScrollRef.current?.scrollBy({ left: 120, behavior: 'smooth' })}
          className="flex-shrink-0 px-3 h-9 text-[#999] hover:text-[#555] transition-colors cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>

      <div ref={scrollRef} onScroll={e => onScrollChange?.(e.currentTarget.scrollTop > 10)} className="flex-1 overflow-y-auto lg:px-6 py-5 flex flex-col gap-10 scrollbar-hide">
        {activeStep !== 'interior' && (
          <>
            <div id="section-color">
              <Section title="Color And Appearance" defaultOpen>
                <ColorRow selectedColor={selectedColor} onSelect={onColorSelect} />
                <ExpandedOptionRow
                  label="Blackout Package"
                  price={870}
                  selected={isSelected('blackout')}
                  onToggle={() => onToggleOption('blackout', 870)}
                  description="Replaces all chrome trim with matte black - vents, handles, door frames, and hinges."
                  detailPrice={9999}
                />
              </Section>
            </div>

            <div id="section-doors">
              <Section title="Door & Access Points" defaultOpen>
                <RearDoorRow
                  selectedOptions={selectedOptions}
                  onToggleOption={onToggleOption}
                />
                <ExpandedOptionRow
                  label="Side Door"
                  price={2340}
                  selected={isSelected('side-door')}
                  onToggle={() => onToggleOption('side-door', 2340)}
                  description="Replaces all chrome trim with matte black - vents, handles, door frames, and hinges."
                  detailPrice={9999}
                />
                <ExpandedOptionRow
                  label="Service Window"
                  price={1550}
                  selected={isSelected('service-window')}
                  onToggle={() => onToggleOption('service-window', 1550)}
                  description="Replaces all chrome trim with matte black - vents, handles, door frames, and hinges."
                  detailPrice={9999}
                />
                <OptionRow label="Entry Step" disabled />
              </Section>
            </div>

            <div id="section-functional">
              <Section title="Exterior Functional Add-Ons">
                <FunctionalOptionRow
                  label="Aluminum Mag Wheels"
                  price={600}
                  selected={isSelected('mag')}
                  onToggle={() => onToggleOption('mag', 600)}
                />
                <FunctionalOptionRow
                  label="Torsion Axles"
                  price={800}
                  selected={isSelected('torsion')}
                  onToggle={() => onToggleOption('torsion', 800)}
                />
                <FunctionalOptionRow
                  label="Electric Jack"
                  price={450}
                  selected={isSelected('ejack')}
                  onToggle={() => onToggleOption('ejack', 450)}
                />
                <FunctionalOptionRow
                  label="Recessed Tire Box"
                  price={280}
                  selected={isSelected('recessed')}
                  onToggle={() => onToggleOption('recessed', 280)}
                />
              </Section>
            </div>

            <div id="section-roof">
              <Section title="Roof" />
            </div>

            <div id="section-security">
              <Section title="Security" />
            </div>
          </>
        )}

        {activeStep === 'interior' && (
          <>
            <div id="section-floor">
              <Section title="Flooring" defaultOpen>
                <OptionRow
                  label="Aluminum Diamond Plate Floor"
                  price={420}
                  selected={isSelected('diamond')}
                  onToggle={() => onToggleOption('diamond', 420)}
                />
                <OptionRow
                  label="Rubber Coin Mat Floor"
                  price={280}
                  selected={isSelected('rubber')}
                  onToggle={() => onToggleOption('rubber', 280)}
                />
              </Section>
            </div>

            <div id="section-cargo">
              <Section title="Cargo Control & Tie-Downs" defaultOpen>
                <OptionRow
                  label="E-Track Wall Rails"
                  price={380}
                  selected={isSelected('etrack')}
                  onToggle={() => onToggleOption('etrack', 380)}
                />
                <OptionRow
                  label="Custom Cabinet System"
                  price={1000}
                  selected={isSelected('cabinets')}
                  onToggle={() => onToggleOption('cabinets', 1000)}
                />
              </Section>
            </div>

            <div id="section-electrical">
              <Section title="Electrical & Power">
                <OptionRow
                  label="30A Shore Power Package"
                  price={750}
                  selected={isSelected('30amp')}
                  onToggle={() => onToggleOption('30amp', 750)}
                />
                <OptionRow
                  label="50A Shore Power Package"
                  price={1100}
                  selected={isSelected('50amp')}
                  onToggle={() => onToggleOption('50amp', 1100)}
                />
                <OptionRow
                  label="Radio Package"
                  price={320}
                  selected={isSelected('radio')}
                  onToggle={() => onToggleOption('radio', 320)}
                />
              </Section>
            </div>

            <div id="section-climate">
              <Section title="Climate Control">
                <OptionRow
                  label="12k Mini Split A/C"
                  price={1800}
                  selected={isSelected('ac')}
                  onToggle={() => onToggleOption('ac', 1800)}
                />
              </Section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
