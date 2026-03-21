export type ProductMarket = 'veterinary' | 'hospital';

export type ProductSpec = { label: string; value: string };

export type ProductFeature = { title: string; description: string };

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  markets: ProductMarket[];
  specs: ProductSpec[];
  features: ProductFeature[];
  useCases: { veterinary: string[]; hospital: string[] };
  certifications: string[];
};

const placeholderImage = '/images/placeholder.svg';

const productSlugs = [
  'endotracheal-tube',
  'chest-drainage-kit',
  'ibpm',
  'cvc',
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export const productsEn: Product[] = [
  {
    slug: 'endotracheal-tube',
    name: 'Endotracheal Tube',
    shortDescription:
      'Purpose-built endotracheal tubes for secure airway management in veterinary and clinical settings.',
    description:
      'ROLA endotracheal tubes are designed for reliable airway management during anesthesia and critical care. Available in a range of sizes to suit different patient profiles. Manufactured under controlled conditions with materials selected for biocompatibility and durability.',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: 'Material', value: 'Medical-grade PVC' },
      { label: 'Sizes', value: '2.0 mm – 12.0 mm ID' },
      { label: 'Cuff', value: 'High-volume, low-pressure' },
      { label: 'Sterility', value: 'Sterile, single use' },
    ],
    features: [
      {
        title: 'Sizing range',
        description: 'Wide size range to accommodate small animal through large animal and human adult use.',
      },
      {
        title: 'Clear visibility',
        description: 'Transparent tube body for visual confirmation of placement and condensation.',
      },
      {
        title: 'Radiopaque line',
        description: 'Radiopaque stripe for X-ray verification of tube position.',
      },
    ],
    useCases: {
      veterinary: [
        'General anesthesia in companion animal practice',
        'Emergency airway management',
        'Large animal and equine procedures',
      ],
      hospital: [
        'Operating room and ICU airway management',
        'Emergency and prehospital intubation',
      ],
    },
    certifications: ['CE', 'FDA 510(k)'],
  },
  {
    slug: 'chest-drainage-kit',
    name: 'ROLA Disposable Chest Drainage Kit',
    shortDescription:
      'Single-use chest drainage system for thoracostomy and post-operative drainage.',
    description:
      'The ROLA Disposable Chest Drainage Kit provides a complete, sterile system for chest tube placement and closed drainage. Designed for ease of use and consistent performance in both veterinary and hospital environments.',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: 'Components', value: 'Chest tube, drainage system, connectors' },
      { label: 'Sterility', value: 'Sterile, single use' },
      { label: 'Sizes', value: 'Multiple French sizes available' },
      { label: 'Packaging', value: 'Peel-open, aseptic presentation' },
    ],
    features: [
      {
        title: 'Complete kit',
        description: 'All components included for a single procedure in one pack.',
      },
      {
        title: 'Closed system',
        description: 'Designed to maintain closed drainage and reduce infection risk.',
      },
      {
        title: 'Clear drainage chamber',
        description: 'Enables monitoring of volume and character of drainage.',
      },
    ],
    useCases: {
      veterinary: [
        'Trauma and post-operative thoracic drainage',
        'Pleural effusion management',
        'Pneumothorax management',
      ],
      hospital: [
        'Post-thoracotomy drainage',
        'Pleural effusion and pneumothorax',
        'Emergency chest tube placement',
      ],
    },
    certifications: ['CE', 'ISO 13485'],
  },
  {
    slug: 'ibpm',
    name: 'Invasive Blood Pressure Measurement (IBPM)',
    shortDescription:
      'Disposable pressure monitoring components for accurate invasive arterial pressure measurement.',
    description:
      'ROLA IBPM products support accurate, continuous invasive blood pressure monitoring. Compatible with standard pressure transducers and monitoring systems. Intended for use in settings where continuous arterial pressure measurement is indicated.',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: 'Type', value: 'Disposable pressure monitoring line' },
      { label: 'Connectors', value: 'Luer lock, standard' },
      { label: 'Length', value: 'Multiple lengths available' },
      { label: 'Sterility', value: 'Sterile, single use' },
    ],
    features: [
      {
        title: 'Accurate waveform transmission',
        description: 'Low-compliance tubing for reliable pressure waveform transmission.',
      },
      {
        title: 'Reduced setup time',
        description: 'Pre-assembled, ready-to-use configuration.',
      },
      {
        title: 'Compatibility',
        description: 'Designed for use with common pressure transducers and monitors.',
      },
    ],
    useCases: {
      veterinary: [
        'Critical care and ICU monitoring',
        'High-risk anesthesia',
        'Cardiovascular surgery and recovery',
      ],
      hospital: [
        'Operating room and ICU arterial pressure monitoring',
        'Critical care and shock management',
      ],
    },
    certifications: ['CE', 'FDA 510(k)'],
  },
  {
    slug: 'cvc',
    name: 'Central Venous Catheter (CVC)',
    shortDescription:
      'Central venous access kits for fluid therapy, drug delivery, and monitoring.',
    description:
      'ROLA central venous catheters are intended for central venous access when indicated for fluid resuscitation, parenteral nutrition, drug administration, or central venous pressure monitoring. Kits include catheter, guidewire, and insertion components in a single sterile pack.',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: 'Lumen', value: 'Single and multi-lumen options' },
      { label: 'Gauge', value: 'Range of gauges for different patient sizes' },
      { label: 'Length', value: 'Multiple lengths available' },
      { label: 'Sterility', value: 'Sterile, single use' },
    ],
    features: [
      {
        title: 'Seldinger technique',
        description: 'Designed for Seldinger (guidewire) insertion technique.',
      },
      {
        title: 'Radiopaque',
        description: 'Radiopaque catheter for placement verification under imaging.',
      },
      {
        title: 'Complete kit',
        description: 'Catheter, guidewire, dilator, and introducer in one sterile pack.',
      },
    ],
    useCases: {
      veterinary: [
        'Critical care fluid and drug delivery',
        'Long-term venous access',
        'CVP monitoring in high-risk surgery',
      ],
      hospital: [
        'ICU and operating room central access',
        'Parenteral nutrition and long-term therapy',
        'Central venous pressure monitoring',
      ],
    },
    certifications: ['CE', 'FDA 510(k)', 'ISO 13485'],
  },
];

