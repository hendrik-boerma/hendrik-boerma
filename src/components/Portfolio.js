import data from '../Data'

function Portfolio() {

    const projects = data.projects;

    return (
        <>
            <section className='py-12 px-6 md:px-16 bg-darkblue' id='section3'>
                <h3 className='text-3xl py-8 text-textcolor font-bold'>Portfolio</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2'>
                    {projects.map(projects => (
                        <card className='flex flex-col'>
                            <img className='object-cover h-full w-full rounded-t-lg' src={projects.image} alt={projects.image}/>
                            <div className='grid grid-cols-2 grid-rows-2 bg-primary p-4 rounded-b-lg gap-8 cursor-pointer hover:'>
                                <h5 className='col-span-2 text-lg font-bold text-textcolor'>{projects.name}</h5>
                                <button className='text-textcolor text-right col-start-2 col-span-1'>Bekijk project &gt;</button>
                            </div>
                        </card>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Portfolio;