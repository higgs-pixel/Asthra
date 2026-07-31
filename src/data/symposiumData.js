// Data for ASTHRA 2K26 SPRING FEST - KSR College of Engineering

export const SYMPOSIUM_INFO = {
  name: "SPRING FEST 2K26",
  subTitle: "NATIONAL LEVEL TECHNICAL SYMPOSIUM",
  department: "DEPARTMENT OF INFORMATION TECHNOLOGY",
  association: "ASTHRA ASSOCIATION",
  institution: "KSR College of Engineering",
  institutionTag: "An Autonomous Institution | NAAC Accredited A++ | NBA Accredited",
  celebration: "25 Years of Celebrating Academic Excellence (2001 - 2026)",
  field: "Information Technology & Emerging Compute",
  dates: "August 21 & 22, 2026",
  location: "KSR College of Engineering Campus, Tiruchengode, Tamil Nadu",
  city: "Tiruchengode, TN",
  contactEmail: "asthra2.02k26@gmail.com",
  registrationDeadline: "August 19, 2026",
  paperSubmissionDeadline: "August 18, 2026",
  selectionIntimation: "August 19, 2026",
  eventFormUrl: "https://forms.gle/nBijsnndpwHh7Vwe7",
  workshopFormUrl: "https://forms.gle/CWFHFUNyMpAFvSDB9",
};

export const ACCREDITATIONS = [
  { name: "NAAC A++", label: "NAAC ACCREDITED A++" },
  { name: "NBA", label: "NBA ACCREDITED PROGRAMMES" },
  { name: "INSTITUTION INNOVATION COUNCIL", label: "IIC - MHRD" },
  { name: "ISTE", label: "INDIAN SOCIETY FOR TECHNICAL EDUCATION" },
  { name: "AICTE", label: "APPROVED BY AICTE" },
  { name: "DEALAB", label: "IDEA LAB CERTIFIED" },
];

export const COMMITTEE = {
  chiefPatron: {
    name: "Dr. M. VENKATESAN",
    title: "Dean",
    affiliation: "KSR College of Engineering",
  },
  patron: {
    name: "Dr. P. MEENAKSHI DEVI",
    title: "Principal",
    affiliation: "KSR College of Engineering",
  },
  convenor: {
    name: "Dr. P. MURUGESAN",
    title: "Director - CR&SD",
    affiliation: "KSR College of Engineering",
  },
  coConvenor: {
    name: "Dr. S. ANGURAJ",
    title: "ASP & HoD/IT",
    affiliation: "Department of IT",
  },
  facultyCoordinator: {
    name: "Ms. T. NANDHINI",
    title: "AP / IT",
    phone: "99526 07065",
  },
  studentCoordinators: [
    { name: "Gowtham S", phone: "90256 82495", role: "Student Coordinator" },
    { name: "JayaKavin S", phone: "96777 93571", role: "Student Coordinator" },
    { name: "Hari Priya M", phone: "80724 02147", role: "Student Coordinator" },
    { name: "Hanisha K", phone: "7413075155", role: "Student Coordinator" },
  ],
};

export const TECHNICAL_EVENTS = [
  {
    id: "prompt-sprint",
    name: "AI Prompt Sprint",
    category: "Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Challenge your generative AI engineering skills by constructing hyper-targeted prompts to generate complex code, UI layouts, and solve algorithmic logic in record time.",
    rules: [
      "Individual participation.",
      "Access to specified AI LLMs provided on-site.",
      "Evaluation based on output accuracy, time taken, and prompt token efficiency.",
    ],
    icon: "Sparkles",
  },
  {
    id: "bug-blitz",
    name: "Bug Blitz",
    category: "Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Uncover hidden syntax errors, memory leaks, and logical glitches in obfuscated code snippets across C, C++, Python, and Java.",
    rules: [
      "Duration: 45 Minutes.",
      "Multiple code rounds from debugging syntax to algorithmic optimization.",
      "Fastest error resolution wins top points.",
    ],
    icon: "Bug",
  },
  {
    id: "idea-pitch",
    name: "Idea Pitch - Poster Presentation",
    category: "Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Present innovative technical research posters and startup project concepts under the theme 'Emerging IT Technologies and Future Trends in Computing'.",
    rules: [
      "Team Size: 1 - 3 members.",
      "Poster format: A1/A0 size or digital slide presentation.",
      "5-minute pitch followed by 3-minute jury Q&A.",
    ],
    icon: "Lightbulb",
  },
  {
    id: "code-insight",
    name: "Code Insight",
    category: "Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Test your deep algorithmic thinking, pseudo-code reverse engineering, and data structure problem solving in competitive time trials.",
    rules: [
      "Individual coding contest.",
      "Languages allowed: C, C++, Java, Python.",
      "Strict zero-plagiarism policy enforced.",
    ],
    icon: "Code",
  },
];

