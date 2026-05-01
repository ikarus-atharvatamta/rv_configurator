import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PREBUILDS } from '../data';

const BUDGET_OPTIONS = [
  'Under $15,000',
  '$15,000 - $18,000',
  '$18,000 - $22,000',
  'Over $22,000',
  'Not sure yet',
];

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <line x1="7" y1="3" x2="7" y2="11" />
      <line x1="3" y1="7" x2="11" y2="7" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <line x1="3" y1="7" x2="11" y2="7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 7.5L5.4 10.4L11.5 3.8" />
    </svg>
  );
}

function BudgetField({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-white/90 text-[13px] font-normal">
        To connect you with your right trailer needs, what investments are you considering?
      </p>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="w-full rounded-[10px] border border-white/55 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] h-[48px] flex items-center justify-between px-4 text-left text-white/80 text-[12px] cursor-pointer"
        >
          <span>{value || 'Chose your budget range'}</span>
          <span className="text-white/65">{open ? <MinusIcon /> : <PlusIcon />}</span>
        </button>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-1 rounded-[10px] border border-white/35 bg-[#323741] shadow-xl overflow-hidden z-20">
            {BUDGET_OPTIONS.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-white/85 text-[12px] hover:bg-white/8 cursor-pointer"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PresetField({ selectedId, isDropdownOpen, expandedIds, onToggleDropdown, onToggleExpanded, onSelect }) {

  return (
    <div className="flex flex-col gap-3">
      <p className="text-white/90 text-[13px] font-normal">
        What will be you be using this trailer for, primarily?
      </p>

      <div className="rounded-[10px] border border-white/55 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-3 py-3">
        <button
          type="button"
          onClick={onToggleDropdown}
          className="w-full flex items-center justify-between text-left text-white/80 text-[12px] px-3 py-2 cursor-pointer"
        >
          <span>Choose a pre-build and customize</span>
          <span className="text-white/65">{isDropdownOpen ? <MinusIcon /> : <PlusIcon />}</span>
        </button>

        {isDropdownOpen && (
          <div className="mt-4 flex flex-col gap-2 rounded-[10px]">
            {PREBUILDS.map(prebuild => {
              const expanded = expandedIds.includes(prebuild.id);
              const selected = selectedId === prebuild.id;

              return (
                <div key={prebuild.id} className="rounded-[10px] border border-white/75 bg-white/[0.02] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => {
                      if (expanded) {
                        onSelect(prebuild.id);
                        onToggleExpanded(prebuild.id);
                      } else {
                        onToggleExpanded(prebuild.id);
                      }
                    }}
                    className="w-full px-4 py-3 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-white/95 text-[12px]">
                      {prebuild.name}
                    </span>
                    <div className="flex items-center gap-3 flex-shrink-0 text-white/85 text-[12px]">
                      <span>{prebuild.price.replace(/\s+/g, '')}</span>
                      <span className="text-white">
                        {expanded ? <CheckIcon /> : <PlusIcon />}
                      </span>
                    </div>
                  </button>

                  {expanded && (
                    <div className="px-4 pb-4">
                      <div className="border-t border-white/55 pt-4 flex flex-col gap-4">
                        {prebuild.details.map((detail, index) => (
                          <div key={index} className="flex items-center justify-between gap-4">
                            <span className="text-white/92 text-[12px] leading-relaxed">
                              {detail.label}
                            </span>
                            <span className="text-white/92 text-[12px] flex-shrink-0">
                              {detail.cost}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PresetPage() {
  const navigate = useNavigate();
  const [selectedPreset, setSelectedPreset] = useState(PREBUILDS[0]?.id ?? null);
  const [presetDropdownOpen, setPresetDropdownOpen] = useState(false);
  const [expandedPresets, setExpandedPresets] = useState([]);
  const [budget, setBudget] = useState('');

  function handleTogglePresetDropdown() {
    setPresetDropdownOpen(prev => {
      const next = !prev;
      if (!next) setExpandedPresets([]);
      return next;
    });
  }

  function handleToggleExpandedPreset(id) {
    setExpandedPresets(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-white relative flex justify-center px-6 py-16 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(12,18,28,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(12,18,28,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '70px 70px',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-[#0c121c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-10 w-56 h-56 rounded-full bg-[#0c121c]/4 blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-[-40px] w-64 h-64 rounded-full bg-[#0c121c]/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-40px] right-28 w-36 h-36 rounded-full bg-[#0c121c]/5 blur-2xl pointer-events-none" />

      <h1 className="absolute top-10 sm:top-[12%] left-1/2 -translate-x-1/2 w-full px-6 text-center text-[clamp(34px,8vw,120px)] font-bold text-[#0c121c]/[0.09] tracking-tight leading-none pointer-events-none select-none capitalize">
        Configure Your Trailer
      </h1>

      <div className="absolute top-[32%] z-10 w-full max-w-[680px] bg-[#282d38] rounded-xl shadow-2xl px-10 py-6 border-3 border-white/20 max-h-[50vh] overflow-y-auto scrollbar-hide scrollbar-thumb-[#0c121c]/100">
        <h2 className="text-white text-[46px] font-medium tracking-tight mb-5">
          Preset Selection
        </h2>

        <div className="flex flex-col gap-5">
          <PresetField
            selectedId={selectedPreset}
            isDropdownOpen={presetDropdownOpen}
            expandedIds={expandedPresets}
            onToggleDropdown={handleTogglePresetDropdown}
            onToggleExpanded={handleToggleExpandedPreset}
            onSelect={setSelectedPreset}
          />

          <BudgetField value={budget} onChange={setBudget} />

          <div className="flex items-center gap-2 mt-1">
            <div className="flex-shrink-0 w-[15px] h-[15px] rounded-full bg-white/95 flex items-center justify-center">
              <span className="text-[#282d38] text-[9px] font-bold leading-none">i</span>
            </div>
            <span className="text-white/80 text-[12px]">
              Use preset as a starting point to configure
            </span>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => navigate('/configure')}
            className="bg-white rounded-xl h-[50px] flex items-center justify-center gap-2 px-10 w-full max-w-[266px] hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
          >
            <span className="text-[#0c121c] text-[15px] font-medium">Go to Configurator</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5H12M12 5L8 1M12 5L8 9" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
