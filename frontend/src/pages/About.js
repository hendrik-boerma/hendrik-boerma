import { useContext } from 'react'
import { DataContext } from '../Dataprovider';

const About = ({ tabIndex }) => {
  const about = useContext(DataContext).about;
  const header = useContext(DataContext).header;
  const profile = useContext(DataContext).profile;

  return (
    <>
      <section className='h-auto 2xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className="flex justify-center lg:justify-end lg:order-last">
          <img className='fade w-full h-auto' src={profile} alt="Foto van Hendrik Boerma" />
        </div>
        <article className="flex flex-col justify-center gap-4">
          <h1 className='text-textcolor text-3xl font-bold md:text-4xl 2xl:text-6xl'>{header.title}</h1>
          <p className='text-secondary text-xl md:text-2xl xl:text-3xl'>{header.subtitle}</p>
          <p className='col-span-2 text-md leading-relaxed font-regular text-textcolor'>
            {about}
          </p>
        </article>
      </section>
    </>
  );
}

export default About;