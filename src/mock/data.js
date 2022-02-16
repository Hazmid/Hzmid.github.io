/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Hazmid', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hazmid: Front-end Engineer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Abdulhamid ⚡',
  subtitle: "and I'm a Front-end Engineer with an eye for outstanding design.",
  cta: 'See More',
};

// ABOUT DATA
export const aboutData = {
  img: 'portrait.jpg',
  paragraphOne:
    "My name is Abdulhamid Usman, and I'm a Frontend Engineer with proficiency in the javaScript MERN stack. I have 2+ years of experience in software development working on websites and web applications with React.js , although i'm not biased to using andor learning to use other frameworks and libraries. I am very passionate about aesthetics and design.",
  paragraphTwo:
    "My tech stack (for now): JavaScript, React.js, TypeScript, Gatsby.js, Next.js, Redux, Node, Tailwind CSS, Bootstrap, Material UI, Sass, HTML, CSS, GIT, Github, GSAP, Figma, Adobe XD, Invision, Adobe Illustrator, E-commerce, mySQL, MongoDB, SEO, Cross-browser compatibility and Accessibility.",
  paragraphThree:
    "My interest and hobbies (in no paticular order): Basketball, Gardening, Hiking, Philosophy, Psychology (web & personality), History, Art.",
  resume: '', // if non resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
    {
        id: uuidv4(),
        img: 'Case-management.png',
        title: 'CASEFILE',
        info: 'Collaborated in the development of CASEFILE, for OpenUP SA',
        info2: 'React + TypeScript + Material UI',
        url: 'https://app.casefile.org.za/',
        repo: '', // if no repo, the button will not show up
      },
      {
        id: uuidv4(),
        img: 'Boost.png',
        title: 'BOOST',
        info: 'Website design and development for Boost technology company ',
        info2: 'Tailwind CSS + Perch CMS',
        url: 'https://www.withboost.co',
        repo: '', // if no repo, the button will not show up
      },
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
    info: 'React Web app for searching details of robots in the database, Redux was used to manage the state.',
    info2: 'React.js + Redux + Tachyons',
    url: 'https://p-robo.netlify.app/',
    repo: 'https://github.com/Hzmid/Robo', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'weatherapp.png',
    title: 'CL WEATHER',
    info: 'A Weather App built with vanilla JavaScript and data from openweatherapi',
    info2: 'HTML + CSS + JavaScript + APIs ',
    url: 'https://clweather.netlify.app/',
    repo: 'https://github.com/Hzmid/Current-Location-Weather-App', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'tetris.png',
    title: 'TETRIS',
    info: 'A Tetris game built with just vanilla JavaScript, no frameworks or libraries',
    info2: 'JavaScript',
    url: 'https://tetriswithjs.netlify.app/',
    repo: 'https://github.com/Hzmid/Tetris-with-javaScript', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's build something amazing together.",
  btn: 'Say hello!',
  email: 'hazemidoo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'twitter',
      url: 'https://twitter.com/hazemid_o',
    },
    {
      id: uuidv4(),
      name: 'instagram',
      url: 'https://www.instagram.com/hazemid_o/',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abdulhamid-usman-517b80144/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/hazmid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
