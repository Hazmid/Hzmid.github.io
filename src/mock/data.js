import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Hzmid', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'The Portfolio of Hamid the developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Hamid ⚡',
  subtitle: 'and Im a Front-end / Web Developer from Abuja NG.',
  cta: 'See More',
};

// ABOUT DATA
export const aboutData = {
  img: 'prfl.jpg',
  paragraphOne:
    'Hello there! Im Abdul Hamid Usman, Im a Front-end Developer and Web Developer from Abuja, learning the MERN stack and currently working as a Freelancer. Ive always had a knack for learning how things work. My career over the years has transitioned between Health, Art, Psychology, Fashion-Design etc. And then i found Technology and Product development.',
  paragraphTwo:
    'Now with 2 years working on the web, i connect business requirements and Individual preferences with modern technology. Building and maintaining interactive, user-friendly and functional websites and apps. Blending the art of design with skill of programming for outstanding Front-end experience and web solutions. Building websites from start to finish with proactive feature optimization and utilizing modern frameworks and libraries. Im a firm believer in the mobile-first approach and im very passionate about aesthetics and UX/UI design.',
  paragraphThree:
    'My tech stack (for now) includes JavaScript, TypeScript, ReactJS, React Native, Redux, GatsbyJS, TailwindCSS, Bootstrap, Material UI, Sass, HTML, CSS, graphQL, jQuery, GIT, Github, Gsap, Animations, Vectors, wordPress, NPM, Webpack, Netlify, E-commerce, SEO, Cross-browser compatibility, UX/UI design, Mobile-layout, Microsoft office suite.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'kaku.png',
    title: 'KAKU',
    info: 'Website design and development for Kaku.ng a Copy-writing agency. The design was minimal and built with modern utilities for lighting speed performance.',
    info2: 'GatsbyJS + ReactJS + TailwindCSS',
    url: 'https://buildingkaku.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'everythingquiz.png',
    title: 'THE EVERYTHING QUIZ',
    info: 'A Web application where users can take random quizzes on a range of topics',
    info2: 'ReactJS + TypeScript + Styled-Components',
    url: 'https://everythingquiz.netlify.app',
    repo: 'https://github.com/Hzmid/The-everything-quiz', // if no repo, the button will not show up
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
  cta: 'I would love to hear from you!',
  btn: 'Holla',
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
