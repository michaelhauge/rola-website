export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
};

export const teamEn: TeamMember[] = [
  {
    id: '1',
    name: 'Founder',
    title: 'Founder & CEO',
    bio: 'Founded ROLA with a focus on purpose-built veterinary and medical devices. Background in medical device development and a commitment to quality and supply chain control.',
    image: '/images/placeholder.svg',
  },
  {
    id: '2',
    name: 'Operations Lead',
    title: 'Head of Operations',
    bio: 'Oversees manufacturing, quality assurance, and supply chain. Ensures that ROLA’s wholly-owned factory meets regulatory and customer requirements.',
    image: '/images/placeholder.svg',
  },
  {
    id: '3',
    name: 'R&D Lead',
    title: 'Director of Research & Development',
    bio: 'Leads product development and design. Works with clinicians and veterinarians to translate clinical needs into reliable, manufacturable products.',
    image: '/images/placeholder.svg',
  },
  {
    id: '4',
    name: 'Quality Lead',
    title: 'Head of Quality & Regulatory',
    bio: 'Responsible for quality systems, regulatory compliance, and certifications. Maintains ISO 13485 and supports CE and FDA requirements.',
    image: '/images/placeholder.svg',
  },
];

export const teamZh: TeamMember[] = [
  {
    id: '1',
    name: '创始人',
    title: '创始人兼首席执行官',
    bio: '创立 ROLA，专注于为兽医与医疗场景打造专用设备。具备医疗器械开发背景，致力于质量与供应链管控。',
    image: '/images/placeholder.svg',
  },
  {
    id: '2',
    name: '运营负责人',
    title: '运营负责人',
    bio: '负责生产、质量保证与供应链，确保 ROLA 自有工厂满足法规与客户要求。',
    image: '/images/placeholder.svg',
  },
  {
    id: '3',
    name: '研发负责人',
    title: '研发总监',
    bio: '领导产品开发与设计，与临床医生和兽医合作，将临床需求转化为可靠、可量产的产品。',
    image: '/images/placeholder.svg',
  },
  {
    id: '4',
    name: '质量负责人',
    title: '质量与法规负责人',
    bio: '负责质量体系、法规符合与认证，维护 ISO 13485 并支持 CE 与 FDA 要求。',
    image: '/images/placeholder.svg',
  },
];
