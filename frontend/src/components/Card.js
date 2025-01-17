import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PortableText } from '@portabletext/react';
import { useState } from "react";
import Paragraph from './Paragraph'
import Modal from '../components/Modal';

function Card({ contents }) {

  const [imageUrl, setImageUrl] = useState('');
  const [toggleModal, setToggleModal] = useState(false);

  function handleClick (url) {
    setImageUrl(url)
    setToggleModal(true)
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <Modal image={imageUrl} setToggleModal={setToggleModal} toggleModal={toggleModal}/>
      {contents.map((content) => (
          <div className="flex flex-col justify-start gap-2" key={content._id}>
            <h2 className='text-2xl text-secondary pt-8'>{content.name}</h2>
            <p className='text-md text-textcolor2 font-bold'>{content.subtitle}</p>
            <img
              tabIndex="0"
              className="h-64 object-contain rounded bg-textcolor p-2 cursor-pointer"
              src={content.image.asset.url}
              alt={content.image.alt}
              loading="lazy"
              onClick={() => handleClick(content.image.asset.url)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(content.image.asset.url);
                }
              }}
            />
            <div className='col-start-1 row-span-1 col-span-2'>
              <div className='flex flex-wrap gap-2'>
                {content.tags && content.tags.map((tag, index) => (
                  <span key={index} className='bg-backgroundcolor2 px-2 py-1 rounded text-textcolor flex-nowrap'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <PortableText value={content.description} components={Paragraph()} />
            <a href={content.link} rel="noreferrer" target="_blank" className='pt-2 flex gap-2 sm:mt-auto text-start text-md font-bold text-textcolor hover:underline hover:underline-offset-8 hover:text-secondary hover:translate-x-1 duration-500'>
              <span>{content.linktext}</span>
              <FontAwesomeIcon icon={faArrowRight} size='xl' />
            </a>
          </div>
      ))}
    </>
  );
}

export default Card