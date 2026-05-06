export const personal = {
  name: "Peter McMaster",
  title: "Software Engineer | Columbia University BA & MS",
  tagline: "Machine Learning · AI Systems · Full-Stack · Data Engineering · Distributed Systems",
  email: "p.mcmaster@columbia.edu",
  phone: "419-513-1809",
  linkedin: "https://linkedin.com/in/peter-mcmaster-09b977243/",
  github: "https://github.com/PeterMcMaster",
  resumeUrl: "/resume.pdf",
  about:
    "Hi! I'm Peter McMaster, a software engineer at Profound and a recent Columbia graduate. At Columbia, I earned both a B.A. and an M.S. in five years, studying computer science, mathematics, and physics.\n\nMy interests sit at the intersection of startups, research, and engineering. I'm excited by machine learning, AI infrastructure, and deep tech work that pushes at the frontier of what's possible. I've worked at startups including Astera Holdings and Guardian RF, and I've conducted research at the Flatiron Institute, the University of Tokyo, and Columbia University. This gives me a unique perspective: I love to build, iterate fast, and learn as I go. At the same time, I have a research background, and I love the technical details.\n\nWhen I started at Columbia, I thought I was going to study physics, pursue a PhD, and eventually become a research scientist. That changed once I started doing research, which was my first real introduction to programming. During a summer internship at the University of Tokyo, I used Python to experiment with and optimize gravitational-wave detector network configurations. I loved how readable the language was, how quickly I could build with it, and how much of the scientific ecosystem was already built around it. By the end of that summer, I had completely changed direction. I wanted to keep building, so I traded some of the physics courses I had planned to take for computer science classes.\n\nThe following summer, I joined the Flatiron Institute in New York City, where my research began to look more like software engineering. I worked on refactoring a popular Python library used by the scientific computing community to measure the clustering properties of galaxies. I enjoyed the work, and it reinforced how much I liked using software to solve technical problems.\n\nBy senior year, I was taking more computer science courses and becoming increasingly interested in machine learning, which led me to pursue a master's degree. That next summer, I interned at Guardian RF, a Y Combinator-backed startup building low-latency drone-tracking systems. I worked across the stack and shipped a full-stack mobile application to production, which is now used by police departments, airports, and state departments of transportation. It was the first major software project I shipped at a company, and it was incredibly rewarding to see something I built used in the real world.\n\nIn the fall, I interned at Astera Holdings, where I got my first exposure to AI engineering. I worked on infrastructure for their agent system, adding features like query classification and routing. Those experiences made me appreciate how ambitious, experimental, and fast-moving the startup world can be.\n\nToday, I'm a software engineer at Profound, an AI startup building tools that help companies understand, measure, and improve how they show up in AI-generated search and answer engines!\n\nOutside of work, I'm interested in traveling, lifting, surfing, and bartending.\n\nFeel free to reach out and connect!",
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  description: string;
  logo?: string;
  website?: string;
};

export const experiences: Experience[] = [
  {
    company: "Profound",
    role: "Software Engineer",
    location: "New York, NY",
    start: "Jul 2026",
    end: "Present",
    description: "Incoming software engineer.",
    logo: "/logos/profound.png",
    website: "https://tryprofound.com",
  },
  {
    company: "Astera Holdings",
    role: "Software Engineer Intern",
    location: "New York, NY",
    start: "Sep 2025",
    end: "Dec 2025",
    description:
      "Built an LLM-based classifier and routing pipeline with LangChain and Perplexity/MCP tooling to dispatch user inputs to the correct agents, improving routing accuracy by 50% and cutting query latency by 10%.",
    logo: "/logos/astera.png",
    website: "https://www.astera.holdings/",
  },
  {
    company: "Guardian RF",
    role: "Software Engineering Intern",
    location: "Washington, D.C.",
    start: "Jun 2025",
    end: "Aug 2025",
    description:
      "Led end-to-end delivery of a React Native + Flask app for real-time multi-drone tracking, shipping geofencing, JWT auth, and Socket.IO telemetry scaled to 100+ events/sec — deployed to 5+ agencies including police departments and airports.",
    logo: "/logos/guardianrf.png",
    website: "https://www.guardianrf.com/",
  },
  {
    company: "Flatiron Institute, Simons Foundation",
    role: "Software Engineer Intern",
    location: "New York, NY",
    start: "Jun 2024",
    end: "Aug 2024",
    description:
      "Modernized Corrfunc, an open-source cosmology library, with pybind11 C++ wrappers, Meson builds, and pip-installable wheels, reducing runtime by 15% and eliminating complex setup for downstream researchers.",
    logo: "/logos/flatiron.png",
    website: "https://www.simonsfoundation.org/flatiron/",
  },
  {
    company: "Kavli Institute for the Physics and Mathematics of the Universe, University of Tokyo",
    role: "Research Engineer Intern",
    location: "Tokyo, JP",
    start: "Jun 2023",
    end: "Aug 2023",
    description:
      "Developed a NumPy/SciPy pipeline simulating 30+ gravitational-wave network models across 300 events, analyzing 10k+ detections to improve predicted signal localization accuracy by 30%.",
    logo: "/logos/utokyo.png",
    website: "https://www.ipmu.jp/",
  },
  {
    company: "Columbia Astrophysics Laboratory",
    role: "Undergraduate Researcher",
    location: "New York, NY",
    start: "May 2022",
    end: "May 2023",
    description:
      "Led a research project under Professor Frits Paerels investigating the use of electromagnetic counterparts to gravitational wave events to improve multi-messenger source localization accuracy.",
    logo: "/logos/columbia.png",
    website: "https://www.astro.columbia.edu/content/astrophysics-lab",
  },
];

