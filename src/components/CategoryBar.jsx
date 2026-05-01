import { useRef } from 'react';

const STEPS = [
  { id: 'basics', label: 'Basics/Standard' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'interior', label: 'Interior' },
  { id: 'summary', label: 'Build Summary' },
];

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function CategoryBar({ activeStep, onSelect, stepProgress }) {
  const scrollRef = useRef(null);

  function scroll(dir) {
    scrollRef.current?.scrollBy({ left: dir * 120, behavior: 'smooth' });
  }

  return (
    <div className="w-full bg-white flex-shrink-0 flex items-center h-[64px] border-b border-[#e8e6e2]">

      {/* Left chevron — mobile only */}
      <button
        onClick={() => scroll(-1)}
        className="lg:hidden flex-shrink-0 h-full px-2 text-[#aaa] hover:text-[#555] transition-colors cursor-pointer"
      >
        <ChevronLeft />
      </button>

      {/* Tabs */}
      <div ref={scrollRef} className="flex-1 flex items-center h-full overflow-x-auto scrollbar-hide">
        {STEPS.map((step, i) => {
          const isActive = activeStep === step.id;
          const subInfo = step.id === stepProgress?.stepId
            ? ``
            : '';

          return (
            <button
              key={step.id}
              onClick={() => onSelect(step.id)}
              className={`flex-1 h-full flex items-center justify-center text-[14px] border-b-2 transition-colors cursor-pointer whitespace-nowrap px-2 ${
                isActive
                  ? 'border-[#0c121c] text-[#0c121c] font-semibold'
                  : 'border-transparent text-[#aaa] font-normal hover:text-[#666]'
              }`}
            >
              <span className="mr-1.5">{i + 1}.</span>
              {step.label}{subInfo}
            </button>
          );
        })}
      </div>

      {/* Right chevron — mobile only */}
      <button
        onClick={() => scroll(1)}
        className="lg:hidden flex-shrink-0 h-full px-2 text-[#aaa] hover:text-[#555] transition-colors cursor-pointer"
      >
        <ChevronRight />
      </button>

    </div>
  );
}
