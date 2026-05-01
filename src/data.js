export const PREBUILDS = [
  {
    id: 'contractor',
    name: 'Tools / Contractor Equipment',
    price: '$18,000 + $4,000',
    base: 18000,
    details: [
      { label: 'Ramp Door to move in items easily', cost: 'No cost', free: true },
      { label: 'Side Door Access', cost: '+$500' },
      { label: 'Shelfs and Cabinets to Store your items', cost: '+$1,000' },
      { label: 'Warranty', cost: '+$2,500' },
    ],
  },
  {
    id: 'motorsports',
    name: 'Motorsports (ATVs, UTVs / Side-by-Sides)',
    price: '$16,000',
    base: 16000,
    details: [
      { label: 'Ramp Door for easy ATV loading', cost: 'No cost', free: true },
      { label: 'E-Track floor rails', cost: '+$400' },
      { label: 'Torsion Axle Upgrade', cost: '+$800' },
      { label: 'LED Interior Lighting', cost: '+$300' },
    ],
  },
  {
    id: 'everything',
    name: 'A bit of everything',
    price: '$15,500',
    base: 15500,
    details: [
      { label: 'Ramp Door', cost: 'No cost', free: true },
      { label: 'Side Door', cost: '+$500' },
      { label: 'E-Track Walls', cost: '+$300' },
    ],
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    price: '$14,500',
    base: 14500,
    details: [
      { label: 'Ramp Door', cost: 'No cost', free: true },
      { label: 'Double Side Door', cost: '+$700' },
      { label: 'Aluminum Diamond Plate Floor', cost: '+$420' },
    ],
  },
  {
    id: 'carhauling',
    name: 'Car Hauling',
    price: '$16,500',
    base: 16500,
    details: [
      { label: 'Ramp Door with Flap', cost: 'No cost', free: true },
      { label: 'Rubber Coin Floor', cost: '+$350' },
      { label: 'E-Track Floor Rails', cost: '+$400' },
      { label: 'Aluminum Mag Wheels', cost: '+$600' },
    ],
  },
  {
    id: 'racing',
    name: 'Racing Trailer',
    price: '$22,000',
    base: 22000,
    details: [
      { label: 'Torsion Axles', cost: '+$800' },
      { label: '12k Mini Split A/C', cost: '+$1,800' },
      { label: '30A Electrical Package', cost: '+$750' },
      { label: 'Aluminum Mag Wheels', cost: '+$600' },
    ],
  },
];

export const SWATCHES = [
  { name: 'Charcoal', hex: '#262422', price: 0 },
  { name: 'Navy Blue', hex: '#1e3a6e', price: 0 },
  { name: 'White', hex: '#ffffff', price: 0 },
  { name: 'Silver', hex: '#9ea5aa', price: 500 },
  { name: 'Slate', hex: '#3e5f81', price: 500 },
  { name: 'Green', hex: '#2c7a2c', price: 500 },
  { name: 'Red', hex: '#c0281e', price: 500 },
  { name: 'Orange', hex: '#e06a10', price: 500 },
  { name: 'Yellow', hex: '#d4a017', price: 500 },
  {name: "Forest Green", hex: "#004024", price: 0},
  { name: 'Light Grey', hex: '#b0aca8', price: 0 },
  { name: 'Cream', hex: '#d8d4d0', price: 0 },
 
];

export const EXTERIOR_OPTIONS = {
  skin: {
    title: 'Skin',
    tooltip: 'Exterior panel material and color',
    type: 'swatches',
    previewImg: 'https://backyardescapism.com/cdn/shop/files/Exterior_8.5x24TA_Blackout_StudioShot_CurbSide_720x720.jpg',
  },
  wheels: {
    title: 'Wheel and Running Gear',
    tooltip: 'Axle and wheel upgrade options',
    type: 'options',
    previewImg: 'https://backyardescapism.com/cdn/shop/files/Aluminum_Mags.jpg',
    options: [
      { id: 'mag', name: 'Aluminum Mag Wheels', price: 600 },
      { id: 'torsion', name: 'Torsion Axles', price: 800 },
      { id: 'spread', name: 'Spread Axles and Angled Sides', price: 950 },
    ],
  },
  hitch: {
    title: 'Hitch and Tongue',
    type: 'options',
    options: [
      { id: 'ejack', name: 'Electric Jack', price: 450 },
      { id: 'recessed', name: 'Recessed Tire Box', price: 280 },
    ],
  },
  lighting: {
    title: 'Exterior Lighting',
    type: 'options',
    options: [
      { id: 'spoiler', name: 'Rear Spoiler', price: 350 },
      { id: 'atp', name: 'ATP Sides / Rear', price: 420 },
      { id: 'blackout', name: 'Blackout Package', price: 650 },
    ],
  },
};

export const INTERIOR_OPTIONS = {
  floor: {
    title: 'Flooring',
    tooltip: 'Floor surface material',
    type: 'options',
    options: [
      { id: 'diamond', name: 'Aluminum Diamond Plate Floor', price: 420 },
      { id: 'rubber', name: 'Rubber Coin Mat Floor', price: 280 },
    ],
  },
  cargo: {
    title: 'Cargo Control & Tie-Downs',
    tooltip: 'Securing options for cargo and vehicles',
    type: 'options',
    defaultOpen: true,
    options: [
      { id: 'etrack', name: 'E-Track Wall Rails', price: 380 },
      { id: 'cabinets', name: 'Custom Cabinet System', price: 1000 },
    ],
  },
  electrical: {
    title: 'Electrical & Power',
    type: 'options',
    options: [
      { id: '30amp', name: '30A Shore Power Package', price: 750 },
      { id: '50amp', name: '50A Shore Power Package', price: 1100 },
      { id: 'radio', name: 'Radio Package', price: 320 },
    ],
  },
  climate: {
    title: 'Climate Control',
    type: 'options',
    options: [
      { id: 'ac', name: '12k Mini Split A/C', price: 1800 },
    ],
  },
};

export const CAT_TABS = [
  { id: 'skin', label: 'Skin, Finish & Appearance' },
  { id: 'doors', label: 'Doors & Access Points' },
  { id: 'exterior', label: 'Exterior Functional Add-Ons' },
  { id: 'roof', label: 'Roof' },
  { id: 'security', label: 'Security' },
];
