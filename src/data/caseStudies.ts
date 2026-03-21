export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  organization: string;
  location: string;
  productUsed: string;
  productSlug: string;
  market: 'veterinary' | 'hospital';
  challenge: string;
  solution: string;
  result: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  metrics?: { label: string; value: string }[];
};

export const caseStudiesEn: CaseStudy[] = [
  {
    slug: 'pacific-referral-ibpm',
    title: 'Standardizing invasive pressure monitoring in a multi-specialty referral practice',
    summary:
      'Pacific Veterinary Referral Center standardized on ROLA IBPM components across their ICU and surgery suites, improving consistency and reducing setup time.',
    image: '/images/placeholder.svg',
    organization: 'Pacific Veterinary Referral Center',
    location: 'California, USA',
    productUsed: 'Invasive Blood Pressure Measurement (IBPM)',
    productSlug: 'ibpm',
    market: 'veterinary',
    challenge:
      'The practice used multiple brands of pressure monitoring components, leading to inconsistent setup and occasional compatibility issues with their monitors.',
    solution:
      'They switched to ROLA IBPM products site-wide. The single-use, pre-assembled design reduced setup time, and compatibility with their existing transducers was confirmed during evaluation.',
    result:
      'Setup time for arterial lines decreased, and the team reported fewer troubleshooting episodes. Procurement was simplified with one supplier for this product category.',
    testimonialQuote:
      'ROLA IBPM gave us one less variable to think about in critical cases. Same product, same steps, every time.',
    testimonialAuthor: 'Dr. Sarah Chen, Head of Anesthesia',
    metrics: [
      { label: 'Setup time reduction', value: '~25%' },
      { label: 'Sites using ROLA IBPM', value: '100%' },
    ],
  },
  {
    slug: 'metro-animal-chest-drainage',
    title: 'Faster thoracic case turnover with a complete chest drainage kit',
    summary:
      'Metro Animal Hospital adopted the ROLA Disposable Chest Drainage Kit for trauma and post-operative thoracic cases, improving efficiency and sterility assurance.',
    image: '/images/placeholder.svg',
    organization: 'Metro Animal Hospital',
    location: 'Singapore',
    productUsed: 'ROLA Disposable Chest Drainage Kit',
    productSlug: 'chest-drainage-kit',
    market: 'veterinary',
    challenge:
      'Staff were assembling chest drainage setups from separate components, which took time and increased the risk of contamination or missing parts.',
    solution:
      'The hospital introduced the ROLA Disposable Chest Drainage Kit so that each thoracic case had a single, sterile pack containing the chest tube and drainage system.',
    result:
      'Time from decision to place a chest tube to completed setup was reduced. Staff reported confidence in having all components in one pack and in the consistent quality of the product.',
    testimonialQuote:
      'The kit format means we grab one pack and we’re ready. No more hunting for connectors or drainage bottles.',
    testimonialAuthor: 'Dr. James Wong, Senior Surgeon',
    metrics: [
      { label: 'Average setup time', value: 'Under 5 min' },
      { label: 'Thoracic cases per month', value: '12–15' },
    ],
  },
  {
    slug: 'central-medical-cvc',
    title: 'Central venous access with a single-source supplier',
    summary:
      'Central Medical Center selected ROLA CVC kits as part of a initiative to consolidate suppliers and ensure reliable supply of central venous access products.',
    image: '/images/placeholder.svg',
    organization: 'Central Medical Center',
    location: 'Hong Kong',
    productUsed: 'Central Venous Catheter (CVC)',
    productSlug: 'cvc',
    market: 'hospital',
    challenge:
      'The hospital had experienced occasional stockouts and lead-time variability with their previous CVC supplier. They wanted a partner with control over manufacturing and supply.',
    solution:
      'After evaluating several options, they chose ROLA CVC kits. ROLA’s wholly-owned factory and direct supply chain were factors in the decision, along with product performance.',
    result:
      'Stockouts of CVC kits ceased. The hospital now orders on a regular schedule with predictable lead times. Clinical feedback on the product has been positive.',
    testimonialQuote:
      'Knowing that ROLA controls production end-to-end gave us confidence. We’ve had no supply issues since the switch.',
    testimonialAuthor: 'Dr. Lisa Park, Critical Care Director',
    metrics: [
      { label: 'Supply reliability', value: '100%' },
      { label: 'Lead time', value: 'Consistent 2–3 weeks' },
    ],
  },
];

