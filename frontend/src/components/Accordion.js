import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Paragraph from './Paragraph'

function Accordion({ title, subtitle, startdate, enddate, description }) {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <div className='border-b border-primary'>
            <button className='flex justify-between gap-4 items-center py-4 px-2 cursor-pointer w-full hover:bg-hover rounded' onClick={handleToggle}>
                <div className='flex flex-col gap-2 text-left w-full'>
                    <div className='flex justify-between'>
                        <h3 className='text-lg font-bold text-textcolor'>{title}</h3>
                        <FontAwesomeIcon icon={toggle ? faChevronUp : faChevronDown} />
                    </div>
                    <p className='grid grid-cols-2 text-textcolor2'>
                        <span className='col-span-1'>{subtitle}</span>
                        <span className='justify-self-end mt-auto col-span-1'>{startdate} - {enddate}</span>
                    </p>
                </div>
            </button>
            {toggle && (
            <div className='py-4'>
          <PortableText value={description} components={Paragraph()} />
            </div>
            )}
        </div>

    );
}

export default Accordion;