// ------------------------------------------------------------------
// Versi Bahasa Indonesia — struktur harus persis sama dengan data.ts
// (bahasa Inggris). Setiap field, urutan array, warna, dan slot foto
// mengikuti data.ts; hanya teks naratif yang diterjemahkan. Nama
// perusahaan/organisasi, tanggal, dan istilah baku (SPSS, Canva, dll.)
// sengaja dibiarkan sama di kedua bahasa.
// ------------------------------------------------------------------

export const profile = {
  name: "Yuan Maherta",
  role: "Profesional Manajemen Bisnis",
  tagline: "Mengubah wawasan menjadi dampak nyata — di bidang manusia, strategi, dan pertumbuhan bisnis.",
  bio: "Fresh graduate Sarjana Manajemen Bisnis Telekomunikasi dan Informatika dari Telkom University, dengan konsentrasi Digitalisasi Manajemen Human Capital, serta minat besar pada Organizational Design, Talent Acquisition, dan Business Development. Berpengalaman dalam analisis data, riset pasar dan pengguna, dukungan rekrutmen, serta penyusunan Business Model Canvas, yang diperoleh melalui magang, praktikum mengajar, dan proyek digital. Terampil dalam pemecahan masalah dan berpikir analitis, dengan kemampuan terbukti menerjemahkan wawasan menjadi rekomendasi strategis yang mendukung inisiatif human capital dan pertumbuhan bisnis.",
  location: "Bandung, Jawa Barat, Indonesia",
  email: "yuan.maherta.33@gmail.com",
  resumeUrl: "#",
  socials: [
    { label: "Instagram", href: "https://instagram.com/yuan_mhrtaa" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yuan-maherta" },
    { label: "X", href: "https://x.com/yuan_mhrtaa" },
  ],
};

export const aboutPhotos = {
  // Background removed — rendered with fit="contain" so the card's
  // gradient stays visible around the cutout.
  bio: "/images/hero-portrait-about-cutout.png",
  education: "/images/education-cutout.png",
};

export const homePhotos = {
  hero: "/images/hero-portrait-cutout.png",
  aboutPreview: "/images/hero-portrait-cutout.png",
  whyChooseMe: [
    "/images/why-choose-bumn.png",
    "/images/why-choose-hk-academy.jpeg",
    "/images/activity-btn-sales.png",
  ],
};

export const trustedCompaniesLogo: string = "/images/trusted-companies-cutout.png";
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
    title: "Pola Pikir Berpusat pada Manusia",
    description: "Fokus kuat pada manusia untuk menyelaraskan tujuan organisasi dengan kesejahteraan karyawan.",
  },
  {
    title: "Berbasis Data & Terstruktur",
    description: "Memanfaatkan data dan analisis struktural untuk mendukung keputusan bisnis yang efektif.",
  },
  {
    title: "Adaptif & Berorientasi Pertumbuhan",
    description: "Terus belajar dan beradaptasi untuk berkembang di lingkungan kerja yang dinamis.",
  },
];

export const highlights = [
  {
    title: "Lolos Seleksi P2MW",
    logo: "",
    description:
      "Berhasil lolos seleksi tingkat universitas untuk P2MW (Program Pembinaan Mahasiswa Wirausaha).",
  },
  {
    title: "Program Talent Scouting",
    logo: "",
    description:
      "Terpilih oleh Direktorat Kemahasiswaan, Pengembangan Karier, dan Alumni (Dit. KKA) untuk kompetisi sains maupun non-sains.",
  },
  {
    title: "Publikasi Karya Ilmiah",
    logo: "",
    description:
      "Dipublikasikan dan dipresentasikan pada 9th ISCBE 2026, Valencia, Spanyol (Springer Proceedings, terindeks Scopus).",
  },
];

export const focusAreas = [
  {
    title: "Human Capital & Pengembangan Organisasi",
    description:
      "Fokus pada perencanaan tenaga kerja, desain organisasi, dan inisiatif berpusat pada manusia yang mendukung pertumbuhan bisnis.",
  },
  {
    title: "Pengembangan Bisnis & Penjualan",
    description:
      "Berpengalaman dalam analisis pasar, eksekusi strategi penjualan, dan membangun kemitraan yang mendorong pertumbuhan terukur.",
  },
  {
    title: "Pemasaran & Kemitraan",
    description:
      "Terampil dalam riset pasar, analisis kompetitor, dan membangun kolaborasi eksternal untuk memperluas jangkauan dan engagement.",
  },
  {
    title: "Manajemen Proyek & Strategi",
    description:
      "Mampu memimpin proyek lintas fungsi, dari ideasi (Business Model Canvas) hingga eksekusi dan presentasi ke stakeholder.",
  },
];

