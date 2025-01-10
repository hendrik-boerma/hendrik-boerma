
function Modal({ image, setToggleModal, toggleModal }) {

    return (
        <div className={toggleModal ? 'fixed top-0 left-0 w-full h-screen bg-backgroundcolor2 bg-opacity-80 flex flex-col justify-center items-center z-1 p-2' : 'hidden'} >
        <div className='w-full xl:w-1/2 flex flex-col items-end justify-center' >
            <button className="h-[2.5rem] pb-2" onClick={() => setToggleModal(false)}>
                <span className='block h-[0.25rem] bg-textcolor rounded-full w-[2rem] translate-y-[0.25rem] rotate-[45deg]'/>
                <span className='block h-[0.25rem] bg-textcolor rounded-full w-[2rem] rotate-[315deg]'/>
            </button>
            <img
                className="w-full object-contain rounded bg-textcolor p-2"
                src={image}
                alt={image}
                loading="lazy"
            />
            </div>
        </div>
    );
}

export default Modal;
