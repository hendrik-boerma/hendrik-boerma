import a4hflyer from './Images/work/flyerA4H.png'
import illustrations from './Images/work/illustrations.png'
import mockup from './Images//work/Mockup.png'
import landscape from './Images/work/Landscape.png'
import voucheraw from './Images/work/VoucherAW.png'
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
    tags: ['Testersuite','Jira']
   },
   {
    name: 'De Stem van Groningen',
    subtitle: 'Gemeente Groningen',
    tags: ['UX/UI', 'Figma', 'CMS']
   },
   {
    name: 'VASD',
    subtitle: 'Gemeente Groningen',
    tags: ['TMAP', 'Selenium']
   },
   {
    name: 'Restaurant website',
    subtitle: 'Front-end Cursus',
    tags: ['React', 'GIT']
   },
   {
    name: 'Formule 1 Dashboard',
    subtitle: 'Hobby project',
    tags: ['HTML','CSS','JS', 'API', 'GIT']
   },
   {
    name: 'Portfolio',
    subtitle: 'Hobby project',
    tags: ['HTML','CSS','JS', 'API', 'GIT']
   }
];

const skills = ['Scrum', 'Human centered design', 'Design thinking', 'UX/UI', 'Toegankelijkheid', 'Vormgeving', 'Selenium']

const jobs = [
  {
    title: "Test Engineer",
    company: "Gemeente Groningen",
    date: "Mrt 23 - heden",
    description: "Description for Test Engineer",
  },
  {
    title: "Agile Test Engineer",
    company: "Sogeti Nederland",
    date: "Sep 22 - heden",
    description: "Description for Agile Test Engineer",
  },
  {
    title: "E-Commerce Medewerker",
    company: "A4H-TECH BV",
    date: "Sep 21 - Sep 22",
    description: "Description for E-Commerce Medewerker",
  },
  {
    title: "UX Designer",
    company: "Digital Education Africa Network",
    date: "Feb 21 - Jun 21",
    description: "Description for UX Designer",
  },
  {
    title: "Grafisch Vormgever",
    company: "Adventure Works",
    date: "Sep 19 - Jan 20",
    description: "Description for Grafisch Vormgever",
  },
];

const studies = [
  {
    title: "Front-End Developer",
    company: "Meta - Coursera",
    date: "Dec. 2022 - Jul. 2023",
    description: "Description for Front-End Developer",
  },
  {
    title: "CMD - Visual Design",
    company: "Hanzehogeschool Groningen",
    date: "Sep. 2017 - Jun. 2021",
    description: "Description for CMD - Visual Design",
  },
];

const data = {
  icons,
  projects,
  jobs,
  studies,
  skills
};

export default data;