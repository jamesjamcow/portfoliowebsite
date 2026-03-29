import type { Project } from "./type";
import type { NavItem } from "./type";
import type { Image } from "./type";
import TestImage1 from "./assets/TestImage1.png";
import TestImage2 from "./assets/TestImage2.png";
import TestImage3 from "./assets/TestImage3.png";
import cameraSlider from "./assets/cameraslider.png"
import hackAi from "./assets/hackai.jpg"
import hackCanada from "./assets/hackcanada.jpg"
import hackathonsCanada from "./assets/hackathonscanada.jpg"
import laserEngraver from "./assets/laserengraver.png"
import roboticArm from "./assets/roboticarm.jpg"
import screwceus from "./assets/screwceus.png"

export const images: Image[] = [
  { src: TestImage1, alt: "nice" },
  { src: TestImage2, alt: "Lets gooooo" },
  { src: TestImage3, alt: "Hehehehehe" },
];

export const navItems: NavItem[] = [
  {
      title: "Home",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ECEEDF" className="h-full w-full text-neutral-500 dark:text-neutral-300"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>),
        href: "#"
    },
    {
      title: "Github",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ECEEDF" className="h-full w-full text-neutral-500 dark:text-neutral-300"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>),
      href: "https://github.com/jamesjamcow",
    },
    {
      title: "LinkedIn",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ECEEDF" className="h-full w-full text-neutral-500 dark:text-neutral-300"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" /></svg>),
      href: "https://www.linkedin.com/in/james-cao-890702265/",
    },
    {
      title: "X",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ECEEDF" className="h-full w-full"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" /></svg>),
      href: "https://x.com/jamescowjam",
    
    }
  ];

export const projects: Project[] = [
  // {
  //   title: "Reduce",
  //   category: "project",
  //   image: "/project.png",
  //   tag: { label: "WIP", color: "bg-orange-400" },
  //   description:
  //     'A moblie app that tracks the meetings and events you will attend.',
  // },
  {
    title: "Laser Engraver",
    category: "hardware",
    image: laserEngraver,
    tag: { label: "MVP", color: "bg-orange-400" },
    description:
      "A laser engraver for creating custom designs on various materials.CoreXY laser engraver built on a 2020 aluminum extrusion frame with a 10W laser diode. Runs GRBL firmware on an Arduino Uno, using LaserGRBL for G-code generation and job control.",
  },
  {
    title: "Screwceus",
    category: "project",
    image: screwceus,
    tag: { label: "WIP", color: "bg-orange-400" },
    description:
      'Screw and parts inventory management platform for hardware hobbyists. Tracks fastener usage across build projects. Built with React on the frontend and FastAPI with SQLModel on the backend.',
  },
  {
    title: "5DOF Robotic Arm",
    category: "hardware",
    image: roboticArm,
    description:
      "A 5DOF robotic arm for precise manipulation and automation tasks.",  
    tag: { label: "MVP", color: "bg-orange-400" },
  },
  {
    title: "Motorized Camera",
    category: "hardware",
    image: cameraSlider,
    description:
      "A motorized camera system for capturing smooth and dynamic shots.",
    tag: { label: "MVP", color: "bg-orange-400" },
  },
  {
    title: "Hack AI",
    category: "community",
    image: hackAi,
    tag: { label: "70 builders", color: "bg-purple-500" },
    description:
      "Worked with Stan to host Hack AI to find the best talent. We had 70+ hackers — some from SpaceX, Apple, Cerebras, and founders. The coolest people I've ever met, the best food I've ever had at a hackathon, and the most fun I've ever had",
  },
  {
    title: "Hack Canada",
    category: "community",
    image: hackCanada,
    tag: { label: "700 Hackers", color: "bg-green-500" },
    description:
      "Led a team of 30 to host the most epic hackathon in Canada. 30K+ raised. 700+ hackers. 200+ projects. 2.2K applications.",
  },
  {
    title: "Hackathons Canada",
    category: "community",
    image: hackathonsCanada,
    tag: { label: "5k Members", color: "bg-green-500" },
    description:
      "Loved hackathons, found this community and loved the team. Joined as a member. Worked with Marketing and Operations teams to help grow the community and partner with other orgs.",
  },
];

