import { useContext } from 'react'
import { DataContext } from '../Dataprovider';

const About = ({ tabIndex }) => {
  const about = useContext(DataContext).about;
  const header = useContext(DataContext).header;

  return (
    <>
      <section className='py-16 md:py-48'>
        <article className="flex flex-col justify-left gap-8">
          <h1 className='text-textcolor text-7xl font-bold md:text-8xl'>{header.title}</h1>
          <p className='text-secondary text-3xl md:text-3xl'>{header.subtitle}</p>
          <p className='col-span-2 text-md leading-relaxed font-regular text-textcolor md:w-4/5'>
            {about}
          </p>
        </article>
      </section>
    </>
  );
}

export default About;