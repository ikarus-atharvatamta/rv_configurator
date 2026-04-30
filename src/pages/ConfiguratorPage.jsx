import { useState } from 'react';
import Nav from '../components/Nav';
import CategoryBar from '../components/CategoryBar';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import BottomBar from '../components/BottomBar';
import { PREBUILDS } from '../data';

const DEFAULT_BASE = 28500;
const STEP_TOTALS = {
  basics: 4,
  exterior: 4,
  interior: 4,
  summary: 4,
};

export default function ConfiguratorPage() {
  const [activeStep, setActiveStep] = useState('exterior');
  const [activeSubStep, setActiveSubStep] = useState(1);
  const [selectedPrebuild, setSelectedPrebuild] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedColor, setSelectedColor] = useState('White');
  const [basePrice, setBasePrice] = useState(DEFAULT_BASE);
  const [modelName, setModelName] = useState('Model name');

  function handlePrebuildSelect(id) {
    if (id === null) {
      setSelectedPrebuild(null);
      setBasePrice(DEFAULT_BASE);
      setModelName('Model name');
    } else {
      const pb = PREBUILDS.find(p => p.id === id);
      setSelectedPrebuild(id);
      setBasePrice(pb.base);
      setModelName(pb.name);
    }
  }

  function handleToggleOption(id, price) {
    setSelectedOptions(prev => {
      const next = { ...prev };
      if (next[id] !== undefined) delete next[id];
      else next[id] = price;
      return next;
    });
  }

  function handleColorSelect(swatch) {
    setSelectedColor(swatch.name);
  }

  function handleStepChange(stepId) {
    setActiveStep(stepId);
    setActiveSubStep(1);
  }

  const addOns = Object.values(selectedOptions).reduce((a, b) => a + b, 0);

  function handleSaveBuild() {
    alert(`Build saved!\nColor: ${selectedColor}\nAdd-ons: ${Object.keys(selectedOptions).join(', ') || 'None'}\nTotal: $${(basePrice + addOns).toLocaleString()}`);
  }

  function handleDownload() {
    alert('Quote PDF generation would trigger here.');
  }

  const activeStepProgress = {
    stepId: activeStep,
    current: activeSubStep,
    total: STEP_TOTALS[activeStep] ?? 1,
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white overflow-hidden">
      <Nav />

      {/* Panels wrapper — grows to fill space between Nav and BottomBar */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
        {/* Left: Trailer + CategoryBar */}
        <div className="w-full lg:w-[70vw] lg:flex-shrink-0 min-h-0 flex flex-col overflow-hidden">
          <div className="hidden lg:block">
            <CategoryBar
              activeStep={activeStep}
              onSelect={handleStepChange}
              stepProgress={activeStepProgress}
            />
          </div>
          <div className="lg:flex-1 lg:min-h-0 lg:overflow-hidden mx-4 flex flex-col">
            <LeftPanel onSave={handleSaveBuild} />
          </div>
          <div className="lg:hidden">
            <CategoryBar
              activeStep={activeStep}
              onSelect={handleStepChange}
              stepProgress={activeStepProgress}
            />
          </div>
        </div>

        {/* Right: Options panel */}
        <div className="flex-1 lg:w-[29vw] lg:flex-none lg:flex-shrink-0 flex flex-col overflow-hidden border-t lg:border-t-0 lg:border-l border-[#e8e6e2] min-h-0">
          <RightPanel
            activeStep={activeStep}
            selectedOptions={selectedOptions}
            onToggleOption={handleToggleOption}
            selectedColor={selectedColor}
            onColorSelect={handleColorSelect}
            selectedPrebuild={selectedPrebuild}
            onPrebuildSelect={handlePrebuildSelect}
            onSubStepChange={setActiveSubStep}
          />
        </div>
      </div>

      {/* Footer */}
      <BottomBar
        modelName={modelName}
        basePrice={basePrice}
        addOns={addOns}
        onDownload={handleDownload}
      />
    </div>
  );
}
