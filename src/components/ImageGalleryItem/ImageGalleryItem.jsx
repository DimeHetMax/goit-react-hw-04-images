import PropTypes from 'prop-types';
import css from "./ImageGalleryItem.module.css"

export function ImageGalleryItem({url, large, alt}){
    return(
            <li  className={css.galleryItem}>
                <img src={url} alt={alt} name={large} width={300}/>
            </li>
        )
}

ImageGalleryItem.propTypes ={
    url:PropTypes.string.isRequired,
    large:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
}