
function ImageGallery({images}) {

    return(
        <div  className='flex flex-row flex-wrap grow w-full gap-2'>
        {images.map((image) => (
                <img className='lg:max-w-96' src={image.image} alt={image.alt} loading="lazy" />  
        ))}
    </div>
    );
}

export default ImageGallery