export const caseStudiesZh: CaseStudy[] = [
  {
    slug: 'pacific-referral-ibpm',
    title: '多专科转诊医院中有创压力监测的标准化',
    summary:
      '太平洋动物转诊中心在其 ICU 与手术室全面采用 ROLA IBPM 组件，提升了一致性并缩短了准备时间。',
    image: '/images/placeholder.svg',
    organization: '太平洋动物转诊中心',
    location: '美国加州',
    productUsed: '有创血压监测 (IBPM)',
    productSlug: 'ibpm',
    market: 'veterinary',
    challenge:
      '此前使用多种品牌的压力监测组件，导致准备流程不统一，偶发与监护仪兼容问题。',
    solution:
      '全院统一改用 ROLA IBPM。一次性预组装设计缩短了准备时间，评估阶段确认与现有传感器兼容。',
    result:
      '动脉置管准备时间缩短，团队反馈故障排查次数减少，采购简化为单一供应商。',
    testimonialQuote:
      'ROLA IBPM 让重症病例少了一个变量。每次都是同一产品、同一流程。',
    testimonialAuthor: '陈医生，麻醉科主任',
    metrics: [
      { label: '准备时间缩短', value: '约 25%' },
      { label: '使用 ROLA IBPM 的站点', value: '100%' },
    ],
  },
  {
    slug: 'metro-animal-chest-drainage',
    title: '完整胸腔引流套件加快胸科病例周转',
    summary:
      '都会动物医院在创伤及术后胸科病例中采用 ROLA 一次性胸腔引流套件，提升了效率与无菌保障。',
    image: '/images/placeholder.svg',
    organization: '都会动物医院',
    location: '新加坡',
    productUsed: 'ROLA 一次性胸腔引流套件',
    productSlug: 'chest-drainage-kit',
    market: 'veterinary',
    challenge:
      '原先由散件组装胸腔引流套装，耗时长且存在污染或缺件风险。',
    solution:
      '引入 ROLA 一次性胸腔引流套件，每个胸科病例使用一个含引流管与引流系统的无菌包。',
    result:
      '从决定置管到完成准备的时间缩短，员工对一包配齐与产品质量一致性表示认可。',
    testimonialQuote:
      '套件形式意味着拿一包就齐了，不用再找连接管或引流瓶。',
    testimonialAuthor: '黄医生，高级外科医生',
    metrics: [
      { label: '平均准备时间', value: '5 分钟内' },
      { label: '每月胸科病例', value: '12–15' },
    ],
  },
  {
    slug: 'central-medical-cvc',
    title: '单一供应商下的中心静脉通路',
    summary:
      '中心医疗中心选择 ROLA CVC 套件，作为整合供应商、保障中心静脉通路产品稳定供应的一部分。',
    image: '/images/placeholder.svg',
    organization: '中心医疗中心',
    location: '香港',
    productUsed: '中心静脉导管 (CVC)',
    productSlug: 'cvc',
    market: 'hospital',
    challenge:
      '此前 CVC 供应商曾出现断货与交期不稳定，院方希望与具备生产与供应控制能力的伙伴合作。',
    solution:
      '经评估后选用 ROLA CVC 套件。ROLA 自有工厂与直接供应链以及产品表现均为决策因素。',
    result:
      'CVC 套件断货现象消除，医院按固定周期下单、交期可预期，临床反馈良好。',
    testimonialQuote:
      '了解 ROLA 端到端控制生产让我们更有信心。切换后未再出现供应问题。',
    testimonialAuthor: '朴医生，重症监护主任',
    metrics: [
      { label: '供应可靠性', value: '100%' },
      { label: '交期', value: '稳定 2–3 周' },
    ],
  },
];

export function getCaseStudyBySlug(
  slug: string,
  locale: 'en' | 'zh'
): CaseStudy | undefined {
  const list = locale === 'zh' ? caseStudiesZh : caseStudiesEn;
  return list.find((c) => c.slug === slug);
}
