export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  market: 'veterinary' | 'hospital';
};

export const testimonialsEn: Testimonial[] = [
  {
    id: '1',
    quote:
      'We have been using ROLA endotracheal tubes for over two years. Consistent quality and reliable sizing make them our first choice for both small and large animal procedures.',
    author: 'Dr. Sarah Chen',
    title: 'Head of Anesthesia',
    organization: 'Pacific Veterinary Referral Center',
    market: 'veterinary',
  },
  {
    id: '2',
    quote:
      'The chest drainage kits simplify our thoracic cases. Everything we need in one pack, and the quality is consistent case after case.',
    author: 'Dr. James Wong',
    title: 'Senior Surgeon',
    organization: 'Metro Animal Hospital',
    market: 'veterinary',
  },
  {
    id: '3',
    quote:
      'ROLA’s IBPM components integrate well with our existing monitors. We appreciate the single-use design and consistent performance in our ICU.',
    author: 'Dr. Lisa Park',
    title: 'Critical Care Director',
    organization: 'Central Medical Center',
    market: 'hospital',
  },
  {
    id: '4',
    quote:
      'Knowing that ROLA owns their factory gives us confidence in supply and quality. We have had no supply chain issues since switching to their CVC kits.',
    author: 'Dr. Michael Torres',
    title: 'Procurement Lead',
    organization: 'Regional Hospital Network',
    market: 'hospital',
  },
  {
    id: '5',
    quote:
      'Precision and reliability matter in every procedure. ROLA products meet our standards, and the support from their team has been responsive.',
    author: 'Dr. Emily Liu',
    title: 'Clinical Director',
    organization: 'Companion Animal Specialty Group',
    market: 'veterinary',
  },
];

export const testimonialsZh: Testimonial[] = [
  {
    id: '1',
    quote:
      '我们使用 ROLA 气管插管已超过两年。品质稳定、规格可靠，已成为我们小动物和大动物手术的首选。',
    author: '陈医生',
    title: '麻醉科主任',
    organization: '太平洋动物转诊中心',
    market: 'veterinary',
  },
  {
    id: '2',
    quote:
      '胸腔引流套件让我们的胸科病例更简便。一包配齐所需组件，且每例质量一致。',
    author: '黄医生',
    title: '高级外科医生',
    organization: '都会动物医院',
    market: 'veterinary',
  },
  {
    id: '3',
    quote:
      'ROLA 的 IBPM 组件与我们现有监护仪配合良好。我们认可其一次性设计与在 ICU 中的稳定表现。',
    author: '朴医生',
    title: '重症监护主任',
    organization: '中心医疗中心',
    market: 'hospital',
  },
  {
    id: '4',
    quote:
      '了解 ROLA 自有工厂让我们对供应与质量更有信心。自改用其 CVC 套件以来，我们未再遇到供应链问题。',
    author: '托雷斯医生',
    title: '采购负责人',
    organization: '区域医院网络',
    market: 'hospital',
  },
  {
    id: '5',
    quote:
      '每次手术都讲求精确与可靠。ROLA 产品符合我们的标准，其团队的支持也很及时。',
    author: '刘医生',
    title: '临床主任',
    organization: '伴侣动物专科集团',
    market: 'veterinary',
  },
];
