import '../index.css';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]

    if (toggleMenu) {
      body.classList.add('lock-scroll')
    } else {
      body.classList.remove('lock-scroll')
    }

  }, [toggleMenu])

  return (
    <nav className={`top-0 bg-backgroundcolor flex flex-row md:grid-rows-1 justify-between py-8 px-4 sm:px-8 2xl:px-0 ${toggleMenu ? 'fixed w-full h-full md:sticky' : ''}`}>
      <div className='flex flex-col gap-16'>
      <button aria-label="Menu" className={`h-[2.5rem] md:hidden text-lg text-textcolor cursor-pointer overflow-hidden
        ${toggleMenu ? '' : 'flex flex-col justify-between'}`}
          onClick={() => setToggleMenu(!toggleMenu)}
          aria-expanded={toggleMenu}
          >
          <span className={`block h-[0.25rem] bg-textcolor rounded-full transition-all duration-500 
          ${toggleMenu ? 'w-[2.5rem] translate-y-[0.25rem] rotate-[45deg]' : 'w-[2rem]'}`} />
          <span className={`block h-[0.25rem] bg-textcolor rounded-full transition-all duration-500 
          ${toggleMenu ? 'w-[2.5rem] translate-y-0 rotate-[315deg]' : 'w-[2.5rem]'}`} />
          <span className={`block h-[0.25rem] bg-textcolor rounded-full transition-all duration-500 
          ${toggleMenu ? 'hidden' : 'w-[2rem]'}`} />
        </button>
        <ul className={toggleMenu ? 'flex flex-col gap-4 text-lg text-textcolor md:flex-row' : 'flex-row gap-4 text-lg text-textcolor hidden md:flex'}>
          <li>
          <NavLink className={({ isActive }) => (isActive ? 'linkvisited' : 'hover:underline hover:underline-offset-8 hover:decoration-2 hover:text-secondary')}
          onClick={() => window.innerWidth === 750 ? setToggleMenu(true) : setToggleMenu(false)} to="/">Over mij</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => (isActive ? 'linkvisited' : 'hover:underline hover:underline-offset-8 hover:decoration-2 hover:text-secondary')}
          onClick={() => window.innerWidth === 750 ? setToggleMenu(true) : setToggleMenu(false)} to="/Experience">Ervaring</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => (isActive ? 'linkvisited' : 'hover:underline hover:underline-offset-8 hover:decoration-2 hover:text-secondary')}
          onClick={() => window.innerWidth === 750 ? setToggleMenu(true) : setToggleMenu(false)} to="/Work">Werk</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 justify-end h-6">
        <a href="https://github.com/hendrik-boerma" rel="noreferrer" target="_blank" aria-label="Github"><FontAwesomeIcon className="cursor-pointer text-textcolor hover:text-secondary" icon={faGithub} size='xl' /></a>
        <a href="https://www.linkedin.com/in/hendrik-boerma/" rel="noreferrer" target="_blank" aria-label="Linkedin"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faLinkedinIn} size='xl' /></a>
        <a href="mailto:hendrikboerma@gmail.com" aria-label="Mail"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faEnvelope} size='xl' /></a>
      </div>
    </nav>

  );
}

export default Header;