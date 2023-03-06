import images from '../Images'

function About (){
    return (
        <section className='py-12 px-6 flex flex-col items-center md:flex-row md:gap-8 md:px-16' id='section1'>
          <div className='rounded-r-2xl w-full'>
            <h3 className='text-4xl text-offwhite py-8 font-bold' >Over mij</h3>
            <p className='leading-loose text-offwhite text-justify'>Ik ben een creatieve en technische tester met een oog voor de gebruiker. Ik houd me graag bezig met de front-end van software. Niet alleen testen, maar ook het ontwerpen en ontwikkelen van de front-end vind ik leuk om te doen. Mijn kennis en vaardigheden komen met name voort uit mijn studie Communication and Multimedia Design, waar ik heb gewerkt met scrum, UX design, prototyping en verschillende front-endtalen. Binnen Sogeti heb ik deze vaardigheden verder mogen ontwikkelen en heb ik onder andere kennis gemaakt met TMAP, Robot Framework en ReactJS.
            </p>
          </div>
          <div className='flex justify-center w-full px-6 py-12'>
          <img className='max-w-md w-full' src={images.portret} alt='Hendrik Boerma' />
          </div>
      </section>
    );
}

export default About; 