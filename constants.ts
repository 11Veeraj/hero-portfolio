

export const METADATA = {
  title: "Portfolio | Veeraj Goudar",
  description:
  "Driven by curiosity and dedication, I push technology's boundaries, sculpting innovative solutions in software development.",
  siteUrl: "https://www.linkedin.com/in/veeraj-goudar-a3348020a//",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Final Year Student at MIT Academy of Engineering Pune",
  "SDE Intern at BMC Software Pune",
  "Solving Problems by devloping innovative solution",
];

export const EMAIL = "veeraj.goudar@mitaoe.ac.in";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/veeraj-goudar-a3348020a",
  github: "https://github.com/11Veeraj",
  instagram: "https://www.instagram.com/11_veeraj/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Mythological Scene Recognition",
    image: "/projects/blur/mythological.png",
    blurImage: "/projects/blur/mythological.png",
    description: "Identifies Mythological characters and relationships to provide context/information about the historic Mythological event/Scene and has capability to summarize the information",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["html", "machineLearning", "nlp", "python","computerVision"],
  },
  {
    name: "AIHU Self Driving Car Assistance",
    image: "/projects/blur/aihu.png",
    blurImage: "/projects/blur/aihu.png",
    description: "Decision-making model takes various parameters into consideration to compute the best decision which is efficient and effective for the car.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.huminos.com/",
    tech: ["machineLearning", "nlp", "python", "computerVision"],
  },
  {
    name: "BookFinder",
    image: "/projects/blur/Bookfinder.png",
    blurImage: "/projects/blur/Bookfinder.png",
    description: "A Computer Vision application built using OCR algorithm to identify the Books present in the image and providing the listings available for the book across the internet market",
    gradient: ["#245B57", "#004741"],
    url: "https://bookfinder-pttiukkhnqylhefmu5vncy.streamlit.app/",
    tech: ["machineLearning", "computerVision", "Streamlit"],
  },
  {
    name: "E-niryat DNK Ecommerce Platform",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "SIH1413 Problem Statement Building an ecommerce platform to help small traders to provide international platform for trade using DNK Network",
    gradient: ["#003052", "#167187"],
    url: "https://github.com/11Veeraj/hero-app/",
    tech: ["javascript", "react", "mongo","computerVision", "aws"],
  },
  {
    name: "Spotify Recommendation System",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Select a song that you like and using spotify API a song will be recommended based on similiar music style",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://colab.research.google.com/drive/1gQNClbBIFlbHzU52w7j5AOdrJP2ZpoYf?usp=sharing",
    tech: ["machineLearning", "python", "spotify"],
  },
  {
    name: "Artinator - Neural Style Transfer",
    image: "/projects/blur/neural.png",
    blurImage: "/projects/blur/neural.png",
    description: "Neural network application called Neural Style Transfer can create beautiful artworks which even humans can’t think of",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://colab.research.google.com/drive/1bi-dcOlsosoK1OC8gEAY24e6ypTA49rd?usp=sharing",
    tech: ["machineLearning", "computerVision", "python"],
  },
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next",
    "angular",
    "html",
    "css",
  ],
  languages: ["python", "java", "cpp", "csharp"],
  other: ["mysql","mongo","postgresql", "aws","machineLearning","computerVision","Streamlit" ,"git", "unity", "figma","lightroom"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "MAESTRO'24 MIT Academy of Engineering",
    size: ItemSize.SMALL,
    subtitle:
      "MAEstro Best Outgoing Student of the Academic year 2020-2024 at MIT Academy of Engineering",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/maes1.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Developer Intern @BMC Software",
    size: ItemSize.SMALL,
    subtitle:
      "Final Year SDE Intern at BMC Software worked on Windows patching utility and Working on BMC Helix Dashbboards",
    image: "/timeline/bmc.png",
    slideImage: "/timeline/bmcphoto.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SIH'23 Finalist at VVCE Mysore",
    size: ItemSize.SMALL,
    subtitle:
      "SIH'23 Finalist by standing amongst top 5 team across India for the problem statement SIH1413 - Building an ecommerce platform to help small traders to provide international platform for trade using DNK Network.",
    image: "/timeline/sihl.jpeg",
    slideImage: "/timeline/sih.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Developer Intern @BMC Software",
    size: ItemSize.SMALL,
    subtitle:
      "Third Year Software Developer Intern at BMC Software worked on adding MSTeams as a channel for ANS Notification System and based on performance got the pre-placement offer for Associate Product Developer Role",
    image: "/timeline/bmc.png",
    slideImage: "/timeline/bmcphoto.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Summer Intern at Coventry University UK",
    size: ItemSize.SMALL,
    subtitle: " Student Internship Programme at Coventry University, UK, collaborated with MIT Academy of Engineering team to complete Game Development using Artificial Intelligence Workshop, showcasing proficiency in C#, Unity, and AI-driven NPC development.",
    image: "/timeline/cvu.png",
    slideImage: "/timeline/coventry.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Speaker at SMELT 4.0 IEEE, Alandi",
    size: ItemSize.SMALL,
    subtitle: "Speaker for SMELT 4.0 IEEE Bombay Section in collaboration with IEEE MITAOE. Represented IEEE MITAOE Chapter as Vice President",
    image: "/timeline/ieee.png",
    slideImage: "/timeline/speaker1.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Organizer for Coding Competition and Hackathons",
    size: ItemSize.SMALL,
    subtitle: "Organized Coding Competition - CodeScript, CodeVelocity and Pair Programming events along with Hackkathons- Datathon'22 and Datathon'23 as a Girlscript and CodeChef Coordinator.",
    image: "/timeline/gs.png",
    slideImage: "/timeline/organ.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Third Year Topper for the AY 2023-2024",
    size: ItemSize.SMALL,
    subtitle: "Stood First position in Junior year across School of Computer Engineering Department",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/tytop.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Developer Intern @ESamyak Software",
    size: ItemSize.SMALL,
    subtitle:
      "Software Developer Intern at ESamyak Software workde on PowerBI and MS SQL Server",
    image: "/timeline/samyaklogo.jpeg",
    slideImage: "/timeline/samyak.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Prize Winner at Project Expo'22",
    size: ItemSize.SMALL,
    subtitle:
      "Prize Winner for project AIHU Self Driving Car Assistance at Project Expo'22 organized by Computer Society of India",
    image: "/timeline/csit.png",
    slideImage: "/timeline/Consulated.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Second Year Topper for the AY 2022-2023",
    size: ItemSize.SMALL,
    subtitle: "Stood First position in Sophomore year across School of Computer Engineering Department",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/sytop.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "First Year Topper for the AY 2021-2022",
    size: ItemSize.SMALL,
    subtitle:
      "Stood First position in Freshman year across all branches by attaining 10 CGPA ",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/fytop.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2021",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
  //   image: "/timeline/dltlabs.svg",
  //   slideImage: "/timeline/dlt-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UX Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Graduated from College 🎓",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
  //   image: "/timeline/akgec.svg",
  //   slideImage: "/timeline/farewell.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2018",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Student lead at SDC-SI",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-head.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on SVG animations",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

  //   slideImage: "/timeline/svg-lecture.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed against 20+ teams for design and development of web project from scratch",
  //   slideImage: "/timeline/ims-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Javascript",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
  //   slideImage: "/timeline/js-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Design, ABES ACM",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed in web and graphic design challenge with 100+ participants.",
  //   slideImage: "/timeline/abes-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Web Technologies",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
  //   slideImage: "/timeline/web-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2016",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
  //   slideImage: "/timeline/ims-16.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI/UX, Frontend Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2014",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Journey begins at MITAOE",
    size: ItemSize.SMALL,
    subtitle:
      "Joined MIT Academy of Engineering Alandi Pune as a freshman in December 2020",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/admission1.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
