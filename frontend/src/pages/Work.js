import { DataContext } from '../Dataprovider';
import { useContext } from 'react';
import ImageGallery from '../components/ImageGallery'

function Portfolio() {

  const projects = useContext(DataContext).projectImages;

    return (
        <>
            <section className='bg-darkblue' id='section3'>
                <h1 className='text-3xl text-textcolor font-bold'>Werk</h1>
                <h2 className='text-2xl text-secondary py-8' id='werk'>Webapplicaties</h2>
                <ImageGallery
                images={projects}
                />
                <h2 className='text-2xl text-secondary py-8' id='werk'>Designs</h2>
                <ImageGallery
                images={projects}
                />
            </section>
        </>
    );
}

export default Portfolio;