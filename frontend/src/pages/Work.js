import { DataContext } from '../Dataprovider';
import { useContext } from 'react';
import ImageGallery from '../components/ImageGallery'

function Portfolio() {

    const projects = useContext(DataContext).projectImages;

    return (
        <>
            <section className='bg-darkblue flex flex-col gap-8' id='section3'>
                <h1 className='text-3xl text-textcolor font-bold'>Werk</h1>
                <p className='col-span-2 text-md leading-relaxed font-regular text-textcolor md:w-4/5'>
                    Een aantal wbapplicaties die ik gebouwd heb met onder andere React en Tailwind.
                </p>
                <ImageGallery
                    images={projects.web}
                />
            </section>
        </>
    );
}

export default Portfolio;