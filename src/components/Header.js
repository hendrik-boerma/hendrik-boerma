import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ tabIndex}) {
  return (
    <header className='h-screen flex flex-col-reverse md:flex-row'>
        <article className='w-full flex flex-col text-start justify-center gap-4 px-4 py-8 md:px-32 z-10 bg-backgroundcolor2'>
          <h1 className='text-textcolor text-3xl font-bold md:text-4xl xl:text-6xl'>Hendrik Boerma</h1>
          <h2 className='text-secondary text-xl md:text-2xl xl:text-3xl'>Front-end Developer</h2>
          <p className='leading-relaxed text-l xl:text-xl text-textcolor py-4'>"Front-end developer/designer en tester"</p>
         <div className="flex gap-12 py-4 slideleft">
            <a href="https://github.com/hendrik-boerma" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Github"><FontAwesomeIcon className="cursor-pointer text-textcolor hover:text-secondary" icon={faGithub} size='2xl'/></a>
            <a href="https://www.linkedin.com/in/hendrik-boerma/" rel="noreferrer" target="_blank" tabIndex={tabIndex} aria-label="Linkedin"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faLinkedinIn} size='2xl'/></a>
            <a href="mailto:hendrikboerma@gmail.com" tabIndex={tabIndex} aria-label="Mail"><FontAwesomeIcon className="cursor-pointer text-textcolor  hover:text-secondary" icon={faEnvelope} size='2xl'/></a>
          </div>
        </article>
        <div className='bg-portretmono top-0 bg-no-repeat h-full bg-top w-full md:w-2/3 bg-cover md:relative'></div>
    </header>
  );
}

export default Header; 