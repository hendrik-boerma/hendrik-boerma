import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { DataContext } from '../Dataprovider';
import Accordion from '../components/Accordion.js';
import { DiAngularSimple, DiCss3, DiHtml5, DiReact, DiJavascript1, DiDrupal } from "react-icons/di";

function Experience() {

  const data = useContext(DataContext).data;
  const skills = data.skills;
  const certificates = data.certificates;
  const studies = data.studies;
  const jobs = data.work;

  return (
    <section className='text-textcolor bg-darkblue' id='section2'>
      <h1 className='text-3xl font-bold text-textcolor' id='ervaring'>Ervaring</h1>
      <div className='flex flex-col-reverse lg:flex-row lg:gap-16'>
        <div className='flex flex-col lg:w-6/12'>
          <h2 className='text-2xl text-secondary pt-8' id='werk'>Werk Ervaring</h2>
          {jobs.map((job) => (
            <Accordion
              key={job._id}
              title={job.role}
              subtitle={job.company}
              startdate={job.startDate}
              enddate={job.endDate}
              description={job.description}
            />
          ))}
          <h2 className='text-2xl pt-8 text-secondary' id='werk'>Studies</h2>
          {studies.map((study) => (
            <Accordion
              key={study._id}
              title={study.studiename}
              subtitle={study.institution}
              startdate={study.startDate}
              enddate={study.endDate}
              description={study.description}
            />
          ))}
        </div>

        <div className='lg:w-6/12'>
          <h2 className='text-2xl text-secondary pt-8'>Tools & skills</h2>
          <div className='grid grid-cols-6 py-4 max-w-3xl'>
            <DiHtml5 className="h-full w-full text-white" alt='html icon'/>
            <DiCss3 className="h-full w-full text-white" alt='css icon'/>
            <DiJavascript1 className="h-full w-full text-white" alt='javascript icon'/>
            <DiAngularSimple className="h-full w-full text-white" alt='angular icon'/>
            <DiReact className="h-full w-full text-white" alt='react icon'/>
            <DiDrupal className="h-full w-full text-white" alt='drupal icon'/>
          </div>
          <div className='flex flex-wrap gap-4 py-4 text-center justify-center text-textcolor'>
            {/* {skills && skills.map((skill, index) => (
              <p key={index} className='flex gap-4 rounded max-w-md'>
                {skill}
                <span className='text-secondary'>{index !== skills.length - 1 ? '|' : ''}</span>
              </p>
            ))} */}
          </div>
          <h2 className='text-2xl pt-8 text-secondary'>Certificaten</h2>
          <div className='flex flex-wrap gap-4 py-4 text-center text-textcolor'>
            {certificates && certificates.map((certificat) => (
              <a
                href={certificat.link}
                rel="noreferrer"
                target="_blank"
                key={certificat._id}
                className='bg-backgroundcolor2 hover:bg-primary p-4 grow rounded max-w-md hover:text-secondary'>
                {certificat.name} <FontAwesomeIcon icon={faExternalLink} size='sm' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;