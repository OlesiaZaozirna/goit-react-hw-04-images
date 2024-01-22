import css from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ url, alt, showModal, largeImage})  {
   
    return (
        <li  className={css.ImageGalleryItem} onClick={()=>showModal(largeImage)}>
            
                <img
                    src={url}
                    alt={alt}                    
                    className={css.ImageGalleryItemImg} />
            
            </li>
    )
}
export default ImageGalleryItem;