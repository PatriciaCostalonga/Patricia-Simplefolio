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
  paragraphOne: 'I\'m a creative Front-end Developer with a diverse Design background. I have the ability to take up new technical concepts quickly and upskill in different coding practices. I have extensive experience in developing and refining products translating company brand values. I have a valid visa to work in the UK.',
  // paragraphTwo: '',
  // paragraphThree: '',
  resume: 'https://patriciacostalonga.github.io/CV/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Huikee_desktop.jpg',
    title: 'Huikee\'s Website',
    info: 'HMW: build a pay-n-play Finnish online casino in three months',
    info2: 'I was in a group of four people, including a team leader, and our challenge was to build a pay-n-play Finnish online casino in three months. We worked in developing the logo, style guide, meetings with stakeholders till the coding of the pages. It was an incredible project because I could rely a lot on teamwork, creativity and explore new directions in coding, especially with animation. In this project, I used Figma, Photoshop, HTML, PHP, CSS/SASS, Javascript and JQuery. To access the link, you\'ll need to be in Finland or use a VPN.',
    url: 'https://www.huikee.com/en-fi/vip/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CS_reg_light_mode_01.jpg',
    title: 'Casimba Registration Page',
    info: 'HMW: improve trust signals on Casimba\'s website and increasing conversion',
    info2: 'I was responsible for translating the new style on the Registration Page. It was the first time I worked with animation on Angular and I set up a dark/light mode switch that worked through stored cookies and also when the switch button was clicked. During the process, I made sure to follow the same dimensions, font sizes, colours and animation style from the main website to keep the concept across all pages. Recently I added an easier step for filling out the form through the Trustly button that doesn\'t require so many details from the user. This shorter option is only available for some players from specific jurisdictions. In this project, I used Figma, Photoshop and Angular.',
    url: 'https://www.casimba.com/create-account/personal-details',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Jackpotvillage_desktop.jpg',
    title: 'Jackpot Village Registration Page',
    info: 'HMW: improve trust signals on Jackpot Village\'s website and increasing conversion',
    info2: 'I was responsible for updating the Registration page on Jackpot Village to attract more users and to translate the style of the website to it. It was the first time I changed a bit more the structure of the registration page. In this project, I used Figma, Photoshop and Angular.',
    url: 'https://www.jackpotvillage.com/create-account/personal-details',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Templenile_desktop.jpg',
    title: 'Temple Nile Registration Page',
    info: 'HMW: improve trust signals on Jackpot Village\'s website and increasing conversion',
    info2: 'I was responsible for updating the Registration page on Temple Nile to increase user conversion and translate the style of the main website on it. In this project, I used Figma, Photoshop and Angular.',
    url: 'https://www.templenile.com/create-account/personal-details',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Dreamvegas_desktop.jpg',
    title: 'Dream Vegas Registration Page',
    info: 'HMW: improve trust signals on Dream Vegas\'s website and increasing conversion',
    info2: 'I was responsible for updating the Registration page on Dream Vegas to increase user conversion and translate the style of the main website on it. This was my first project working with Angular. In this project, I used Figma, Photoshop and Angular.',
    url: 'https://www.dreamvegas.com/create-account/personal-details',
    repo: '', // if no repo, the button will not show up
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
