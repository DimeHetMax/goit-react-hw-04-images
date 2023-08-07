import React from "react";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends React.Component{
    render(){
        const {keyId, url, large, alt} = this.props;
        return(
            <li className="gallery-item" key={keyId}>
                <img src={url} alt={alt} name={large} width={300}/>
            </li>
        )
    }
}

ImageGalleryItem.propTypes ={
    keyId: PropTypes.number.isRequired,
    url:PropTypes.string.isRequired,
    large:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
}