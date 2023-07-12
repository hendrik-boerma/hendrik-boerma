import images from '../Images'

function Portfolio() {

    function modal(image, alttext) {
        const modal = document.getElementById('modal');
        modal.style.display = "flex";
        const img = document.getElementById('img');
        img.src = image;
        img.alt = alttext;
    }
    function close() {
        const modal = document.getElementById('modal');
        modal.style.display = "none";
    }

    const Imagebox = ({boximage, alttext}) => {
                return (
            <img className='rounded grow sm:w-4/12 lg:w-3/12 lg:max-w-md object-cover align-bottom cursor-pointer' onClick={() => modal(boximage)} src={boximage} alt={alttext} />
        );
    }

    return (
        <>
            <section className='py-12 px-6 md:px-16 bg-darkblue'  id='section3'>
                <h3 className='text-3xl py-8 text-lightgrey font-bold'>Portfolio</h3>
                <div className='flex flex-wrap gap-2'>
                    <Imagebox boximage={images.a4hflyer} alttext="a4hflyer"/>
                    <Imagebox boximage={images.illustrations} alttext="illustrations"/>
                    <Imagebox boximage={images.landscape} alttext="landscape"/>
                    <Imagebox boximage={images.mockup} alttext="mockup"/>
                    <Imagebox boximage={images.voucheraw} alttext="voucheraw"/>
                    <Imagebox boximage={images.voucheraw} alttext="voucheraw"/>
                </div>
            </section>
            <div onClick={close} className=" flex flex-col hidden fixed items-center text-end justify-center w-full top-0 h-full z-30 bg-blacktransparent" id='modal'>    
            <img className='w-full max-w-3xl p-2 md:p-16' id='img' alt='' />
            </div>
        </>
    );
}

export default Portfolio;