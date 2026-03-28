import type { Project } from "./type";
import type { Image } from "./type";
import TestImage1 from "./assets/TestImage1.png";
import TestImage2 from "./assets/TestImage2.png";
import TestImage3 from "./assets/TestImage3.png";

export const images: Image[] = [
  { src: TestImage1, alt: "first image of me" },
  { src: TestImage2, alt: "Hack AI" },
  { src: TestImage3, alt: "Hack Canada" },
];

export const projects: Project[] = [
  {
    title: "Reduce",
    category: "project",
    image: "/project.png",
    description:
      'A moblie app that tracks the meetings and events you will attend.',
  },
  {
    title: "Laser Engraver",
    category: "hardware",
    image: "/laserengraver.png",
    description:
      "A laser engraver for creating custom designs on various materials.",
  },
  {
    title: "Screwceus",
    category: "project",
    image: "/screwceus.png",
    tag: { label: "WIP", color: "bg-orange-400" },
    description:
      '',
    link: {
      text: "trended on twitter for two days.",
      href: "https://twitter.com",
    },
  },
  {
    title: "5DOF Robotic Arm",
    category: "hardware",
    image: "/roboticarm.png",
    description:
      "A 5DOF robotic arm for precise manipulation and automation tasks.",  
    tag: { label: "MVP", color: "bg-orange-400" },
  },
  {
    title: "Motorized Camera",
    category: "hardware",
    image: "/motorizedcamera.png",
    description:
      "A motorized camera system for capturing smooth and dynamic shots.",
    tag: { label: "MVP", color: "bg-orange-400" },
  },
  {
    title: "Hack AI",
    category: "community",
    image: "/hackai.png",
    tag: { label: "EPIC", color: "bg-purple-500" },
    description:
      "Worked with Stan to host Hack AI to find the best Talent. The coolest people I have ever met and the most fun I have ever had. We had 70+ hackers, some from spaceX, Apple, creibous and founders, and some of the best food I have ever eaten at a hackathon.",
  },
  {
    title: "Hack Canada",
    category: "community",
    image: "/hackcanada.png",
    tag: { label: "700+ Hackers", color: "bg-green-500" },
    description:
      "Lead a team of 30 to host the most epic Hackathon in Canada. 30K+ Raised. 700+ Hackers. 200+ Projects. 2.2k Applicaions.",
  },
  {
    title: "Hackathosn Canada",
    category: "community",
    image: "/hackathonscanada.png",
    description:
      "Loved hackathons, found this community and loved teh team. Joined as a memenber. Worked with Marketing and Operations teams to help grow the community and partner with other orgs.",
  },
];