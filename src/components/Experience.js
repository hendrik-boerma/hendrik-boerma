import images from '../Images'

function Experience () {

 

  function collapsible (contentid){
    const content = document.getElementById(contentid)
    if (content.style.display === "block") {
      content.style.display = "none"
    } else {
      content.style.display = "block"
    }
  }


    return (
        <section className='text-offwhite flex flex-col py-6 px-6 bg-darkblue md:flex-row md:gap-16 md:px-16' id='section2'>
          <div className='flex flex-col gap-4 py-12 md:w-6/12'>
            <h3 className='text-4xl font-bold' id='ervaring'>Ervaring</h3>
            <h4 className='text-2xl pt-4' id='werk'>Werk</h4>
              <button className="w-full p-4 pl-6 text-left cursor-pointer bg-mediumblue rounded font-bold" onClick={() => collapsible('content1')}> Agile Test Engineer <br/><span className='font-normal'>Sogeti Nederland</span></button>
              <p className="hidden px-6 pb-6" id='content1'>Momenteel werk ik binnen Sogeti aan een project voor de gemeente Groningen. Samen met andere Sogetisten ontwikkel ik een applicatie om mensen uit Eritrea te helpen met het leren van de Nederlandse taal. In dit project ben ik samen met een collega verantwoordelijk voor het ontwerpen en bouwen van de front-end in ReactJS. Om de backlog bij te houden en samen te werken als developers maken we gebruik van Azure DevOps en Git.
                Naast het project voor de gemeente Groningen ben ik bezig om mijn kennis verder uit te breiden. Ik heb onder andere mijn AZ-900 certificaat behaald en ben bezig om verschillende tools en frameworks beter onder de knie te krijgen. Momenteel ben ik bezig met een front-end opleiding van Meta op Coursera om de basis van front-end development te leren. Daarnaast verdiep ik mij in test automation tools zoals Cypress.
              </p>
              <button className="w-full p-4 pl-6 text-left cursor-pointer bg-mediumblue rounded font-bold"  onClick={() => collapsible('content2')}>E-Commerce medewerker <br/><span className='font-normal'>A4H-TECH BV</span></button>
              <p className="hidden px-6 pb-6" id='content2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className="w-full p-4 pl-6 text-left cursor-pointer bg-mediumblue rounded font-bold"  onClick={() => collapsible('content3')}>UX Designer  <br/><span className='font-normal'>Digital Education Africa Network</span></button>
              <p className="hidden px-6 pb-6" id='content3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className="w-full p-4 pl-6 text-left cursor-pointer bg-mediumblue rounded font-bold"  onClick={() => collapsible('content4')}>Grafisch Vormgever<br/><span className='font-normal'>Adventure Works</span></button>
              <p className="hidden px-6 pb-6" id='content4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h4 className='text-2xl pt-4' id='werk'>Studie</h4>
              <button className="w-full p-4 pl-6 text-left cursor-pointer bg-mediumblue rounded font-bold"  onClick={() => collapsible('content5')}>Front-End Developer Professional Certificate<br/><span className='font-normal'>Meta - Coursera</span></button>
              <p className="hidden px-6 pb-6" id='content5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className="w-full p-4 pl-6 text-left cursor-pointer bg-mediumblue rounded font-bold"  onClick={() => collapsible('content6')}>HBO Communication & Multimedia design<br/><span className='font-normal'>Hanzehogeschool Groningen</span></button>
              <p className="hidden px-6 pb-6" id='content6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='md:w-6/12 py-12'>
            <h3  className='text-4xl text-offwhite font-bold'>Skills</h3>
            <div className='flex flex-wrap justify-center items-center md:justify-start py-6'>
              <img className='p-6 w-36 h-full ' src={images.htmlicon} alt='Hendrik Boerma' />
              <img className='p-6 w-36 h-full'  src={images.cssicon} alt='Hendrik Boerma' />
              <img className='p-6 w-36 h-full'  src={images.jsicon} alt='Hendrik Boerma' />
              <img className='p-6 w-36 h-full'  src={images.figmaicon} alt='Hendrik Boerma' />
              <img className='p-6 w-36 h-full'  src={images.adobeicon} alt='Hendrik Boerma' />
              <img className='p-6 w-36 h-full'  src={images.tmapicon} alt='Hendrik Boerma' />
            </div>
          </div>
        </section>
    );
}

export default Experience;