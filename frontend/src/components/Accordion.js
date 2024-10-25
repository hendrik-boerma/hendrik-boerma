import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Accordion({ title, subtitle, startdate, enddate, description, index }) {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <div className='border-b border-primary pb-4'>
            <button className='flex justify-between gap-4 items-center py-4 cursor-pointer w-full' onClick={handleToggle} key={index}>
                <div className='flex flex-col gap-2 text-left w-full'>
                    <h3 className='text-lg font-bold text-textcolor'>{title}</h3>
                    <p className='grid grid-cols-2'>
                        <span className='text-textcolor2 col-span-1'>{subtitle}</span>
                        <span className='justify-self-end text-textcolor2 mt-auto col-span-1'>{startdate} - {enddate}</span>
                    </p>
                </div>
                <FontAwesomeIcon icon={toggle ? faChevronUp : faChevronDown} />
            </button>
            {toggle && (
                <PortableText className='text-textcolor2 mt-auto' value={description} />
            )}
        </div>

    );
}

export default Accordion;