export const productsZh: Product[] = [
  {
    slug: 'endotracheal-tube',
    name: '气管插管',
    shortDescription: '为兽医与临床场景设计的可靠气道管理用气管插管。',
    description:
      'ROLA 气管插管用于麻醉与重症护理中的气道管理。多种规格适用于不同体型患者。在受控环境下生产，材料符合生物相容性与耐用性要求。',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: '材质', value: '医用级 PVC' },
      { label: '规格', value: '内径 2.0 mm – 12.0 mm' },
      { label: '气囊', value: '高容量、低压力' },
      { label: '无菌', value: '无菌，一次性使用' },
    ],
    features: [
      { title: '规格范围', description: '从小型动物到大型动物及成人使用的宽规格范围。' },
      { title: '透明管身', description: '透明管体便于确认置管位置与冷凝情况。' },
      { title: '显影线', description: '射线显影条便于 X 光确认置管位置。' },
    ],
    useCases: {
      veterinary: ['伴侣动物全身麻醉', '急诊气道管理', '大动物与马科手术'],
      hospital: ['手术室与 ICU 气道管理', '急诊与院前插管'],
    },
    certifications: ['CE', 'FDA 510(k)'],
  },
  {
    slug: 'chest-drainage-kit',
    name: 'ROLA 一次性胸腔引流套件',
    shortDescription: '用于胸腔造口及术后引流的一次性胸腔引流系统。',
    description:
      'ROLA 一次性胸腔引流套件提供完整的无菌胸腔置管与闭式引流系统，适用于兽医与医院环境，便于使用、性能稳定。',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: '组件', value: '胸腔引流管、引流系统、连接件' },
      { label: '无菌', value: '无菌，一次性使用' },
      { label: '规格', value: '多种 French 规格' },
      { label: '包装', value: '撕开即用，无菌呈现' },
    ],
    features: [
      { title: '完整套件', description: '单次操作所需组件一包配齐。' },
      { title: '闭式系统', description: '闭式引流设计，有助于降低感染风险。' },
      { title: '透明引流腔', description: '便于观察引流量与性状。' },
    ],
    useCases: {
      veterinary: ['创伤及术后胸腔引流', '胸腔积液处理', '气胸处理'],
      hospital: ['胸科术后引流', '胸腔积液与气胸', '急诊胸腔置管'],
    },
    certifications: ['CE', 'ISO 13485'],
  },
  {
    slug: 'ibpm',
    name: '有创血压监测 (IBPM)',
    shortDescription: '用于有创动脉压测量的 disposable 压力监测组件。',
    description:
      'ROLA IBPM 产品支持准确、连续的有创血压监测，可与标准压力传感器及监护系统配合使用，适用于需要连续动脉压监测的场景。',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: '类型', value: '一次性压力监测管路' },
      { label: '连接', value: '鲁尔锁，标准接口' },
      { label: '长度', value: '多种长度可选' },
      { label: '无菌', value: '无菌，一次性使用' },
    ],
    features: [
      { title: '准确波形传导', description: '低顺应性管路，可靠传导压力波形。' },
      { title: '缩短准备时间', description: '预组装，即用型配置。' },
      { title: '兼容性', description: '适用于常见压力传感器与监护仪。' },
    ],
    useCases: {
      veterinary: ['重症监护', '高危麻醉', '心血管手术与复苏'],
      hospital: ['手术室与 ICU 动脉压监测', '重症与休克管理'],
    },
    certifications: ['CE', 'FDA 510(k)'],
  },
  {
    slug: 'cvc',
    name: '中心静脉导管 (CVC)',
    shortDescription: '用于补液、给药与监测的中心静脉通路套件。',
    description:
      'ROLA 中心静脉导管用于需要中心静脉通路时的液体复苏、肠外营养、给药或中心静脉压监测。套件含导管、导丝及置入组件，单包无菌。',
    image: placeholderImage,
    markets: ['veterinary', 'hospital'],
    specs: [
      { label: '腔数', value: '单腔与多腔可选' },
      { label: '规格', value: '多种规格适应不同体型' },
      { label: '长度', value: '多种长度可选' },
      { label: '无菌', value: '无菌，一次性使用' },
    ],
    features: [
      { title: 'Seldinger 技术', description: '适用于 Seldinger（导丝）置入。' },
      { title: '显影', description: '显影导管便于影像下确认位置。' },
      { title: '完整套件', description: '导管、导丝、扩张器、导入器一包无菌配齐。' },
    ],
    useCases: {
      veterinary: ['重症补液与给药', '长期静脉通路', '高危手术 CVP 监测'],
      hospital: ['ICU 与手术室中心静脉通路', '肠外营养与长期治疗', '中心静脉压监测'],
    },
    certifications: ['CE', 'FDA 510(k)', 'ISO 13485'],
  },
];

export function getProductBySlug(
  slug: string,
  locale: 'en' | 'zh'
): Product | undefined {
  const list = locale === 'zh' ? productsZh : productsEn;
  return list.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): ProductSlug[] {
  return [...productSlugs];
}
