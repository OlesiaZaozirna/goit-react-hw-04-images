import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

function ImageGallery({images, showModal}) {
    return (
        <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
                key={id}
                url={webformatURL}
                alt={tags}
                largeImage={largeImageURL}
                showModal={showModal}
            />
        
        ))}
      </ul>
    )
}
export default ImageGallery;