export const homeActivities = [
  {
    title: "Sertifikasi Staf Sumber Daya Manusia (BNSP)",
    date: "Friday, 29 September 2025",
    ctaLabel: "Yuk Terhubung!",
    ctaHref: `mailto:${profile.email}`,
    photo: "/images/activity-bnsp.png",
  },
  {
    title: "Intern Sales Program Kredit UMKM",
    date: "Monday, 03 November 2025",
    ctaLabel: "Yuk Terhubung!",
    ctaHref: `mailto:${profile.email}`,
    photo: "/images/activity-btn-sales.png",
  },
  {
    title: "Chief Marketing Officer, Helphin Indonesia",
    date: "Tuesday, 23 July 2024",
    ctaLabel: "Pelajari lebih lanjut",
    ctaHref: "#",
    photo: "/images/activity-helphin.png",
  },
];

export const relatedCourses = [
  {
    title: "Marketing Management",
    description:
      "Mempelajari perumusan strategi pemasaran, segmentasi pasar, dan positioning untuk mendukung pertumbuhan bisnis dan akuisisi pelanggan.",
    color: "accent-3",
  },
  {
    title: "Business Statistics",
    description:
      "Membangun fondasi kuat dalam analisis statistik dan interpretasi data untuk mendukung keputusan bisnis berbasis bukti.",
    color: "accent-4",
  },
  {
    title: "Entrepreneurship",
    description:
      "Mengeksplorasi pengembangan model bisnis, identifikasi peluang, dan strategi usaha dari ide hingga eksekusi.",
    color: "accent-1",
  },
  {
    title: "Design Thinking",
    description:
      "Menerapkan pendekatan pemecahan masalah berpusat pada manusia untuk merancang solusi praktis dan inovatif bagi tantangan bisnis nyata.",
    color: "primary",
  },
  {
    title: "Organizational Behavior",
    description:
      "Menganalisis perilaku individu dan kelompok dalam organisasi, termasuk motivasi, kepemimpinan, komunikasi, dan dinamika tim.",
    color: "accent-2",
  },
  {
    title: "Strategic Management",
    description:
      "Fokus pada perumusan, implementasi, dan evaluasi strategi untuk memastikan efektivitas dan daya saing organisasi.",
    color: "accent-4",
  },
];

export const education = [
  {
    school: "Telkom University",
    logo: "",
    program: "Manajemen Bisnis Telekomunikasi dan Informatika",
    detail: "Konsentrasi: Digitalisasi Manajemen Human Capital",
    period: "2022 - 2026",
    grade: "IPK 3.99/4.00 (Summa Cumlaude)",
    note: 'Skripsi: "Job-Hopping Behavior among Generation Z Employees in Indonesia\'s Workforce: The Role of Work-Life Balance and Career Development."',
  },
  {
    school: "SMA Negeri 1 Palimanan",
    logo: "",
    program: "Ilmu Pengetahuan Sosial (IPS)",
    detail: "",
    period: "2018 - 2021",
    grade: "Nilai 90.67",
    note: "",
  },
];

