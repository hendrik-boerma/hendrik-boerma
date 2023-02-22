import images from '../images'

function About (){
    return (
        <section className='pb-16 flex flex-col items-center' id='section1'>
          <div className='p-6 leading-loose rounded-r-2xl'>
            <h3 className='text-4xl text-black py-8' >Over mij</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <img className='p-12' src={images.portret} alt='Hendrik Boerma' />
      </section>
    );
}

export default About; 