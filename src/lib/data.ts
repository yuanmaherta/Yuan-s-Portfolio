// ------------------------------------------------------------------
// Konten Yuan Maherta — Business Management (Human Capital, Business
// Development, Marketing & Partnerships, Project & Strategic Mgmt)
// ------------------------------------------------------------------

export const profile = {
  name: "Yuan Maherta",
  role: "Business Management Professional",
  tagline: "Turning insight into impact — across people, strategy, and business growth.",
  bio: "Fresh graduate with a Bachelor of Business Management in Telecommunication and Informatics from Telkom University, with a concentration in Digitalization Human Capital Management, and a strong interest in Organizational Design, Talent Acquisition, and Business Development. Experienced in data analysis, market and user research, recruitment support, and Business Model Canvas development, gained through internships, teaching practicums, and digital projects. Skilled in problem-solving and analytical thinking, with a demonstrated ability to translate insights into strategic recommendations that support human capital initiatives and business growth.",
  location: "Bandung, West Java, Indonesia",
  email: "yuan.maherta.33@gmail.com",
  resumeUrl: "#",
  socials: [
    { label: "Instagram", href: "https://instagram.com/yuan_mhrtaa" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yuan-maherta" },
    { label: "X", href: "https://x.com/yuan_mhrtaa" },
  ],
};

// Photo slots — leave empty ("") to keep the gradient placeholder; drop a
// path under public/images (e.g. "/images/about-bio.jpg") once the real
// photo is ready and it renders automatically, no code changes needed.
export const aboutPhotos = {
  bio: "/images/hero-portrait.jpeg",
  education: "",
};

// Home page photo slots. Leave empty ("") to keep the gradient
// placeholder; a path renders automatically via next/image.
export const homePhotos = {
  // Background removed — rendered with fit="contain" so the card's
  // gradient stays visible around the cutout.
  hero: "/images/hero-portrait-cutout.png",
  aboutPreview: "/images/hero-portrait.jpeg",
  // "Why Choose Me" bento — 1 large + 2 small photos.
  whyChooseMe: [
    "/images/why-choose-bumn.png",
    "/images/why-choose-hk-academy.jpeg",
    "/images/activity-btn-sales.png",
  ],
};

// Single combined logo-strip image, background removed. Falls back to the
// plain text list below when empty. Rendered inside a light card (see
// hero.tsx) so it stays visible in dark mode regardless of logo colors.
export const trustedCompaniesLogo: string = "/images/trusted-companies-cutout.png";
// No tools logo image — the supplied strip was too low-resolution to
// cleanly split into individual, evenly-sized logos, so this renders as
// the text-pill list below instead (see about-preview.tsx).
export const homeToolsLogo: string = "";

export const trustedCompanies = [
  "PT Hutama Karya",
  "Rakamin Academy",
  "PT Bank Tabungan Negara",
  "BUMN",
  "Google",
  "Telkom Indonesia",
];

export const whyHireMe = [
  {
    title: "Human-Centered Mindset",
    description: "A strong focus on people to align organizational goals with employee well-being.",
  },
  {
    title: "Data-Driven & Structured",
    description: "Leveraging data and structural analysis to support effective business decisions.",
  },
  {
    title: "Adaptive & Growth-Oriented",
    description: "Continuously learning and adapting to thrive in dynamic work environments.",
  },
];

export const highlights = [
  {
    title: "P2MW Selection",
    logo: "", // TODO: P2MW logo
    description:
      "Successfully passed the university-level selection for P2MW (Program Pembinaan Mahasiswa Wirausaha).",
  },
  {
    title: "Talent Scouting Program",
    logo: "", // TODO: Dit. KKA logo
    description:
      "Selected by the Directorate of Student Affairs, Career Development, and Alumni (Dit. KKA) for both science and non-science competitions.",
  },
  {
    title: "Published Research Paper",
    logo: "", // TODO: ISCBE / university seal
    description:
      "Published and presented at the 9th ISCBE 2026, Valencia, Spain (Springer Proceedings, Scopus-indexed).",
  },
];

export const focusAreas = [
  {
    title: "Human Capital & Organizational Development",
    description:
      "Focused on workforce planning, organizational design, and people-centered initiatives that support business growth.",
  },
  {
    title: "Business Development & Sales",
    description:
      "Experienced in market analysis, sales strategy execution, and building partnerships that drive measurable growth.",
  },
  {
    title: "Marketing & Partnerships",
    description:
      "Skilled in market research, competitor analysis, and building external collaborations to expand reach and engagement.",
  },
  {
    title: "Project & Strategic Management",
    description:
      "Capable of leading cross-functional projects, from ideation (Business Model Canvas) through execution and stakeholder presentation.",
  },
];

export const homeActivities = [
  {
    title: "Human Resource Staff Certification (BNSP)",
    date: "Friday, 29 September 2025",
    ctaLabel: "Let's Connect!",
    ctaHref: `mailto:${profile.email}`,
    photo: "/images/activity-bnsp.png",
  },
  {
    title: "SME & Credit Program Sales Internship",
    date: "Monday, 03 November 2025",
    ctaLabel: "Let's Connect!",
    ctaHref: `mailto:${profile.email}`,
    photo: "/images/activity-btn-sales.png",
  },
  {
    title: "Chief Marketing Officer, Helphin Indonesia",
    date: "Tuesday, 23 July 2024",
    ctaLabel: "Learn more",
    ctaHref: "#",
    photo: "/images/activity-helphin.png",
  },
];

export const relatedCourses = [
  {
    title: "Marketing Management",
    description:
      "Learned marketing strategy formulation, market segmentation, and positioning to support business growth and customer acquisition.",
    color: "accent-3",
  },
  {
    title: "Business Statistics",
    description:
      "Built a strong foundation in statistical analysis and data interpretation to support evidence-based business decisions.",
    color: "accent-4",
  },
  {
    title: "Entrepreneurship",
    description:
      "Explored business model development, opportunity identification, and venture strategy from idea to execution.",
    color: "accent-1",
  },
  {
    title: "Design Thinking",
    description:
      "Applied a human-centered problem-solving approach to design practical, innovative solutions for real business challenges.",
    color: "primary",
  },
  {
    title: "Organizational Behavior",
    description:
      "Analyzed individual and group behavior in organizations, including motivation, leadership, communication, and team dynamics.",
    color: "accent-2",
  },
  {
    title: "Strategic Management",
    description:
      "Focused on strategy formulation, implementation, and evaluation to ensure organizational effectiveness and competitiveness.",
    color: "accent-4",
  },
];

export const education = [
  {
    school: "Telkom University",
    logo: "", // TODO: Telkom University logo
    program: "Business Management of Telecommunications and Informatics",
    detail: "Concentration: Digitalization Human Capital Management",
    period: "2022 - 2026",
    grade: "GPA 3.99/4.00 (Summa Cumlaude)",
    note: 'Thesis: "Job-Hopping Behavior among Generation Z Employees in Indonesia\'s Workforce: The Role of Work-Life Balance and Career Development."',
  },
  {
    school: "SMA Negeri 1 Palimanan",
    logo: "", // TODO: school logo
    program: "Social Science",
    detail: "",
    period: "2018 - 2021",
    grade: "Grade 90.67",
    note: "",
  },
];

export const skills = {
  soft: [
    {
      name: "Critical Thinking",
      description:
        "Able to evaluate information objectively, question assumptions, and make well-reasoned decisions in complex situations.",
    },
    {
      name: "Team Collaboration",
      description:
        "Skilled in working across teams, coordinating stakeholders, and maintaining strong interpersonal relationships.",
    },
    {
      name: "Problem-Solving",
      description:
        "Able to identify issues, analyze root causes, and propose structured and practical solutions.",
    },
    {
      name: "Leadership & Coordination",
      description:
        "Experience leading teams, managing programs, and ensuring projects are executed efficiently and on time.",
    },
    {
      name: "Analytical Thinking",
      description:
        "Capable of interpreting data, evaluating performance metrics, and generating insights for decision-making.",
    },
    {
      name: "Communication & Facilitation",
      description:
        "Ability to deliver clear communication, lead discussions, and facilitate learning sessions effectively.",
    },
  ],
  hard: [
    "Data Visualization",
    "Market Research & Competitor Analysis",
    "Organizational Development",
    "Business Partnership Building",
    "Administrative HR",
    "Compensation & Benefits",
    "Project Management",
    "Recruitment & Selection",
    "Statistical Analysis",
    "Sales Strategy Execution",
    "Business Model Canvas",
    "Data & Analytics Tools",
  ],
  tools: [
    "Canva",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Microsoft Excel",
    "Glassdoor",
    "SPSS",
    "Trello",
    "LinkedIn",
    "ProjectLibre",
    "MySQL",
    "Indeed",
    "Vercel",
  ],
};

// Screenshot/photo of the BNSP certification activity (e.g. the Zoom
// session). Leave empty to keep the current placeholder icon.
export const bnspThumbnail: string = "/images/activity-bnsp.png";

export const bnspActivities = [
  {
    title: "Job Analysis & Job Description Development",
    description:
      "Conducting job analysis, creating job descriptions, and mapping required competencies according to BNSP standards.",
  },
  {
    title: "HR Administration & Documentation",
    description:
      "Preparing HR documents such as wage administration data, social security administration records, termination letters, and HR SOPs.",
  },
  {
    title: "Recruitment & HR Operational Procedures",
    description:
      "Working on recruitment documentation, interview SOPs, new employee request forms, applicant forms, and HR operational workflows.",
  },
];

export const experienceIntro: string =
  "I thrive on bridging the gap between academic theory and real-world impact. Every milestone shared here is more than just an experience, it is a testament to my hard work, consistent growth, and my dedication to growing across human capital, business, and strategy through hands-on action.";

// Photo slots for the Experience page. Leave empty to keep the gradient
// placeholder; drop a public/images path in once the photo is ready.
export const experiencePhotos = {
  intro: "", // BUMN photo next to the intro
  orgHub: "", // center photo of the Organizational Experience hub
};

type OrgExperience = {
  shortName: string;
  role: string;
  org: string;
  period: string;
  logo: string;
  points: string[];
  gallery?: { tag: string; caption: string; location: string; date: string }[];
  podcastEpisodes?: string[];
};

export const experiences = {
  // Ordered chronologically (oldest first) — read left-to-right as a
  // timeline in the horizontal Professional Experience layout.
  professional: [
    {
      role: "Business Statistics Practicum Assistant",
      org: "Telkom University",
      period: "Oct 2023 — Jan 2024",
      photo: "",
      points: [
        "Trained 40+ students in data analysis using SPSS and Excel to effectively complete data-based assignments and exams.",
        "Evaluated student assignments and exams, providing individualized feedback that contributed to an average final score of 92.59, with 95% of students achieving an A grade.",
      ],
    },
    {
      role: "Operations Management Practicum Assistant",
      org: "Telkom University",
      period: "Feb — Jun 2025",
      photo: "",
      points: [
        "Provided training and guidance to students in using POM-QM software for operations analysis and data-driven decision making.",
        "Assisted students in understanding operations management concepts such as quality, lean operations, and capacity, and offered feedback to improve academic performance.",
      ],
    },
    {
      role: "SME & Credit Program Sales Intern",
      org: "PT. Bank Tabungan Negara Tbk",
      period: "Jun — Aug 2025",
      photo: "",
      points: [
        "Assessed 20+ SME BI Checking/SLIK daily and analyzed 10 debtor accounts via bank statements.",
        "Supported SME credit program development and client presentations for financing acquisition.",
        "Assisted in designing debt collection strategies, improving follow-up and loan recovery.",
      ],
    },
    {
      role: "Tech Recruiter Intern",
      org: "Rakamin Academy",
      period: "Oct — Nov 2025",
      photo: "",
      points: [
        "Managed end-to-end tech recruitment, sourcing 100+ candidates via LinkedIn and ensuring project alignment.",
        "Built tracking systems and interview tools to improve efficiency and data-driven hiring.",
        "Utilized LinkedIn, Indeed, and Glassdoor to optimize sourcing and enhance candidate experience.",
      ],
    },
    {
      role: "People Culture & Talent Acquisition Intern",
      org: "PT Hutama Karya (Persero)",
      period: "Feb — Aug 2026",
      photo: "",
      points: [
        "Developed an Excel-based Manpower Planning (MPP) tool and mapped 16,000+ position codes.",
        "Managed PKWT contract-renewal evaluations for 20+ employees/month, including digitalizing the evaluation form.",
        "Designed employer branding materials, including the HC Award deck (IHCA XII) and Employee Handbook.",
      ],
    },
  ],
  organizational: [
    {
      shortName: "HIMA MBTI",
      role: "Staff of Community Development",
      org: "Himpunan Mahasiswa Manajemen Bisnis Telekomunikasi dan Informatika (HIMA MBTI)",
      period: "Feb — Dec 2023",
      logo: "",
      points: [
        "Successfully organized 6 social service events, including fundraising campaigns, and built collaborations with various external parties to support initiatives that positively impact both the organization and the community.",
        "Facilitated capacity-building seminars in the fields of technology and entrepreneurship to enhance individual skills and community potential.",
      ],
      gallery: [
        { tag: "Company Visit", caption: "PT Angkasa Pura II", location: "Jakarta", date: "24 November 2023" },
        { tag: "Organizational Photo", caption: "HIMA MBTI 2023", location: "Telkom University", date: "30 December 2023" },
        { tag: "Study Banding", caption: "KMM ITB", location: "Institut Teknologi Bandung", date: "25 November 2023" },
        { tag: "Socharity", caption: "SDN Margabakti", location: "Desa Pulosari, Bandung", date: "16 October 2023" },
        { tag: "Sudut Berbagi", caption: "Panti Sosial", location: "Panti Sosial Tresna Wredha Budi Pertiwi, Bandung", date: "23 September 2023" },
      ],
    },
    {
      shortName: "Belajar Kreasi",
      role: "Project Leader",
      org: "Belajar Kreasi (BERAKSI)",
      period: "Mar — Dec 2023",
      logo: "",
      points: [
        "Led and evaluated the performance of a 15-member team across 4 divisions (Public Relations, Documentation, Logistics, and Events), focusing on team performance management, cross-division collaboration, and achieving 100% of organizational program targets within one term.",
        "Initiated two inclusive programs themed around diversity and learning, namely 'Sign Language with HIMA MBTI' and 'Creative Workshop with SLBN Ciendo', promoting equality and inclusive education among diverse backgrounds.",
        "The program was selected as one of the best practice candidates in HIMA MBTI 2023.",
      ],
      gallery: [
        { tag: "Welcoming Speech", caption: "SLB C Cicendo", location: "Bandung", date: "24 November 2023" },
        { tag: "Sign Language", caption: "HIMA MBTI", location: "Telkom University", date: "24 November 2023" },
        { tag: "Sign Language", caption: "Anggota Beraksi", location: "Telkom University", date: "30 December 2023" },
        { tag: "Main Event", caption: "SLB C Cicendo", location: "Bandung", date: "25 November 2023" },
      ],
    },
    {
      shortName: "Asa Bercerita",
      role: "Treasurer",
      org: "Asa Bercerita",
      period: "Mar — Dec 2023",
      logo: "",
      points: [
        "Managed and supervised all divisional financial activities systematically in accordance with organizational SOPs, including the preparation of cash flow and accountability reports.",
        "Contributed to team leadership support and cross-division collaboration in producing 5 educational podcasts as a learning and engagement platform to support student potential development.",
      ],
      podcastEpisodes: [
        "Muda Berkarya #1",
        "Tentang Diri #2",
        "Pertemanan di Dunia Perkuliahan #3",
        "Kuliah Pulang atau Kuliah Rapat #4",
        "Bincang Santai Bersama Alumni #5",
      ],
    },
    {
      shortName: "Digistar Club",
      role: "Digistar Class Alumni",
      org: "Digistar Club, Telkom University",
      period: "Dec 2024 — Present",
      logo: "",
      points: [
        "Part of an exclusive community for alumni of LivinginTelkom programs (Digistar Class, Digistar Connect, Digistar Internship), preparing Indonesia's digital talents.",
      ],
      gallery: [
        { tag: "Telkom Tour", caption: "Digistar Class", location: "Telkom CorpU Bandung", date: "22 August 2024" },
        { tag: "Soft Skill Class", caption: "Digistar Class", location: "Zoom Meeting", date: "10 August 2024" },
        { tag: "Hard Skill Class", caption: "Digistar Class", location: "Zoom Meeting", date: "29 August 2024" },
      ],
    },
  ] as OrgExperience[],
};

export const projects = {
  academic: [
    {
      title: "Strategic Management Analysis",
      subject: "PT Kalbe Farma Tbk",
      period: "Feb 2024 – Jun 2024",
      cover: "", // TODO: report cover scan
    },
    {
      title: "Consumer Behavior Study",
      subject: "FIT HUB Gym",
      period: "Feb 2025 – Jun 2025",
      cover: "", // TODO: report cover scan
    },
    {
      title: "Marketing Plan",
      subject: "Erigo",
      period: "Sep 2023 – Jan 2024",
      cover: "", // TODO: report cover scan
    },
    {
      title: "Entrepreneurship — Business Model Canvas",
      subject: "Crunchy Ocean",
      period: "Sep 2023 – Jan 2024",
      cover: "", // TODO: report cover scan
    },
  ],
  digital: [
    {
      title: "RENEWA – Employee Contract Renewal Evaluation Form",
      subtitle: "Digitalized PKWT contract-renewal evaluation form",
      org: "PT Hutama Karya (Persero)",
      period: "Feb 2026 – Aug 2026",
      role: "",
      tag: "Intern Project",
      color: "accent-1",
      cover: "", // TODO: app/mockup screenshot
      link: "", // TODO: add live demo / repo / case-study URL
    },
    {
      title: "SIBETA – Electronic Information System for Outsourced Personnel",
      subtitle: "Internal digital tool project",
      org: "PT. Bank Tabungan Negara Tbk",
      period: "Jun 2025 – Aug 2025",
      role: "",
      tag: "Intern Project",
      color: "accent-3",
      cover: "", // TODO: app/mockup screenshot
      link: "", // TODO: add live demo / repo / case-study URL
    },
    {
      title: "JUST CLICK – A Digital Personal Shopper (Jastip) Application",
      subtitle: "Digital product concept",
      org: "",
      period: "Sep 2024 – Dec 2024",
      role: "",
      tag: "Project",
      color: "accent-4",
      cover: "", // TODO: app/mockup screenshot
      link: "", // TODO: add live demo / repo / case-study URL
    },
    {
      title: "BIGTICKET SOLUTION – Digistar Class 2024",
      subtitle: "Business & management simulation",
      org: "PT. Telkom Indonesia Tbk",
      period: "Sep 2024 – Nov 2024",
      role: "Hustler (Project Manager)",
      tag: "Digistar Class Project",
      color: "primary",
      cover: "", // TODO: app/mockup screenshot
      link: "", // TODO: add live demo / repo / case-study URL
    },
    {
      title: "Tukang Ajaib – Construction Worker Service App",
      subtitle: "Home-service marketplace concept",
      org: "",
      period: "Feb 2024 – June 2024",
      role: "",
      tag: "Project",
      color: "accent-2",
      cover: "", // TODO: app/mockup screenshot
      link: "", // TODO: add live demo / repo / case-study URL
    },
  ],
};

// BNSP certification document showcase. Category/subsection titles are
// transcribed from the real portfolio plan; the actual scanned documents
// (job descriptions, payroll, candidate profiles, etc.) contain other
// people's personal/financial data and are intentionally NOT reproduced
// here — only the non-sensitive section labels, ready for real document
// images to be dropped in per subsection later.
export const bnspDocumentSections = [
  {
    title: "Job Analysis",
    description:
      "Understanding job roles, responsibilities, and competency needs to support effective HR decisions.",
    subsections: [
      { title: "Organizational Structure Design", count: 4 },
      { title: "Job Description Development", count: 4 },
      { title: "SOP for Job Description Preparation", count: 6 },
    ],
  },
  {
    title: "Social Security Administration",
    description:
      "Managing employee social security requirements, documentation, and compliance with relevant regulations.",
    subsections: [
      { title: "Social Security Administration Procedures", count: 7 },
    ],
  },
  {
    title: "Wage Administration",
    description:
      "Handling wage calculation data, payroll documentation, and accurate employee payslip preparation.",
    subsections: [
      { title: "Employee Wage Calculation Data", count: 1 },
      { title: "Employee Payslips", count: 1 },
    ],
  },
  {
    title: "Human Resource Policy Administration",
    description:
      "Managing, documenting, and implementing HR policies to ensure consistency, compliance, and effective people management.",
    subsections: [
      { title: "Training & Development", count: 4 },
      { title: "Proposal Training", count: 9 },
      { title: "Industrial Relations", count: 3 },
      { title: "Recruitment", count: 3 },
      { title: "Overview of Candidate Profile", count: 4 },
    ],
  },
];

export const achievements = {
  awards: [
    {
      title: "3rd Place — Ideastorm 2024",
      issuer: "System Architecture and Governance (SAG) Research Laboratory",
      detail: "Nexilium Team",
      photo: "", // TODO: award/team photo
    },
    {
      title: "Digistar Class 2024 — Hustler",
      issuer: "Telkom Indonesia",
      detail: "Ranked 59th out of 500 mentees",
      photo: "", // TODO: Digistar Class magazine cover
    },
  ],
  // Each category stands in for the real certificate scan(s) it covers.
  // Drop a public/images path into `photo` once the scan is ready — the
  // grid renders it in place of the placeholder icon automatically.
  certificateCategories: [
    { title: "BNSP HR Competency Certifications", photo: "" },
    { title: "Google Digital Garage, Google AI Essentials & Google Project Management", photo: "" },
    { title: "Compensation & Benefits Fundamentals", photo: "" },
    { title: "Azure AI Fundamentals (AI-900)", photo: "" },
    { title: "Job Analysis Process", photo: "" },
    { title: "IBM Data Classification & Optimization", photo: "" },
    { title: "TOEFL Certificate of Achievement", photo: "" },
    { title: "International Scientific Conference on Business and Economics (ISCBE) 2026 Presenter", photo: "" },
  ],
};

// ------------------------------------------------------------------
// UI strings — every hardcoded label/heading used across components.
// Keep this object's shape identical to the `ui` export in data.id.ts;
// components read from whichever language is active via useContent().
// ------------------------------------------------------------------
export const ui = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    project: "Project",
    achievement: "Achievement",
    toggleMenu: "Toggle menu",
  },
  themeToggle: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  languageToggle: {
    label: "Switch language",
  },
  hero: {
    hello: "Hello! 👋",
    imPrefix: "I'm",
    welcomeLine: "Welcome to My Portfolio.",
    cvLabel: "Curriculum Vitae",
    cvDownload: "Download",
    trustedLabel: "Project and internship experience with leading companies",
    whyHireTitle: "Why You Must Hire Me?",
    whyHireSubtitle:
      "I bring a data-driven mindset and structured thinking to support strategic decisions across people, business, and growth initiatives.",
  },
  aboutPreview: {
    heading: "About",
    headingAccent: "Me",
    ctaLabel: "Contact me ↗ Let's Connect!",
    toolsHeading: "My",
    toolsHeadingAccent: "Tools",
  },
  focusFlow: {
    heading: "My Focus Area",
  },
  whyChooseMe: {
    eyebrow: "Why Choose Me",
    heading: "I value integrity and professionalism.",
  },
  homeActivities: {
    eyebrow: "News",
    title: "My Activities & Projects",
    subtitle:
      "A showcase of my practical work across human capital, business development, marketing, and strategic project management.",
  },
  about: {
    eyebrow: "About Me",
    title: "A little about who I am",
    cvLabel: "Curriculum Vitae ↗ Download",
    educationHeading: "My Education",
    relatedCourseHeading: "My Related Course",
    relatedCourseWheelLine1: "MY RELATED",
    relatedCourseWheelLine2: "COURSE",
  },
  skills: {
    eyebrow: "Skills",
    title: "What I bring to the table",
    softHeading: "My Soft Skill",
    softSubtitle:
      "Core abilities that support my work across people, business, and strategic initiatives.",
    wheelCenter: "SKILLS",
    hardHeading: "My Hard Skill",
    hardSubtitle:
      "Practical skills built across human capital, business development, and strategic project work.",
    toolsHeading: "My Tools",
    toolsSubtitle:
      "Software and platforms I use to plan, execute, and present my work across projects.",
    bnspEyebrow: "News",
    bnspHeading: "BNSP Certification Project Activities",
    bnspSubtitle:
      "A showcase of my practical work in job analysis, HR administration, and recruitment procedures under BNSP certification.",
  },
  experience: {
    eyebrow: "Journey",
    title: "My Experiences",
    connectHeading: "Let's Connect and Collaborate!",
    connectSubtitle:
      "I am always eager to discuss business, people, and growth opportunities",
    emailAria: "Email me",
    experienceBadge: "Experience",
    hireMe: "Hire me",
    professionalHeading: "My Professional Experience",
    organizationalPrefix: "My ",
    organizationalAccent: "Organizational",
    organizationalSuffix: " Experience",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Things I've worked on",
    academicHeading: "Academic Projects",
    digitalHeading: "Digital Projects",
    viewProject: "View Project",
    comingSoon: "Coming soon",
  },
  bnspDocuments: {
    eyebrow: "BNSP Certification Project",
  },
  achievements: {
    eyebrow: "Recognition",
    title: "My Achievement",
    subtitle:
      "Key achievements that reflect my continuous growth across business, strategy, and organizational impact.",
    certificatesHeading: "My Certificates",
    certificatesSubtitle:
      "A collection of certifications that reflects my commitment to continuous learning across business, data, and human capital.",
  },
  footer: {
    pages: "Pages",
    followMe: "Follow me",
    pageLabels: {
      home: "Homepage",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      project: "Project",
      achievement: "Achievement",
    },
    copyright: "All Right Reserved. Business Management Portfolio",
  },
  connectBanner: {
    heading: "Let's Connect and Collaborate!",
    subtitle:
      "I'm always open to opportunities, collaborations, and meaningful conversations. Feel free to reach out to discuss ideas, projects, or potential roles.",
  },
};
