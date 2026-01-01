import {
  mobile,
  backend,
  creator,
  web,
  logo_serenas,
  logo_evital,
  logo_avax,
  logo_dva,
  logo_elmas,
  logo_iris,
  logo_xenon,
  logo_commencis,
  logo_sau,
  project_evital,
  project_cowmon,
  project_icon,
  project_kws,
} from '../assets';
import { faGithub, faInstagram, faFacebook, faStackOverflow, faStrava, faLinkedin, faYoutube,faGoodreads } from "@fortawesome/free-brands-svg-icons";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Web Developer',
    icon: web,
  },
  {
    title: 'React Native & Mobile Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Game Developer',
    icon: creator,
  },
];

const experiences = [
  {
    title: 'Senior Full Stack Engineer',
    company_name: 'Commencis',
    icon: logo_commencis,
    iconBg: '#fff',
    date: 'March 2024 - Present',
    points: [
      "Riyad Bank - Mobile Application",
      "Metlife Gulf - Mobile Application",
      "Commencis AI Assitant - Web Application & Tools"
    ],
  },
  {
    title: 'Senior Full Stack Engineer',
    company_name: 'Xenon Smart',
    icon: logo_xenon,
    iconBg: '#fff',
    date: 'August 2023 - February 2024',
    points: [
      'technical leadership within their team.',
      'mentoring junior engineers, providing technical guidance on projects, and helping to set technical direction for the organization.',
      'deeply involved in technical work. This could include designing and implementing complex systems, writing code, conducting performance analysis, or troubleshooting technical issues.'
    ],
  },
  {
    title: 'External Software Consultant',
    company_name: 'Serenas Group/GL Events Turkey',
    icon: logo_serenas,
    iconBg: '#000',
    date: 'August 2021 - August 2023',
    points: [
      'Developing and maintaining web applications using Laravel, Vue.js and other related technologies.',
      'Developing and maintaining mobile applications using iOS, android, react-native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Lead Frontend Developer',
    company_name: 'Eczacıbaşı Evital via Sorentum',
    icon: logo_evital,
    iconBg: '#fff',
    date: 'August 2022 - Feb 2023',
    points: [
      'Lead and Worked as Senior Frontend Developer at Eczacıbaşı Evital cross platform health application. https://evital.com.tr/',
      'Developing and maintaining evital.com.tr web applications using Angular2+ and other related technologies.',
      'Developing and maintaining evital mobile applications using iOS, android, react-native and other related technologies.',
      'Coordinated a major refactor targeted towards app optimization and performance resulting in a smoother user experience and accomplished by eliminating redundant re-renders and API calls by over 50%.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'FE Heavy Full Stack Developer',
    company_name: 'Avalanche',
    icon: logo_avax,
    iconBg: '#fff',
    date: 'Jan 2022 - Jun 2022',
    points: [
      'Developing and maintaining web applications using React, Next and other related technologies.',
      'ollaborating with cross-functional teams including designers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'web3, React.js, next.js, node.js, solidity, GraphQL, ERC721, ERC20, vercel, sass, css, javascript, typescript',
    ],
  },
  {
    title: 'Senior Software Developer',
    company_name: 'DVA TELECOM',
    icon: logo_dva,
    iconBg: '#444',
    date: 'Aug 2021 - Jan 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Developing and maintaining applications using react-native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company_name: 'Frame A.Ş./Serenas Group/GL Events Türkiye',
    icon: logo_serenas,
    iconBg: '#000',
    date: 'Jun 2017 - Aug 2021',
    points: [
      'Developing and maintaining web applications using Laravel, Vue.js and other related technologies.',
      'Developing and maintaining mobile applications using iOS, android, react-native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company_name: 'Elmas Teknoloji',
    icon: logo_elmas,
    iconBg: '#262858',
    date: 'Jun 2013 - May 2017',
    points: [
      'Developing and maintaining applications using iOS, Android and react-native and other related technologies.',
      'Developing and maintaining web applications using Angular.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Junior Software Developer',
    company_name: 'Iris Interaktif',
    icon: logo_iris,
    iconBg: '#555',
    date: 'Feb 2012 - Feb 2013',
    points: [
      'Developing and maintaining web applications using ASP.net and other related technologies.',
      'Developing and maintaining windows form applications using ASP.net and other related technologies.',
      'Developing and maintaining mobile applications using iOS & Android and other related technologies.',
    ],
  },
  {
    title: 'Education and Internship',
    company_name: 'Sakarya University',
    icon: logo_sau,
    iconBg: '#fff',
    date: 'Summer 2006 - Summer 2012',
    points: ["Bachelor's Degree, Computer Engineering"],
  },
];

const socials = [
  {
    name: 'Instagram',
    icon: faInstagram,
    link: 'https://instagram.com/ernre.portakal/',
  },
  {
    name: 'Facebook',
    icon: faFacebook,
    link: 'https://facebook.com/mehmetemrep',
  },
  {
    name: 'Goodreads',
    icon: faGoodreads,
    link: 'https://www.goodreads.com/amoureux',
  },
  {
    name: 'Github',
    icon: faGithub,
    link: 'https://github.com/amourreux',
  },
  {
    name: 'Stackoverflow',
    icon: faStackOverflow,
    link: 'http://stackoverflow.com/users/1187845/amourreux',
  },
  {
    name: 'Linkedin',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/mehmet-emre-portakal-5a986285/',
  },
  {
    name: 'Strava',
    icon: faStrava,
    link: 'https://www.strava.com/athletes/mehmetemre',
  },
    {
    name: 'Youtube',
    icon: faYoutube,
    link: 'https://www.youtube.com/@myhm',
  }
];

const projects = [
  {
    name: 'Karagöz ve Hacivat Sahnesi',
    description:
      'A mobile application for traditional Shadow Scene Simulator',
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'photoshop',
        color: 'pink-text-gradient',
      },
    ],
    image: project_kws,
    source_code_link: 'https://play.google.com/store/apps/details?id=com.emreportakal.karagozvehacivat.sahne',
  },
  {
    name: 'evital',
    description:
      'Web and mobile based platform that allows users to search, book, doctor, providing a convenient and efficient solution for health needs.',
    tags: [
      {
        name: 'angular2+',
        color: 'blue-text-gradient',
      },
      {
        name: 'react-native',
        color: 'green-text-gradient',
      },
      {
        name: 'ios & android',
        color: 'pink-text-gradient',
      },
    ],
    image: project_evital,
    source_code_link: 'https://evital.com.tr',
  },
  {
    name: 'cowmon',
    description:
      'Web application that enables users to manage cow farms using smart IOT devices.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'IOT',
        color: 'pink-text-gradient',
      },
    ],
    image: project_cowmon,
    source_code_link: 'http://cowmon.com/',
  },
  {
    name: 'Icon 360',
    description:
      "A comprehensive budget and offer creator platform that allows users to manage personal, project, budget and offer. Tailored to cliens needs. Using as United Nation's organization bugget management system.",
    tags: [
      {
        name: 'laravel',
        color: 'orange-text-gradient',
      },
      {
        name: 'vue',
        color: 'green-text-gradient',
      },
      {
        name: 'php',
        color: 'orange-text-gradient',
      },
    ],
    image: project_icon,
    source_code_link: 'https://github.com/',
  },
];

export { services, experiences, projects, socials };
