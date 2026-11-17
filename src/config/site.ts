export const SITE = {
  title: 'Keith Yam',
  subtitle: 'Essays, Commentaries, Classical Music & Film',
  description:
    'Personal website of Keith Yam — professional commentaries, legal and social essays, personal diaries, biographicals, classical music concert notes & recording reviews, and 35mm film photography.',
  url: 'https://keithyam.github.io',
  author: 'Keith Yam',
  location: 'Hong Kong / London',
  email: 'keith@example.com',
  social: {
    github: 'https://github.com/keithyam',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
  // Giscus (GitHub Discussions) Comments Configuration
  // Once your repo is on GitHub, visit https://giscus.app to get your repoId and categoryId
  giscus: {
    enabled: true,
    repo: 'keithyam/keithyam.github.io', // Replace with your GitHub username/repo
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
  summary:
    'Legal practitioner and writer with a focus on public law, regulatory frameworks, and civic commentary. Regular contributor of essays on social issues, biographical studies, and classical music criticism.',
  experience: [
    {
      role: 'Legal Practice & Advisory',
      organization: 'Chambers / Law Firm (Replace with your firm)',
      location: 'Hong Kong',
      period: '2022 — Present',
      highlights: [
        'Advising on civil litigation, administrative and regulatory matters, and commercial disputes.',
        'Drafting legal opinions, submissions, and comparative legal research across common law jurisdictions.',
      ],
    },
    {
      role: 'Research Assistant / Legal Researcher',
      organization: 'Faculty of Law / Policy Institute',
      location: 'Hong Kong / London',
      period: '2020 — 2022',
      highlights: [
        'Conducted comparative research on constitutional principles, administrative law, and judicial review.',
        'Assisted in editing academic manuscripts and policy commentaries.',
      ],
    },
  ],
  education: [
    {
      degree: 'Postgraduate Certificate in Laws (PCLL) / Master of Laws (LL.M.)',
      institution: 'University Name (Edit in src/config/site.ts)',
      period: '2021 — 2022',
      details: 'Focus on Public Law, Jurisprudence, and Comparative Legal History.',
    },
    {
      degree: 'Bachelor of Laws (LL.B.)',
      institution: 'University Name (Edit in src/config/site.ts)',
      period: '2017 — 2021',
      details: 'First / Upper Second Class Honours. Editor of the Law Review.',
    },
  ],
  writingAndInterests: [
    {
      title: 'Public Commentary & Essays',
      description:
        'Regular essays on legal culture, urban institutions, social issues, and culinary traditions in English and Chinese.',
    },
    {
      title: 'Classical Music Criticism',
      description:
        'Extensive concert logs and discographical reviews focusing on Austro-German symphonic repertoire, keyboard literature, and historical recordings.',
    },
    {
      title: 'Analog Film Photography',
      description:
        '35mm and medium-format travel documentation across East Asia and Europe.',
    },
  ],
  languages: [
    { name: 'English', proficiency: 'Native / Bilingual Proficiency' },
    { name: 'Cantonese & Mandarin', proficiency: 'Native Proficiency (Traditional & Simplified Chinese)' },
    { name: 'German / French', proficiency: 'Reading & Musical Terminology' },
  ],
};
