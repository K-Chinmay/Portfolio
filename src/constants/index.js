import { designer, developer, mentor } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    id: "skill-1",
    role: "designer",
    desc: "I value simple content structure, clean design patterns, and thoughtful interactions.",
    tech: "UX, UI, Web, Apps, Logos",
    image: designer,
  },
  {
    id: "skill-2",
    role: "frontend developement",
    desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser and website.",
    tech: "HTML, Pug, Slim, CSS, Sass, Git",
    image: developer,
  },
  {
    id: "skill-3",
    role: "mentor",
    desc: "I genuinely care about people, and love helping fellow designers work on their craft.",
    tech: "UX/UI, Product design, Freelancing",
    image: mentor,
  },
];
