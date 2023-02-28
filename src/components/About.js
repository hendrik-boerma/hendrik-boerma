import images from '../Images'

function About (){
    return (
        <section className='py-12 px-6 flex flex-col items-center sticky bg-darkblue md:flex-row md:gap-6 md:px-16' id='section1'>
          <div className='leading-loose rounded-r-2xl sm:w-full md:w-5/12'>
            <h3 className='text-4xl text-offwhite py-8 font-bold' >Over mij</h3>
            <p className='text-offwhite'>Ik ben Hendrik Boerma en ik ben Agile test engineer bij Sogeti(Part of Capgemini) en momenteel in opdracht bij de gemeente Groningen. 
              Ik houdt me bezig met alles wat te maken heeft met de voorkant van websites en software. 
              Ik ontwerp, bouw en test software. De basis van dit alles heb ik geleerd tijdens mij studie Communication & Multimedia Design.
            </p>
          </div>
          <img className='px-8 pt-12 max-w-sm w-full  md:w-6/12' src={images.portret} alt='Hendrik Boerma' />
      </section>
    );
}

export default About; 