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
  img: 'image.jpg',
  paragraphOne:
    "My name is Abdulhamid Usman, and I'm a Frontend Engineer with 4+ years of experience in software development working on websites and web applications with React.js , although I'm not biased to using andor learning to use other frameworks and libraries. I am very passionate about aesthetics and design.",
  paragraphTwo:
    "My tech stack (for now): JavaScript, React.js, TypeScript, Next.js, Marketing cloud personalization (Salesforce), Gatsby.js, Redux, Tailwind CSS, Bootstrap, Material UI, Sass, GIT, Github, GSAP, Python, Django, GraphQL, Node, Figma, Adobe XD, E-commerce, Cross-browser compatibility and Accessibility.",
  paragraphThree:
    "My interest and hobbies (in no paticular order): Basketball, Gardening, Hiking, Philosophy, Psychology (web & personality), History, Art.",
  resume: '', // if non resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'Orthoinfo.jpg',
    title: 'ORTHOINFO',
    info: 'A  centralized source of information for the Orthopedic and Therapy industry.',
    info2: 'React.js + Sass + Django',
    url: 'https://orthoinfo.ca/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'Here for change - Ward.png',
    title: 'HERE FOR CHANGE',
    info: 'A platform for public engagement to assist in locating government information at the local level in South Africa',
    info2: ' Tailwind CSS + Django + Leaflet.js',
    url: 'https://hereforchange.org.za/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'Home-you Products.png',
    title: 'OHANA CLOUD',
    info: 'Developing Salesforce Marketing Cloud personalization solutions for web analytics on E-Commerce.',
    info2: 'Salesforce Marketing Cloud + Ecommerce Website Development',
    url: 'https://home-you.com/pl/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'Case-management.png',
    title: 'CASEFILE',
    info: 'Collaborated in the development of CASEFILE, for OpenUP SA.',
    info2: 'React + TypeScript + Material UI',
    url: 'https://app.casefile.org.za/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'Boost.png',
    title: 'BOOST',
    info: 'Website design and development for Boost technology company.',
    info2: 'Tailwind CSS + Perch CMS',
    url: 'https://www.withboost.co',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'kaku.png',
    title: 'KAKU',
    info: 'Website design and development for Kaku.ng a Copy-writing agency.',
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
