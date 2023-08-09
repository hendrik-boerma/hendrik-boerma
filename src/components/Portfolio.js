import data from '../Data'

function Portfolio() {

    const projects = data.projects;

    return (
        <>
            <section className='py-12 px-6 md:px-16 bg-darkblue' id='section3'>
                <h3 className='text-3xl py-8 text-textcolor font-bold'>Projecten</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                    {projects.map(projects => (
                        <card className='flex flex-col'>
                            <div className='grid grid-cols-2 grid-rows-5 bg-primary p-4 rounded-lg gap-2 cursor-pointer text-textcolor hover:text-secondary hover:scale-95 ease-in-out duration-300'>
                                <h5 className='col-span-2 text-lg font-bold text-textcolor'>{projects.name}</h5>
                                <p className='col-span-2 text-md font-regular text-textcolor'>{projects.subtitle}</p>
                                <p className='col-start-1 col-span-2 row-span-1 flex gap-2'>
                                    {projects.tags.map((tag => (
                                        <span className='bg-primary p-1 rounded text-textcolor'>
                                            {tag}
                                        </span>
                                    )))}
                                </p>
                                <button className=' text-right col-start-2 row-start-5 col-span-2'>Bekijk project &gt;</button>
                            </div>
                        </card>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Portfolio;