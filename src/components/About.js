import images from '../Images'

function About (){
    return (
        <section className='py-12 px-6 flex flex-col items-center md:flex-row md:gap-8 md:px-16' id='section1'>
          <div className='rounded-r-2xl w-full max-w-3xl'>
            <h3 className='text-4xl text-offwhite py-8 font-bold' >Over mij</h3>
            <p className='leading-loose text-xl text-offwhite'>Ik ben een creatieve en technische tester met een oog voor de gebruiker. Ik houd me graag bezig met de front-end van software. Momenteel ben ik als tester en beheerder aan de slag bij de gemeente Groningen. Daarnaast ben ik druk bezig om mezelf verder te ontwikkelen als front-end developer. </p>
          </div>
          <div className='flex justify-center w-full px-6 py-12'>
          <img className='max-w-md w-full' src={images.portret} alt='Hendrik Boerma' />
          </div>
      </section>
    );
}

export default About; 