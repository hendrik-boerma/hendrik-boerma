import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../Images/Profile.JPG';
import { useContext } from 'react'
import { DataContext } from '../Dataprovider';

function Header({ tabIndex }) {
  const title = useContext(DataContext).title;
  const subtitle = useContext(DataContext).subtitle;

  return (
    <header className='h-auto pt-16 px-4 sm:px-8 2xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <div className="flex justify-center lg:justify-end lg:order-last">
      <img className='fade w-full' src={profile} alt="Foto van Hendrik Boerma" />
      </div>
      <article className="flex flex-col justify-center gap-4">
        <h1 className='text-textcolor text-3xl font-bold md:text-4xl 2xl:text-6xl'>{title}</h1>
        <p className='text-secondary text-xl md:text-2xl xl:text-3xl'>{subtitle}</p>
        <div className="flex gap-8 py-2 slideleft">
          <a href="https://github.com/hendrik-boerma" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Github"><FontAwesomeIcon className="cursor-pointer text-textcolor hover:text-secondary" icon={faGithub} size='2xl' /></a>
          <a href="https://www.linkedin.com/in/hendrik-boerma/" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Linkedin"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faLinkedinIn} size='2xl' /></a>
          <a href="mailto:hendrikboerma@gmail.com" tabIndex={tabIndex} aria-label="Mail"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faEnvelope} size='2xl' /></a>
        </div>
      </article>
    </header>
  );
}

export default Header; 