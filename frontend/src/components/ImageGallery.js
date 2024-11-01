
function ImageGallery({images}) {

    return(
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1'>
    {images.map((image) => (
        <img 
            className='' 
            src={image.image} 
            alt={image.alt} 
            loading="lazy" 
        />
    ))}
</div>

    );
}

export default ImageGallery