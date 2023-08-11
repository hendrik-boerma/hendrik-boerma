import data from '../Data';
import { useState } from 'react';

function Portfolio() {

    const projects = data.projects;
    const [number, setNumber] = useState(0);
    const project = data.projects[number];
    const [toggleProject, setToggleProject] = useState(false);

    function openProject(index) {
        setNumber(index);
        setToggleProject(true);
    }

    return (
        <>
            <section className='py-12 px-6 md:px-16 bg-darkblue' id='section3'>
                <h3 className='text-3xl py-8 text-textcolor font-bold'>Projecten</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                    {projects.map((project, index) => (
                        <div className='flex flex-col' onClick={() => openProject(index)} key={index}>
                            <div className='grid grid-cols-2 grid-rows-5 bg-backgroundcolor2 p-4 rounded-lg gap-2 cursor-pointer text-textcolor hover:text-secondary hover:scale-95 ease-in-out duration-300'>
                                <h5 className='col-span-2 text-lg font-bold text-textcolor'>{project.name}</h5>
                                <p className='col-span-2 text-md font-regular text-textcolor'>{project.subtitle}</p>
                                <p className='col-start-1 col-span-2 row-span-1 flex gap-2'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className='bg-primary p-1 rounded text-textcolor' key={tagIndex}>
                                            {tag}
                                        </span>
                                    ))}
                                </p>
                                <button className=' text-right col-start-2 row-start-5 col-span-2'>Bekijk project &gt;</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={toggleProject ? "bg-backgroundcolor2 drop-shadow-2xl w-full lg:w-1/2 h-screen fixed top-0 right-0 z-20 p-8 slideright ease-in-out duration-300" : "hidden"}>
                    <button className='text-3xl font-bold text-textcolor hover:rotate-180 ease-in-out duration-300' onClick={() => setToggleProject(false)}>X</button>
                    <article className='py-16 flex flex-col gap-4'>
                        <h5 className='text-3xl font-bold text-textcolor'>{project.name}</h5>
                        <p className='col-span-2 text-md font-regular text-textcolor'>{project.subtitle}</p>
                        <p className='col-start-1 col-span-2 row-span-1 flex gap-2'>
                            {project.tags.map((tag, tagIndex) => (
                                <span className='bg-primary p-1 rounded text-textcolor' key={tagIndex}>
                                    {tag}
                                </span>
                            ))}
                        </p>
                        <p className='col-span-2 text-md font-regular text-textcolor py-8 max-w-xl'>
                            {project.description}
                        </p>
                        <a type="button" href={project.link} className={project.link == null ? 'hidden' : 'bg-textcolor p-4 rounded cursor-pointer max-w-xs hover:bg-secondary text-center'}>{project.linktext}</a>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Portfolio;