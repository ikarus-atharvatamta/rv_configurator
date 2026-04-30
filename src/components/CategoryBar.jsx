const STEPS = [
  { id: 'basics', label: 'Basics/Standard' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'interior', label: 'Interior' },
  { id: 'summary', label: 'Build Summary' },
];

export default function CategoryBar({ activeStep, onSelect, stepProgress }) {
  return (
    <div className="w-full bg-white flex-shrink-0 flex items-center h-[64px] overflow-x-auto scrollbar-hide border-b border-[#e8e6e2]">
      {STEPS.map((step, i) => {
        const isActive = activeStep === step.id;
        const subInfo = step.id === stepProgress?.stepId
          ? ` (${stepProgress.current} of ${stepProgress.total})`
          : '';

        return (
          <button
            key={step.id}
            onClick={() => onSelect(step.id)}
            className={`flex-1 h-full flex items-center justify-center text-[13px] border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              isActive
                ? 'border-[#0c121c] text-[#0c121c] font-medium'
                : 'border-transparent text-[#888] font-normal hover:text-[#555]'
            }`}
          >
            <span className="mr-1">{i + 1}.</span>
            {step.label}
            {subInfo}
          </button>
        );
      })}
    </div>
  );
}
