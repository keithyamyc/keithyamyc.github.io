export const SITE = {
  title: 'Keith Yam',
  subtitle: 'Essays, Commentaries, Classical Music & Film',
  description:
    'Personal website of Keith Yam — professional commentaries, legal and social essays, personal diaries, biographicals, classical music concert notes & recording reviews, and 35mm film photography.',
  url: 'https://keithyamyc.github.io',
  author: 'Keith Yam',
  location: 'Hong Kong',
  email: 'keithyam.yc@gmail.com',
  social: {
    github: 'https://github.com/keithyamyc',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
  // Giscus (GitHub Discussions) Comments Configuration
  // Once your repo is on GitHub, visit https://giscus.app to get your repoId and categoryId
  giscus: {
    enabled: true,
    repo: 'keithyamyc/keithyamyc.github.io', // Replace with your GitHub username/repo
    repoId: '', // Paste data-repo-id from giscus.app here to activate live GitHub comments
    category: 'Announcements',
    categoryId: '', // Paste data-category-id from giscus.app here
  },
};

export const PROFESSIONAL_CATEGORIES = [
  { id: 'commentaries', label: 'Commentaries', labelZh: '時事評論' },
  { id: 'essays', label: 'Essays', labelZh: '論述文章' },
  { id: 'food-reviews', label: 'Food Reviews', labelZh: '飲食評論' },
  { id: 'legal', label: 'Legal', labelZh: '法律評析' },
  { id: 'others', label: 'Others', labelZh: '其他' },
] as const;

export const PERSONAL_CATEGORIES = [
  { id: 'essays', label: 'Essays', labelZh: '隨筆散文' },
  { id: 'biographicals', label: 'Biographicals', labelZh: '人物傳記' },
  { id: 'diaries', label: 'Diaries', labelZh: '日記' },
  { id: 'readings', label: 'Readings', labelZh: '讀書筆記' },
  { id: 'others', label: 'Others', labelZh: '其他' },
] as const;

export const MUSIC_TYPES = [
  { id: 'concert', label: 'Concert Notes', labelZh: '音樂會筆記' },
  { id: 'recording', label: 'Recording Reviews', labelZh: '唱片評論' },
  { id: 'writing', label: 'Music Writings', labelZh: '音樂隨筆' },
] as const;

export const CV_DATA = {
  fullName: 'Yam Yat Chung Keith',
  headline: 'BA (Literary Studies) & LLB · The University of Hong Kong',
  availability: 'Available July 2027',
  emails: ['keithyam.yc@gmail.com', 'yamyatch@connect.hku.hk'],
  phone: [],
  summary:
    'Final-year student reading Literary Studies and Law at the University of Hong Kong, with a focus on maritime and commercial law, public international law, and legal writing. Three summers of legal experience across a shipping line, chambers, and a research assistantship. Available from July 2027.',
  education: [
    {
      institution: 'The University of Hong Kong',
      degree: 'Bachelor of Arts (Literary Studies) & Bachelor of Laws',
      period: 'Sep 2022 – Jun 2027 (expected)',
      location: 'Pok Fu Lam, HKSAR',
      points: [
        'Second Class Honours (expected).',
        'Selected coursework: Contract Law; Commercial Law; Civil Procedure; Competition Law; Public International Law.',
        'HKDSE Level 5* in Chinese, English and Mathematics; Sir Edward Youde Memorial Prize (2022).',
      ],
    },
    {
      institution: 'Dalian Maritime University',
      degree: 'Summer Programme in Maritime Studies',
      period: 'Jun 2025 – Jul 2025',
      location: 'Dalian, Liaoning, China',
      points: [
        'Studied international maritime law and cross-border dispute resolution, with practical exposure to maritime court proceedings, arbitration institutions and ship operations.',
      ],
    },
    {
      institution: 'University of Augsburg',
      degree: 'Summer Programme in International Business and Economic Law',
      period: 'Jun 2024 – Jul 2024',
      location: 'Augsburg, Bavaria, Germany',
      points: [
        'Selected coursework (21 ECTS credits): Independent Guarantees and Letters of Credit in International Transactions; European Company Law; Introduction to European Union Law; Transnational Litigation.',
      ],
    },
  ],
  experience: [
    {
      role: 'Intern, Legal Affairs and Claims Handling Division',
      organization: 'COSCO SHIPPING Lines',
      location: 'Shanghai, PRC',
      period: 'Jul 2026 – Aug 2026',
      under: 'Under Captain Feng Chonggang',
      points: [
        'Reviewed and updated an internal training handbook on bills of lading by analysing the implications of the new Chinese Maritime Code and incorporating relevant domestic and international case law.',
        "Prepared a report on the US Federal Maritime Commission's complaint procedures, examining the regulatory framework governing maritime disputes.",
        'Researched potential reforms to the Chinese Maritime Special Procedural Law and developed relevant proposals.',
      ],
    },
    {
      role: 'Mini-pupil',
      organization: "Sir Oswald Cheung's Chambers",
      location: 'Central, HKSAR',
      period: 'Jun 2025',
      under: 'To Abel Lam',
      points: [
        'Conducted research on adducing additional expert opinion and probate undue influence.',
        'Drafted a skeleton submission for an interlocutory hearing.',
      ],
    },
    {
      role: 'Research Assistant',
      organization: 'Faculty of Law, The University of Hong Kong',
      location: 'Pok Fu Lam, HKSAR',
      period: 'May 2024 – Aug 2024',
      under: 'To Prof Michael Ng',
      points: [
        'Researched US Cold War foreign policy in the Asia Pacific, with a focus on Hong Kong and China.',
        'Analysed public archives regarding CARE operations in Hong Kong and their political implications.',
      ],
    },
  ],
  leadership: [
    {
      title: 'Class Representative, BA & LLB cohort',
      period: '2022 – 2025',
      description:
        "Served three consecutive years; gathered classmates' views on courses and curriculum and raised them at semesterly faculty meetings.",
    },
    {
      title: 'Internal Secretary, Arts and Law Committee',
      period: '2023 – 2025',
      description:
        'Coordinated orientation and career workshops — scheduling, venue booking, student communications and liaison with faculty.',
    },
    {
      title: 'Youth Legal Development Summit — Best Essay Prize',
      period: '2024',
      description:
        'Co-authored a paper on the Hong Kong Basic Law and the rule of law with three teammates; ranked first among 10 teams.',
    },
    {
      title: 'Outreach and volunteering',
      period: '2023 – 2024',
      description:
        'Lectured at an elderly centre on enduring power of attorney and guardianship; organised events for low-income pupils and elderly former inmates.',
    },
  ],
  languages: [
    { name: 'Cantonese & Mandarin', proficiency: 'Native' },
    { name: 'English', proficiency: 'IELTS 8.0' },
    { name: 'Hakka', proficiency: 'Fluent' },
    { name: 'German & French', proficiency: 'Elementary' },
  ],
  skills: [
    'Excel — pivot tables, lookup functions, IF logic, charting',
    'Microsoft Office',
  ],
};
