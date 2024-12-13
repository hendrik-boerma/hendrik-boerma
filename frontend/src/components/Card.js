import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PortableText } from '@portabletext/react';
import Paragraph from './Paragraph'

function Card({ contents }) {

  return (
    <>
      {contents.map((content) => (
        <div className="flex flex-col justify-start gap-4">
          <h2 className='text-2xl text-secondary pt-8'>{content.name}</h2>
          <p className='text-md text-textcolor2 font-bold'>{content.subtitle}</p>
          <img
            className="h-64 object-contain rounded bg-textcolor p-4"
            src={content.image.asset.url}
            alt={content.image.alt}
            loading="lazy"
          />
          <div className='col-start-1 row-span-1 col-span-2'>
            <div className='flex flex-wrap gap-2'>
              {content.tags && content.tags.map((tag) => (
                <span className='bg-primary px-2 py-1 rounded text-textcolor flex-nowrap'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <PortableText value={content.description} components={Paragraph()} />
          <a href={content.link} rel="noreferrer" target="_blank" className='flex gap-2 sm:mt-auto text-start text-md font-bold text-textcolor hover:underline hover:underline-offset-8 hover:text-secondary hover:translate-x-1 duration-500'>
            <span>{content.linktext}</span>
            <FontAwesomeIcon icon={faArrowRight} size='xl' />
          </a>
        </div>
      ))}
    </>
  );
}

export default Card