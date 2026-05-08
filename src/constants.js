const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
    showDot: true,
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
    badgeCount: 2,
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "monitor",
    name: "System Monitor",
    icon: "monitor-system.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Trash",
    icon: "trash.png",
    canOpen: true,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Vue.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Ramprasanth7119",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://linkedin.com/in/ram-prasanth2802",
  },
  {
    id: 3,
    text: "LeetCode",
    icon: "/icons/leetcode.svg",
    bg: "#4bcb63",
    link: "https://leetcode.com/u/Ramprasanth28/",
  },
];


export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Rock Paper Scissors Game",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Rock Paper Scissors.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Rock Paper Scissors is a fun and interactive browser-based game designed to feel fast, responsive, and engaging.",
            "Instead of a static game, it reacts instantly to user input with dynamic UI updates and real-time feedback.",
            "Think of it like playing against a smart opponent that remembers every move and keeps score across sessions.",
            "Built using HTML, CSS, and JavaScript, it leverages localStorage to persist scores and enhance user experience.",
          ],
        },
        {
          id: 2,
          name: "live-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://rock-paper-scissors-28.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/github.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Ramprasanth7119/rock-paper-scissor",
          position: "top-20 right-40",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Notes App (MERN)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-55",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Notes App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Notes App is a full-stack application designed to manage ideas, tasks, and personal notes efficiently.",
            "Instead of a basic CRUD tool, it offers authentication, tagging, and powerful search functionality.",
            "Think of it like a personal digital notebook—organized, searchable, and always accessible across devices.",
            "Built with the MERN stack, it uses optimized MongoDB queries and efficient React state management for smooth performance.",
          ],
        },
        {
          id: 2,
          name: "live-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://notes-app-rho-hazel.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/github.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Ramprasanth7119/notes_app",
          position: "top-32 left-40",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "iHub - Idea Bidding Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-90",
      windowPosition: "top-[40vh] left-10",
      children: [
        {
          id: 1,
          name: "iHub.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "iHub is a full-stack idea bidding platform that connects innovators with potential investors.",
            "Instead of static idea listings, it enables real-time bidding and auction-style interactions.",
            "Think of it like a marketplace for ideas—where creativity meets funding opportunities.",
            "Built using Spring Boot, MySQL, Elasticsearch, and React, it supports scalable APIs, advanced search, and a dynamic user experience.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Ramprasanth7119/ihub",
          position: "top-10 right-20",
        },
        // {
        //   id: 4,
        //   name: "ihub.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/project-ihub.png",
        // },
      ],
    },
  ],
};


const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/profile.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/profile.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/profile.png",
      description: [
        "Hey! I’m Ramprasanth 👋, a Software Developer who enjoys building scalable and real-world web applications.",
        "I work across the full stack using the MERN stack and Java Spring Boot—focusing on clean architecture, efficient APIs, and smooth user experiences.",
        "During my time as a Software Trainee, I gained hands-on experience working with backend systems, databases like SQL and Elasticsearch, and collaborating on real product modules.",
        "Think of me as someone who bridges frontend experience with backend logic—building applications that are not just functional, but reliable and optimized.",
        "I’m particularly interested in system design, search optimization, and creating applications that can scale beyond just demo projects.",
        "Outside of development, you’ll probably find me refining my projects, exploring new technologies, or diving deep into how things actually work under the hood.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Deleted Items",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "bugs-fixed.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-8",
      description: [
        "Fixed an API latency issue by reducing unnecessary requests and adding caching where it mattered.",
        "Resolved a React state bug where stale values were causing the UI to drift from the server.",
        "Tuned database queries so the page stopped feeling like it was waiting for permission to load.",
        "Tracked down a nested rerender loop and turned a noisy debugging session into a cleaner component flow.",
      ],
    },
    {
      id: 2,
      name: "failed-ideas.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-40 left-72",
      description: [
        "Tried over-engineering a feature before the user story was even clear. That one got politely deleted.",
        "Built a fancy UI interaction that looked great and explained nothing. Simplicity won.",
        "Learned that adding more abstraction does not automatically add more value.",
        "Some experiments were dropped, but they helped sharpen judgment and product thinking.",
      ],
    },
    {
      id: 3,
      name: "console.log.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-72 left-24",
      description: [
        "console.log everywhere 😅",
        "debugging at 2AM because it worked perfectly yesterday",
        "one more log line and then I swear I’ll remove them",
        "if (it works) { don’t touch it }",
      ],
    },
    {
      id: 4,
      name: "todo-never-done.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-24 right-10",
      description: [
        "Refactor code (never happened)",
        "Write tests (soon...)",
        "Rename variables so future me stops yelling",
        "Delete old branch after ‘one last check’",
      ],
    },
    {
      id: 5,
      name: "rage-quit.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-56 right-28",
      imageUrl: "/images/trash.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  monitor: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };