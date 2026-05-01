import { useNavigate } from 'react-router-dom';

function InfoBadge({ text }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
        <span className="text-[#0c121c] text-xs font-medium leading-none">i</span>
      </div>
      <span className="text-white text-sm font-medium">{text}</span>
    </div>
  );
}

function ChoiceCard({ title, description, infoBadge, buttonLabel, onAction, icon }) {
  return (
    <div className="bg-[#0c121c]/75 hover:bg-[#0c121c]/90 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/60 shadow-[8px_12px_25px_rgba(12,18,28,0.24)] flex flex-col justify-between p-10 sm:p-14 w-full max-w-[500px] min-h-[480px] transition-colors duration-200">
      <div className="flex flex-col gap-8">
        <h2 className="text-white text-5xl sm:text-6xl font-medium leading-[0.9] capitalize tracking-tight">
          {title}
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="text-white text-lg font-medium">What it lets you do:</p>
            <p className="text-white/80 text-base font-light leading-relaxed">{description}</p>
          </div>
          <InfoBadge text={infoBadge} />
        </div>
      </div>
      <button
        onClick={onAction}
        className="mt-10 bg-white hover:bg-[#0c121c] group rounded-xl h-[68px] flex items-center justify-center gap-3 px-10 shadow-[0px_2px_10px_rgba(0,0,0,0.12)] transition-colors duration-200 cursor-pointer"
      >
        <span className="text-[#0c121c] group-hover:text-white text-lg font-medium transition-colors duration-200">{buttonLabel}</span>
        {icon}
      </button>
    </div>
  );
}

const ArrowIcon = () => (
  <svg className="group-hover:invert transition-[filter] duration-200" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6H14M14 6L9 1M14 6L9 11" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PresetIcon = () => (
 <svg className="group-hover:invert transition-[filter] duration-200" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="4" y1="2" x2="4" y2="16" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="4" cy="6" r="2" stroke="#0c121c" strokeWidth="1.5" fill="white"/>
  <line x1="9" y1="2" x2="9" y2="16" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="9" cy="10" r="2" stroke="#0c121c" strokeWidth="1.5" fill="white"/>
  <line x1="14" y1="2" x2="14" y2="16" stroke="#0c121c" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="14" cy="5" r="2" stroke="#0c121c" strokeWidth="1.5" fill="white"/>
</svg>
);

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col items-center justify-center px-6 py-16"
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

      {/* Background large text */}
      <h1 className="absolute top-10 sm:top-[12%] left-1/2 -translate-x-1/2 w-full px-6 text-center text-[clamp(34px,8vw,120px)] font-bold text-[#0c121c]/[0.09] tracking-tight leading-none pointer-events-none select-none capitalize">
        Configure Your Trailer
      </h1>

      {/* Cards */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center sm:items-stretch justify-center w-full max-w-5xl mt-32 sm:mt-24">
        <ChoiceCard
          title="Help You Choose"
          description="Lets you choose a trailer preset for your needs. Recommended configurations for your need and price range."
          infoBadge="Use preset as a starting point to configure"
          buttonLabel="Choose Preset"
          onAction={() => navigate('/preset')}
          icon={<PresetIcon />}
        />
        <ChoiceCard
          title="Build from Scratch"
          description="Lets you configure the trailer from scratch, letting you make selections that fit your use."
          infoBadge="Best if you know exactly what you need"
          buttonLabel="Go to Configurator"
          onAction={() => navigate('/configure')}
          icon={<ArrowIcon />}
        />
      </div>
    </div>
  );
}
