import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Patricia Costalonga',
  subtitle: 'I\'m a Front-end Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I\'m a creative Front-end Developer with a diverse Design background. I have the ability to take up new technical concepts quickly and upskill in different coding practices. I have extensive experience in developing and refining products translating company brand values.',
  // paragraphTwo: '',
  // paragraphThree: '',
  resume: 'https://patriciacostalonga.github.io/CV/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CS_reg_light_mode_01.jpg',
    title: 'Casimba register Page',
    info: 'HMW: improve trust signals on Casimba\'s website and increasing conversion',
    info2: 'I was responsible for translating the new style on the Registration Page. It was the first time I worked with animation on Angular and I set up a dark/light mode switch that worked through stored cookies and also when the switch button was clicked. During the process I made sure to follow the same dimensions, font-sizes, colours and animation style from the main website to keep the concept across all pages. Recently I added an easier step for filling out the form through the Trustly button that doesn\'t required so many details from the user. This  shorter option is only available for some players from specific jurisdictions.',
    url: 'https://www.casimba.com/create-account/personal-details',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Templenile_desktop.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://www.templenile.com/create-account/personal-details', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Jackpotvillage_desktop.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://www.jackpotvillage.com/create-account/personal-details', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'patcostalonga@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/patricia-costalonga/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/PatriciaCostalonga',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
