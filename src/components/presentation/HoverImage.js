import React from 'react';
import './HoverImage.css';

const HoverImage = (props) => {
    return (
        <div className="hover-image-container">
            <img className="hover-image" src={props.src} alt={props.alt}/>
            <div className="hover-overlay">
                <div className="hover-text">{props.text}</div>
            </div>
        </div>
    )
}

export default HoverImage;