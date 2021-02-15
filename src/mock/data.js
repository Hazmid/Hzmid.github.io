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
  name: 'Hamid',
  subtitle: 'and Im a Front end Developer ⚡ Web designer from Abuja, Nigeria.',
  cta: 'See more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Hello there! Im Abdul Hamid Usman, Im a Front-end Developer from Abuja, learning the MERN stack and currently working as a Freelancer.',
  paragraphTwo:
    'Ive always had a knack for learning how things work. My career over the years has leaped between Health, Art, Psychology, Fashion-Design etc. And then i found Technology and product development, and i knew i found where i wanted to be. Now I use my experience to be more than just a coder, connecting business requirements and Individual preferences with modern technology. ',
  paragraphThree:
    'My tech stack (for now) includes React, javaScript, NPM, SASS, HTML, CSS, Bootstrap, jQuery, WordPress, Flexbox and Grid, Git.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'HumanElements.png',
    title: 'KAKU',
    info: 'Website design and development for kaku.ng a Copy-writing agency',
    info2: 'Design was minimal and built with modern utilities for lighting speed performance ',
    url: 'https://buildingkaku.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'mole.png',
    title: 'THE EVERYTHING QUIZ',
    info: 'A Web application where users can take random quizes on a range of topics',
    info2: '',
    url: 'https://everythingquiz.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'mole.png',
    title: 'GAME',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
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
