/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Hzmid', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hamid: Front-end Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Hamid ⚡',
  subtitle: "and I'm a Front-end Developer with an eye for outstanding UI Design.",
  cta: 'See More',
};

// ABOUT DATA
export const aboutData = {
  img: 'prfl.jpg',
  paragraphOne:
    "My name is Abdulhamid Usman I'm a Front-end Developer from Abuja, ( Web - React.js )( Mobile - React-Native ). I have two years of experience as a Frontend Developer, I currently work as a Freelancer and I'm continously learning to become Pro. A firm believer in the mobile-first approach and passionate about aesthetics and UX/UI design.",
  paragraphTwo:
    "My interest and hobbies in no paticular order: Basketball, Gardening, Hiking, Philosophy, Web psychology, Personality psychology, History, Art.",
  paragraphThree:
    "My tech stack (for now): JavaScript, React.js, React-Native, Redux, TypeScript, Gatsby.js, Tailwind CSS, Bootstrap, Material UI, Sass, UX/UI design, HTML, CSS, graphQL, MongoDB, Node, jQuery, GIT, Github, Gsap, Animations, Vectors, WordPress, NPM, Webpack, Netlify, E-commerce, SEO, Cross-browser compatibility and accessibility.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'kaku.png',
    title: 'KAKU',
    info: 'Website design and development for Kaku.ng a Copy-writing agency. The design was minimal and built with modern utilities for lightning speed performance.',
    info2: 'Gatsby.js + Tailwind CSS',
    url: 'https://kaku2.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'everythingquiz.png',
    title: 'THE EVERYTHING QUIZ',
    info: 'A Web application where users can take random quizzes on a range of topics',
    info2: 'React.js + TypeScript + Styled-Components',
    url: 'https://everythingquiz.netlify.app',
    repo: 'https://github.com/Hzmid/The-everything-quiz', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'robo.png',
    title: 'PERSONAL ROBOTS',
    info: 'React Web app for searching details of robots in the database, Redux is used to manage the state of the robots the user searched for.',
    info2: 'React.js + Redux + Tachyons',
    url: 'https://p-robo.netlify.app/',
    repo: 'https://github.com/Hzmid/Robo', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'weatherapp.png',
    title: 'WEATHER APP',
    info: 'A Weather App built with vanilla JavaScript and data from openweatherapi',
    info2: 'HTML + CSS + JavaScript + APIs ',
    url: 'https://clweather.netlify.app/',
    repo: 'https://github.com/Hzmid/Current-Location-Weather-App', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'tetris.png',
    title: 'TETRIS GAME',
    info: 'A Tetris game built with just vanilla JavaScript, no frameworks or libraries',
    info2: 'JavaScript',
    url: 'https://tetriswithjs.netlify.app/',
    repo: 'https://github.com/Hzmid/Tetris-with-javaScript', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to hear from you',
  btn: 'Holla!',
  email: 'hazemidoo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'twitter',
      url: 'https://twitter.com/hzmid_',
    },
    {
      id: uuidv4(),
      name: 'instagram',
      url: 'https://www.instagram.com/_hzmid/',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abdulhamid-usman-517b80144/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/Hzmid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