export const skills = {
  soft: [
    {
      name: "Berpikir Kritis",
      description:
        "Mampu mengevaluasi informasi secara objektif, mempertanyakan asumsi, dan mengambil keputusan yang matang dalam situasi kompleks.",
    },
    {
      name: "Kolaborasi Tim",
      description:
        "Terampil bekerja lintas tim, mengoordinasikan stakeholder, dan menjaga hubungan interpersonal yang kuat.",
    },
    {
      name: "Pemecahan Masalah",
      description:
        "Mampu mengidentifikasi masalah, menganalisis akar penyebab, dan mengusulkan solusi yang terstruktur dan praktis.",
    },
    {
      name: "Kepemimpinan & Koordinasi",
      description:
        "Berpengalaman memimpin tim, mengelola program, dan memastikan proyek berjalan efisien dan tepat waktu.",
    },
    {
      name: "Berpikir Analitis",
      description:
        "Mampu menginterpretasikan data, mengevaluasi metrik kinerja, dan menghasilkan insight untuk pengambilan keputusan.",
    },
    {
      name: "Komunikasi & Fasilitasi",
      description:
        "Mampu menyampaikan komunikasi yang jelas, memimpin diskusi, dan memfasilitasi sesi pembelajaran secara efektif.",
    },
  ],
  hard: [
    "Visualisasi Data",
    "Riset Pasar & Analisis Kompetitor",
    "Pengembangan Organisasi",
    "Membangun Kemitraan Bisnis",
    "Administrasi HR",
    "Kompensasi & Benefit",
    "Manajemen Proyek",
    "Rekrutmen & Seleksi",
    "Analisis Statistik",
    "Eksekusi Strategi Penjualan",
    "Business Model Canvas",
    "Alat Data & Analitik",
  ],
  tools: [
    "Canva",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Microsoft Excel",
    "Glassdoor",
    "SPSS",
    "POM-QM",
    "Supabase",
    "Trello",
    "LinkedIn",
    "ProjectLibre",
    "MySQL",
    "Google Colab",
    "Indeed",
    "Vercel",
  ],
};

// Individual tool logos (ungrouped so each one gets its own hover card),
// used by the Tools grid on the Skills page. Names match skills.tools.
export const toolLogos: { name: string; logo: string }[] = [
  { name: "Canva", logo: "/images/tools/canva.png" },
  { name: "Microsoft Word", logo: "/images/tools/microsoft-word.png" },
  { name: "Microsoft PowerPoint", logo: "/images/tools/microsoft-powerpoint.png" },
  { name: "Microsoft Excel", logo: "/images/tools/microsoft-excel.png" },
  { name: "Glassdoor", logo: "/images/tools/glassdoor.png" },
  { name: "SPSS", logo: "/images/tools/spss.png" },
  { name: "POM-QM", logo: "/images/tools/pom-qm.png" },
  { name: "Supabase", logo: "/images/tools/supabase.png" },
  { name: "Trello", logo: "/images/tools/trello.png" },
  { name: "LinkedIn", logo: "/images/tools/linkedin.png" },
  { name: "ProjectLibre", logo: "/images/tools/projectlibre.png" },
  { name: "MySQL", logo: "/images/tools/mysql.png" },
  { name: "Google Colab", logo: "/images/tools/google-colab.png" },
  { name: "Indeed", logo: "/images/tools/indeed.png" },
  { name: "Vercel", logo: "/images/tools/vercel.png" },
];

export const bnspThumbnail: string = "/images/activity-bnsp.png";

export const bnspActivities = [
  {
    title: "Analisis Jabatan & Penyusunan Deskripsi Jabatan",
    description:
      "Melakukan analisis jabatan, menyusun deskripsi jabatan, dan memetakan kompetensi yang dibutuhkan sesuai standar BNSP.",
  },
  {
    title: "Administrasi & Dokumentasi HR",
    description:
      "Menyiapkan dokumen HR seperti data administrasi pengupahan, catatan administrasi jaminan sosial, surat pemutusan hubungan kerja, dan SOP HR.",
  },
  {
    title: "Prosedur Rekrutmen & Operasional HR",
    description:
      "Mengerjakan dokumentasi rekrutmen, SOP wawancara, formulir permintaan karyawan baru, formulir pelamar, dan alur kerja operasional HR.",
  },
];

export const experienceIntro =
  "Saya senang menjembatani teori akademik dengan dampak nyata di dunia kerja. Setiap pencapaian yang dibagikan di sini bukan sekadar pengalaman, melainkan bukti kerja keras, pertumbuhan yang konsisten, dan dedikasi saya untuk terus berkembang di bidang human capital, bisnis, dan strategi melalui aksi nyata.";

