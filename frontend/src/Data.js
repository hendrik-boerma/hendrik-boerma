import htmlicon from './Images/icons/html5.png'
import cssicon from './Images/icons/css3.png'
import jsicon from './Images/icons/js.png'
import figmaicon from './Images/icons/Figma.png'


const icons =  [
  htmlicon,
  cssicon,
  jsicon,
  figmaicon
];

const projects =  [
   {
    name: 'Mijn Groningen',
    subtitle: 'Gemeente Groningen',
    tags: ['TestCafe','Testersuite', 'Design system', 'Jira'],
    description: 'Binnen de gemeente Groningen wordt er gewerkt aan het nieuwe inwoners portaal ‘Mijn Groningen’. Inwoners van de gemeente Groningen kunnen hier verschillende producten aanvragen en hun huidige aanvragen inzien. Als test coördinator ben ik binnen dit project verantwoordelijk voor de kwaliteit van het portaal. Op basis van user stories en acceptatiecriteria stel ik per sprint testscripts op in het programma testersuite en geef ik een vrijgaveadvies op basis van mijn bevindingen. Daarnaast denk ik mee over de doorontwikkeling en UX van Mijn Groningen. Sinds 15 juni 2023 is Mijn Groningen live en werken we als team aan de door ontwikkeling van het platform.',
    link: 'https://mijn.groningen.nl/accounts/login/',
    linktext: 'Bekijk Mijn Groningen'
   },
   {
    name: 'De Stem van Groningen',
    subtitle: 'Gemeente Groningen',
    tags: ['UX design', 'Figma', 'CMS'],
    description: 'De Stem van Groningen is een website die beheerd wordt door de gemeente Groningen. Inwoners van de gemeente kunnen hier ideeën indienen om hun wijk mooier, leuker, veiliger, duurzamer of socialer te maken. Als beheerder en ontwerper ben ik samen met collega’s verantwoordelijk voor het faciliteren van het platform en het opzetten en indelen van pagina’s voor verschillende wijk projecten. Naast het beheer werken we ook aan de doorontwikkeling van het platform. In Figma maak ik verschillende herontwerpen om de website gebruiksvriendelijker en aantrekkelijker te maken voor de inwoner. Ook heb ik een nieuwe huisstijl en logo gemaakt voor de Stem van Groningen om de website herkenbaarder en overzichtelijker te maken.',
    link: 'https://stemvan.groningen.nl/',
    linktext: 'Bekijk De Stem van Groningen'
   },
   {
    name: 'Movie application',
    subtitle: 'Eigen front-endproject',
    tags: ['React', 'SCSS'],
    description: 'De Movie application is een assessment die ik via Sogeti heb gemaakt om mijn front-end vaardigheden te verbeteren. Het project is gebouwd met React en SCSS en maakt gebruik van de OMDB API om films te tonen en te zoeken. De website highlight twee films bij het laden van de pagina. Daarnaast is er een zoekfunctie die op basis van de zoekterm een top vijf aan films toont.',
    link: 'https://github.com/hendrik-boerma/movie-application',
    linktext: 'Bekijk het project in github'
   },
   {
    name: 'Little Lemon',
    subtitle: 'Meta Front-end Developer',
    tags: ['React'],
    description: 'Tijdens mijn opleiding voor front-end developer bij Meta heb ik als eindwerkstuk een website ontworpen en gebouwd in React voor het fictieve restaurant Little Lemon. Tijdens het bouwen van de website heb ik veel geleerd over het werken met semantische HTML, form validation en CSS grid- en flex- lay-outs.',
    link: 'https://hendrik-boerma.github.io/capstone-course-coursera',
    linktext: 'Bekijk het project in github'

   },
   {
    name: 'Formule 1 Dashboard',
    subtitle: 'Eigen front-endproject',
    tags: ['HTML/CSS/JS', 'API'],
    description: 'Het formule 1 dashboard is een hobbymatig project. Het dashboard is gemaakt met HTML, CSS en JavaScript. Het dashboard is verbonden met een public API die recente data weergeeft over formule 1. De XML-data vanuit de API is gebruikt om recente data op te halen en dit op een visueel aantrekkelijk manier te verwerken in een dashboard. Tijdens het bouwen van dit dashboard heb ik veel kennis opgedaan over JavaScript en het werken met een public API.',
    link: 'https://hendrik-boerma.github.io/F1-live-score-app',
    linktext: 'Bekijk het project in github',
   },
   {
    name: 'Portfolio',
    subtitle: 'Eigen front-endproject',
    tags: ['React', 'Tailwind'],
    description: 'Dit portfolio is gebouwd met React en er is gebruik gemaakt van Tailwind CSS voor de styling van de website. Tijdens het bouwen van deze website heb ik veel geleerd van React en Tailwind en ook veel nagedacht over de styling en inrichting van het portfolio. Daarnaast probeer ik zoveel mogelijk rekening te houden met toegankelijkheid en semantische HTML.',
    link: 'https://github.com/hendrik-boerma/portfolio',
    linktext: 'Bekijk het project in github',
   },
   {
    name: 'Weer app',
    subtitle: 'Eigen front-endproject',
    tags: ['HTML/CSS/JS', 'API'],
    description: 'De Weer App is een persoonlijk project dat dient als oefening in het gebruik van JavaScript en het integreren van een API. Met deze applicatie kun je eenvoudig het weer van een specifieke locatie opvragen. Na het invoeren van de gewenste locatie worden de relevante weergegevens opgehaald en past de interface zich dynamisch aan op basis van deze gegevens.',
    link: 'https://hendrik-boerma.github.io/Weather-app/',
    linktext: 'Bekijk het project in github',
   }
];

const skills = ['Scrum', 'React', 'SCSS', 'Tailwind', 'Git', 'Node.js', 'Jira', 'Cypress', 'TestCafe', 'TMAP', 'Adobe', 'Design thinking', 'UX design', 'Toegankelijkheid', 'Design system', 'Usability testing']

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
    title: "Tester & Adviseur digitale dienstverlening",
    company: "Gemeente Groningen",
    date: "Mrt 2023 - heden",
    description: "Description for Test Engineer",
  },
  {
    title: "Agile test engineer",
    company: "Sogeti Nederland",
    date: "Sep 2022 - heden",
    description: "Description for Agile Test Engineer",
  },
  {
    title: "Webshopbeheerder & Vormgever",
    company: "A4H-TECH BV",
    date: "Sep 2021 - Sep 2022",
    description: "Description for E-Commerce Medewerker",
  },
  {
    title: "UX designer (stage)",
    company: "Digital Education Africa Network",
    date: "Feb 2021 - Jun 2021",
    description: "Description for UX Designer",
  },
  {
    title: "Grafisch vormgever (stage)",
    company: "Adventure Works South-Africa",
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