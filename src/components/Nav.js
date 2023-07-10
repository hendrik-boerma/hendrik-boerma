import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react'

function Navigation (){

  const [toggleMenu, setToggleMenu] = useState(false);

function openMenu () {
  let menu = document.getElementById("menu");
  if (toggleMenu === false){
    setToggleMenu(true)
    menu.style.display = "flex"
  } else {
    menu.style.display = "none"
    setToggleMenu(false)
  }
}

  return (
    <nav>
      <div className="fixed flex justify-end w-full text-lightgrey bg-darkblue drop-shadow-md z-30 top-0" onClick={openMenu}>
      <button className="flex flex-col gap-2 p-4 cursor-pointer text-offwhite text-2xl font-bold md:text-2xl">{toggleMenu ? "Close" : "Menu"}
      </button>
    </div>
    <div id="menu" className="flex flex-col items-center justify-center bg-darkblue h-full w-full z-20 fixed text-lightgrey text-2xl hidden">
        <ul className="flex flex-col justify-center gap-12">
          <li className="cursor-pointer"><a href="#section1" onClick={openMenu}>Over mij</a></li>
          <li className="cursor-pointer"><a href="#section2" onClick={openMenu}>Ervaring</a></li>
          <li className="cursor-pointer"><a href="#section3" onClick={openMenu}>Portfolio</a></li>
        </ul>
        <ul className="flex gap-12 mt-24">
            <a href="https://www.linkedin.com/in/hendrik-boerma/" ><FontAwesomeIcon className="cursor-pointer" icon={faLinkedinIn} size='xl'/></a>
            <a href="https://github.com/hendrik-boerma"><FontAwesomeIcon className="cursor-pointer" icon={faGithub} size='xl'/></a>
            <a href="mailto:hendrikboerma@gmail.com"><FontAwesomeIcon className="cursor-pointer" icon={faEnvelope} size='xl'/></a>
          </ul>
    </div>
    </nav>
    )
  }

export default Navigation;