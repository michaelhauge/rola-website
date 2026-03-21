export type FactoryStat = {
  value: string;
  label: string;
};

export type FactoryCapability = {
  title: string;
  description: string;
};

export type FactoryProcessStep = {
  title: string;
  description: string;
};

export type FactoryContent = {
  heroTitle: string;
  heroSubtitle: string;
  verticalIntegrationTitle: string;
  verticalIntegrationBody: string;
  capabilitiesTitle: string;
  capabilities: FactoryCapability[];
  processTitle: string;
  processSteps: FactoryProcessStep[];
  certificationsTitle: string;
  certifications: string[];
  supplyChainTitle: string;
  supplyChainPoints: string[];
  stats: FactoryStat[];
};

export const factoryEn: FactoryContent = {
  heroTitle: 'Wholly-Owned Manufacturing',
  heroSubtitle:
    'From raw materials to finished product, one facility, one standard. ROLA controls every step of production under one roof.',
  verticalIntegrationTitle: 'Vertical integration',
  verticalIntegrationBody:
    'ROLA’s manufacturing facility is wholly owned and operated by the company. This means we control sourcing, production, quality assurance, and packaging in a single location. There is no reliance on third-party contract manufacturers for core product lines. The result is consistent quality, predictable lead times, and the ability to respond to customer and regulatory needs without going through multiple parties.',
  capabilitiesTitle: 'Manufacturing capabilities',
  capabilities: [
    {
      title: 'Materials sourcing',
      description:
        'We source and qualify raw materials and components according to our specifications and regulatory requirements. Supplier audits and incoming inspection support traceability and quality.',
    },
    {
      title: 'Production',
      description:
        'Dedicated production lines for our product families. Controlled environment and documented processes to meet ISO 13485 and customer expectations.',
    },
    {
      title: 'Quality assurance',
      description:
        'In-process and finished-product testing. Quality records maintained for traceability and regulatory submission. Non-conformance and corrective action processes in place.',
    },
    {
      title: 'Packaging & logistics',
      description:
        'Sterile and non-sterile packaging as required. Labeling and documentation in line with regulatory and market requirements. Direct control over shipping and storage conditions.',
    },
  ],
  processTitle: 'Quality assurance process',
  processSteps: [
    { title: 'Incoming inspection', description: 'Raw materials and components checked against specifications and released for production.' },
    { title: 'In-process control', description: 'Critical parameters monitored and documented at defined stages of manufacture.' },
    { title: 'Finished product release', description: 'Testing and review before release. Batch records retained for traceability.' },
    { title: 'Packaging & labeling', description: 'Correct packaging and labeling verified before shipment.' },
  ],
  certificationsTitle: 'Certifications & compliance',
  certifications: [
    'ISO 13485 (Medical devices quality management)',
    'CE marking where applicable',
    'FDA registered establishment',
    'Ongoing compliance with market-specific requirements',
  ],
  supplyChainTitle: 'Supply chain advantages',
  supplyChainPoints: [
    'Single source: one facility for core products reduces complexity and dependency on multiple suppliers.',
    'Lead times: direct control over production scheduling supports predictable delivery.',
    'Customization: ability to accommodate special sizes, packaging, or documentation when required.',
    'Consistency: same processes, same team, same quality standards across batches.',
  ],
  stats: [
    { value: '20,000+', label: 'Sqm facility' },
    { value: 'ISO 13485', label: 'Certified' },
    { value: 'End-to-end', label: 'Quality control' },
    { value: 'Direct', label: 'Supply chain' },
  ],
};

export const factoryZh: FactoryContent = {
  heroTitle: '自有工厂制造',
  heroSubtitle:
    '从原材料到成品，一处基地、统一标准。ROLA 在同一屋檐下把控生产的每一步。',
  verticalIntegrationTitle: '垂直整合',
  verticalIntegrationBody:
    'ROLA 的生产基地由公司全资拥有并运营。这意味着我们在同一地点管控采购、生产、质量保证与包装。核心产品线不依赖第三方代工。结果是质量一致、交期可预期，并能够直接响应客户与法规需求，无需经手多方。',
  capabilitiesTitle: '制造能力',
  capabilities: [
    {
      title: '原材料采购',
      description:
        '我们按规格与法规要求采购并认定原材料与组件，通过供应商审核与来料检验支持可追溯性与质量。',
    },
    {
      title: '生产',
      description:
        '各产品线拥有专用生产线，受控环境与成文流程以满足 ISO 13485 与客户期望。',
    },
    {
      title: '质量保证',
      description:
        '过程与成品检验，保存质量记录以支持可追溯与法规申报，并设有不合格与纠正措施流程。',
    },
    {
      title: '包装与物流',
      description:
        '按需进行无菌与非无菌包装，标签与文件符合法规与市场要求，并对运输与储存条件直接管控。',
    },
  ],
  processTitle: '质量保证流程',
  processSteps: [
    { title: '来料检验', description: '原材料与组件按规格检验合格后放行生产。' },
    { title: '过程控制', description: '在规定的制造阶段对关键参数进行监控与记录。' },
    { title: '成品放行', description: '放行前完成检验与审核，批次记录留存可追溯。' },
    { title: '包装与标签', description: '发运前核对包装与标签正确。' },
  ],
  certificationsTitle: '认证与合规',
  certifications: [
    'ISO 13485（医疗器械质量管理体系）',
    '适用范围内的 CE 标志',
    'FDA 注册企业',
    '持续满足各市场法规要求',
  ],
  supplyChainTitle: '供应链优势',
  supplyChainPoints: [
    '单一来源：核心产品集中于一厂，降低复杂度与对多供应商的依赖。',
    '交期：对生产计划的直接控制支持可预期的交付。',
    '定制：在需要时可满足特殊规格、包装或文件要求。',
    '一致性：同一流程、同一团队、同一质量标准贯穿各批次。',
  ],
  stats: [
    { value: '20,000+', label: '平方米厂房' },
    { value: 'ISO 13485', label: '认证' },
    { value: '端到端', label: '质量控制' },
    { value: '直接', label: '供应链' },
  ],
};
