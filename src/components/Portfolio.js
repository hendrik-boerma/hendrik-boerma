import data from '../Data';
import { useState, useEffect, useRef } from 'react';
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio({ tabIndex, setTabIndex }) {

    const projects = data.projects;
    const [number, setNumber] = useState(0);
    const project = data.projects[number];
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
            <section className='py-12 px-4 md:px-16 bg-darkblue' id='section3'>
                <h3 className='text-3xl py-8 text-textcolor font-bold'>Projecten</h3>
                <div id="cards" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                    {projects.map((project, index) => (
                        <div className='flex flex-col' onClick={() => openProject(index)} key={index} data-card-id={index}>
                            <div className='grid grid-cols-2 grid-rows-5 bg-backgroundcolor2 p-4 rounded-lg gap-2 cursor-pointer text-textcolor hover:text-secondary hover:scale-95 ease-in-out duration-300'>
                                <h4 className='col-span-2 text-lg font-bold text-textcolor'>{project.name}</h4>
                                <p className='col-span-2 text-md font-regular text-textcolor'>{project.subtitle}</p>
                                <p className='col-start-1 col-span-2 row-span-1 flex gap-2'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className='bg-primary px-2 py-1 rounded text-textcolor' key={tagIndex}>
                                            {tag}
                                        </span>
                                    ))}
                                </p>
                                <button className='text-right col-start-2 row-start-5 col-span-2' tabIndex={tabIndex}>Bekijk project &gt;</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={toggleProject ? "flex items-center justify-center fixed w-full h-full bg-backgroundmodal top-0 left-0 z-20" : "hidden"}>
                    <div className={"overflow-y-auto bg-backgroundcolor2 drop-shadow-2xl w-full lg:w-auto h-screen absolute lg:h-auto p-4 lg:py-4 py-16 lg:rounded-lg slideright ease-in-out duration-300"}>
                        <button ref={overlayRef} className='fixed text-3xl font-bold text-textcolor hover:rotate-180 ease-in-out duration-300 ' onClick={() => closeProject()}>X</button>
                        <article className='py-16 px-8 flex items-start justify-center flex-col gap-4'>
                            <h5 className='text-3xl font-bold text-textcolor'>{project.name}</h5>
                            <p className='col-span-2 text-md font-regular text-textcolor'>{project.subtitle}</p>
                            <p className='col-start-1 col-span-2 row-span-1 flex gap-2'>
                                {project.tags.map((tag, tagIndex) => (
                                    <span className='bg-primary px-2 py-1 rounded text-textcolor' key={tagIndex}>
                                        {tag}
                                    </span>
                                ))}
                            </p>
                            <p className='col-span-2 text-md font-regular text-textcolor py-8 max-w-xl'>
                                {project.description}
                            </p>
                            <a type="button" href={project.link} rel="noreferrer" target="_blank" className={project.link == null ? 'hidden' : 'bg-secondary p-4 rounded cursor-pointer max-w-xs hover:bg-primary text-center'}>{project.linktext} <FontAwesomeIcon icon={faExternalLink} size='sm' /></a>
                        </article>
                        <div className='flex items-start gap-4 justify-center' >
                            <button
                                id="previous"
                                className={`text-2xl font-bold ${number === 0 ? 'text-primary' : 'text-textcolor'} hover:scale-125 ease-in-out duration-300`}
                                onClick={handlePreviousClick}
                            >
                                &lt;
                            </button>
                            <button
                                id="next"
                                className={`text-2xl font-bold ${number === totalProjects ? 'text-primary' : 'text-textcolor'} hover:scale-125 ease-in-out duration-300`}
                                onClick={handleNextClick}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;