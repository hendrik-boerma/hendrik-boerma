import React, { useState, useEffect } from 'react';

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/about-me-text');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAbout(data.data.attributes.About_text);
      } catch (error) {
        console.error('Error fetching about text:', error);
      }
    };

    fetchAbout();
  }, []);

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