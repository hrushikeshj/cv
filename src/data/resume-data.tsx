import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";

import HrushiProfilePic from "@/images/hrushi_profile.jpg";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hrushikesh J",
  initials: "HJ",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Fresh graduate skilled in web development with a keen interest in exploring the depths of the Linux kernel and other emerging technologies.",
  summary: "",
  avatarUrl: HrushiProfilePic.src,
  personalWebsiteUrl: "https://hrushi.dev",
  contact: {
    email: "hrushi2002j@gmail.com",
    tel: "+916363337912",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hrushikeshj",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hrushikeshj/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/hush1kesh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Institute of Technology Karnataka",
      degree: "Bachelor of Technology in Computer Science and Engineering, Minor in ECE",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "IRIS, NITK",
      link: "https://iris.nitk.ac.in/about_us",
      badges: [],
      title: "Web Developer → Head of Maintenance",
      start: "2021",
      end: "2024",
      description:
        "Implemented new features for Admissions, Branch Change, and No-Dues modules, which over 7,000 students use. Guided a team of 5 developers. Implemented API endpoints for the TimeTable module and wrote API documentation for the App Team. Technologies: Ruby on Rails, MySQL.",
    },
    {
      company: "Centre for Innovation, IPR and Industrial Consultancy(CIC), NITK",
      link: "",
      badges: [],
      title: "Web Developer",
      start: "Jan 2023",
      end: "June 2023",
      description:
        "Designed and Developed a portal to track consultancy and testing work at NITK and digitized the approval process.",
    },
  ],
  skills: [
    "Golang",
    "Python",
    "django",
    "Flask",
    "RoR",
    "Ruby",
    "MySQL",
    "C/C++",
    "JavaScript",
    "React",
    "Node.js",
  ],
  projects: [
    {
      title: "Club recruitment",
      techStack: [
        "Ruby On Rails",
        "HTML",
        "Bootstrap",
        "MySQL",
      ],
      description: "An application to simplify club recruitment process.",
      link: {
        label: "github.com/hrushikeshj/club_recruitment",
        href: "https://github.com/hrushikeshj/club_recruitment",
      },
    },
    {
      title: "MySQL ORM",
      techStack: [
        "Python",
        "MySQL",
      ],
      description: "Developed a simple Object Relational Mapper(ORM) for MySql.",
      link: {
        label: "github.com/hrushikeshj/mysql-orm",
        href: "https://github.com/hrushikeshj/mysql-orm",
      },
    },
    {
      title: "Blog Aggregator",
      techStack: [
        "Python",
        "Flask",
        "beautifulsoup4",
      ],
      description: "A web application to aggregate and view the latest blog posts from various technical and non-technical clubs at NITK.",
      link: {
        label: "github.com/hrushikeshj/Silicon-Maze-Blog",
        href: "https://github.com/hrushikeshj/Silicon-Maze-Blog",
      },
    },
    {
      title: "SSH CV",
      techStack: [
        "Side Project",
        "Golang",
        "SSH",
      ],
      description: "An SSH app to view resume, right in the terminal.",
      link: {
        label: "github.com/hrushikeshj/ssh-cv",
        href: "https://github.com/hrushikeshj/ssh-cv",
      },
    },
    {
      title: "Minesweeper",
      techStack: [
        "Side Project",
        "React",
      ],
      description: "Minesweeper game built using React",
      link: {
        label: "hrushikeshj.github.io/minesweeper",
        href: "https://hrushikeshj.github.io/minesweeper/",
      },
    },
    {
      title: "lkm-reducer ",
      techStack: [
        "Learn",
        "Linux",
        "LKM",
      ],
      description: "A simple char device which sums up the numbers written to it.",
      link: {
        label: "github.com/hrushikeshj/lkm-reducer",
        href: "https://github.com/hrushikeshj/lkm-reducer",
      },
    },
  ],
} as const;
