import burger from "../assets/burger.jpg";
import games from "../assets/games.jpg";
import one from "../assets/image/1 (1).jpg";
import two from "../assets/image/1 (2).jpg";
import three from "../assets/image/1 (3).jpg";
import four from "../assets/image/1 (4).jpg";
import five from "../assets/image/1 (5).jpg";
import nav_logo from "../assets/image/band-logos.png";
import six from "../assets/image/joe lerry.jpg";
import black_image from "../assets/image/latest-bw.jpeg";
import color_image from "../assets/image/latest-color.jpg";
import personal from "../assets/potfolio.jpg";
import sellbd from "../assets/sellbd.jpg";

import { emptyStar, fullStar, hulfStar } from "./Icon";

//hearder

export const navbar = {
  nav_logo: nav_logo,
  links: [
    {
      id: 1,
      name: "home",
      path: "/",
      my: 0,
    },
    {
      id: 2,
      name: "about",
      path: "/about",
      my: 3,
    },
    {
      id: 3,
      name: "services",
      path: "/services",
      my: 0,
    },
    {
      id: 4,
      name: "potfolio",
      path: "/potfolio",
      my: 3,
    },
    {
      id: 5,
      name: "client reviews",
      path: "/reviews",
      my: 0,
    },

    {
      id: 6,
      name: "contact me",
      path: "/contact",
      my: 3,
    },
  ],
};

//hero section
export const hero = {
  first: "Hi, My Name is",
  second: "shipon islam",
  third: "I build website for client.",
  fouth:
    "I'm a fullstack web developer who specializing in building web things.I'm focused on building UI design and development together.I make 100% error free website for client satisfaction that make me awesome.",
  color_image,
};

//about section
export const about = {
  color_image,
  black_image,
  first_paragraph: `Hello! My name is Shipon islam and I enjoy creating things that live
    on the internet. My interest in web development started back in
    2012 when I decided to try editing custom Tumblr themes — turns
    out hacking together a custom reblog button taught me a lot about
    HTML & CSS!`,
  second_paragraph: `Fast-forward to today, and I’ve had the privilege of working at an
    advertising agency, a start-up, a huge corporation, and a
    student-led design studio. My main focus these days is building
    accessible, inclusive products and digital experiences at
    Upstatement for a variety of clients.`,
  third_paragraph: `Here are a few technologies I’ve been working with recently`,
  technologies1: ["JavaScript (ES6+)", "node js", "mongo db", "tailwind css"],
  technologies2: ["React js", "express js", "firebase", "bootstrap 5"],
};

// services section card list
export const services = [
  {
    id: 1,
    cardHead: "UI Design for web",
    desc: "To create the wave layout,You need to create a visual ui first.there are many tools for creating ui.Figma is best among them.",
    tools: ["Figma", "Adobi XD", "Sketch"],
  },
  {
    id: 2,
    cardHead: "Design with bootstrap",
    desc: "Bootstrap,the world’s most popular framework for building responsive, mobile-first sites, with js.it's easy and customizable framework",
    tools: ["JavaScript", "CSS-3", "Bootstrap-5"],
  },
  {
    id: 3,
    cardHead: "Design with tailwind",
    desc: "the most populer and mordern css framework is tailwind css.it's utility first framework.it build website without ever leaving HTML",
    tools: ["HTML-5", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 4,
    cardHead: "fontend with react.js",
    desc: "Building a single page web application you need world's most popular React js.it's super awesome and optimizing and web page not reload.",
    tools: ["React.Js", "Tailwind CSS", "Vite.Js"],
  },

  {
    id: 5,
    cardHead: "build with next.js",
    desc: "Building a single page website but behave like multi-page you need next js.it's also can server site rendering that's cool and awesome.it's a react js framework",
    tools: ["Next.Js", "Tailwind CSS", "Firebase"],
  },
  {
    id: 6,
    cardHead: "web dev with firebase",
    desc: "firebase is a backend service which developed by google.without backend knowledge you will make fullstack website from fontend.",
    tools: ["React.Js", "Tailwind CSS", "Firebase"],
  },
  {
    id: 7,
    cardHead: "Web dev with express",
    desc: "Building a single page web application you need world's most popular React js.it's super awesome and optimizing and web page not reload",
    tools: ["HTML-5", "Express.Js", "MongoDB"],
  },
  {
    id: 8,
    cardHead: "web dev with mongo db",
    desc: "Building a single page web application you need world's most popular React js.it's super awesome and optimizing and web page not reload",
    tools: ["React.js", "Express.JS", "MongoDB"],
  },
];

//potfolio section
export const potfolio = [
  {
    id: 1,
    name: "fullstack ecomarce",
    image: sellbd,
    technology: [
      "javascript (ES6+)",
      "react js",
      "node js",
      "mongo Db",
      "tailwind css",
    ],
    github: "#",
    deploy_url: "http://sellbd.onrender.com/",
  },
  {
    id: 2,
    name: "potfolio",
    image: personal,
    technology: ["javascript (ES6+)", "react js", "tailwind css", "type js"],
    github: "#",
    deploy_url: "https://shipons.netlify.app/",
  },
  {
    id: 3,
    name: "burger lover",
    image: burger,
    technology: ["javascript (ES6+)", "react js", "tailwind css", "figma"],
    github: "#",
    deploy_url: "#",
  },
  {
    id: 4,
    name: "jumping game",
    image: games,
    technology: ["html 5", "css 3", "javascript (ES6+)"],
    github: "#",
    deploy_url: "https://shipon-islam.github.io/jgames/",
  },
];

//client reviews section
export const client_reviews = [
  {
    id: 1,
    name: "john doe",
    avatar: four,
    desc: "It has been a pleasure working with shipon islam. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you. You did a great.",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, fullStar],
  },

  {
    id: 2,
    name: "ben don",
    avatar: one,
    desc: "Thank you so much for the work!I think our website is performing extremely well and our calls and emails are flooding in.I i have referred a few others to you guys that have needed ui design.Keep up the good work!",
    starIconPath: [fullStar, fullStar, fullStar, hulfStar, emptyStar],
  },
  {
    id: 3,
    name: "john head",
    avatar: two,
    desc: "shipon has done a great job designing our new site here at Aeon Systems Inc. and we are impressed overall with the fontend services. After approximately 6 months we are really starting to see some results on google.thanks shipon!",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, hulfStar],
  },
  {
    id: 4,
    name: "dr david ",
    avatar: three,
    desc: "shipon has done a great job designing our new site here at Aeon Systems Inc. and we are impressed overall with the fontend services. After approximately 6 months we are really starting to see some results on google.thanks shipon!",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, emptyStar],
  },
  {
    id: 5,
    name: "joe lerry",
    avatar: six,
    desc: "Thank you so much for the work!I think our website is performing extremely well and our calls and emails are flooding in.I i have referred a few others to you guys that have needed ui design.Keep up the good work!",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, hulfStar],
  },
  {
    id: 6,
    name: "osman sheikh",
    avatar: five,
    desc: "It has been a pleasure working with shipon islam. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you. You did a great.",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, fullStar],
  },
];
