import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className='h-screen flex flex-col-reverse md:flex-row'>
        <article className='w-full flex flex-col text-start justify-center gap-2 px-4 py-8 md:px-16 z-10 bg-mediumblue'>
          <h1 className='text-offwhite text-3xl font-bold md:text-4xl xl:text-6xl slideleft'>Hendrik Boerma</h1>
          <h2 className='text-neoblue text-xl md:text-2xl xl:text-3xl slideleft'>Front-end Developer</h2>
          <p className='leading-relaxed text-l xl:text-xl text-offwhite'>"Creatieve developer en designer met een oog voor de eindgebruiker."</p>
         <ul className="flex gap-12 py-4">
            <a href="https://github.com/hendrik-boerma"><FontAwesomeIcon className="cursor-pointer text-offwhite" icon={faGithub} size='2xl'/></a>
            <a href="https://www.linkedin.com/in/hendrik-boerma/" ><FontAwesomeIcon className="cursor-pointer text-offwhite" icon={faLinkedinIn} size='2xl'/></a>
            <a href="mailto:hendrikboerma@gmail.com"><FontAwesomeIcon className="cursor-pointer text-offwhite" icon={faEnvelope} size='2xl'/></a>
          </ul>
        </article>
        <div className='bg-portret top-0 bg-no-repeat fixed h-3/4 bg-center w-full bg-top bg-cover md:h-full md:relative'></div>
    </header>
  );
}

export default Header; 