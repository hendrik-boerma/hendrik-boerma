import images from '../images'

function Portfolio() {

    function modal(image) {
        const modal = document.getElementById('modal');
        modal.style.display = "flex";
        const img = document.getElementById('img');
        img.src = image;
    }
    function close() {
        const modal = document.getElementById('modal');
        modal.style.display = "none";
    }

    return (
        <>
            <section className='p-6 bg-darkblue'  id='section3'>
                <h3 className='text-4xl text-offwhite'>Portfolio</h3>
                <div className='flex flex-wrap gap-2 py-6'>
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer' onClick={() => modal(images.a4hflyer)} src={images.a4hflyer} alt='cape town' />
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer'  onClick={() => modal(images.illustrations)} src={images.illustrations} alt='Hendrik Boerma' />
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer'  onClick={() => modal(images.landscape)} src={images.landscape} alt='Hendrik Boerma' />
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer'  onClick={() => modal(images.mockup)} src={images.mockup} alt='Hendrik Boerma' />
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer'  onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer'  onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer'  onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                    <img className='rounded max-h-96 grow w-auto object-cover align-bottom cursor-pointer'  onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                </div>
            </section>
            <div className="hidden fixed text-center justify-center w-full top-0 h-full z-10 bg-blacktransparent" id='modal'>
                <span onClick={close} className="text-offwhite text-5xl font-extrabold absolute top-8 right-8 cursor-pointer">X</span>
                <img className='w-full max-w-2xl m-auto px-6' id='img' alt='Hendrik Boerma' />
            </div>
        </>
    );
}

export default Portfolio;