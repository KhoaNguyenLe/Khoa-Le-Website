// ─── Types ───────────────────────────────────────────

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  icon?: string;
  children?: FileNode[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectEntry {
  name: string;
  stack: string;
  date: string;
  bullets: string[];
  tags: string[];
}

export interface LeadershipEntry {
  org: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  tags: string[];
}

// ─── About / Education ──────────────────────────────

export const about = {
  name: 'Khoa Nguyen Le',
  phone: '832-913-9896',
  email: 'knl2366@eid.utexas.edu',
  linkedin: 'linkedin.com/in/KhoaNguyenLe',
  github: 'github.com/KhoaNguyenLe',
  education: {
    school: 'University of Texas at Austin',
    degree: 'Bachelor of Science in Electrical and Computer Engineering',
    graduation: 'May 2028',
    gpa: '3.9',
  },
  skills: {
    languages: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'HTML/CSS', 'Assembly'],
    frontend: ['React.js', 'React Native', 'Next.js', 'Solid.js', 'Tailwind CSS', 'NativeWind', 'ShadCN', 'Radix UI', 'Bootstrap'],
    backend: ['Node.js', 'Django', 'Flask', 'REST APIs', 'Celery'],
    data: ['PostgreSQL', 'MySQL', 'SQLite', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'BeautifulSoup'],
    devTools: ['CI/CD', 'Git', 'Docker', 'VS Code', 'Linear', 'Jira', 'Figma', 'Figma Make', 'Cursor', 'Claude Code', 'GitHub Actions'],
  },
  topTracks: [
    { title: 'A Cold Play', artist: 'The Kid LAROI' },
    { title: 'Silk and Cologne', artist: 'Ei8ht and Offset' },
    { title: 'TMU', artist: 'Don Toliver' },
    { title: 'The Color Violet', artist: 'Tory Lanez' },
    { title: 'Si Antes Te Hubiera Conocido', artist: 'KAROL G' },
  ],
};

// ─── Experience ─────────────────────────────────────

export const experiences: Record<string, ExperienceEntry> = {
  swemap: {
    company: 'SWEMAP',
    role: 'Software Engineering Intern',
    date: 'December 2025 – Present',
    location: 'Austin, TX',
    bullets: [
      'Reduced app latency by 60% by migrating 12 pages from React.js to Solid.js and removing Virtual DOM re-renders',
      'Designed dynamic REST API endpoints using Python Django to organize served data for 300+ active users',
      'Accelerated onboarding by 50% by creating documentation for backend architecture like PostgreSQL DB schemas',
      'Established CI/CD pipeline and CodeRabbit AI to automate testing, ensuring scalable deployment and availability',
    ],
    tags: ['React.js', 'Solid.js', 'Python', 'Django', 'PostgreSQL', 'CI/CD'],
  },
  research_assistant: {
    company: 'University of Texas at Austin',
    role: 'Research Assistant',
    date: 'August 2025 – December 2025',
    location: 'Austin, TX',
    bullets: [
      'Designed and deployed a full stack application using Next.js, TypeScript, and Tailwind CSS on Vercel to host data',
      'Developed an ETL pipeline in Python to scrape data from REST APIs, collecting 50,000+ sky images every month',
      'Managed cloud storage of 100 GB+ using Jetstream2 volumes, organizing data for 30 peers and eliminating local load',
      'Implemented SQL database schemas to integrate image and meteorological data into ML-readied records',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'SQL', 'Vercel'],
  },
  data_annotation: {
    company: 'Data Annotation',
    role: 'Software Engineering Intern',
    date: 'June 2025 – July 2025',
    location: 'Katy, TX',
    bullets: [
      'Designed 200+ targeted unit tests in Python, improving code reliability and reducing module-level issue reports by 30%',
      'Used Pandas and NumPy to analyze outputs and identify data coverage gaps in LLM datasets',
      'Collaborated with 8 engineers under an Agile development framework, using Scrum principles to target model training',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Agile', 'Scrum'],
  },
};

// ─── Projects ───────────────────────────────────────

export const projects: Record<string, ProjectEntry> = {
  ramshere: {
    name: 'RamsHere Mobile App',
    stack: 'React Native, TypeScript, NativeWind CSS, Python, Django',
    date: 'January 2026 – Present',
    bullets: [
      'Building a mobile app, using TypeScript, React Native, and NativeWind CSS, to serve 200+ first-gen students',
      'Developed a data pipeline using Python to scrape information on UT events, resources, locations and classes',
      'Implemented a Django back-end server to host dynamic API endpoints, using Celery to run asynchronous tasks',
    ],
    tags: ['React Native', 'TypeScript', 'NativeWind', 'Python', 'Django', 'Celery'],
  },
  data_importer: {
    name: 'Data Importer',
    stack: 'Python, SQLite, Pandas',
    date: 'August 2025',
    bullets: [
      'Engineered a modular ETL pipeline in Python to normalize CSV, JSON, and XML inputs into a SQLite schema',
      'Implemented schema mapping, data validation, and transformation layers using pandas and sqlite3',
      'Built exception handling to prevent schema violations and malformed data ingestion',
    ],
    tags: ['Python', 'SQLite', 'Pandas', 'ETL'],
  },
  sparrow: {
    name: 'Sparrow Web App',
    stack: 'HTML/CSS, JavaScript, Java, MongoDB',
    date: 'June 2025',
    bullets: [
      'Built a full-stack application, using HTML, CSS, and JavaScript, that teaches students Java fundamentals',
      'Created gamified UI/UX designs using Figma, including page layouts, user flows, and interactive components',
      'Implemented a MongoDB database to manage login authentication and persistent user data',
    ],
    tags: ['HTML/CSS', 'JavaScript', 'Java', 'MongoDB', 'Figma'],
  },
};

// ─── Leadership ─────────────────────────────────────

export const leadership: Record<string, LeadershipEntry> = {
  tsa_president: {
    org: 'Technology Student Association',
    role: 'President',
    date: 'May 2024 – April 2025',
    location: 'Katy, TX',
    bullets: [
      'Elevated chapter to 2nd in state rankings by organizing proactivity check-ins and communicating with 50+ teams',
      'Managed $50,000 in club funds to plan for hotels, meals, flights/rides, and competition expenses for 120+ members',
      'Increased active membership by 100% by collaborating with 8 officers to facilitate weekly meetings and monthly socials',
    ],
    tags: ['Leadership', 'Management', 'Budgeting'],
  },
};

// ─── File Tree (sidebar structure) ──────────────────

export const fileTree: FileNode[] = [
  {
    id: 'about',
    name: 'about.tsx',
    type: 'file',
    icon: 'react',
  },
  {
    id: 'experience',
    name: 'experience',
    type: 'folder',
    children: [
      { id: 'swemap', name: 'swemap.ts', type: 'file', icon: 'typescript' },
      { id: 'research_assistant', name: 'research_assistant.py', type: 'file', icon: 'python' },
      { id: 'data_annotation', name: 'data_annotation.py', type: 'file', icon: 'python' },
    ],
  },
  {
    id: 'leadership',
    name: 'leadership',
    type: 'folder',
    children: [
      { id: 'tsa_president', name: 'tsa_president.java', type: 'file', icon: 'java' },
    ],
  },
  {
    id: 'projects',
    name: 'projects',
    type: 'folder',
    children: [
      { id: 'ramshere', name: 'ramshere.tsx', type: 'file', icon: 'react' },
      { id: 'data_importer', name: 'data_importer.py', type: 'file', icon: 'python' },
      { id: 'sparrow', name: 'sparrow.html', type: 'file', icon: 'html' },
    ],
  },
];
