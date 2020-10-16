import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ken Joo Yeap| Fullstack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This site gives you a flavor of how we could work together.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, this is',
  name: 'Ken.',
  subtitle: 'The developer you are about to know.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'Self taught fullstack developer that is passionate.',
  paragraphTwo: 'Stack: HTML,CSS,JS,PHP,Python, React, React Native, Laravel',
  paragraphThree: 'Human languages: English, German, Mandarin, Malay',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: ['Ilios.png', 'twine.jpg'],
    title: 'Ilios App',
    info:
      'Backend developer for an ecommerce App for individual buyers, retailers and resellers using laravel.',
    point: {
      one: 'Maintained and develop features needed for the CMS',
    },
    url: 'https://apps.apple.com/gb/app/ilios-id/id1533510860',
    tag: ['HTML', 'JavaSript', 'PHP', 'LARAVEL'],
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twine.jpg',
    title: 'Twine App',
    info:
      'Fullstack React Native developer for an app that allows volunteers, volunteers admin and organisation owners of Charitable organisation to better keep track of their projects and activities ',
    point: {
      one: 'Developed mobile app with a team of designer and react-native developers',
      two: 'Built reusable react native components such as helpSlide and award badges templates',
      three: 'Developed API endpoints in controller to get data from postgresql using Knex',
      d: 'Developed postgresql database structure for push notification and award badges',
      e: 'Deployment in Heroku (Server) and Expo (App)',
    },
    url: 'https://www.twine-together.com/',
    tag: ['react native', 'nodeJs', 'TypeScript', 'iOS', 'Android', 'postgresql'],
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bemyownboss.png',
    title: 'Bemyownboss',
    info:
      'Fullstack developer for marketing one page website that uses the sales funnel strategy to collect contact and generate leads.',
    point: {
      one:
        'Developed the frontend and backend for the various customer using CSS, HTML, JavaScript and PHP',
      two: 'Intergrated auto emailing system with mailchimp API using PHP',
      three: 'Payment with stripe using PHP',
      d: 'Help customer digitalize and systemize their business with sales funnel strategy',
    },
    url: 'https://bemyownboss.biz/',
    tag: ['HTML', 'CSS', 'JS', 'PHP'],
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sooann-solutions.png',
    title: 'sooann-solution',
    info:
      'Build a custome content management system for a insurance agent to manage customer data, insurance policy and renewal.',
    point: {
      one: 'Developed the frontend using CSS, HTML',
      two: 'Developed content management system with PHP and MySQL',
    },
    url: 'https://sooann-solutions.com/',
    tag: ['HTML', 'CSS', 'JS', 'PHP', 'mysql'],
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mywedding.png',
    title: 'Wedding Site',
    info:
      'Fullstack developer for a wedding website to manage RSVP, registration check list and information.',
    point: {
      one: 'Developed the frontend and backend using CSS, HTML, JavaScript and PHP',
      two: 'Intergrated login to check list of registered participants',
    },
    url: 'https://cindy.lau.im/mywedding/',
    tag: ['HTML', 'CSS', 'JS', 'PHP'],
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weco.png',
    title: 'WeCo',
    info: 'Frontend angular developer.',
    point: {
      one: 'Created pages where needed and implementing designs',
    },
    url: 'https://www.weco.io/',
    tag: ['HTML', 'CSS', 'JS', 'Angular'],
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kenjoo.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kenjoo-yeap/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kyeap',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
