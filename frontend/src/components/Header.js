import '../index.css';
import { NavLink } from "react-router-dom";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ tabIndex }) {


  return (
    <nav className="sticky top-0 bg-backgroundcolor flex flex-row justify-between text-center py-8 px-4 sm:px-8 2xl:px-0">
      <ul className="flex flex-row gap-4 text-lg text-textcolor">
        <NavLink className={({ isActive }) => (isActive ? 'linkvisited' : 'link')} to="/">Over mij</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'linkvisited' : 'link')} to="/Experience">Ervaring</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'linkvisited' : 'link')} to="/Work">Werk</NavLink>
      </ul>
      <div className="flex gap-4">
        <a href="https://github.com/hendrik-boerma" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Github"><FontAwesomeIcon className="cursor-pointer text-textcolor hover:text-secondary" icon={faGithub} size='xl' /></a>
        <a href="https://www.linkedin.com/in/hendrik-boerma/" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Linkedin"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faLinkedinIn} size='xl' /></a>
        <a href="mailto:hendrikboerma@gmail.com" tabIndex={tabIndex} aria-label="Mail"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faEnvelope} size='xl' /></a>
      </div>
    </nav>

  );
}

export default Header;