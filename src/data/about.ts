export type AboutContent = {
  heroTitle: string;
  storyTitle: string;
  storyQuote: string;
  storyBody: string[];
  missionTitle: string;
  missionPoints: string[];
  timelineTitle: string;
  timeline: { year: string; title: string; description: string }[];
  certifications: string[];
};

export const aboutEn: AboutContent = {
  heroTitle: 'About ROLA',
  storyTitle: 'Our story',
  storyQuote: 'Those who teach most about humanity aren’t always human.',
  storyBody: [
    'Our founder saw firsthand how limitations in vet tools affected care for her two dogs, Rover and Layla. Watching veterinarians struggle with products not designed for animals, she set out to create a solution: purpose-built veterinary devices that meet the specific needs of animals and the professionals who care for them.',
    'What started as a clear mission to fill this gap quickly evolved into ROLA. We’ve collaborated with veterinarians across the field, using their expertise and feedback to shape our products. Every tool we create results from this partnership—designed to provide precision, efficiency, and quality that vets can rely on.',
    'At ROLA, we don’t just make products; we build solutions that enhance veterinary care. We believe every tool should make a vet’s work easier and every procedure more effective. That’s why we’ve embedded innovation, quality, and compassion into everything we do.',
  ],
  missionTitle: 'Mission & values',
  missionPoints: [
    'Precision: Products designed to meet the exact requirements of veterinary and hospital practice.',
    'Partnership: We work with clinicians and veterinarians to inform design and improvement.',
    'Purpose-built: Devices intended for the settings and species they serve.',
  ],
  timelineTitle: 'Milestones',
  timeline: [
    { year: 'Founding', title: 'ROLA established', description: 'Focus on purpose-built veterinary and medical devices.' },
    { year: 'Factory', title: 'Wholly-owned manufacturing', description: 'Vertical integration from materials to finished product.' },
    { year: 'Today', title: 'Veterinary & hospital', description: 'Serving clinics and hospitals with a growing product range.' },
  ],
  certifications: ['ISO 13485', 'CE', 'FDA Registered'],
};

export const aboutZh: AboutContent = {
  heroTitle: '关于 ROLA',
  storyTitle: '我们的故事',
  storyQuote: '教会我们最多人性的，并不总是人类。',
  storyBody: [
    '创始人亲眼目睹了兽医工具的局限如何影响了对她的两只狗 Rover 和 Layla 的照护。看到兽医们使用并非为动物设计的产品时的困难，她决心创造解决方案：为动物以及照护它们的专业人士打造专用兽医设备。',
    '这一清晰的使命很快发展为 ROLA。我们与各地兽医合作，用他们的专业与反馈塑造产品。我们创造的每一件工具都来自这种合作——旨在提供兽医可依赖的精确、高效与质量。',
    '在 ROLA，我们不仅制造产品，更构建提升兽医护理的解决方案。我们相信每件工具都应让兽医的工作更轻松、每次操作更有效。因此我们将创新、质量与关怀融入我们所做的一切。',
  ],
  missionTitle: '使命与价值观',
  missionPoints: [
    '精确：产品设计满足兽医与医院实践的精确需求。',
    '合作：与临床医生和兽医共同推动设计与改进。',
    '专用：设备为其所服务的场景与物种而设计。',
  ],
  timelineTitle: '里程碑',
  timeline: [
    { year: '创立', title: 'ROLA 成立', description: '专注于为兽医与医疗场景打造专用设备。' },
    { year: '工厂', title: '自有工厂制造', description: '从原材料到成品的垂直整合。' },
    { year: '至今', title: '兽医与医院', description: '以不断扩展的产品线服务诊所与医院。' },
  ],
  certifications: ['ISO 13485', 'CE', 'FDA 注册'],
};
