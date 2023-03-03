import images from '../Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

const arrow = <FontAwesomeIcon icon={faSortDown} size="xs" />

function Experience () {

  const Button = ({title, company, arrowid, contentid}) => {
  
    function collapsible (){
      const content = document.getElementById(contentid)
      const arrow = document.getElementById(arrowid)
      
      if (content.style.display === "block") {
        content.style.display = "none"
        arrow.style.rotate = "360deg"
      } else {
        content.style.display = "block"
        arrow.style.rotate = "180deg"
      }
    }
    
    return (
      <button className=" flex justify-between items-center w-full p-4 pl-6 text-left cursor-pointer bg-mediumblue rounded font-bold" 
      onClick={() => collapsible(contentid, arrowid)}>
      <span>{title} <br/><span className='font-normal'>{company}</span></span>
      <span id={arrowid} className='text-2xl text-center'>{arrow}</span>
      </button>
    );
  }


    return (
      <section className='text-offwhite py-12 px-6 bg-darkblue md:px-16' id='section2'>
        <h3 className='text-4xl py-8 font-bold' id='ervaring'>Ervaring</h3>
        <div className='flex flex-col md:flex-row md:gap-16'>
          <div className='flex flex-col gap-4 md:w-6/12'>
            <h4 className='text-2xl text-offwhite' id='werk'>Werk</h4>
            <Button title="Agile Test Engineer" company="Sogeti Nederland" arrowid="arrow1" contentid="content1" />
              <p className="hidden px-6 pb-6 text-justify leading-loose" id='content1'>Momenteel werk ik binnen Sogeti aan een project voor de gemeente Groningen. Samen met andere Sogetisten ontwikkel ik een applicatie om mensen uit Eritrea te helpen met het leren van de Nederlandse taal. In dit project ben ik samen met een collega verantwoordelijk voor het ontwerpen en bouwen van de front-end in ReactJS. Om de backlog bij te houden en samen te werken als developers maken we gebruik van Azure DevOps en Git.
                Naast het project voor de gemeente Groningen ben ik bezig om mijn kennis verder uit te breiden. Ik heb onder andere mijn AZ-900 certificaat behaald en ben bezig om verschillende tools en frameworks beter onder de knie te krijgen. Momenteel ben ik bezig met een front-end opleiding van Meta op Coursera om de basis van front-end development te leren. Daarnaast verdiep ik mij in test automation tools zoals Cypress.</p>
              <Button title="E-Commerce Medewerker" company="A4H-TECH BV" arrowid="arrow2" contentid="content2" />
              <p className="hidden px-6 pb-6 text-justify leading-loose" id='content2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Button title="UX Designer" company="Digital Education Africa Network" arrowid="arrow3" contentid="content3" />
              <p className="hidden px-6 pb-6 text-justify leading-loose" id='content3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Button title="Grafisch Vormgever" company="Adventure Works" arrowid="arrow4" contentid="content4" />
              <p className="hidden px-6 pb-6 text-justify leading-loose" id='content4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h4 className='text-2xl pt-4 text-offwhite' id='werk'>Studie</h4>
            <Button title="Front-End Developer" company="Meta - Coursera" arrowid="arrow5" contentid="content5" />
              <p className="hidden px-6 pb-6 text-justify leading-loose" id='content5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Button title="CMD - Visual Design" company="Hanzehogeschool Groningen" arrowid="arrow6" contentid="content6" />
              <p className="hidden px-6 pb-6 text-justify leading-loose" id='content6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='md:w-6/12'>
            <h4  className='text-2xl text-offwhite pt-8 md:pt-0'>Tools</h4>
            <div className='flex flex-wrap justify-center items-center md:justify-start py-4'>
              <img className='p-6 w-28 sm:w-36 h-full'  src={images.figmaicon} alt='figmaicon' />
              <img className='p-6 w-28 sm:w-36 h-full'  src={images.adobeicon} alt='adobeicon' />
              <img className='p-6 w-28 sm:w-36 h-full'  src={images.tmapicon} alt='tmapicon' />
              <img className='p-6 w-28 sm:w-36 h-full' src={images.htmlicon} alt='htmlicon' />
              <img className='p-6 w-28 sm:w-36 h-full'  src={images.cssicon} alt='cssicon' />
              <img className='p-6 w-28 sm:w-36 h-full'  src={images.jsicon} alt='jsicon' />
              <img className='p-6 w-28 sm:w-36 h-full'  src={images.cypressicon} alt='cypressicon' />
              <img className='p-6 w-28 sm:w-36 h-full'  src={images.reacticon} alt='reacticon' />
            </div>
            <h4  className='text-2xl pt-4 text-offwhite'>Skills</h4>
            <div className='flex flex-wrap gap-4 py-6 text-center'>
              <span className='bg-mediumblue p-4 grow rounded'>Front-End Development</span>
              <span className='bg-mediumblue p-4 grow rounded'>Creatief</span>
              <span className='bg-mediumblue p-4 grow rounded'>Test Automation</span>
              <span className='bg-mediumblue p-4 grow rounded'>Illustreren</span>
              <span className='bg-mediumblue p-4 grow rounded'>UX/UI</span>
              <span className='bg-mediumblue p-4 grow rounded'>Human Centered Design</span>
              <span className='bg-mediumblue p-4 grow rounded'>Ontwerpen</span>
              <span className='bg-mediumblue p-4 grow rounded'>GAT Testen</span>
              <span className='bg-mediumblue p-4 grow rounded'>Design Thinking</span>
              <span className='bg-mediumblue p-4 grow rounded'>Scrum</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Experience;