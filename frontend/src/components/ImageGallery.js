
function ImageGallery({images}) {

    return(
<div>
  <div class="columns-1 md:columns-2 gap-4">
    {images.map((image) => (
      <img
        key={image.alt}
        className="w-full mb-4"
        src={image.image}
        alt={image.alt}
        loading="lazy"
      />
    ))}
  </div>
</div>
    );
}

export default ImageGallery