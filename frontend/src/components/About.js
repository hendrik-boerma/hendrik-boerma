import { useContext } from 'react'
import { DataContext } from '../Dataprovider';

const About = () => {
  const about = useContext(DataContext).about;

  return (
    <>
      <section className='py-8 bg-darkblue' id='section3'>
        <h2 className='text-3xl text-textcolor font-bold pb-8'>Over mij</h2>
        <article className='flex flex-col lg:flex-row gap-16'>
            <p className='col-span-2 text-md leading-relaxed font-regular text-textcolor md:w-3/4 2xl:w-1/2'>
              {about}
            </p>
        </article>
      </section>
    </>
  );
}

export default About;