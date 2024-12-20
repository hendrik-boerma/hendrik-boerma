import Card from '../components/Card'
import { useContext } from 'react'
import { DataContext } from '../Dataprovider';

function Portfolio() {

    const projects = useContext(DataContext).projects;

    return (
        <>
            <section className='bg-darkblue flex flex-col gap-8' id='section3'>
                <h1 className='text-3xl text-textcolor font-bold'>Werk</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 gap-8">
                    <Card contents={projects} />
                </div>
            </section>
        </>
    );
}

export default Portfolio;