import data from '../Data'
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience({ tabIndex }) {

  const certificats = data.certificats;
  const skills = data.skills;
  const icons = data.icons;
  const jobs = data.jobs;
  const studies = data.studies;

  return (
    <section className='text-textcolor py-8 bg-darkblue' id='section2'>
      <h3 className='text-3xl font-bold text-textcolor' id='ervaring'>Ervaring</h3>
      <div className='flex flex-col-reverse lg:flex-row lg:gap-16'>
        <div className='flex flex-col lg:w-6/12'>
          <h4 className='text-2xl text-secondary pt-8' id='werk'>Werk Ervaring</h4>
          {jobs.map((job, index) => (
            <div className='grid grid-cols-2 gap-2 grow border-b border-primary py-4' key={index}>
              <h5 className='text-lg font-bold text-textcolor col-span-2'>{job.title}</h5>
              <p className='justify-self-start text-textcolor2'>{job.company}</p>
              <p className='justify-self-end text-textcolor2 mt-auto'>{job.date}</p>
            </div>
          ))}
          <h4 className='text-2xl pt-8 text-secondary' id='werk'>Studies</h4>
          {studies.map((study, index) => (
            <div className='grid grid-cols-2 gap-2 grow border-b border-primary py-4' key={index}>
              <h5 className='text-lg font-bold text-textcolor col-span-2'>{study.title}</h5>
              <p className='justify-self-start text-textcolor2'>{study.company}</p>
              <p className='justify-self-end text-textcolor2 mt-auto'>{study.date}</p>
            </div>
          ))}
        </div>
        <div className='lg:w-6/12'>
          <h4 className='text-2xl text-secondary pt-8'>Tools & skills</h4>
          <div className='grid grid-cols-3 lg:grid-cols-4 justify-center items-center lg:justify-start py-4 max-w-3xl'>
            {icons.map((icon, index) => (
              <img key={index} className='p-6 w-28 sm:w-32' src={icon} alt={`Icon ${index}`} />
            ))}
          </div>
          <div className='flex flex-wrap gap-4 py-4 text-center text-textcolor'>
            {skills.map((skill, index) => (
              <span key={index} className='border border-secondary p-4 grow rounded max-w-md'>{skill}</span>
            ))}
          </div>
          <h4 className='text-2xl pt-8 text-secondary'>Certificaten</h4>
          <div className='flex flex-wrap gap-4 py-4 text-center text-textcolor'>
            {certificats.map((certificat, index) => (
              <a href={certificat.link} rel="noreferrer" target="_blank" key={index} tabIndex={tabIndex} className='bg-backgroundcolor2 hover:bg-primary p-4 grow rounded max-w-md hover:text-secondary'>{certificat.title} <FontAwesomeIcon icon={faExternalLink} size='sm'/></a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Experience;