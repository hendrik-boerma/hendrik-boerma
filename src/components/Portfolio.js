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
            <section className='container3'>
                <h3 id='portfolio'>Portfolio</h3>
                <div className='gallery'>
                    <img onClick={() => modal(images.a4hflyer)} src={images.a4hflyer} alt='cape town' />
                    <img onClick={() => modal(images.illustrations)} src={images.illustrations} alt='Hendrik Boerma' />
                    <img onClick={() => modal(images.landscape)} src={images.landscape} alt='Hendrik Boerma' />
                    <img onClick={() => modal(images.mockup)} src={images.mockup} alt='Hendrik Boerma' />
                    <img onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                    <img onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                    <img onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                    <img onClick={() => modal(images.voucheraw)} src={images.voucheraw} alt='Hendrik Boerma' />
                </div>
            </section>
            <div id='modal'>
                <span onClick={close} className="close">X</span>
                <img id='img' alt='Hendrik Boerma' />
            </div>
        </>
    );
}

export default Portfolio;