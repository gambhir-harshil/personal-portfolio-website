import {
  html,
  javascript,
  mongodb,
  nodejs,
  react,
  tailwind,
  typescript,
  nextjs,
} from "../assets";

export const navLinks = [
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

export const skillImg = [
  {
    id: 1,
    img: html,
  },
  {
    id: 2,
    img: javascript,
  },
  {
    id: 3,
    img: mongodb,
  },
  {
    id: 4,
    img: nodejs,
  },
  {
    id: 5,
    img: react,
  },
  {
    id: 6,
    img: tailwind,
  },
  {
    id: 7,
    img: typescript,
  },
  {
    id: 8,
    img: nextjs,
  },
];

export const socials = [
  "https://github.com/gambhir-harshil",
  "https://www.linkedin.com/in/gambhir-harshil/",
  "https://www.instagram.com/gambhir_harshil/",
  "https://www.spotify.link/Z7tpdNU9pyb",
];

export const projects = [
  {
    name: "MovieDB",
    description:
      "A web app for viewing the trending and latest movies by genre. Watch the trailer of the movies and make your own watch list.",
    stack: ["React", "Tailwind", "TMDB API"],
    image: "./projects/MovieDB.png",
    link: "https://moviedb-harshil.netlify.app/",
    repo: "https://github.com/gambhir-harshil/MovieDb",
  },
  {
    name: "The Pizza Co.",
    description:
      "A simple pizza ordering app made using redux toolkit and fetched data using react router's latest features. PIZZA?",
    stack: ["React", "Tailwind", "Redux toolkit", "React router"],
    image: "./projects/ThePizzaCo.png",
    link: "https://moviedb-harshil.netlify.app/",
    repo: "https://github.com/gambhir-harshil/MovieDb",
  },
  {
    name: "Personal portfolio website",
    description:
      "A personal portfolio webapp to showcase my skills and projects made using react, framer motion and tailwind.",
    stack: ["React", "Framer motion", "Tailwind"],
    image: "./projects/portfolio.png",
    link: "",
    repo: "https://github.com/gambhir-harshil/MovieDb",
  },
  {
    name: "Qkart",
    description:
      "A responsive E-commerce store made using React and fetched the data using axios. Also added authentication, shopping cart and checkout.",
    stack: ["React", "Bootstrap", "Material UI"],
    image: "./projects/qkart.png",
    link: "https://6525b415c0461f32fc2d0ae3--harshil-gambhir-qkart.netlify.app/",
    repo: "https://github.com/gambhir-harshil/qkart",
  },

  {
    name: "Qtrip",
    description:
      "An adventure booking web app looking through for a multitude of adventures in different cities. Made using vanilla CSS.",
    stack: ["Javascript", "Bootstrap"],
    image: "./projects/qtrip.png",
    link: "https://harshil-qtripdynamic.netlify.app/",
    repo: "https://github.com/gambhir-harshil/gambhirsahab3-ME_QTRIPDYNAMIC",
  },
];
