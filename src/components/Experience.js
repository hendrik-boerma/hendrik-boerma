import data from '../Images/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

const arrow = <FontAwesomeIcon icon={faSortDown} size="xs" />

function Experience() {

  const skills = ['scrum','Human centered design', 'Design thinking', 'UX/UI','Toegankelijkheid', 'Vormgeving']
  const icons = data.icons;

    return (
      <section className='text-offwhite py-12 px-4 bg-darkblue md:px-16' id='section2'>
      <h3 className='text-3xl py-4 md:py-8 font-bold text-lightgrey' id='ervaring'>Ervaring</h3>
      <div className='flex flex-col-reverse md:flex-row md:gap-16'>
        <div className='flex flex-col gap-4 md:w-6/12'>

        </div>
      </div>
        <div className='md:w-6/12'>
          <h4 className='text-2xl text-offwhite pt-8 md:pt-0'>Tools</h4>
          <div className='flex flex-wrap justify-center items-center md:justify-start py-4 max-w-3xl'>
          {icons.map( icon => (<img className='p-6 w-28 sm:w-36 h-full' src={icon} alt={icon} />
          ))}
          </div>
          <h4 className='text-2xl pt-4 text-offwhite'>Skills</h4>
          <div className='flex flex-wrap gap-4 py-6 text-center text-offwhite max-w-3xl'>
          {skills.map( skill => (<span className='bg-mediumblue p-4 grow rounded'>{skill}</span>
          ))}
          </div>
        </div>
      </section>
    );
  }

export default Experience;