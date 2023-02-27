import images from '../images'

function About (){
    return (
        <section className='pb-16 flex flex-col items-center sticky bg-offwhite' id='section1'>
          <div className='p-6 leading-loose rounded-r-2xl'>
            <h3 className='text-4xl text-darkblue py-8 font-bold' >Over mij</h3>
            <p className='text-darkblue'>Ik ben Hendrik Boerma en ik ben Agile test engineer bij Sogeti(Part of Capgemini) en momenteel in opdracht bij de gemeente Groningen. 
              Ik houdt me bezig met alles wat te maken heeft met de voorkant van websites en software. 
              Ik ontwerp, bouw en test software. De basis van dit alles heb ik geleerd tijdens mij studie Communication & Multimedia Design.
            </p>
          </div>
          <img className='p-12' src={images.portret} alt='Hendrik Boerma' />
      </section>
    );
}

export default About; 