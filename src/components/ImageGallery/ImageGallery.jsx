import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import css from "./ImageGallery.module.css"

export function ImageGallery ({images, onImage}){
    const getImage = (event)=>{
        onImage({src: event.target.name, alt: event.target.alt})
    }
    return(
        <div>
            <ul className={css.gallery} onClick={getImage}>
                {images.map(({id,webformatURL,largeImageURL,tags})=>{
                    return(
                    <ImageGalleryItem key={id} keyId={id} url={webformatURL} large={largeImageURL} alt={tags}/>
                    )
                })}
            </ul>   
        </div>
    )
}

ImageGallery.propTypes ={
    images: PropTypes.arrayOf(PropTypes.object),
    onImage: PropTypes.func.isRequired,
}