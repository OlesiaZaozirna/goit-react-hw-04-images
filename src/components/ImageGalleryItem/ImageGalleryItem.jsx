import css from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ url, alt, showModal, largeImage})  {
    const newLargeImage = {
        largeImage: largeImage,
    }
   
    return (
        <li  className={css.ImageGalleryItem} onClick={()=>showModal(newLargeImage)}>
            
                <img
                    src={url}
                    alt={alt}                    
                    className={css.ImageGalleryItemImg} />
            
            </li>
    )
}
export default ImageGalleryItem;