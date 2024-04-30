import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../Images/Profile.JPG';

function Header({ tabIndex}) {
  return (
    <header className='h-auto pt-16 px-4 md:px-32 2xl:px-64 gap-8 flex flex-col justify-center items-start lg:flex-row-reverse  lg:justify-end lg:items-center'>
          <img className='lg:w-1/2 xl:p-16 xl:pb-0 fade' src={profile} alt="Foto van Hendrik Boerma" />
          <article className="flex flex-col gap-4">
          <h1 className='text-textcolor text-3xl font-bold md:text-4xl 2xl:text-6xl'>Hendrik Boerma</h1>
          <p className='text-secondary text-xl md:text-2xl xl:text-3xl'>Front-end developer, Designer & Tester</p>
         <div className="flex gap-8 py-2 slideleft">
            <a href="https://github.com/hendrik-boerma" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Github"><FontAwesomeIcon className="cursor-pointer text-textcolor hover:text-secondary" icon={faGithub} size='2xl'/></a>
            <a href="https://www.linkedin.com/in/hendrik-boerma/" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Linkedin"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faLinkedinIn} size='2xl'/></a>
            <a href="mailto:hendrikboerma@gmail.com" tabIndex={tabIndex} aria-label="Mail"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faEnvelope} size='2xl'/></a>
          </div>
          </article>
    </header>
  );
}

export default Header; 