import PropTypes from 'prop-types';

export function ImageGalleryItem({keyId, url, large, alt}){
    return(
            <li className="gallery-item" key={keyId}>
                <img src={url} alt={alt} name={large} width={300}/>
            </li>
        )
}

ImageGalleryItem.propTypes ={
    keyId: PropTypes.number.isRequired,
    url:PropTypes.string.isRequired,
    large:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
}