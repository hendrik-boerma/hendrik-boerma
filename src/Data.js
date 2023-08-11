import htmlicon from './Images/icons/html5.png'
import cssicon from './Images/icons/css3.png'
import jsicon from './Images/icons/js.png'
import figmaicon from './Images/icons/Figma.png'
import adobeicon from './Images/icons/AdobeCloud.png'
import tmapicon from './Images/icons/TMAP.png'
import cypressicon from './Images/icons/cypress.png'
import reacticon from './Images/icons/reactjs.png'


const icons =  [
  htmlicon,
  cssicon,
  jsicon,
  reacticon,
  figmaicon,
  adobeicon,
  tmapicon,
  cypressicon,
];

const projects =  [
   {
    name: 'Mijn Groningen',
    subtitle: 'Gemeente Groningen',
    tags: ['Testersuite','Jira'],
    description: 'Lorem ipsum ulis. Ut rhoncus, leo semper aliquam semper.',
    link: 'https://mijn.groningen.nl/accounts/login/',
    linktext: 'Open de website'
   },
   {
    name: 'De Stem van Groningen',
    subtitle: 'Gemeente Groningen',
    tags: ['UX/UI', 'Figma', 'CMS'],
    description: 'Lorem ipsum ulis. Ut rhoncus, leo semper aliquam semper.',
    link: 'https://stemvan.groningen.nl/',
    linktext: 'Open de website'
   },
   {
    name: 'VASD',
    subtitle: 'Gemeente Groningen',
    tags: ['TMAP', 'Selenium'],
    description: 'Lorem ipsum ulis. Ut rhoncus, leo semper aliquam semper.',
   },
   {
    name: 'Little Lemon',
    subtitle: 'Meta Front-end Cursus',
    tags: ['React', 'GIT'],
    description: 'Lorem ipsum ulis. Ut rhoncus, leo semper aliquam semper.',
    link: 'https://github.com/hendrik-boerma/capstone-course-coursera',
    linktext: 'Open in github'

   },
   {
    name: 'Formule 1 Dashboard',
    subtitle: 'Eigen project',
    tags: ['HTML/CSS/JS', 'API', 'GIT'],
    description: 'Lorem ipsum ulis. Ut rhoncus, leo semper aliquam semper.',
    link: 'https://github.com/hendrik-boerma/F1-live-score-app',
    linktext: 'Open in github'

   },
   {
    name: 'Portfolio',
    subtitle: 'Eigen project',
    tags: ['React', 'GIT'],
    description: 'Lorem ipsum ulis. Ut rhoncus, leo semper aliquam semper.',
    link: 'https://github.com/hendrik-boerma/portfolio',
    linktext: 'Open in github'

   }
];

const skills = ['Scrum', 'Design thinking', 'UX/UI', 'Toegankelijkheid', 'Vormgeving', 'UI.Vision', 'Selenium', 'Tailwind', 'SCSS',  'Human centered design']

const certificats = [
  {
    title:'Meta Front-End Developer',
    link: "https://www.coursera.org/account/accomplishments/professional-cert/DGWCGVL6HMHZ"
  },
  {
    title:'TMAP',
    link: "https://skillshub.isqi.org/98cbcf67-65f9-4950-a1e7-fae40379ee46?key=e6e0f22f36e2cc464ade37d5fe3919a9e6cfa8c03de24bf121b33d2ca423a2e7#gs.4ad30u"
  },
  {
    title:'Azure Fundamentals',
    link: "https://www.credly.com/badges/25e816b2-0a28-4fc2-a383-b75f61cdf88b/linked_in_profile"
  },
  {
    title:'Professional Scrum Master',
    link: "https://www.credly.com/badges/88990958-b61c-49a0-9014-63c49e54bec3/linked_in_profile"
  }
]

const jobs = [
  {
    title: "Test Engineer",
    company: "Gemeente Groningen",
    date: "Mrt 2023 - heden",
    description: "Description for Test Engineer",
  },
  {
    title: "Agile Test Engineer",
    company: "Sogeti Nederland",
    date: "Sep 2022 - heden",
    description: "Description for Agile Test Engineer",
  },
  {
    title: "E-Commerce Medewerker",
    company: "A4H-TECH BV",
    date: "Sep 2021 - Sep 2022",
    description: "Description for E-Commerce Medewerker",
  },
  {
    title: "UX Designer",
    company: "Digital Education Africa Network",
    date: "Feb 2021 - Jun 2021",
    description: "Description for UX Designer",
  },
  {
    title: "Grafisch Vormgever",
    company: "Adventure Works",
    date: "Sep 2019 - Jan 2020",
    description: "Description for Grafisch Vormgever",
  },
];

const studies = [
  {
    title: "Front-End Developer",
    company: "Meta - Coursera",
    date: "Dec 2022 - Jul 2023",
    description: "Description for Front-End Developer",
  },
  {
    title: "Communication & Multimedia Design",
    company: "Hanzehogeschool Groningen",
    date: "Sep 2017 - Jun 2021",
    description: "Description for CMD - Visual Design",
  },
  {
    title: "Brand, Design & Psychology",
    company: "Hanzehogeschool Groningen",
    date: "Feb 2020 - Jun 2020",
    description: "Description for CMD - Visual Design",
  }
];

const data = {
  icons,
  projects,
  jobs,
  studies,
  skills,
  certificats
};

export default data;