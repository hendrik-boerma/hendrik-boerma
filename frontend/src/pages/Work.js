import { useState, useEffect, useRef } from 'react';
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react'
import { DataContext } from '../Dataprovider';
import { PortableText } from '@portabletext/react';

const components = {
    block: {
      normal: ({ children }) => (
        <p className='col-span-2 text-md font-regular text-textcolor py-4 leading-relaxed max-w-xl'>
          {children}
        </p>
      )
    }
  };

function Portfolio({ tabIndex, setTabIndex }) {
    const projects = useContext(DataContext).projects;
    const [number, setNumber] = useState(0);
    const project = projects[number];
    const [toggleProject, setToggleProject] = useState(false);
    const totalProjects = projects.length - 1;
    const overlayRef = useRef(null);

    useEffect(() => {
        if (toggleProject === false) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
            overlayRef.current.focus();
        }
    }, [toggleProject]);

    const handlePreviousClick = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    const handleNextClick = () => {
        if (number < totalProjects) {
            setNumber(number + 1);
        }
    };

    function openProject(index) {
        setTabIndex(-1);
        setNumber(index);
        setToggleProject(true);
    }

    function closeProject(index) {
        setToggleProject(false);
        setTabIndex(0);
        console.log(number);
        const card = document.querySelector(`#cards > div:nth-child(${number + 1}) > div > button`);
        if (card) {
            card.focus();
        } else {
            console.error('Button element not found.');
        }
    }


    return (
        <>
            <section className='py-8 bg-darkblue' id='section3'>
                <h2 className='text-3xl text-textcolor font-bold pb-8'>Projecten</h2>
                <div id="cards" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                    {projects.map((project, index) => (
                        <div className='flex flex-col' onClick={() => openProject(index)} key={index} data-card-id={index}>
                            <div className='grid grid-cols-2 grid-rows-5 bg-backgroundcolor2 p-4 rounded-lg gap-2 cursor-pointer text-textcolor hover:text-secondary hover:scale-95 ease-in-out duration-300'>
                                <h3 className='col-span-2 text-lg font-bold text-textcolor'>{project.name}</h3>
                                <p className='col-span-2 text-md font-regular text-textcolor'>{project.subtitle}</p>
                                <div className='col-start-1 row-span-1 col-span-2 max-h-8'>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.tags && project.tags.map((tag, tagIndex) => (
                                            <span className='bg-primary px-2 py-1 rounded text-textcolor flex-nowrap' key={tagIndex}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button className='text-right col-start-1 row-start-5 col-span-2' tabIndex={tabIndex}>Bekijk project &gt;</button>
                            </div>
                        </div>
                    ))}
                </div>
                {toggleProject && project && (
                    <div className="flex items-center justify-center fixed w-full h-full bg-backgroundmodal top-0 right-0 z-20">
                        <div className="overflow-y-auto h-screen bg-backgroundcolor2 drop-shadow-2xl w-full lg:w-auto absolute lg:h-auto p-4 md:p-8 py-16 md:py-8 lg:rounded-lg slideright ease-in-out duration-300">
                            <button ref={overlayRef} aria-label="Sluit" className='ml-auto sticky p-2 top-0 flex items-center justify-center text-xl font-bold bg-primary text-textcolor rounded-full w-8 h-8 hover:bg-backgroundcolor2 hover:text-secondary duration-300' onClick={closeProject}><span>X</span></button>
                            <article className='flex justify-center'>
                                <div className='py-8 md:px-8 flex items-start justify-center flex-col gap-4'>
                                    <h4 className='text-3xl font-bold text-textcolor'>{project.name}</h4>
                                    <p className='col-span-2 text-md font-regular text-textcolor'>{project.subtitle}</p>
                                    <p className='col-start-1 col-span-2 row-span-1 flex flex-wrap gap-2'>
                                        {project.tags && project.tags.map((tag, tagIndex) => (
                                            <span className='bg-primary px-2 py-1 rounded text-textcolor' key={tagIndex}>
                                                {tag}
                                            </span>
                                        ))}
                                    </p>
                                    <img className={project.image == null ? 'hidden' : "max-w-xl w-full"} src={project.image} alt={project.alt} />
                                    <PortableText value={project.description} components={components} />
                                    <a type="button" href={project.link} rel="noreferrer" target="_blank" className={project.link == null ? 'hidden' : 'bg-secondary p-4 rounded cursor-pointer max-w-xs hover:bg-primary hover:text-secondary text-center ease-in-out duration-300'}>
                                        {project.linktext} <FontAwesomeIcon icon={faExternalLink} size='sm' />
                                    </a>
                                    <div className='flex items-start gap-4 justify-left py-4' >
                                        <button
                                            id="previous"
                                            className={`text-2xl font-bold ${number === 0 ? 'text-backgroundcolor2 bg-backgroundcolor cursor-default hover:none' : 'text-textcolor bg-primary hover:bg-backgroundcolor2 hover:text-secondary'} ease-in-out duration-300 flex items-center justify-center rounded w-8 h-8 p-1`}
                                            onClick={handlePreviousClick}
                                        >
                                            &lt;
                                        </button>
                                        <button
                                            id="next"
                                            className={`text-2xl font-bold ${number === totalProjects ? 'text-backgroundcolor2 bg-backgroundcolor cursor-default hover:none' : 'text-textcolor bg-primary hover:bg-backgroundcolor2 hover:text-secondary'} ease-in-out duration-300 flex items-center justify-center w-8 h-8 rounded p-1`}
                                            onClick={handleNextClick}
                                        >
                                            &gt;
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Portfolio;