export type Project = {
  name: string;
  tech: string[];
  description: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Nice 2 Meet U",
    tech: ["Next.js", "React", "FastAPI", "MySQL", "GCP"],
    description:
      "Cloud-based social matching platform with Next.js/FastAPI microservices for user profiles and matchmaking, deployed on Google Cloud with JWT/OAuth authentication and Cloud SQL.",
    github: "https://github.com/PeterMcMaster/Nice-2-Meet-U",
  },
  {
    name: "Halo",
    tech: ["PyTorch", "scikit-learn", "React", "Chroma", "Gemini API"],
    description:
      "Search by meaning, not metadata — a multimodal RAG system for semantic photo search and album generation using CLIP embeddings and Chroma vector retrieval.",
    github: "https://github.com/PeterMcMaster/Halo",
  },
  {
    name: "llms.txt Generator",
    tech: ["React", "FastAPI", "httpx", "Playwright", "PostgreSQL", "Gemini API", "GCP"],
    description:
      "Web app that crawls any website with Playwright and httpx, then uses Gemini API to produce a structured llms.txt file optimized for LLM consumption, with results persisted in PostgreSQL and deployed on GCP.",
    github: "https://github.com/PeterMcMaster/llms.txt-generator",
  },
  {
    name: "Distributed LLM Pipeline",
    tech: ["PyTorch", "vLLM", "CUDA", "GCP"],
    description:
      "Distributed LLM training and serving pipeline implementing DDP, ZeRO-2, and FSDP for multi-GPU training alongside vLLM for high-throughput inference.",
    github: "https://github.com/PeterMcMaster/distributed-llm-pipeline",
  },
  {
    name: "Attune AI",
    tech: ["Next.js", "TypeScript", "Supabase", "Vapi API", "OpenAI API", "Google Places API"],
    description:
      "Voice and text-based therapy agent that conducts empathetic conversations via Vapi, stores session state in Supabase, and surfaces nearby mental health resources using Google Places.",
    github: "https://github.com/PeterMcMaster/attune-ai",
  },
  {
    name: "Personas",
    tech: ["Next.js", "TypeScript", "FastAPI", "Tavily API"],
    description:
      "AI-powered persona platform where users can create custom personas, chat with them individually, and stage multi-persona conversations powered by Tavily-augmented context retrieval.",
    github: "https://github.com/PeterMcMaster/Personas",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "C/C++", "JavaScript", "TypeScript", "Java", "Swift", "SQL"],
  },
  {
    label: "AI / ML & Data",
    skills: [
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "SciPy",
      "pandas",
      "LangChain",
      "CUDA",
      "Hugging Face",
      "Matplotlib",
      "vLLM",
    ],
  },
  {
    label: "Web Development",
    skills: ["React", "React Native", "Next.js", "Node.js", "FastAPI", "Flask", "HTML", "CSS"],
  },
  {
    label: "Cloud & Tools",
    skills: [
      "GCP",
      "AWS",
      "Vercel",
      "Supabase",
      "Docker",
      "Kubernetes",
      "Linux",
      "Xcode",
      "Weights & Biases",
      "LLMs",
    ],
  },
];

export type Education = {
  school: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  gpa?: string;
  honors?: string;
  coursework: string[];
};

export const education: Education[] = [
  {
    school: "Columbia University in the City of New York",
    location: "New York, NY",
    degree: "Master of Science in Computer Science, Machine Learning Track",
    start: "Sep 2025",
    end: "May 2026",
    coursework: [
      "Machine Learning",
      "Operating Systems",
      "High Performance ML",
      "Applied ML",
      "Natural Language Processing",
      "Artificial Intelligence",
      "Advanced Big Data",
      "Cloud Computing",
      "Database Systems",
      "Analysis of Algorithms",
    ],
  },
  {
    school: "Columbia University in the City of New York",
    location: "New York, NY",
    degree: "Bachelor of Arts in Computer Science-Mathematics & Physics",
    start: "Sep 2021",
    end: "May 2025",
    gpa: "3.80 / 4.00",
    honors: "Dean's List · Laidlaw Scholar",
    coursework: [
      "Advanced Programming in C",
      "Data Structures & Algorithms",
      "Computer Systems",
      "Computer Science Theory",
      "Numerical Methods",
      "Discrete Mathematics",
      "Linear Algebra",
      "Multivariable Calculus",
      "Ordinary Differential Equations",
      "Modern Algebra",
      "Quantum Mechanics",
      "Classical Mechanics",
      "Electricity & Magnetism",
    ],
  },
];

export type Award = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  logo?: string;
};

export const awards: Award[] = [
  {
    title: "Laidlaw Scholar",
    issuer: "Laidlaw Foundation · Columbia University",
    year: "2022",
    logo: "/logos/laidlaw.png",
    description:
      "Competitive undergraduate scholarship awarded to students demonstrating exceptional leadership potential and commitment to research. Funded independent research at the Columbia Astrophysics Laboratory.",
  },
];