export const NON_TECHNICAL_EVENTS = [
  {
    id: "chess-arena",
    name: "Chess Arena",
    category: "Non-Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Tactical blitz chess tournament designed to test strategic foresight, rapid decision-making, and mental resilience.",
    rules: [
      "Standard FIDE rapid/blitz time control.",
      "Knockout bracket format.",
      "Digital chess clocks provided.",
    ],
    icon: "Crown",
  },
  {
    id: "meme-sprint",
    name: "Meme Sprint",
    category: "Non-Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Unleash your creativity and humor by designing tech & campus-themed viral memes based on real-time spot prompts.",
    rules: [
      "Time Limit: 30 minutes.",
      "Original templates or provided assets allowed.",
      "Judged on humor, relevance, and visual design.",
    ],
    icon: "Smile",
  },
  {
    id: "snap-rush",
    name: "Snap Rush - Photography",
    category: "Non-Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Capture the vibrant energy, futuristic vibes, and candid moments of Spring Fest 2K26 through your camera lens.",
    rules: [
      "Mobile and DSLR cameras permitted.",
      "Photos must be shot on campus during Day 1.",
      "No heavy manipulation; basic color correction allowed.",
    ],
    icon: "Camera",
  },
  {
    id: "guess-the-beat",
    name: "Guess The Beat",
    category: "Non-Technical Event",
    price: "100",
    date: "Day 1 (21.08.2026)",
    description: "Test your musical memory and auditory speed in identifying songs, instrumental BGM, and movie audio cues in seconds.",
    rules: [
      "Buzzer-based quick response round.",
      "Multiple music genres and film soundtracks.",
      "Points awarded for fastest correct guess.",
    ],
    icon: "Music",
  },
];

export const WORKSHOP_DETAILS = {
  title: "Driving Digital Transformation in the Digital Era through Agentic AI and Cloud-Native Development",
  date: "22.08.2026 (Day 2)",
  time: "09:30 AM - 04:30 PM",
  fee: "350",
  venue: "IT Department High-Performance Computing Lab",
  theme: "Agentic AI & Cloud-Native Architecture",
  registrationUrl: "https://forms.gle/CWFHFUNyMpAFvSDB9",
  overview: "An intensive, hands-on masterclass led by industry architects focusing on constructing autonomous AI agents, LangChain/LangGraph orchestrations, and deploying scalable microservices on cloud-native Kubernetes infrastructure.",
  highlights: [
    "Building Multi-Agent Systems with LangChain & LangGraph",
    "Hands-on Microservices Deployment on Cloud Platforms",
    "LLM Integration with Vector Databases & RAG Pipelines",
    "Official IEEE/Institution Workshop Certificate",
    "Complimentary Cloud Lab Vouchers & Materials",
  ],
};

export const PAPER_PRESENTATION_DETAILS = {
  title: "National Level Paper Presentation",
  theme: "Emerging IT Technologies and Future Trends in Computing",
  date: "21.08.2026 (Day 1)",
  fee: "300",
  submissionEmail: "asthra2.02k26@gmail.com",
  lastDateSubmission: "18.08.2026",
  selectionIntimation: "19.08.2026",
  registrationUrl: "https://forms.gle/nBijsnndpwHh7Vwe7",
  topics: [
    "Artificial Intelligence & Machine Learning",
    "Agentic AI & Autonomous Systems",
    "Cloud Computing & Distributed Systems",
    "Cyber Security & Blockchain Technologies",
    "Internet of Things (IoT) & Edge Computing",
    "Big Data Analytics & Quantum Information",
  ],
};

export const GALLERY_IMAGES = [
  {
    title: "KSRCE Academic Excellence Celebration",
    category: "Campus & Heritage",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "High-Performance Computing Lab",
    category: "Technical Infrastructure",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI & Robotics Workshop Session",
    category: "Hands-on Training",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "National Level Hackathon & Symposium",
    category: "Student Innovation",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Auditorium Plenary Keynote Address",
    category: "Symposium Stage",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Student Awards & Trophy Ceremony",
    category: "Felicitation",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
];

export const SCHEDULE_DAYS = [
  {
    day: "Day 1 (21.08.2026)",
    title: "Paper Presentation & Events",
    fee: "Rs. 300 / Person (Paper Presentation) | Rs. 100 / Event",
    formUrl: "https://forms.gle/nBijsnndpwHh7Vwe7",
    events: [
      { time: "08:30 AM - 09:30 AM", title: "Inauguration & Welcome Session", venue: "Main Auditorium" },
      { time: "09:30 AM - 12:30 PM", title: "National Paper Presentation Session", venue: "IT Seminar Hall" },
      { time: "10:30 AM - 01:00 PM", title: "Technical Events (AI Prompt Sprint, Bug Blitz, Code Insight)", venue: "IT Labs 1 & 2" },
      { time: "01:00 PM - 02:00 PM", title: "Lunch Break & Exhibition", venue: "College Dining Hall" },
      { time: "02:00 PM - 04:00 PM", title: "Non-Technical Events (Chess, Meme Sprint, Snap Rush, Guess The Beat)", venue: "Activity Center" },
      { time: "04:00 PM - 04:30 PM", title: "Day 1 Prize Distribution", venue: "Main Auditorium" },
    ],
  },
  {
    day: "Day 2 (22.08.2026)",
    title: "Workshop: Agentic AI & Cloud-Native Development",
    fee: "Rs. 350 / Person",
    formUrl: "https://forms.gle/CWFHFUNyMpAFvSDB9",
    events: [
      { time: "09:00 AM - 09:30 AM", title: "Workshop Registration & Kit Distribution", venue: "HPC Lab Foyer" },
      { time: "09:30 AM - 11:15 AM", title: "Session 1: Agentic AI Foundations & LangChain Architecture", venue: "HPC Lab" },
      { time: "11:15 AM - 11:30 AM", title: "Tea Break", venue: "Foyer" },
      { time: "11:30 AM - 01:00 PM", title: "Session 2: Hands-on Lab - Building Autonomous Agents", venue: "HPC Lab" },
      { time: "01:00 PM - 02:00 PM", title: "Networking Lunch", venue: "College Dining Hall" },
      { time: "02:00 PM - 03:45 PM", title: "Session 3: Cloud-Native Microservices & Deployment", venue: "HPC Lab" },
      { time: "03:45 PM - 04:30 PM", title: "Valedictory & Certificate Distribution", venue: "Main Auditorium" },
    ],
  },
];