export const experiencePhotos = {
  intro: "",
  orgHub: "",
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
  professional: [
    {
      role: "Asisten Praktikum Statistika Bisnis",
      org: "Telkom University",
      period: "Oct 2023 — Jan 2024",
      photo: "",
      points: [
        "Melatih 40+ mahasiswa dalam analisis data menggunakan SPSS dan Excel untuk menyelesaikan tugas dan ujian berbasis data secara efektif.",
        "Mengevaluasi tugas dan ujian mahasiswa, memberikan feedback individual yang berkontribusi pada rata-rata nilai akhir 92.59, dengan 95% mahasiswa meraih nilai A.",
      ],
    },
    {
      role: "Asisten Praktikum Manajemen Operasi",
      org: "Telkom University",
      period: "Feb — Jun 2025",
      photo: "",
      points: [
        "Memberikan pelatihan dan bimbingan kepada mahasiswa dalam menggunakan software POM-QM untuk analisis operasi dan pengambilan keputusan berbasis data.",
        "Membantu mahasiswa memahami konsep manajemen operasi seperti kualitas, lean operations, dan kapasitas, serta memberikan feedback untuk meningkatkan performa akademik.",
      ],
    },
    {
      role: "Intern Sales Program Kredit UMKM",
      org: "PT. Bank Tabungan Negara Tbk",
      period: "Jun — Aug 2025",
      photo: "",
      points: [
        "Menilai 20+ BI Checking/SLIK UMKM setiap hari dan menganalisis 10 rekening debitur melalui rekening koran bank.",
        "Mendukung pengembangan program kredit UMKM dan presentasi klien untuk akuisisi pembiayaan.",
        "Membantu merancang strategi penagihan, meningkatkan follow-up dan pemulihan pinjaman.",
      ],
    },
    {
      role: "Intern Tech Recruiter",
      org: "Rakamin Academy",
      period: "Oct — Nov 2025",
      photo: "",
      points: [
        "Mengelola rekrutmen tech secara end-to-end, sourcing 100+ kandidat melalui LinkedIn dan memastikan keselarasan proyek.",
        "Membangun sistem pelacakan dan alat wawancara untuk meningkatkan efisiensi dan hiring berbasis data.",
        "Memanfaatkan LinkedIn, Indeed, dan Glassdoor untuk mengoptimalkan sourcing dan meningkatkan pengalaman kandidat.",
      ],
    },
    {
      role: "Intern People Culture & Talent Acquisition",
      org: "PT Hutama Karya (Persero)",
      period: "Feb — Aug 2026",
      photo: "",
      points: [
        "Mengembangkan tools Manpower Planning (MPP) berbasis Excel dan memetakan 16.000+ kode posisi.",
        "Mengelola evaluasi perpanjangan kontrak PKWT untuk 20+ karyawan/bulan, termasuk mendigitalisasi formulir evaluasi.",
        "Merancang materi employer branding, termasuk deck HC Award (IHCA XII) dan Employee Handbook.",
      ],
    },
  ],
  organizational: [
    {
      shortName: "HIMA MBTI",
      role: "Staf Pengembangan Komunitas",
      org: "Himpunan Mahasiswa Manajemen Bisnis Telekomunikasi dan Informatika (HIMA MBTI)",
      period: "Feb — Dec 2023",
      logo: "",
      points: [
        "Berhasil menyelenggarakan 6 kegiatan sosial, termasuk kampanye penggalangan dana, dan membangun kolaborasi dengan berbagai pihak eksternal untuk mendukung inisiatif yang berdampak positif bagi organisasi maupun masyarakat.",
        "Memfasilitasi seminar peningkatan kapasitas di bidang teknologi dan kewirausahaan untuk mengembangkan potensi individu dan komunitas.",
      ],
      gallery: [
        { tag: "Kunjungan Perusahaan", caption: "PT Angkasa Pura II", location: "Jakarta", date: "24 November 2023" },
        { tag: "Foto Organisasi", caption: "HIMA MBTI 2023", location: "Telkom University", date: "30 December 2023" },
        { tag: "Studi Banding", caption: "KMM ITB", location: "Institut Teknologi Bandung", date: "25 November 2023" },
        { tag: "Socharity", caption: "SDN Margabakti", location: "Desa Pulosari, Bandung", date: "16 October 2023" },
        { tag: "Sudut Berbagi", caption: "Panti Sosial", location: "Panti Sosial Tresna Wredha Budi Pertiwi, Bandung", date: "23 September 2023" },
      ],
    },
    {
      shortName: "Belajar Kreasi",
      role: "Ketua Proyek",
      org: "Belajar Kreasi (BERAKSI)",
      period: "Mar — Dec 2023",
      logo: "",
      points: [
        "Memimpin dan mengevaluasi kinerja tim beranggotakan 15 orang di 4 divisi (Public Relations, Documentation, Logistics, dan Events), dengan fokus pada manajemen kinerja tim, kolaborasi lintas divisi, dan pencapaian 100% target program organisasi dalam satu periode.",
        "Menginisiasi dua program inklusif bertema keberagaman dan pembelajaran, yaitu 'Sign Language with HIMA MBTI' dan 'Creative Workshop with SLBN Ciendo', mendorong kesetaraan dan pendidikan inklusif di berbagai latar belakang.",
        "Program ini terpilih sebagai salah satu kandidat best practice di HIMA MBTI 2023.",
      ],
      gallery: [
        { tag: "Sambutan", caption: "SLB C Cicendo", location: "Bandung", date: "24 November 2023" },
        { tag: "Bahasa Isyarat", caption: "HIMA MBTI", location: "Telkom University", date: "24 November 2023" },
        { tag: "Bahasa Isyarat", caption: "Anggota Beraksi", location: "Telkom University", date: "30 December 2023" },
        { tag: "Acara Utama", caption: "SLB C Cicendo", location: "Bandung", date: "25 November 2023" },
      ],
    },
    {
      shortName: "Asa Bercerita",
      role: "Bendahara",
      org: "Asa Bercerita",
      period: "Mar — Dec 2023",
      logo: "",
      points: [
        "Mengelola dan mengawasi seluruh aktivitas keuangan divisi secara sistematis sesuai SOP organisasi, termasuk penyusunan laporan arus kas dan pertanggungjawaban.",
        "Berkontribusi dalam dukungan kepemimpinan tim dan kolaborasi lintas divisi dalam memproduksi 5 podcast edukatif sebagai platform pembelajaran dan engagement untuk mendukung pengembangan potensi mahasiswa.",
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
      role: "Alumni Digistar Class",
      org: "Digistar Club, Telkom University",
      period: "Dec 2024 — Present",
      logo: "",
      points: [
        "Bagian dari komunitas eksklusif alumni program LivinginTelkom (Digistar Class, Digistar Connect, Digistar Internship), yang mempersiapkan talenta digital Indonesia.",
      ],
      gallery: [
        { tag: "Kunjungan Telkom", caption: "Digistar Class", location: "Telkom CorpU Bandung", date: "22 August 2024" },
        { tag: "Kelas Soft Skill", caption: "Digistar Class", location: "Zoom Meeting", date: "10 August 2024" },
        { tag: "Kelas Hard Skill", caption: "Digistar Class", location: "Zoom Meeting", date: "29 August 2024" },
      ],
    },
  ] as OrgExperience[],
};

export const projects = {
  academic: [
    {
      title: "Analisis Manajemen Strategis",
      subject: "PT Kalbe Farma Tbk",
      period: "Feb 2024 – Jun 2024",
      cover: "",
    },
    {
      title: "Studi Perilaku Konsumen",
      subject: "FIT HUB Gym",
      period: "Feb 2025 – Jun 2025",
      cover: "",
    },
    {
      title: "Rencana Pemasaran",
      subject: "Erigo",
      period: "Sep 2023 – Jan 2024",
      cover: "",
    },
    {
      title: "Kewirausahaan — Business Model Canvas",
      subject: "Crunchy Ocean",
      period: "Sep 2023 – Jan 2024",
      cover: "",
    },
  ],
  digital: [
    {
      title: "RENEWA – Formulir Evaluasi Perpanjangan Kontrak Karyawan",
      subtitle: "Formulir evaluasi perpanjangan kontrak PKWT yang didigitalisasi",
      org: "PT Hutama Karya (Persero)",
      period: "Feb 2026 – Aug 2026",
      role: "",
      tag: "Proyek Magang",
      color: "accent-1",
      cover: "",
      link: "",
    },
    {
      title: "SIBETA – Sistem Informasi Elektronik untuk Tenaga Alih Daya",
      subtitle: "Proyek alat digital internal",
      org: "PT. Bank Tabungan Negara Tbk",
      period: "Jun 2025 – Aug 2025",
      role: "",
      tag: "Proyek Magang",
      color: "accent-3",
      cover: "",
      link: "",
    },
    {
      title: "JUST CLICK – Aplikasi Jasa Titip (Jastip) Digital",
      subtitle: "Konsep produk digital",
      org: "",
      period: "Sep 2024 – Dec 2024",
      role: "",
      tag: "Proyek",
      color: "accent-4",
      cover: "",
      link: "",
    },
    {
      title: "BIGTICKET SOLUTION – Digistar Class 2024",
      subtitle: "Simulasi bisnis & manajemen",
      org: "PT. Telkom Indonesia Tbk",
      period: "Sep 2024 – Nov 2024",
      role: "Hustler (Manajer Proyek)",
      tag: "Proyek Digistar Class",
      color: "primary",
      cover: "",
      link: "",
    },
    {
      title: "Tukang Ajaib – Aplikasi Layanan Tukang Bangunan",
      subtitle: "Konsep marketplace jasa layanan rumah",
      org: "",
      period: "Feb 2024 – June 2024",
      role: "",
      tag: "Proyek",
      color: "accent-2",
      cover: "",
      link: "",
    },
  ],
};

export const bnspDocumentSections = [
  {
    title: "Analisis Jabatan",
    description:
      "Memahami peran, tanggung jawab, dan kebutuhan kompetensi jabatan untuk mendukung keputusan HR yang efektif.",
    subsections: [
      { title: "Desain Struktur Organisasi", count: 4 },
      { title: "Penyusunan Deskripsi Jabatan", count: 4 },
      { title: "SOP Penyusunan Deskripsi Jabatan", count: 6 },
    ],
  },
  {
    title: "Administrasi Jaminan Sosial",
    description:
      "Mengelola kebutuhan jaminan sosial karyawan, dokumentasi, dan kepatuhan terhadap regulasi yang berlaku.",
    subsections: [
      { title: "Prosedur Administrasi Jaminan Sosial", count: 7 },
    ],
  },
  {
    title: "Administrasi Pengupahan",
    description:
      "Mengelola data perhitungan upah, dokumentasi payroll, dan penyusunan slip gaji karyawan secara akurat.",
    subsections: [
      { title: "Data Perhitungan Upah Karyawan", count: 1 },
      { title: "Slip Gaji Karyawan", count: 1 },
    ],
  },
  {
    title: "Administrasi Kebijakan Sumber Daya Manusia",
    description:
      "Mengelola, mendokumentasikan, dan mengimplementasikan kebijakan HR untuk memastikan konsistensi, kepatuhan, dan pengelolaan orang yang efektif.",
    subsections: [
      { title: "Pelatihan & Pengembangan", count: 4 },
      { title: "Proposal Pelatihan", count: 9 },
      { title: "Hubungan Industrial", count: 3 },
      { title: "Rekrutmen", count: 3 },
      { title: "Gambaran Profil Kandidat", count: 4 },
    ],
  },
];

export const achievements = {
  awards: [
    {
      title: "Juara 3 — Ideastorm 2024",
      issuer: "System Architecture and Governance (SAG) Research Laboratory",
      detail: "Tim Nexilium",
      photo: "",
    },
    {
      title: "Digistar Class 2024 — Hustler",
      issuer: "Telkom Indonesia",
      detail: "Peringkat ke-59 dari 500 mentee",
      photo: "",
    },
  ],
  certificateCategories: [
    { title: "Sertifikasi Kompetensi HR BNSP", photo: "" },
    { title: "Google Digital Garage, Google AI Essentials & Google Project Management", photo: "" },
    { title: "Dasar-Dasar Kompensasi & Benefit", photo: "" },
    { title: "Azure AI Fundamentals (AI-900)", photo: "" },
    { title: "Proses Analisis Jabatan", photo: "" },
    { title: "IBM Data Classification & Optimization", photo: "" },
    { title: "Sertifikat Pencapaian TOEFL", photo: "" },
    { title: "Presenter International Scientific Conference on Business and Economics (ISCBE) 2026", photo: "" },
  ],
};

// ------------------------------------------------------------------
// UI strings — Indonesian. Keep this object's shape identical to the
// `ui` export in data.ts.
// ------------------------------------------------------------------
export const ui = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    experience: "Pengalaman",
    project: "Proyek",
    achievement: "Pencapaian",
    toggleMenu: "Buka menu",
  },
  themeToggle: {
    toLight: "Ganti ke mode terang",
    toDark: "Ganti ke mode gelap",
  },
  languageToggle: {
    label: "Ganti bahasa",
  },
  hero: {
    hello: "Halo! 👋",
    imPrefix: "Saya",
    welcomeLine: "Selamat Datang di Portofolio Saya.",
    cvLabel: "Curriculum Vitae",
    cvDownload: "Unduh",
    trustedLabel: "Pengalaman proyek dan magang bersama perusahaan terkemuka",
    whyHireTitle: "Kenapa Harus Merekrut Saya?",
    whyHireSubtitle:
      "Saya membawa pola pikir berbasis data dan cara berpikir terstruktur untuk mendukung keputusan strategis di bidang manusia, bisnis, dan pertumbuhan.",
  },
  aboutPreview: {
    heading: "Tentang",
    headingAccent: "Saya",
    ctaLabel: "Hubungi saya ↗ Yuk Terhubung!",
    toolsHeading: "Tools",
    toolsHeadingAccent: "Saya",
  },
  focusFlow: {
    heading: "Area Fokus Saya",
  },
  whyChooseMe: {
    eyebrow: "Kenapa Memilih Saya",
    heading: "Saya menjunjung tinggi integritas dan profesionalisme.",
  },
  homeActivities: {
    eyebrow: "Kabar",
    title: "Aktivitas & Proyek Saya",
    subtitle:
      "Sekilas kerja nyata saya di bidang human capital, business development, marketing, dan manajemen proyek strategis.",
  },
  about: {
    eyebrow: "Tentang Saya",
    title: "Sedikit cerita tentang saya",
    cvLabel: "Curriculum Vitae ↗ Unduh",
    educationHeading: "Pendidikan Saya",
    relatedCourseHeading: "Mata Kuliah Terkait",
    relatedCourseWheelLine1: "MATA KULIAH",
    relatedCourseWheelLine2: "TERKAIT",
  },
  skills: {
    eyebrow: "Keahlian",
    title: "Apa yang saya tawarkan",
    softHeading: "Soft Skill Saya",
    softSubtitle:
      "Kemampuan inti yang mendukung kerja saya di bidang manusia, bisnis, dan inisiatif strategis.",
    wheelCenter: "SKILLS",
    hardHeading: "Hard Skill Saya",
    hardSubtitle:
      "Keahlian praktis yang dibangun di bidang human capital, business development, dan pekerjaan proyek strategis.",
    toolsHeading: "Tools Saya",
    toolsSubtitle:
      "Software dan platform yang saya gunakan untuk merencanakan, mengeksekusi, dan mempresentasikan pekerjaan di berbagai proyek.",
    bnspEyebrow: "Kabar",
    bnspHeading: "Aktivitas Proyek Sertifikasi BNSP",
    bnspSubtitle:
      "Sekilas kerja nyata saya dalam analisis jabatan, administrasi HR, dan prosedur rekrutmen di bawah sertifikasi BNSP.",
  },
  experience: {
    eyebrow: "Perjalanan",
    title: "Pengalaman Saya",
    connectHeading: "Yuk Terhubung dan Berkolaborasi!",
    connectSubtitle:
      "Saya selalu antusias mendiskusikan bisnis, manusia, dan peluang pertumbuhan",
    emailAria: "Kirim email",
    experienceBadge: "Pengalaman",
    hireMe: "Rekrut saya",
    professionalHeading: "Pengalaman Profesional Saya",
    organizationalPrefix: "Pengalaman ",
    organizationalAccent: "Organisasi",
    organizationalSuffix: " Saya",
  },
  projects: {
    eyebrow: "Portofolio",
    title: "Hal-hal yang pernah saya kerjakan",
    academicHeading: "Proyek Akademik",
    digitalHeading: "Proyek Digital",
    viewProject: "Lihat Proyek",
    comingSoon: "Segera hadir",
  },
  bnspDocuments: {
    eyebrow: "Proyek Sertifikasi BNSP",
  },
  achievements: {
    eyebrow: "Pengakuan",
    title: "Pencapaian Saya",
    subtitle:
      "Pencapaian utama yang mencerminkan pertumbuhan berkelanjutan saya di bidang bisnis, strategi, dan dampak organisasi.",
    certificatesHeading: "Sertifikat Saya",
    certificatesSubtitle:
      "Kumpulan sertifikasi yang mencerminkan komitmen saya untuk terus belajar di bidang bisnis, data, dan human capital.",
  },
  footer: {
    pages: "Halaman",
    followMe: "Ikuti Saya",
    pageLabels: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      project: "Proyek",
      achievement: "Pencapaian",
    },
    copyright: "Seluruh Hak Cipta Dilindungi. Portofolio Manajemen Bisnis",
  },
  connectBanner: {
    heading: "Yuk Terhubung dan Berkolaborasi!",
    subtitle:
      "Saya selalu terbuka untuk peluang, kolaborasi, dan percakapan yang bermakna. Jangan ragu menghubungi saya untuk mendiskusikan ide, proyek, atau peran potensial.",
  },
};
