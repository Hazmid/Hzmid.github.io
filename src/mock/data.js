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
  subtitle: 'and Im a Software Developer ⚡ from Abuja.',
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Hello there! The name is Abdul Hamid Usman, Im a Front-end Developer from Abuja, learning the MERN stack and currently working as a Freelancer.',
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
    title: 'THE HUMAN ELEMENTS EXP',
    info: 'Colors of Temperament',
    info2: '',
    url: 'https://theelementsarehuman.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'mole.png',
    title: 'WAKA WAKA MOLE GAME',
    info: 'Abeg help me catch am',
    info2: '',
    url: 'https://wakawakamole.netlify.app',
    repo: 'https://github.com/Hzmid/Whack-A-Mole-Game-with-Vanilla-JS-30-30', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'menu.png',
    title: 'RESTAURANTE MENU APP',
    info: 'To take your order',
    info2: '',
    url: 'https://restaurantemenu.netlify.app',
    repo: 'https://github.com/Hzmid/Local-Storage-and-Event-Delegation-15-30', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'roboto.png',
    title: 'ROBOTO VOICE APP',
    info: 'Text to Speech',
    info2: '',
    url: 'https://robotovoice.netlify.app',
    repo: 'https://github.com/Hzmid/JavaScript-Text-To-Speech-23-30', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'timer.png',
    title: 'TIME LEFT TIMER APP',
    info: 'Countdown Timer',
    info2: '',
    url: 'https://timelefttimer.netlify.app',
    repo: 'https://github.com/Hzmid/Vanilla-JS-Countdown-Timer-29-30', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to hear from you',
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
