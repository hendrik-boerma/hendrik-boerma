import images from '../Images'

function About (){
    return (
        <section className='py-12 px-6 flex flex-col items-center md:flex-row md:gap-8 md:px-16' id='section1'>
          <div className='rounded-r-2xl w-full'>
            <h3 className='text-4xl text-offwhite py-8 font-bold' >Over mij</h3>
            <p className='leading-loose text-offwhite text-justify'>Ik ben Hendrik Boerma en ik ben Agile test engineer bij Sogeti(Part of Capgemini) en momenteel in opdracht bij de gemeente Groningen. 
              Ik houdt me bezig met alles wat te maken heeft met de voorkant van websites en software. 
              Ik ontwerp, bouw en test software. De basis van dit alles heb ik geleerd tijdens mij studie Communication & Multimedia Design.
            </p>
          </div>
          <div className='flex justify-center w-full px-6 py-12'>
          <img className='max-w-md w-full' src={images.portret} alt='Hendrik Boerma' />
          </div>
      </section>
    );
}

export default About; 