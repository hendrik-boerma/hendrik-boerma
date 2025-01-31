import { useEffect } from "react";

function Modal({ image, setToggleModal, toggleModal }) {

    function handleClick() {
        setToggleModal(false);
        document.body.style.overflow = "auto";
    }

    useEffect(() => {

        const modal = document.getElementById('modal');
        const focusableElementsString = 'a[href]:not([tabindex="-1"]), ' +
            'area[href]:not([tabindex="-1"]), ' +
            'input:not([disabled]):not([tabindex="-1"]), ' +
            'select:not([disabled]):not([tabindex="-1"]), ' +
            'textarea:not([disabled]):not([tabindex="-1"]), ' +
            'button:not([disabled]):not([tabindex="-1"]), ' +
            'iframe:not([tabindex="-1"]), ' +
            '[tabindex]:not([tabindex="-1"]), ' +
            '[contentEditable="true"]:not([tabindex="-1"])';

        let focusableElements = modal.querySelectorAll(focusableElementsString);
        focusableElements = Array.from  (focusableElements);

        const firstTab = focusableElements[0]
        const lastTab = focusableElements[focusableElements.length - 1]

        if (toggleModal) {
            
            firstTab.focus()

            function trapKey(e) {
                if (e.key === "Tab") {
                    if (e.shiftKey) {
                        if (document.activeElement === firstTab) {
                            e.preventDefault();
                            lastTab.focus();
                        }
                    } else {
                        if (document.activeElement === lastTab) {
                            e.preventDefault();
                            firstTab.focus();
                        }
                    }
                }

                if (e.key === 'Escape') {
                    handleClick();
                }
            }

            const backgroundElements = document.querySelectorAll('body *:not(#modal):not(#modal *)');
            backgroundElements.forEach(el => el.setAttribute('tabindex', '-1'));

            document.addEventListener('keydown', trapKey);

            return () => {
                const cardImages = document.getElementsByClassName('cardImage')
                document.removeEventListener('keydown', trapKey);
                backgroundElements.forEach(el => el.removeAttribute('tabindex'));
                Array.from(cardImages).forEach(cardImage => {
                    cardImage.setAttribute('tabindex', '0');
                });
            }
        }
    
    }, [toggleModal]);

    return (
        <div
            id="modal"
            className={`fixed top-0 left-0 w-full h-screen bg-backgroundcolor2 bg-opacity-80 flex flex-col justify-center items-center z-1 p-2 transition-all duration-300 
            ${toggleModal ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            role="dialog"
        >
            <div className="w-full xl:w-1/2 flex flex-col items-end justify-center">
                <button
                    className="h-[2.5rem] pb-2"
                    onClick={handleClick}
                    id="close-button"
                >
                    <span className="block h-[0.25rem] bg-textcolor rounded-full w-[2rem] translate-y-[0.25rem] rotate-[45deg]" />
                    <span className="block h-[0.25rem] bg-textcolor rounded-full w-[2rem] rotate-[315deg]" />
                </button>
                <img
                    className="w-full object-contain rounded bg-textcolor p-2 transition-transform duration-500 transform scale-100"
                    src={image}
                    alt={image}
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default Modal;
