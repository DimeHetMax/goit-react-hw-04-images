import React from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"

export class ImageGallery extends React.Component{
    getImage = (event)=>{
        this.props.onImage({src: event.target.name, alt: event.target.alt})
    }
    render(){
        const {images} = this.props;
        return(
            <>
            <ul className={css.gallery} onClick={this.getImage}>
                {images.map(({id,webformatURL,largeImageURL,tags})=>{
                    return(
                    <ImageGalleryItem key={id} keyId={id} url={webformatURL} large={largeImageURL} alt={tags}/>
                    )
                })}

            </ul>
                
            </>
        )
    }
}

ImageGallery.propTypes ={
    images: PropTypes.arrayOf(PropTypes.object),
    onImage: PropTypes.func.isRequired,
}